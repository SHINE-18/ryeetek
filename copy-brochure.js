const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const srcDir = path.join(__dirname, '..', 'ryetek-app', 'public', 'images', 'brochure');
const destDir = path.join(__dirname, 'public', 'images', 'brochure');

if (fs.existsSync(srcDir)) {
  copyDir(srcDir, destDir);
  console.log('Successfully copied brochure images to ryetek-site!');
} else {
  console.error('Source directory does not exist:', srcDir);
}
