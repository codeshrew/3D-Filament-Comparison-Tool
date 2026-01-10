/**
 * 3D Printing Filament Comparison Tool - Main Application
 * Handles all interactivity, filtering, searching, and comparison features
 */

// Application State
const App = {
  state: {
    filaments: [],
    filteredFilaments: [],
    selectedForComparison: [],
    activeFilters: {
      categories: ['standard', 'engineering', 'flexible', 'composite', 'support', 'specialty'],
      difficulty: 'all',
      tempMin: 180,
      tempMax: 310,
      requirements: [],
      minStrength: 1,
      minHeat: 1,
      minEase: 1
    },
    sortBy: 'name-asc',
    searchQuery: '',
    viewMode: 'grid',
    theme: 'light'
  },

  // DOM Elements
  elements: {},

  // Initialize the application
  init() {
    this.cacheElements();
    this.loadState();
    this.state.filaments = [...FILAMENT_DATA];
    this.state.filteredFilaments = [...FILAMENT_DATA];
    this.bindEvents();
    this.applyFilters();
    this.render();
    this.updateComparisonPanel();
  },

  // Cache DOM elements for performance
  cacheElements() {
    this.elements = {
      grid: document.getElementById('filament-grid'),
      searchInput: document.getElementById('search-input'),
      sortSelect: document.getElementById('sort-select'),
      filterSidebar: document.getElementById('filter-sidebar'),
      filterToggle: document.getElementById('filter-toggle'),
      closeFilters: document.getElementById('close-filters'),
      filterOverlay: document.getElementById('filter-overlay'),
      clearFilters: document.getElementById('clear-filters'),
      resetFilters: document.getElementById('reset-filters'),
      resultCount: document.getElementById('result-count'),
      emptyState: document.getElementById('empty-state'),
      themeToggle: document.getElementById('theme-toggle'),
      viewToggle: document.querySelectorAll('.view-btn'),
      comparisonPanel: document.getElementById('comparison-panel'),
      comparisonHeader: document.getElementById('comparison-header'),
      comparisonToggle: document.getElementById('comparison-toggle'),
      comparisonBadge: document.getElementById('comparison-badge'),
      comparisonContent: document.getElementById('comparison-content'),
      comparisonItems: document.getElementById('comparison-items'),
      comparisonEmpty: document.getElementById('comparison-empty'),
      comparisonChartContainer: document.getElementById('comparison-chart-container'),
      clearComparison: document.getElementById('clear-comparison'),
      viewComparison: document.getElementById('view-comparison'),
      modalOverlay: document.getElementById('modal-overlay'),
      modalContent: document.getElementById('modal-content'),
      modalClose: document.getElementById('modal-close'),
      comparisonModalOverlay: document.getElementById('comparison-modal-overlay'),
      comparisonModalContent: document.getElementById('comparison-modal-content'),
      comparisonModalClose: document.getElementById('comparison-modal-close'),
      toastContainer: document.getElementById('toast-container'),
      tempMinInput: document.getElementById('temp-min'),
      tempMaxInput: document.getElementById('temp-max'),
      tempMinValue: document.getElementById('temp-min-value'),
      tempMaxValue: document.getElementById('temp-max-value'),
      strengthSlider: document.getElementById('min-strength'),
      heatSlider: document.getElementById('min-heat'),
      easeSlider: document.getElementById('min-ease'),
      strengthValue: document.getElementById('strength-value'),
      heatValue: document.getElementById('heat-value'),
      easeValue: document.getElementById('ease-value')
    };
  },

  // Load saved state from localStorage
  loadState() {
    try {
      const savedTheme = localStorage.getItem('filament-compare-theme');
      if (savedTheme) {
        this.state.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.state.theme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      const savedComparison = localStorage.getItem('filament-compare-selection');
      if (savedComparison) {
        const ids = JSON.parse(savedComparison);
        this.state.selectedForComparison = ids;
      }
    } catch (e) {
      console.error('Error loading state:', e);
    }
  },

  // Save state to localStorage
  saveState() {
    try {
      localStorage.setItem('filament-compare-theme', this.state.theme);
      localStorage.setItem('filament-compare-selection', JSON.stringify(
        this.state.selectedForComparison.map(f => f.id)
      ));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  },

  // Bind event listeners
  bindEvents() {
    // Search
    this.elements.searchInput.addEventListener('input', this.debounce(() => {
      this.state.searchQuery = this.elements.searchInput.value.trim().toLowerCase();
      this.applyFilters();
      this.render();
    }, 300));

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== this.elements.searchInput) {
        e.preventDefault();
        this.elements.searchInput.focus();
      }
      if (e.key === 'Escape') {
        this.closeAllModals();
        this.closeFilterSidebar();
      }
    });

    // Sort
    this.elements.sortSelect.addEventListener('change', () => {
      this.state.sortBy = this.elements.sortSelect.value;
      this.applyFilters();
      this.render();
    });

    // Filter toggle (mobile)
    this.elements.filterToggle.addEventListener('click', () => this.openFilterSidebar());
    this.elements.closeFilters.addEventListener('click', () => this.closeFilterSidebar());
    this.elements.filterOverlay.addEventListener('click', () => this.closeFilterSidebar());

    // Clear filters
    this.elements.clearFilters.addEventListener('click', () => this.resetFilters());
    if (this.elements.resetFilters) {
      this.elements.resetFilters.addEventListener('click', () => this.resetFilters());
    }

    // Category filters
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.state.activeFilters.categories = Array.from(
          document.querySelectorAll('input[name="category"]:checked')
        ).map(cb => cb.value);
        this.applyFilters();
        this.render();
      });
    });

    // Difficulty filters
    document.querySelectorAll('.filter-btn[data-difficulty]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn[data-difficulty]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.activeFilters.difficulty = btn.dataset.difficulty;
        this.applyFilters();
        this.render();
      });
    });

    // Temperature range
    if (this.elements.tempMinInput && this.elements.tempMaxInput) {
      this.elements.tempMinInput.addEventListener('input', () => {
        const val = parseInt(this.elements.tempMinInput.value);
        this.state.activeFilters.tempMin = val;
        this.elements.tempMinValue.textContent = `${val}°C`;
        this.applyFilters();
        this.render();
      });

      this.elements.tempMaxInput.addEventListener('input', () => {
        const val = parseInt(this.elements.tempMaxInput.value);
        this.state.activeFilters.tempMax = val;
        this.elements.tempMaxValue.textContent = `${val}°C`;
        this.applyFilters();
        this.render();
      });
    }

    // Requirement filters
    document.querySelectorAll('input[name="requirement"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.state.activeFilters.requirements = Array.from(
          document.querySelectorAll('input[name="requirement"]:checked')
        ).map(cb => cb.value);
        this.applyFilters();
        this.render();
      });
    });

    // Property sliders
    if (this.elements.strengthSlider) {
      this.elements.strengthSlider.addEventListener('input', () => {
        const val = parseInt(this.elements.strengthSlider.value);
        this.state.activeFilters.minStrength = val;
        this.elements.strengthValue.textContent = val;
        this.applyFilters();
        this.render();
      });
    }

    if (this.elements.heatSlider) {
      this.elements.heatSlider.addEventListener('input', () => {
        const val = parseInt(this.elements.heatSlider.value);
        this.state.activeFilters.minHeat = val;
        this.elements.heatValue.textContent = val;
        this.applyFilters();
        this.render();
      });
    }

    if (this.elements.easeSlider) {
      this.elements.easeSlider.addEventListener('input', () => {
        const val = parseInt(this.elements.easeSlider.value);
        this.state.activeFilters.minEase = val;
        this.elements.easeValue.textContent = val;
        this.applyFilters();
        this.render();
      });
    }

    // Theme toggle
    this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());

    // View toggle
    this.elements.viewToggle.forEach(btn => {
      btn.addEventListener('click', () => {
        this.elements.viewToggle.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.viewMode = btn.dataset.view;
        this.elements.grid.classList.toggle('list-view', this.state.viewMode === 'list');
      });
    });

    // Comparison panel
    this.elements.comparisonHeader.addEventListener('click', () => this.toggleComparisonPanel());
    this.elements.clearComparison.addEventListener('click', () => this.clearComparison());
    this.elements.viewComparison.addEventListener('click', () => this.openComparisonModal());

    // Modal close
    this.elements.modalClose.addEventListener('click', () => this.closeDetailModal());
    this.elements.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.elements.modalOverlay) this.closeDetailModal();
    });

    this.elements.comparisonModalClose.addEventListener('click', () => this.closeComparisonModal());
    this.elements.comparisonModalOverlay.addEventListener('click', (e) => {
      if (e.target === this.elements.comparisonModalOverlay) this.closeComparisonModal();
    });

    // Restore comparison selection from IDs
    if (this.state.selectedForComparison.length > 0) {
      const ids = [...this.state.selectedForComparison];
      this.state.selectedForComparison = [];
      ids.forEach(id => {
        const filament = this.state.filaments.find(f => f.id === id);
        if (filament) {
          this.state.selectedForComparison.push(filament);
        }
      });
    }
  },

  // Apply all active filters
  applyFilters() {
    let filtered = [...this.state.filaments];

    // Search filter
    if (this.state.searchQuery) {
      const query = this.state.searchQuery;
      filtered = filtered.filter(f =>
        f.name.toLowerCase().includes(query) ||
        f.fullName.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query) ||
        f.useCases.some(uc => uc.toLowerCase().includes(query)) ||
        f.description.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (this.state.activeFilters.categories.length > 0) {
      filtered = filtered.filter(f =>
        this.state.activeFilters.categories.includes(f.category)
      );
    }

    // Difficulty filter
    if (this.state.activeFilters.difficulty !== 'all') {
      filtered = filtered.filter(f =>
        f.difficulty === this.state.activeFilters.difficulty
      );
    }

    // Temperature filter
    filtered = filtered.filter(f => {
      const nozzleMin = f.temperatures.nozzle.min;
      const nozzleMax = f.temperatures.nozzle.max;
      return nozzleMin >= this.state.activeFilters.tempMin - 20 &&
             nozzleMax <= this.state.activeFilters.tempMax + 20;
    });

    // Requirements filter
    if (this.state.activeFilters.requirements.includes('no-enclosure')) {
      filtered = filtered.filter(f => !f.requirements.enclosure);
    }
    if (this.state.activeFilters.requirements.includes('no-hardened-nozzle')) {
      filtered = filtered.filter(f => !f.requirements.hardenedNozzle);
    }
    if (this.state.activeFilters.requirements.includes('food-safe')) {
      filtered = filtered.filter(f => f.foodSafe);
    }
    if (this.state.activeFilters.requirements.includes('biodegradable')) {
      filtered = filtered.filter(f => f.biodegradable);
    }

    // Property filters
    filtered = filtered.filter(f =>
      f.ratings.strength >= this.state.activeFilters.minStrength &&
      f.ratings.heatResistance >= this.state.activeFilters.minHeat &&
      f.ratings.easeOfPrinting >= this.state.activeFilters.minEase
    );

    // Sorting
    filtered = this.sortFilaments(filtered);

    this.state.filteredFilaments = filtered;
    this.elements.resultCount.textContent = filtered.length;
  },

  // Sort filaments
  sortFilaments(filaments) {
    const [field, direction] = this.state.sortBy.split('-');

    return [...filaments].sort((a, b) => {
      let valueA, valueB;

      switch(field) {
        case 'name':
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case 'strength':
          valueA = a.ratings.strength;
          valueB = b.ratings.strength;
          break;
        case 'heat':
          valueA = a.ratings.heatResistance;
          valueB = b.ratings.heatResistance;
          break;
        case 'ease':
          valueA = a.ratings.easeOfPrinting;
          valueB = b.ratings.easeOfPrinting;
          break;
        case 'flex':
          valueA = a.ratings.flexibility;
          valueB = b.ratings.flexibility;
          break;
        case 'cost':
          const costOrder = { budget: 1, mid: 2, premium: 3 };
          valueA = costOrder[a.cost.category];
          valueB = costOrder[b.cost.category];
          break;
        default:
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
      }

      if (direction === 'asc') {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else {
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      }
    });
  },

  // Render the filament grid
  render() {
    const filaments = this.state.filteredFilaments;

    if (filaments.length === 0) {
      this.elements.grid.innerHTML = '';
      this.elements.emptyState.hidden = false;
      return;
    }

    this.elements.emptyState.hidden = true;

    const html = filaments.map(filament => this.renderCard(filament)).join('');
    this.elements.grid.innerHTML = html;

    // Initialize mini radar charts
    filaments.forEach(filament => {
      ChartModule.createMiniRadar(`chart-${filament.id}`, filament);
    });

    // Bind card events
    this.bindCardEvents();
  },

  // Render a single filament card
  renderCard(filament) {
    const isSelected = this.state.selectedForComparison.some(f => f.id === filament.id);
    const costSymbol = COST_LABELS[filament.cost.category] || '$';
    const difficultyLabel = DIFFICULTY_LABELS[filament.difficulty] || filament.difficulty;

    // Key stats for the card
    const keyStats = [
      { key: 'strength', label: 'Strength' },
      { key: 'heatResistance', label: 'Heat Res.' },
      { key: 'easeOfPrinting', label: 'Print Ease' },
      { key: 'surfaceQuality', label: 'Surface' }
    ];

    const statsHtml = keyStats.map(stat => `
      <div class="stat-row">
        <span class="stat-label">${stat.label}</span>
        <div class="stat-bar">
          <div class="stat-bar-fill" style="width: ${filament.ratings[stat.key] * 10}%; background-color: ${filament.color}"></div>
        </div>
        <span class="stat-value">${filament.ratings[stat.key]}</span>
      </div>
    `).join('');

    return `
      <article class="filament-card ${isSelected ? 'selected' : ''}" data-id="${filament.id}">
        <div class="card-header">
          <span class="card-badge ${filament.category}">${filament.category}</span>
          <div class="card-actions">
            <button class="card-action-btn compare-btn ${isSelected ? 'active' : ''}"
                    data-id="${filament.id}"
                    aria-label="${isSelected ? 'Remove from comparison' : 'Add to comparison'}"
                    title="${isSelected ? 'Remove from comparison' : 'Add to comparison'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title">${filament.name}</h3>
          <p class="card-subtitle">${filament.fullName}</p>

          <div class="card-content">
            <div class="card-chart">
              <canvas id="chart-${filament.id}"></canvas>
            </div>
            <div class="card-stats">
              ${statsHtml}
            </div>
          </div>

          <div class="card-quick-info">
            <div class="quick-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
              </svg>
              <span class="quick-info-value">${filament.temperatures.nozzle.recommended}°C</span>
            </div>
            <div class="quick-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <path d="M2 12h20"></path>
              </svg>
              <span class="quick-info-value">${filament.temperatures.bed.recommended}°C</span>
            </div>
            <div class="quick-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M2 12h20"></path>
              </svg>
              <span class="quick-info-value">${difficultyLabel}</span>
            </div>
            <div class="quick-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span class="quick-info-value">${costSymbol}</span>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-outline detail-btn" data-id="${filament.id}">View Details</button>
          <button class="btn btn-primary compare-btn ${isSelected ? 'btn-outline' : ''}" data-id="${filament.id}">
            ${isSelected ? 'Remove' : 'Compare'}
          </button>
        </div>
      </article>
    `;
  },

  // Bind events to card buttons
  bindCardEvents() {
    // Detail buttons
    document.querySelectorAll('.detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filament = this.state.filaments.find(f => f.id === btn.dataset.id);
        if (filament) this.openDetailModal(filament);
      });
    });

    // Compare buttons
    document.querySelectorAll('.compare-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const filament = this.state.filaments.find(f => f.id === btn.dataset.id);
        if (filament) this.toggleComparison(filament);
      });
    });
  },

  // Toggle filament in comparison
  toggleComparison(filament) {
    const index = this.state.selectedForComparison.findIndex(f => f.id === filament.id);

    if (index === -1) {
      if (this.state.selectedForComparison.length >= 4) {
        this.showToast('Maximum 4 filaments can be compared at once', 'error');
        return;
      }
      this.state.selectedForComparison.push(filament);
      this.showToast(`${filament.name} added to comparison`);
    } else {
      this.state.selectedForComparison.splice(index, 1);
      this.showToast(`${filament.name} removed from comparison`);
    }

    this.saveState();
    this.render();
    this.updateComparisonPanel();
  },

  // Update comparison panel
  updateComparisonPanel() {
    const count = this.state.selectedForComparison.length;

    this.elements.comparisonBadge.textContent = count;
    this.elements.comparisonPanel.setAttribute('data-count', count);
    this.elements.viewComparison.disabled = count < 2;

    if (count === 0) {
      this.elements.comparisonItems.innerHTML = '';
      this.elements.comparisonEmpty.hidden = false;
      this.elements.comparisonChartContainer.hidden = true;
      ChartModule.destroyChart('comparison-chart');
      return;
    }

    this.elements.comparisonEmpty.hidden = true;

    // Render selected items
    const itemsHtml = this.state.selectedForComparison.map(filament => `
      <div class="comparison-item">
        <span class="comparison-item-color" style="background-color: ${filament.color}"></span>
        <span class="comparison-item-name">${filament.name}</span>
        <button class="comparison-item-remove" data-id="${filament.id}" aria-label="Remove ${filament.name}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `).join('');

    this.elements.comparisonItems.innerHTML = itemsHtml;

    // Bind remove buttons
    document.querySelectorAll('.comparison-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const filament = this.state.filaments.find(f => f.id === btn.dataset.id);
        if (filament) this.toggleComparison(filament);
      });
    });

    // Show comparison chart if 2+ items
    if (count >= 2) {
      this.elements.comparisonChartContainer.hidden = false;
      ChartModule.createComparisonRadar('comparison-chart', this.state.selectedForComparison);
    } else {
      this.elements.comparisonChartContainer.hidden = true;
      ChartModule.destroyChart('comparison-chart');
    }
  },

  // Clear all from comparison
  clearComparison() {
    this.state.selectedForComparison = [];
    this.saveState();
    this.render();
    this.updateComparisonPanel();
    this.showToast('Comparison cleared');
  },

  // Toggle comparison panel expanded/collapsed
  toggleComparisonPanel() {
    this.elements.comparisonPanel.classList.toggle('expanded');
    const isExpanded = this.elements.comparisonPanel.classList.contains('expanded');
    this.elements.comparisonToggle.setAttribute('aria-expanded', isExpanded);
  },

  // Open detail modal
  openDetailModal(filament) {
    const content = this.renderDetailContent(filament);
    this.elements.modalContent.innerHTML = content;
    this.elements.modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';

    // Initialize the full radar chart
    setTimeout(() => {
      ChartModule.createFullRadar('detail-chart', filament);
    }, 100);
  },

  // Render detail modal content
  renderDetailContent(filament) {
    const difficultyLabel = DIFFICULTY_LABELS[filament.difficulty] || filament.difficulty;
    const costSymbol = COST_LABELS[filament.cost.category] || '$';

    const prosHtml = filament.pros.map(pro => `<li>${pro}</li>`).join('');
    const consHtml = filament.cons.map(con => `<li>${con}</li>`).join('');
    const useCasesHtml = filament.useCases.map(uc => `<span class="use-case-tag">${uc}</span>`).join('');

    // Requirements list
    const requirements = [];
    if (filament.requirements.enclosure) requirements.push('Enclosure Required');
    if (filament.requirements.hardenedNozzle) requirements.push('Hardened Nozzle Required');
    if (filament.requirements.dryingRequired) requirements.push('Drying Required');
    if (filament.requirements.ventilation) requirements.push('Ventilation Recommended');
    if (filament.requirements.directDrive) requirements.push('Direct Drive Preferred');

    return `
      <div class="detail-header">
        <span class="detail-badge card-badge ${filament.category}" style="background-color: ${filament.color}">${filament.category}</span>
        <div>
          <h2 class="detail-title">${filament.name}</h2>
          <p class="detail-subtitle">${filament.fullName}</p>
        </div>
      </div>

      <p class="detail-description">${filament.description}</p>

      <div class="detail-grid">
        <div class="detail-section">
          <h4 class="detail-section-title">Properties</h4>
          <div class="detail-chart">
            <canvas id="detail-chart"></canvas>
          </div>
        </div>

        <div class="detail-section">
          <h4 class="detail-section-title">Print Settings</h4>
          <table class="settings-table">
            <tr>
              <th>Nozzle Temperature</th>
              <td>${filament.temperatures.nozzle.min}-${filament.temperatures.nozzle.max}°C (rec: ${filament.temperatures.nozzle.recommended}°C)</td>
            </tr>
            <tr>
              <th>Bed Temperature</th>
              <td>${filament.temperatures.bed.min}-${filament.temperatures.bed.max}°C (rec: ${filament.temperatures.bed.recommended}°C)</td>
            </tr>
            <tr>
              <th>Difficulty</th>
              <td>${difficultyLabel}</td>
            </tr>
            <tr>
              <th>Price Range</th>
              <td>${costSymbol} ($${filament.cost.min}-${filament.cost.max}/kg)</td>
            </tr>
            <tr>
              <th>Food Safe</th>
              <td>${filament.foodSafe ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <th>Biodegradable</th>
              <td>${filament.biodegradable ? 'Yes' : 'No'}</td>
            </tr>
          </table>
        </div>
      </div>

      ${requirements.length > 0 ? `
        <div class="detail-section">
          <h4 class="detail-section-title">Special Requirements</h4>
          <div class="use-cases">
            ${requirements.map(req => `<span class="use-case-tag">${req}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <div class="detail-section">
        <h4 class="detail-section-title">Pros & Cons</h4>
        <div class="pros-cons">
          <ul class="pros-list">${prosHtml}</ul>
          <ul class="cons-list">${consHtml}</ul>
        </div>
      </div>

      <div class="detail-section">
        <h4 class="detail-section-title">Common Use Cases</h4>
        <div class="use-cases">${useCasesHtml}</div>
      </div>
    `;
  },

  // Close detail modal
  closeDetailModal() {
    this.elements.modalOverlay.hidden = true;
    document.body.style.overflow = '';
    ChartModule.destroyChart('detail-chart');
  },

  // Open comparison modal
  openComparisonModal() {
    if (this.state.selectedForComparison.length < 2) return;

    const content = this.renderComparisonContent();
    this.elements.comparisonModalContent.innerHTML = content;
    this.elements.comparisonModalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';

    // Initialize the comparison chart
    setTimeout(() => {
      ChartModule.createComparisonRadar('full-comparison-chart', this.state.selectedForComparison);
    }, 100);
  },

  // Render comparison modal content
  renderComparisonContent() {
    const filaments = this.state.selectedForComparison;
    const properties = Object.keys(filaments[0].ratings);

    // Create header row
    const headerCells = filaments.map(f => `
      <th style="background-color: ${ChartModule.hexToRgba(f.color, 0.1)}; border-bottom: 3px solid ${f.color}">
        ${f.name}
      </th>
    `).join('');

    // Create comparison rows
    const rows = properties.map(prop => {
      const label = PROPERTY_LABELS[prop] || prop;
      const values = filaments.map(f => f.ratings[prop]);
      const maxValue = Math.max(...values);

      const cells = filaments.map((f, i) => {
        const isWinner = values[i] === maxValue && values.filter(v => v === maxValue).length === 1;
        return `<td class="${isWinner ? 'winner' : ''}">${values[i]}/10</td>`;
      }).join('');

      return `<tr><td>${label}</td>${cells}</tr>`;
    }).join('');

    // Settings comparison
    const settingsRows = [
      {
        label: 'Nozzle Temp',
        getValue: f => `${f.temperatures.nozzle.min}-${f.temperatures.nozzle.max}°C`
      },
      {
        label: 'Bed Temp',
        getValue: f => `${f.temperatures.bed.min}-${f.temperatures.bed.max}°C`
      },
      {
        label: 'Difficulty',
        getValue: f => DIFFICULTY_LABELS[f.difficulty]
      },
      {
        label: 'Enclosure',
        getValue: f => f.requirements.enclosure ? 'Required' : 'Not needed'
      },
      {
        label: 'Food Safe',
        getValue: f => f.foodSafe ? 'Yes' : 'No'
      }
    ];

    const settingsHtml = settingsRows.map(row => {
      const cells = filaments.map(f => `<td>${row.getValue(f)}</td>`).join('');
      return `<tr><td>${row.label}</td>${cells}</tr>`;
    }).join('');

    return `
      <div class="comparison-modal-header">
        <h2 class="comparison-modal-title">Filament Comparison</h2>
      </div>

      <div class="comparison-full-chart">
        <canvas id="full-comparison-chart"></canvas>
      </div>

      <h3 class="detail-section-title">Property Comparison</h3>
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Property</th>
              ${headerCells}
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>

      <h3 class="detail-section-title" style="margin-top: 2rem;">Print Settings</h3>
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Setting</th>
              ${headerCells}
            </tr>
          </thead>
          <tbody>
            ${settingsHtml}
          </tbody>
        </table>
      </div>
    `;
  },

  // Close comparison modal
  closeComparisonModal() {
    this.elements.comparisonModalOverlay.hidden = true;
    document.body.style.overflow = '';
    ChartModule.destroyChart('full-comparison-chart');
  },

  // Close all modals
  closeAllModals() {
    this.closeDetailModal();
    this.closeComparisonModal();
  },

  // Open filter sidebar (mobile)
  openFilterSidebar() {
    this.elements.filterSidebar.classList.add('open');
    this.elements.filterOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  // Close filter sidebar
  closeFilterSidebar() {
    this.elements.filterSidebar.classList.remove('open');
    this.elements.filterOverlay.classList.remove('active');
    document.body.style.overflow = '';
  },

  // Reset all filters
  resetFilters() {
    // Reset categories
    document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked = true);
    this.state.activeFilters.categories = ['standard', 'engineering', 'flexible', 'composite', 'support', 'specialty'];

    // Reset difficulty
    document.querySelectorAll('.filter-btn[data-difficulty]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.difficulty === 'all');
    });
    this.state.activeFilters.difficulty = 'all';

    // Reset temperature
    if (this.elements.tempMinInput) {
      this.elements.tempMinInput.value = 180;
      this.elements.tempMaxInput.value = 310;
      this.elements.tempMinValue.textContent = '180°C';
      this.elements.tempMaxValue.textContent = '310°C';
    }
    this.state.activeFilters.tempMin = 180;
    this.state.activeFilters.tempMax = 310;

    // Reset requirements
    document.querySelectorAll('input[name="requirement"]').forEach(cb => cb.checked = false);
    this.state.activeFilters.requirements = [];

    // Reset property sliders
    if (this.elements.strengthSlider) {
      this.elements.strengthSlider.value = 1;
      this.elements.strengthValue.textContent = '1';
    }
    if (this.elements.heatSlider) {
      this.elements.heatSlider.value = 1;
      this.elements.heatValue.textContent = '1';
    }
    if (this.elements.easeSlider) {
      this.elements.easeSlider.value = 1;
      this.elements.easeValue.textContent = '1';
    }
    this.state.activeFilters.minStrength = 1;
    this.state.activeFilters.minHeat = 1;
    this.state.activeFilters.minEase = 1;

    // Reset search
    this.elements.searchInput.value = '';
    this.state.searchQuery = '';

    this.applyFilters();
    this.render();
  },

  // Toggle dark/light theme
  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.state.theme);
    this.saveState();

    // Update chart colors
    ChartModule.updateTheme();

    // Re-render charts with new colors
    this.state.filteredFilaments.forEach(filament => {
      ChartModule.createMiniRadar(`chart-${filament.id}`, filament);
    });

    if (this.state.selectedForComparison.length >= 2) {
      ChartModule.createComparisonRadar('comparison-chart', this.state.selectedForComparison);
    }
  },

  // Show toast notification
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-message">${message}</span>`;

    this.elements.toastContainer.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-out forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Utility: Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
