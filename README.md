# 3D Filament Comparison Tool

An interactive, mobile-responsive web application for comparing 3D printing filament properties, print settings, and use cases.

## Features

- **12+ Filament Types**: PLA, PETG, ABS, TPU, Nylon, ASA, Polycarbonate, HIPS, PVA, Wood-filled PLA, Carbon Fiber, and Silk/Metallic PLA
- **Interactive Radar Charts**: Visual property comparisons using Chart.js
- **Side-by-Side Comparison**: Compare up to 4 filaments simultaneously with overlay charts
- **Advanced Filtering**: Filter by category, difficulty, temperature range, and special requirements
- **Smart Search**: Search by name, material type, or use case
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme**: Automatic detection with manual toggle
- **Persistent State**: Remembers your theme preference and comparison selections

## Properties Compared

Each filament is rated on a 1-10 scale for:
- Strength
- Flexibility
- Heat Resistance
- UV Resistance
- Chemical Resistance
- Ease of Printing
- Layer Adhesion
- Surface Quality

## Print Settings

Detailed print settings for each filament including:
- Nozzle temperature range
- Bed temperature range
- Special requirements (enclosure, hardened nozzle, drying)
- Difficulty level
- Cost range

## Technology Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom properties, CSS Grid, Flexbox, animations
- **Vanilla JavaScript** - ES6+ with modular architecture
- **Chart.js** - Interactive radar charts via CDN
- **Google Fonts** - Inter & JetBrains Mono

## Deployment

This site is deployed using GitHub Pages. To deploy your own:

1. Fork this repository
2. Go to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select the `main` branch and `/ (root)` folder
5. Save and wait for deployment

The site will be available at `https://[username].github.io/3D-Printing/`

## Local Development

No build step required! Simply:

1. Clone the repository
2. Open `index.html` in a browser
3. Or use a local server: `python -m http.server 8000`

## License

MIT License - feel free to use, modify, and distribute.

## Credits

Data compiled from various 3D printing resources including Simplify3D, Prusa Knowledge Base, MatterHackers, and community expertise.
