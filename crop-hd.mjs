import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, '..', 'ilovepdf_images-extracted', '1 (2).png');
const publicDir = path.resolve(__dirname, 'public', 'images');

if (fs.existsSync(srcPath)) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(srcPath, path.join(publicDir, 'asphalt-sunset-brochure.png'));
  fs.copyFileSync(srcPath, path.join(publicDir, 'concrete-silos-brochure.png'));
  console.log('Successfully synced original high-resolution brochure images to public/images!');
} else {
  console.error('Source image not found at:', srcPath);
}
