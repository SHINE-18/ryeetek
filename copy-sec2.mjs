import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/shine/.gemini/antigravity-ide/brain/92f902f8-6747-4fc9-af15-6715c1fed6da';
const publicDir = 'd:/PROJECTS/INDUSTRIAL/ryetek-website/ryetek-site/public/images';

fs.mkdirSync(publicDir, { recursive: true });

const img1 = path.join(brainDir, 'media__1785687519389.jpg');
const img2 = path.join(brainDir, 'media__1785687533198.jpg');
const img3 = path.join(brainDir, 'media__1785687646283.jpg');

if (fs.existsSync(img1)) fs.copyFileSync(img1, path.join(publicDir, 'bitumen-tanks-sunset.jpg'));
if (fs.existsSync(img2)) fs.copyFileSync(img2, path.join(publicDir, 'bitumen-thermal-skid.jpg'));
if (fs.existsSync(img3)) fs.copyFileSync(img3, path.join(publicDir, 'bitumen-storage-catwalk.jpg'));

console.log('✓ Successfully copied all 3 Section 02 Bitumen images to public/images!');
