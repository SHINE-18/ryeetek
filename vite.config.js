import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

function crc32(buf) {
  let c
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    c = n
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
    }
    table[n] = c
  }
  let crc = -1
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff]
  }
  return (crc ^ (-1)) >>> 0
}

function parsePNG(buffer) {
  let offset = 8
  let width = 0, height = 0, bitDepth = 0, colorType = 0
  const idatChunks = []

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset)
    const type = buffer.toString('ascii', offset + 4, offset + 8)
    const data = buffer.subarray(offset + 8, offset + 8 + length)
    
    if (type === 'IHDR') {
      width = data.readUInt32BE(0)
      height = data.readUInt32BE(4)
      bitDepth = data[8]
      colorType = data[9]
    } else if (type === 'IDAT') {
      idatChunks.push(data)
    }
    offset += 12 + length
  }

  const idatBuffer = Buffer.concat(idatChunks)
  const inflated = zlib.inflateSync(idatBuffer)

  const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 4
  const stride = 1 + width * bytesPerPixel

  const rawPixels = Buffer.alloc(height * width * bytesPerPixel)

  for (let y = 0; y < height; y++) {
    const filter = inflated[y * stride]
    const rowOffset = y * stride + 1
    const rawRowOffset = y * width * bytesPerPixel

    for (let x = 0; x < width * bytesPerPixel; x++) {
      let val = inflated[rowOffset + x]
      let left = x >= bytesPerPixel ? rawPixels[rawRowOffset + x - bytesPerPixel] : 0
      let up = y > 0 ? rawPixels[(y - 1) * width * bytesPerPixel + x] : 0
      let upLeft = (y > 0 && x >= bytesPerPixel) ? rawPixels[(y - 1) * width * bytesPerPixel + x - bytesPerPixel] : 0

      if (filter === 1) { // Sub
        val = (val + left) & 0xff
      } else if (filter === 2) { // Up
        val = (val + up) & 0xff
      } else if (filter === 3) { // Average
        val = (val + Math.floor((left + up) / 2)) & 0xff
      } else if (filter === 4) { // Paeth
        const p = left + up - upLeft
        const pa = Math.abs(p - left)
        const pb = Math.abs(p - up)
        const pc = Math.abs(p - upLeft)
        let pr = upLeft
        if (pa <= pb && pa <= pc) pr = left
        else if (pb <= pc) pr = up
        val = (val + pr) & 0xff
      }
      rawPixels[rawRowOffset + x] = val
    }
  }

  return { width, height, bytesPerPixel, colorType, bitDepth, rawPixels }
}

function cropPNG(png, cropX, cropY, cropW, cropH) {
  const { bytesPerPixel, colorType, bitDepth, rawPixels, width } = png
  const croppedRaw = Buffer.alloc(cropH * (1 + cropW * bytesPerPixel))

  for (let y = 0; y < cropH; y++) {
    const srcY = cropY + y
    const dstRowOffset = y * (1 + cropW * bytesPerPixel)
    croppedRaw[dstRowOffset] = 0 // Filter None

    const srcOffset = (srcY * width + cropX) * bytesPerPixel
    rawPixels.copy(croppedRaw, dstRowOffset + 1, srcOffset, srcOffset + cropW * bytesPerPixel)
  }

  const deflated = zlib.deflateSync(croppedRaw)
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(cropW, 0)
  ihdr.writeUInt32BE(cropH, 4)
  ihdr[8] = bitDepth
  ihdr[9] = colorType
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0

  const ihdrChunk = makeChunk('IHDR', ihdr)
  const idatChunk = makeChunk('IDAT', deflated)
  const iendChunk = makeChunk('IEND', Buffer.alloc(0))

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk])
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii')
  const lenBuf = Buffer.alloc(4)
  lenBuf.writeUInt32BE(data.length, 0)

  const crcBuf = Buffer.alloc(4)
  const crcData = Buffer.concat([typeBuf, data])
  crcBuf.writeUInt32BE(crc32(crcData), 0)

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf])
}

function extractDryerImages(publicMatDir) {
  const page5Path = path.resolve(__dirname, '..', '..', 'ryetek-app', 'public', 'images', 'brochure', 'wearguard', 'page-05.png')
  if (!fs.existsSync(page5Path)) {
    console.error('page-05.png NOT found at:', page5Path)
    return
  }

  try {
    const srcBuf = fs.readFileSync(page5Path)
    const parsed = parsePNG(srcBuf)
    const { width, height } = parsed

    // 1. Composite Photo (top ~46% of page)
    const composite = cropPNG(parsed, 0, 0, width, Math.floor(height * 0.46))
    fs.writeFileSync(path.join(publicMatDir, 'dryer-combo.png'), composite)

    // 2. Dryer Drum Sprockets & Trunnion (bottom left box)
    const sprockets = cropPNG(parsed, Math.floor(width * 0.07), Math.floor(height * 0.60), Math.floor(width * 0.27), Math.floor(height * 0.17))
    fs.writeFileSync(path.join(publicMatDir, 'dryer-sprockets.png'), sprockets)

    // 3. Drum Internals and Discharge Flights (bottom center box)
    const flights = cropPNG(parsed, Math.floor(width * 0.36), Math.floor(height * 0.60), Math.floor(width * 0.27), Math.floor(height * 0.17))
    fs.writeFileSync(path.join(publicMatDir, 'drum-flights.png'), flights)

    // 4. Thrust & Trunnion Wheels (bottom right box)
    const trunnions = cropPNG(parsed, Math.floor(width * 0.65), Math.floor(height * 0.60), Math.floor(width * 0.27), Math.floor(height * 0.17))
    fs.writeFileSync(path.join(publicMatDir, 'trunnion-wheels.png'), trunnions)

    console.log('Successfully extracted 4 authentic Page 5 dryer component images!')
  } catch (e) {
    console.error('Error cropping Page 5 images:', e)
  }
}

