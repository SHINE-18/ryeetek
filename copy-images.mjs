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
  { src: join(brain2, 'concrete_batching_plant_studio_1785681820587.png'), dst: join('public/images', 'concrete-batching-plant-studio.png') },
  { src: join(brain2, 'automation_mcc_panel_studio_1785681834509.png'), dst: join('public/images', 'automation-mcc-panel-studio.png') },
  { src: join(brain2, 'asphalt_concrete_sunset_plant_1785682409390.png'), dst: join('public/images', 'asphalt-concrete-sunset-plant.png') },
  { src: join(brain2, 'bitumen_tanks_golden_hour_1785682427932.png'), dst: join('public/images', 'bitumen-tanks-golden-hour.png') },
  { src: join(brain2, 'industrial_process_skid_vessels_1785682445109.png'), dst: join('public/images', 'industrial-process-skid-vessels.png') },
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
