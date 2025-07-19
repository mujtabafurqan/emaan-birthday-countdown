const fs = require('fs');

// Simple icon generation without canvas dependency
// Creates base64 encoded PNG icons
function createSimpleIcon(size) {
  // This is a minimal PNG data for a pink square with a heart
  // In a real scenario, you'd use a proper image library
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff69b4;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#9c27b0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e91e63;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#bg)" rx="${size/10}"/>
      <text x="${size/2}" y="${size*0.6}" font-family="Arial" font-size="${size*0.3}" text-anchor="middle" fill="white">💖</text>
    </svg>
  `;
  
  return svg;
}

// Create SVG files that can be used as fallbacks
fs.writeFileSync('icon-192.svg', createSimpleIcon(192));
fs.writeFileSync('icon-512.svg', createSimpleIcon(512));

console.log('Icon SVG files created! Convert to PNG using an online tool or image editor.');
console.log('For now, the app will work with fallback icons.');

// Create a simple HTML page to convert SVGs to PNGs
const converterHtml = `
<!DOCTYPE html>
<html>
<head>
    <title>Icon Converter</title>
</head>
<body>
    <h2>Icon Converter</h2>
    <p>Right-click on each icon and "Save image as" to download PNG versions:</p>
    
    <h3>192x192 Icon:</h3>
    <canvas id="canvas192" width="192" height="192"></canvas>
    <br><br>
    
    <h3>512x512 Icon:</h3>
    <canvas id="canvas512" width="512" height="512"></canvas>
    
    <script>
        function drawIcon(canvasId, size) {
            const canvas = document.getElementById(canvasId);
            const ctx = canvas.getContext('2d');
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#ff69b4');
            gradient.addColorStop(0.5, '#9c27b0');  
            gradient.addColorStop(1, '#e91e63');
            
            // Fill background
            ctx.fillStyle = gradient;
            ctx.roundRect(0, 0, size, size, size/10);
            ctx.fill();
            
            // Add heart
            ctx.font = size * 0.4 + 'px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
            ctx.fillText('💖', size/2, size*0.55);
        }
        
        // Polyfill for roundRect if needed
        if (!CanvasRenderingContext2D.prototype.roundRect) {
            CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
                this.beginPath();
                this.moveTo(x + r, y);
                this.lineTo(x + w - r, y);
                this.quadraticCurveTo(x + w, y, x + w, y + r);
                this.lineTo(x + w, y + h - r);
                this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
                this.lineTo(x + r, y + h);
                this.quadraticCurveTo(x, y + h, x, y + h - r);
                this.lineTo(x, y + r);
                this.quadraticCurveTo(x, y, x + r, y);
                this.closePath();
            };
        }
        
        drawIcon('canvas192', 192);
        drawIcon('canvas512', 512);
        
        // Auto-download function
        function downloadIcon(canvasId, filename) {
            const canvas = document.getElementById(canvasId);
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
        
        // Add download buttons
        setTimeout(() => {
            const btn192 = document.createElement('button');
            btn192.textContent = 'Download 192x192 PNG';
            btn192.onclick = () => downloadIcon('canvas192', 'icon-192.png');
            document.querySelector('h3').after(btn192);
            
            const btn512 = document.createElement('button');
            btn512.textContent = 'Download 512x512 PNG';
            btn512.onclick = () => downloadIcon('canvas512', 'icon-512.png');
            document.querySelectorAll('h3')[1].after(btn512);
        }, 100);
    </script>
</body>
</html>
`;

fs.writeFileSync('icon-converter.html', converterHtml);
console.log('Created icon-converter.html - open this file in a browser to generate PNG icons.');