import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/shine/.gemini/antigravity-ide/brain/92f902f8-6747-4fc9-af15-6715c1fed6da';
const publicDir = 'd:/PROJECTS/INDUSTRIAL/ryetek-website/ryetek-site/public/images';

const sunset4k = path.join(brainDir, 'media__1785687404026.jpg');
const concrete4k = path.join(brainDir, 'media__1785687401048.jpg');

const targetSunset = path.join(publicDir, 'asphalt-sunset-4k.jpg');
const targetConcrete = path.join(publicDir, 'concrete-silos-4k.jpg');

fs.mkdirSync(publicDir, { recursive: true });

if (fs.existsSync(sunset4k)) {
  fs.copyFileSync(sunset4k, targetSunset);
  console.log('✓ Copied 4K Sunset Asphalt Plant image!');
}

if (fs.existsSync(concrete4k)) {
  fs.copyFileSync(concrete4k, targetConcrete);
  console.log('✓ Copied 4K Concrete Silos & Truck image!');
}
