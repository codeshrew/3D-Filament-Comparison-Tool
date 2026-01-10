/**
 * 3D Printing Filament Comparison - Charts Module
 * Handles all Chart.js radar chart visualizations
 */

const ChartModule = {
  // Store chart instances for cleanup
  instances: new Map(),

  // Default chart colors
  colors: [
    'rgba(37, 99, 235, 0.7)',   // Blue
    'rgba(239, 68, 68, 0.7)',    // Red
    'rgba(34, 197, 94, 0.7)',    // Green
    'rgba(168, 85, 247, 0.7)'    // Purple
  ],

  backgroundColors: [
    'rgba(37, 99, 235, 0.2)',
    'rgba(239, 68, 68, 0.2)',
    'rgba(34, 197, 94, 0.2)',
    'rgba(168, 85, 247, 0.2)'
  ],

  // Get theme-aware colors
  getTextColor() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--color-text-secondary').trim() || '#475569';
  },

  getGridColor() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--color-border').trim() || '#e2e8f0';
  },

  // Default radar chart options
  getDefaultOptions(mini = false) {
    const textColor = this.getTextColor();
    const gridColor = this.getGridColor();

    return {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        duration: 500,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: !mini,
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleFont: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: '600'
          },
          bodyFont: {
            family: "'Inter', sans-serif",
            size: 11
          },
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw}/10`;
            }
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 10,
          beginAtZero: true,
          ticks: {
            stepSize: 2,
            display: !mini,
            color: textColor,
            font: {
              size: 10,
              family: "'JetBrains Mono', monospace"
            },
            backdropColor: 'transparent'
          },
          pointLabels: {
            display: !mini,
            color: textColor,
            font: {
              size: 11,
              family: "'Inter', sans-serif",
              weight: '500'
            }
          },
          grid: {
            color: gridColor
          },
          angleLines: {
            color: gridColor
          }
        }
      }
    };
  },

  // Create a mini radar chart for card preview
  createMiniRadar(canvasId, filament) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    // Destroy existing chart if any
    this.destroyChart(canvasId);

    const ctx = canvas.getContext('2d');
    const ratings = filament.ratings;
    const color = filament.color || this.colors[0];

    // Select key properties for mini chart
    const miniProperties = ['strength', 'flexibility', 'heatResistance', 'easeOfPrinting', 'surfaceQuality'];
    const labels = miniProperties.map(prop => PROPERTY_LABELS[prop] || prop);
    const data = miniProperties.map(prop => ratings[prop] || 0);

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: this.hexToRgba(color, 0.2),
          borderColor: color,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: this.getDefaultOptions(true)
    });

    this.instances.set(canvasId, chart);
    return chart;
  },

  // Create a full radar chart for detail modal
  createFullRadar(canvasId, filament) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    this.destroyChart(canvasId);

    const ctx = canvas.getContext('2d');
    const ratings = filament.ratings;
    const color = filament.color || this.colors[0];

    const labels = Object.keys(ratings).map(prop => PROPERTY_LABELS[prop] || prop);
    const data = Object.values(ratings);

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: filament.name,
          data: data,
          backgroundColor: this.hexToRgba(color, 0.2),
          borderColor: color,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: color,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 6
        }]
      },
      options: this.getDefaultOptions(false)
    });

    this.instances.set(canvasId, chart);
    return chart;
  },

  // Create comparison radar chart with multiple filaments
  createComparisonRadar(canvasId, filaments) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || filaments.length === 0) return null;

    this.destroyChart(canvasId);

    const ctx = canvas.getContext('2d');

    // Use all properties
    const propertyKeys = Object.keys(filaments[0].ratings);
    const labels = propertyKeys.map(prop => PROPERTY_LABELS[prop] || prop);

    const datasets = filaments.map((filament, index) => {
      const color = filament.color || this.colors[index % this.colors.length];
      return {
        label: filament.name,
        data: propertyKeys.map(prop => filament.ratings[prop] || 0),
        backgroundColor: this.hexToRgba(color, 0.15),
        borderColor: color,
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 6
      };
    });

    const options = this.getDefaultOptions(false);
    options.plugins.legend = {
      display: true,
      position: 'bottom',
      labels: {
        color: this.getTextColor(),
        font: {
          family: "'Inter', sans-serif",
          size: 12
        },
        padding: 15,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    };

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: options
    });

    this.instances.set(canvasId, chart);
    return chart;
  },

  // Destroy a chart instance
  destroyChart(canvasId) {
    if (this.instances.has(canvasId)) {
      this.instances.get(canvasId).destroy();
      this.instances.delete(canvasId);
    }
  },

  // Destroy all chart instances
  destroyAllCharts() {
    this.instances.forEach((chart, id) => {
      chart.destroy();
    });
    this.instances.clear();
  },

  // Update chart theme colors
  updateTheme() {
    this.instances.forEach((chart, id) => {
      const options = chart.options;
      if (options.scales && options.scales.r) {
        options.scales.r.ticks.color = this.getTextColor();
        options.scales.r.pointLabels.color = this.getTextColor();
        options.scales.r.grid.color = this.getGridColor();
        options.scales.r.angleLines.color = this.getGridColor();
      }
      if (options.plugins && options.plugins.legend) {
        options.plugins.legend.labels.color = this.getTextColor();
      }
      chart.update('none');
    });
  },

  // Helper to convert hex to rgba
  hexToRgba(hex, alpha = 1) {
    // Handle both #RGB and #RRGGBB formats
    let r, g, b;

    if (hex.startsWith('rgb')) {
      // Already in rgb format
      const match = hex.match(/\d+/g);
      if (match) {
        [r, g, b] = match.map(Number);
      }
    } else {
      // Hex format
      hex = hex.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
};
