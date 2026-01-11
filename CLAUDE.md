# Claude Code Instructions for 3D Filament Comparison Tool

## Project Overview
A web-based 3D printing filament comparison tool with light/dark theme support.

## Taking Screenshots for README

### Automated Script
```bash
./scripts/take-screenshots.sh
```

This script:
1. Uses Node 18+ (auto-detects via nvm)
2. Starts a local server if needed
3. Uses Puppeteer with `evaluateOnNewDocument()` to set localStorage before page load
4. Captures both light and dark mode screenshots
5. Saves to `screenshots/light-mode.png` and `screenshots/dark-mode.png`

### Manual Screenshot Process (if script fails)

1. **Start local server:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Use Puppeteer with Node 18+:**
   ```javascript
   import puppeteer from 'puppeteer';

   const browser = await puppeteer.launch({ headless: 'new' });
   const page = await browser.newPage();
   await page.setViewport({ width: 1280, height: 900 });

   // KEY: Set localStorage BEFORE page loads using evaluateOnNewDocument
   await page.evaluateOnNewDocument(() => {
       localStorage.setItem('filament-compare-theme', 'light');
   });
   await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });
   await page.screenshot({ path: 'screenshots/light-mode.png' });

   // Switch to dark mode
   await page.evaluate(() => {
       localStorage.setItem('filament-compare-theme', 'dark');
       document.documentElement.setAttribute('data-theme', 'dark');
   });
   await page.screenshot({ path: 'screenshots/dark-mode.png' });

   await browser.close();
   ```

### Why evaluateOnNewDocument?

The theme detection runs in an early `<script>` tag in `<head>` before CSS loads. To capture the correct theme:
- `evaluateOnNewDocument()` runs JavaScript before ANY page scripts execute
- This allows setting `localStorage` before the theme detection code reads it
- Prevents flash of wrong theme and ensures correct screenshot

### URL Parameter Override

For testing, you can also use `?theme=light` or `?theme=dark` URL parameters:
```
http://localhost:8000/?theme=dark
```

## Theme System

### Files
- `index.html` - Early theme detection script in `<head>`
- `js/app.js` - Theme toggle and state management
- `css/styles.css` - Theme CSS variables and styles

### Theme Priority
1. URL `?theme=` parameter (for testing/screenshots)
2. `localStorage.getItem('filament-compare-theme')`
3. `prefers-color-scheme` media query
4. Default: light

### LocalStorage Key
```
filament-compare-theme = 'light' | 'dark'
```

## Development

### Start Server
```bash
python3 -m http.server 8000
```

### File Structure
```
├── index.html          # Main HTML with early theme detection
├── css/styles.css      # All styles including theme variables
├── js/
│   ├── app.js          # Main application logic
│   └── data.js         # Filament data
├── screenshots/        # README screenshots
│   ├── light-mode.png
│   └── dark-mode.png
├── scripts/
│   └── take-screenshots.sh  # Screenshot automation
└── CLAUDE.md           # This file
```
