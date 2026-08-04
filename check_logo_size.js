import fs from 'fs';
import path from 'path';

const logoPath = path.resolve('public', 'images', 'logo.png');
const buf = fs.readFileSync(logoPath);

// PNG IHDR chunk starts at offset 8
// Width is at offset 16 (4 bytes BE)
// Height is at offset 20 (4 bytes BE)
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);

console.log(`Logo File: logo.png`);
console.log(`Dimensions: ${width}px x ${height}px`);
console.log(`Aspect Ratio: ${(width / height).toFixed(2)}:1`);
