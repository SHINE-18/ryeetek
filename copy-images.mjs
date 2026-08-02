import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const brain1 = 'C:/Users/shine/.gemini/antigravity-ide/brain/bd865248-f24a-4d92-b802-ab8e19f0df3c';
const brain2 = 'C:/Users/shine/.gemini/antigravity-ide/brain/92f902f8-6747-4fc9-af15-6715c1fed6da';
const dest = 'public/images/materials';

const files = [
  // Previous session product-line images
  { src: join(brain2, 'product_dryer_drum_1785678640882.png'), dst: join(dest, 'product-lines-dryer-drum.png') },
  { src: join(brain2, 'product_pugmill_mixer_1785678651086.png'), dst: join(dest, 'product-lines-pugmill-mixer.png') },
  { src: join(brain2, 'product_custom_wear_1785678669341.png'), dst: join(dest, 'product-lines-custom-wear.png') },

  // New elevator slideshow images
  { src: join(brain2, 'elev_combo_suite_1785679338673.png'), dst: join(dest, 'elevator-combo.png') },
  { src: join(brain2, 'elev_buckets_deep_1785679350218.png'), dst: join(dest, 'elevator-buckets.png') },
  { src: join(brain2, 'elev_drive_sprockets_1785679360307.png'), dst: join(dest, 'drive-sprockets.png') },
  { src: join(brain2, 'elev_plant_system_1785679370536.png'), dst: join(dest, 'elevator-plant.png') },
  { src: join(brain2, 'wearguard_hero_industrial_1785681017530.png'), dst: join(dest, 'wearguard-hero.png') },
];

let copied = 0;
for (const { src, dst } of files) {
  if (existsSync(src)) {
    copyFileSync(src, dst);
    console.log(`✓ Copied: ${dst}`);
    copied++;
  } else {
    console.warn(`✗ Source not found: ${src}`);
  }
}

console.log(`\nDone — ${copied}/${files.length} files copied.`);
