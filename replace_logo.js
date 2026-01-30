import fs from 'fs';
import path from 'path';

const sourcePath = '/Users/devon/Desktop/Screenshot 2026-01-29 at 7.21.32 PM.png';
const destPath = '/Users/devon/tivi-landing-page-src/public/tivi-logo.png';

console.log(`Copying logo from ${sourcePath}...`);

try {
    if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log('✅ Successfully replaced tivi-logo.png with user screenshot.');
    } else {
        console.error('❌ Source file not found:', sourcePath);
        // Fallback: check without spaces or different extension?
        // But user gave specific name.
    }
} catch (err) {
    console.error('❌ Error copying file:', err.message);
}
