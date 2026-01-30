import fs from 'fs';
import path from 'path';

// Define paths
const sourceDir = '/Users/devon/.gemini/antigravity/scratch/tivi-landing-page/public';
const destDir = '/Users/devon/tivi-landing-page-src/public';

console.log(`Copying assets from ${sourceDir} to ${destDir}...`);

// Ensure destination exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Assets to copy
const assets = ['tivi-logo.png', 'tivi-score-ui.png', 'tivi-score.png'];

assets.forEach(file => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);

    if (fs.existsSync(srcPath)) {
        try {
            fs.copyFileSync(srcPath, destPath);
            console.log(`✅ Copied ${file}`);
        } catch (err) {
            console.error(`❌ Failed to copy ${file}:`, err.message);
        }
    } else {
        console.log(`⚠️  Skipping ${file} (not found in source)`);
    }
});
