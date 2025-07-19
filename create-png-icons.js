const fs = require('fs');

// Create a simple PNG icon using base64 data
// This creates a basic pink square with transparency that will work as a fallback
function createPngIcon(size) {
    // Minimal PNG data for a pink square (base64 encoded)
    // This is a very basic 1x1 pink pixel that will be scaled
    const pinkPixelPng = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
    
    // For our purposes, we'll create a simple colored square
    // In production, you'd want proper icons, but this will work for the PWA
    return Buffer.from(pinkPixelPng, 'base64');
}

try {
    // Create 192x192 icon
    const icon192 = createPngIcon(192);
    fs.writeFileSync('icon-192.png', icon192);
    
    // Create 512x512 icon  
    const icon512 = createPngIcon(512);
    fs.writeFileSync('icon-512.png', icon512);
    
    console.log('✅ Created icon-192.png and icon-512.png');
    console.log('Note: These are placeholder icons. For better icons, use the icon-converter.html tool.');
} catch (error) {
    console.error('Error creating icons:', error);
}