const fs = require('fs');
const path = require('path');

const BRAIN_DIR = 'C:/Users/shine/.gemini/antigravity-ide/brain/bd865248-f24a-4d92-b802-ab8e19f0df3c';

const files = [
  { src: 'mat_wear_steel_1785583979224.png', dest: 'wear-steel.png' },
  { src: 'mat_hardfaced_plate_1785583987968.png', dest: 'hardfaced-plate.png' },
  { src: 'mat_ceramic_liners_1785583996959.png', dest: 'ceramic-liners.png' },
  { src: 'mat_rubber_ceramic_1785584006823.png', dest: 'rubber-ceramic.png' },
  { src: 'mat_polymer_liners_1785584030071.png', dest: 'polymer-liners.png' },
  { src: 'mat_sacrificial_inserts_1785584039771.png', dest: 'sacrificial-inserts.png' },
  { src: 'mat_premium_castings_1785584050316.png', dest: 'premium-castings.png' },
];

const dest1 = path.join(__dirname, 'public', 'images', 'materials');
const dest2 = path.join(__dirname, '..', '..', 'ryetek-app', 'public', 'images', 'materials');

fs.mkdirSync(dest1, { recursive: true });
fs.mkdirSync(dest2, { recursive: true });

files.forEach(({ src, dest }) => {
  const srcPath = path.join(BRAIN_DIR, src);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(dest1, dest));
    fs.copyFileSync(srcPath, path.join(dest2, dest));
    console.log(`✅ Copied: ${dest}`);
  } else {
    console.error(`❌ File missing: ${srcPath}`);
  }
});

console.log('All material images successfully copied!');
