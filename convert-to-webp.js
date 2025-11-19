const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing images
const publicDir = path.join(__dirname, 'public');

// Get all image files
const imageFiles = fs.readdirSync(publicDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext);
});

console.log(`Found ${imageFiles.length} images to convert:`);
imageFiles.forEach(file => console.log(`  - ${file}`));

// Convert each image to WebP
async function convertImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;
      
      // Convert to WebP with quality 85 (good balance between quality and size)
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      // Get new file size
      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
      
      console.log(`✓ ${file} → ${path.basename(outputPath)} (${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }
  
  console.log('\nConversion complete!');
}

convertImages().catch(console.error);