function extractPage10Images(publicMatDir) {
  const page10Path = path.resolve(__dirname, '..', '..', 'ryetek-app', 'public', 'images', 'brochure', 'wearguard', 'page-10.png')
  if (!fs.existsSync(page10Path)) return

  try {
    const srcBuf = fs.readFileSync(page10Path)
    const parsed = parsePNG(srcBuf)
    const { width, height } = parsed

    // 1. Top Composite Photo (top ~46% of page)
    const composite = cropPNG(parsed, 0, 0, width, Math.floor(height * 0.46))
    fs.writeFileSync(path.join(publicMatDir, 'elevator-combo.png'), composite)

    // 2. Right Top (Elevator Bucket with Chains)
    const bucket = cropPNG(parsed, Math.floor(width * 0.57), Math.floor(height * 0.46), Math.floor(width * 0.38), Math.floor(height * 0.17))
    fs.writeFileSync(path.join(publicMatDir, 'elevator-buckets.png'), bucket)

    // 3. Right Bottom (Drive Sprockets & Traction Wheels)
    const sprockets = cropPNG(parsed, Math.floor(width * 0.57), Math.floor(height * 0.63), Math.floor(width * 0.38), Math.floor(height * 0.17))
    fs.writeFileSync(path.join(publicMatDir, 'drive-sprockets.png'), sprockets)

    console.log('Successfully extracted Page 10 elevator component images!')
  } catch (e) {
    console.error('Error cropping Page 10 images:', e)
  }
}

function brochureServePlugin() {
  const brochureSourceDir = path.resolve(__dirname, '..', '..', 'ryetek-app', 'public', 'images', 'brochure')
  const brainDir = 'C:/Users/shine/.gemini/antigravity-ide/brain/bd865248-f24a-4d92-b802-ab8e19f0df3c'

  const materialMap = {
    'wear-steel.png': 'mat_wear_steel_1785583979224.png',
    'hardfaced-plate.png': 'mat_hardfaced_plate_1785583987968.png',
    'ceramic-liners.png': 'mat_ceramic_liners_1785583996959.png',
    'rubber-ceramic.png': 'mat_rubber_ceramic_1785584006823.png',
    'polymer-liners.png': 'mat_polymer_liners_1785584030071.png',
    'sacrificial-inserts.png': 'mat_sacrificial_inserts_1785584039771.png',
    'premium-castings.png': 'mat_premium_castings_1785584050316.png',
    'filter-bags.png': 'filter_bags_nomex_1785590292989.png',
    'filter-cages.png': 'filter_cages_ss_1785590307532.png',
    'exhaust-fan.png': 'exhaust_fan_impeller_1785590323243.png',
    'filter-combo.png': 'filter_assembly_combo_1785590336167.png',
    'mixer-paddle-arms.png': 'mixer_paddle_arms_1785590736541.png',
    'arm-protection.png': 'arm_protection_covers_1785590749058.png',
  }

  // Ensure public/images/materials directory exists and contains the files
  try {
    const publicMatDir = path.resolve(__dirname, 'public', 'images', 'materials')
    fs.mkdirSync(publicMatDir, { recursive: true })
    
    // Copy brain artifacts
    Object.entries(materialMap).forEach(([targetName, srcName]) => {
      const srcPath = path.join(brainDir, srcName)
      const targetPath = path.join(publicMatDir, targetName)
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, targetPath)
      }
    })

    // Extract authentic Page 5 Dryer Images and Page 10 Elevator Images
    extractDryerImages(publicMatDir)
    extractPage10Images(publicMatDir)
  } catch (e) {
    console.error('Error syncing material images to public dir:', e)
  }

  return {
    name: 'brochure-serve-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next()

        // Handle /images/materials/* requests
        if (req.url.includes('/images/materials/')) {
          const cleanUrl = req.url.split('?')[0]
          const fileName = path.basename(cleanUrl)
          const mappedName = materialMap[fileName]
          
          if (mappedName) {
            const brainPath = path.join(brainDir, mappedName)
            if (fs.existsSync(brainPath)) {
              res.setHeader('Content-Type', 'image/png')
              res.setHeader('Cache-Control', 'no-cache')
              return fs.createReadStream(brainPath).pipe(res)
            }
          }
        }

        // Handle /images/brochure/* requests
        if (req.url.includes('/images/brochure/')) {
          const cleanUrl = req.url.split('?')[0]
          const relativePath = cleanUrl.substring(cleanUrl.indexOf('/images/brochure/') + '/images/brochure/'.length)
          const targetPath = path.join(brochureSourceDir, relativePath)

          if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
            const ext = path.extname(targetPath).toLowerCase()
            const mime = ext === '.png' ? 'image/png' : (ext === '.jpeg' || ext === '.jpg') ? 'image/jpeg' : 'application/octet-stream'
            res.setHeader('Content-Type', mime)
            res.setHeader('Cache-Control', 'no-cache')
            return fs.createReadStream(targetPath).pipe(res)
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), brochureServePlugin()],
})
