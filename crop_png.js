import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

function crc32(buf) {
  let c;
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function parsePNG(buffer) {
  let offset = 8; // skip signature
  let width = 0, height = 0, bitDepth = 0, colorType = 0;
  const idatChunks = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.subarray(offset + 8, offset + 8 + length);
    
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    }
    offset += 12 + length;
  }

  const idatBuffer = Buffer.concat(idatChunks);
  const inflated = zlib.inflateSync(idatBuffer);

  const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 4;
  const stride = 1 + width * bytesPerPixel;

  // Reconstruct un-filtered raw pixel array
  const rawPixels = Buffer.alloc(height * width * bytesPerPixel);

  for (let y = 0; y < height; y++) {
    const filter = inflated[y * stride];
    const rowOffset = y * stride + 1;
    const rawRowOffset = y * width * bytesPerPixel;

    for (let x = 0; x < width * bytesPerPixel; x++) {
      let val = inflated[rowOffset + x];
      let left = x >= bytesPerPixel ? rawPixels[rawRowOffset + x - bytesPerPixel] : 0;
      let up = y > 0 ? rawPixels[(y - 1) * width * bytesPerPixel + x] : 0;
      let upLeft = (y > 0 && x >= bytesPerPixel) ? rawPixels[(y - 1) * width * bytesPerPixel + x - bytesPerPixel] : 0;

      if (filter === 1) { // Sub
        val = (val + left) & 0xff;
      } else if (filter === 2) { // Up
        val = (val + up) & 0xff;
      } else if (filter === 3) { // Average
        val = (val + Math.floor((left + up) / 2)) & 0xff;
      } else if (filter === 4) { // Paeth
        const p = left + up - upLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upLeft);
        let pr = upLeft;
        if (pa <= pb && pa <= pc) pr = left;
        else if (pb <= pc) pr = up;
        val = (val + pr) & 0xff;
      }
      rawPixels[rawRowOffset + x] = val;
    }
  }

  return { width, height, bytesPerPixel, colorType, bitDepth, rawPixels };
}

function cropPNG(png, cropX, cropY, cropW, cropH) {
  const { bytesPerPixel, colorType, bitDepth, rawPixels, width, height } = png;
  
  const croppedRaw = Buffer.alloc(cropH * (1 + cropW * bytesPerPixel));

  for (let y = 0; y < cropH; y++) {
    const srcY = cropY + y;
    const dstRowOffset = y * (1 + cropW * bytesPerPixel);
    croppedRaw[dstRowOffset] = 0; // Filter None

    const srcOffset = (srcY * width + cropX) * bytesPerPixel;
    rawPixels.copy(croppedRaw, dstRowOffset + 1, srcOffset, srcOffset + cropW * bytesPerPixel);
  }

  const deflated = zlib.deflateSync(croppedRaw);

  // Build PNG chunks
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(cropW, 0);
  ihdr.writeUInt32BE(cropH, 4);
  ihdr[8] = bitDepth;
  ihdr[9] = colorType;
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcBuf = Buffer.alloc(4);
  const crcData = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(crcData), 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

// Crop page-05.png
const page5Path = path.resolve('..', 'ryetek-app', 'public', 'images', 'brochure', 'wearguard', 'page-05.png');
const outDir = path.resolve('public', 'images', 'materials');
fs.mkdirSync(outDir, { recursive: true });

if (fs.existsSync(page5Path)) {
  const srcBuf = fs.readFileSync(page5Path);
  const parsed = parsePNG(srcBuf);
  const { width, height } = parsed;

  console.log(`Original image size: ${width}x${height}`);

  // 1. Composite Photo (top ~46% of page)
  const composite = cropPNG(parsed, 0, 0, width, Math.floor(height * 0.46));
  fs.writeFileSync(path.join(outDir, 'dryer-combo.png'), composite);

  // 2. Dryer Drum Sprockets & Trunnion (bottom left box)
  const sprockets = cropPNG(parsed, Math.floor(width * 0.07), Math.floor(height * 0.60), Math.floor(width * 0.27), Math.floor(height * 0.17));
  fs.writeFileSync(path.join(outDir, 'dryer-sprockets.png'), sprockets);

  // 3. Drum Internals and Discharge Flights (bottom center box)
  const flights = cropPNG(parsed, Math.floor(width * 0.36), Math.floor(height * 0.60), Math.floor(width * 0.27), Math.floor(height * 0.17));
  fs.writeFileSync(path.join(outDir, 'drum-flights.png'), flights);

  // 4. Thrust & Trunnion Wheels (bottom right box)
  const trunnions = cropPNG(parsed, Math.floor(width * 0.65), Math.floor(height * 0.60), Math.floor(width * 0.27), Math.floor(height * 0.17));
  fs.writeFileSync(path.join(outDir, 'trunnion-wheels.png'), trunnions);

  console.log('Successfully cropped 4 authentic Page 5 dryer component images!');
} else {
  console.error('page-05.png not found at:', page5Path);
}
