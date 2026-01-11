#!/bin/bash
# take-screenshots.sh - Capture light and dark mode screenshots for README
#
# Usage: ./scripts/take-screenshots.sh
#
# Requirements:
#   - Node.js 18+ (uses nvm if available)
#   - Local server running on port 8000
#
# This script:
#   1. Starts a local server if not running
#   2. Uses Puppeteer to capture screenshots with proper theme settings
#   3. Saves to screenshots/light-mode.png and screenshots/dark-mode.png

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SCREENSHOTS_DIR="$PROJECT_DIR/screenshots"
PORT=8000

# Use Node 18+ (try nvm first)
if [ -d "$HOME/.nvm/versions/node/v18.20.8" ]; then
    export PATH="$HOME/.nvm/versions/node/v18.20.8/bin:$PATH"
elif command -v node &> /dev/null && [[ $(node -v | cut -d. -f1 | tr -d 'v') -ge 18 ]]; then
    : # Node 18+ already in path
else
    echo "Error: Node.js 18+ required. Install via nvm: nvm install 18"
    exit 1
fi

echo "Using Node $(node -v)"

# Check if server is running
if ! curl -s "http://localhost:$PORT" > /dev/null 2>&1; then
    echo "Starting local server on port $PORT..."
    cd "$PROJECT_DIR"
    python3 -m http.server $PORT &
    SERVER_PID=$!
    sleep 2
    trap "kill $SERVER_PID 2>/dev/null" EXIT
else
    echo "Server already running on port $PORT"
fi

# Create screenshots directory if needed
mkdir -p "$SCREENSHOTS_DIR"

# Create temp directory for puppeteer
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR; kill $SERVER_PID 2>/dev/null" EXIT

# Install puppeteer in temp directory
echo "Installing Puppeteer..."
cd "$TEMP_DIR"
npm init -y > /dev/null 2>&1
npm install puppeteer --silent

# Create the screenshot script
cat > "$TEMP_DIR/screenshot.mjs" << 'PUPPETEER_SCRIPT'
import puppeteer from 'puppeteer';

const outputDir = process.argv[2] || './screenshots';
const port = process.argv[3] || '8000';
const url = `http://localhost:${port}`;

console.log(`Taking screenshots from ${url}...`);

const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });

// Light mode screenshot
// Use evaluateOnNewDocument to set localStorage BEFORE page loads
await page.evaluateOnNewDocument(() => {
    localStorage.setItem('filament-compare-theme', 'light');
});
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Ensure theme is applied
await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
});
await page.waitForTimeout(500); // Allow CSS transitions

await page.screenshot({ path: `${outputDir}/light-mode.png` });
console.log('Saved light-mode.png');

// Dark mode screenshot
// Update localStorage and theme attribute
await page.evaluate(() => {
    localStorage.setItem('filament-compare-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
});
await page.waitForTimeout(500); // Allow CSS transitions

await page.screenshot({ path: `${outputDir}/dark-mode.png` });
console.log('Saved dark-mode.png');

await browser.close();
console.log('Done!');
PUPPETEER_SCRIPT

# Run the screenshot script
echo "Capturing screenshots..."
node "$TEMP_DIR/screenshot.mjs" "$SCREENSHOTS_DIR" "$PORT"

echo ""
echo "Screenshots saved to:"
ls -la "$SCREENSHOTS_DIR"/*.png
