# 💖 Emaan's Birthday Countdown PWA

A beautiful Progressive Web App countdown to Emaan's birthday (July 29, 2025) with daily notification reminders.

## Features

- ✨ Beautiful countdown timer with romantic pink/purple gradient
- 📱 PWA functionality with install prompts
- 🔔 Daily push notifications for reminders
- 💖 Responsive design optimized for mobile and desktop
- 🎨 Animated gradient background
- 📅 Real-time countdown to July 29, 2025

## Quick Start

### Option 1: Deploy to Netlify (Recommended)

1. **Create PNG Icons First:**
   - Open `icon-converter.html` in your browser
   - Click the download buttons to get `icon-192.png` and `icon-512.png`
   - Place these files in the root directory

2. **Deploy to Netlify:**
   - Create a new site on [Netlify](https://netlify.com)
   - Drag and drop this entire folder, or connect to your GitHub repo
   - Netlify will automatically use the `netlify.toml` configuration
   - Your PWA will be live at your Netlify URL

3. **Custom Domain (Optional):**
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain
   - Configure DNS as instructed

### Option 2: Local Development

```bash
# Install dependencies (optional, for icon generation)
npm install

# Generate icons
npm run generate-icons

# Start local server
npm start
# Or use Python
python3 -m http.server 8000
# Or use any static file server
```

Visit `http://localhost:8000` to see the app.

## PWA Features

### Installation
- Users will see an install prompt on supported browsers
- The app can be installed on iOS, Android, and desktop
- Works offline after first visit

### Notifications
- Click "Enable Daily Reminders" to receive daily notifications
- Notifications show days remaining until the birthday
- Works even when the app is closed (on supported platforms)

## File Structure

```
birthday_countdown/
├── index.html          # Main application
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── netlify.toml       # Netlify configuration
├── package.json       # Node.js dependencies
├── generate-icons.js  # Icon generation script
├── icon-converter.html # Browser-based icon generator
└── README.md          # This file
```

## Technical Details

- **Target Date:** July 29, 2025, 12:00 AM
- **Notifications:** Daily at 9:00 AM (user's local time)
- **Caching:** All assets cached for offline use
- **Theme Colors:** Pink (#ff69b4) to Purple (#9c27b0) gradient
- **Icons:** Heart emoji (💖) on gradient background

## Browser Support

- ✅ Chrome/Edge (full PWA support)
- ✅ Firefox (basic PWA support)
- ✅ Safari (limited PWA support)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

To customize for a different date or person:

1. Update the target date in `index.html` (line with `const targetDate`)
2. Change the name "Emaan" throughout the files
3. Modify colors in the CSS gradient if desired
4. Update the manifest.json with new name/description

## Troubleshooting

**Icons not showing?**
- Make sure `icon-192.png` and `icon-512.png` are in the root directory
- Use the `icon-converter.html` tool to generate them

**Notifications not working?**
- Ensure the user granted notification permission
- Notifications require HTTPS (works on Netlify automatically)
- Some browsers limit notifications for non-installed PWAs

**Install prompt not appearing?**
- PWA must be served over HTTPS
- User hasn't already installed the app
- Browser supports PWA installation

## Deployment Checklist

- [ ] Generate PNG icons using `icon-converter.html`
- [ ] Test locally with HTTPS (for notifications)
- [ ] Deploy to Netlify or similar HTTPS hosting
- [ ] Test PWA installation on mobile device
- [ ] Test notification functionality
- [ ] Verify countdown accuracy
- [ ] Set up custom domain (optional)

## License

MIT License - Feel free to use this for your own special occasions! 💕