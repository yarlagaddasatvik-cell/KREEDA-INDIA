/* ==========================================================================
   KREEDA INDIA - MASTER JAVASCRIPT CONTROLLER
   ========================================================================== */

(function () {
  'use strict';

  // Global App State
  const AppState = {
    cart: [],
    theme: localStorage.getItem('kreeda-theme') || 'dark',
    contrast: localStorage.getItem('kreeda-contrast') || 'normal',
    soundEnabled: true
  };

  // Web Audio Synthesizer for Crisp Athletic Micro-SFX (Zero external mp3 assets needed)
  const AudioFX = {
    ctx: null,
    init() {
      if (!this.ctx && typeof window.AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    },
    playClick() {
      if (!AppState.soundEnabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {
        // Audio fallback ignore
      }
    },
    playWhistle() {
      if (!AppState.soundEnabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(2200, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(2600, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
      } catch (e) {
        // Audio fallback ignore
      }
    }
  };

  // Toast Notification System
  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <span style="font-size: 1.2rem;">${type === 'success' ? '🏆' : 'ℹ️'}</span>
      <div>${message}</div>
    `;

    container.appendChild(toast);
    AudioFX.playClick();

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
  window.showToast = showToast;

  // Initialize Core Features on DOM Load
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndNav();
    initThemeAndAccessibility();
    initLiveTicker();
    initSportsSection();
    initScoreboards();
    initAthletesWall();
    initStadiumFinder();
    initSchemes();
    initMerchStore();
    initSearchPalette();
    initModals();
  });

  /* --------------------------------------------------------------------------
     1. Header, Navigation & Scroll Effects
     -------------------------------------------------------------------------- */
  function initHeaderAndNav() {
    const header = document.querySelector('.header-main');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });

    mobileBtn?.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      AudioFX.playClick();
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. Theme & Accessibility Settings
     -------------------------------------------------------------------------- */
  function initThemeAndAccessibility() {
    const themeBtn = document.getElementById('btn-theme-toggle');
    const contrastBtn = document.getElementById('btn-contrast-toggle');

    // Apply stored theme
    document.documentElement.setAttribute('data-theme', AppState.theme);
    document.documentElement.setAttribute('data-contrast', AppState.contrast);

    themeBtn?.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', AppState.theme);
      localStorage.setItem('kreeda-theme', AppState.theme);
      if (themeBtn) themeBtn.textContent = AppState.theme === 'dark' ? '🌙' : '☀️';
      AudioFX.playClick();
      showToast(`Switched to ${AppState.theme.toUpperCase()} theme`);
    });

    contrastBtn?.addEventListener('click', () => {
      AppState.contrast = AppState.contrast === 'normal' ? 'high' : 'normal';
      document.documentElement.setAttribute('data-contrast', AppState.contrast);
      localStorage.setItem('kreeda-contrast', AppState.contrast);
      AudioFX.playClick();
      showToast(`High Contrast mode: ${AppState.contrast === 'high' ? 'ON' : 'OFF'}`);
    });
  }

  /* --------------------------------------------------------------------------
     3. Live Sports Ticker & Live Score Simulator
     -------------------------------------------------------------------------- */
  function initLiveTicker() {
    const tickerTrack = document.getElementById('live-ticker-track');
    if (!tickerTrack || !window.KREEDA_DATA) return;

    const data = window.KREEDA_DATA.liveScores;
    // Duplicate dataset for smooth infinite scrolling
    const fullList = [...data, ...data];

    tickerTrack.innerHTML = fullList.map(item => `
      <div class="ticker-item" data-id="${item.id}">
        <span class="ticker-sport">${item.sport}</span>
        <span>${item.team1.name} <strong>${item.team1.score}</strong> vs ${item.team2.name} <strong>${item.team2.score}</strong></span>
        <span class="ticker-status">${item.status}</span>
      </div>
    `).join('');

    // Dynamic Live Score Update simulation every 12 seconds
    setInterval(() => {
      const randomIdx = Math.floor(Math.random() * data.length);
      const match = data[randomIdx];
      if (match.sport === 'Kabaddi' && typeof match.team1.score === 'number') {
        match.team1.score += Math.floor(Math.random() * 2) + 1;
        renderScoreboards();
      } else if (match.sport === 'Hockey' && typeof match.team1.score === 'number') {
        if (Math.random() > 0.6) {
          match.team1.score += 1;
          renderScoreboards();
        }
      }
    }, 12000);
  }

  /* --------------------------------------------------------------------------
     4. Sports Showcase & Dynamic Categorization
     -------------------------------------------------------------------------- */
  function initSportsSection() {
    const grid = document.getElementById('sports-grid');
    const tabs = document.querySelectorAll('.filter-tab-btn[data-filter]');

    if (!grid || !window.KREEDA_DATA) return;

    function renderSports(filter = 'all') {
      const sports = window.KREEDA_DATA.sports;
      const filtered = filter === 'all' 
        ? sports 
        : sports.filter(s => s.category === filter || s.category === 'both');

      grid.innerHTML = filtered.map(sport => `
        <div class="sport-card" data-sport-id="${sport.id}">
          <div class="sport-card-top">
            <div class="sport-icon-box">${sport.icon}</div>
            <span class="sport-badge-tag ${sport.category}">
              ${sport.category === 'indigenous' ? '🇮🇳 Indigenous Indian' : sport.category === 'olympic' ? '🥇 Olympic Sport' : '⭐ Dual Status'}
            </span>
          </div>
          <div class="sport-card-body">
            <h3>${sport.name} <span class="sport-hindi-name">(${sport.hindiName})</span></h3>
            <div class="sport-tagline">${sport.tagline}</div>
            <p class="sport-desc">${sport.description}</p>
            <div class="sport-skills-list">
              ${sport.keySkills.slice(0, 4).map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="sport-card-footer">
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">
              ${sport.origin}
            </span>
            <span class="sport-explore-btn">
              Explore Sport →
            </span>
          </div>
        </div>
      `).join('');

      // Attach Click events to open deep-dive modal
      grid.querySelectorAll('.sport-card').forEach(card => {
        card.addEventListener('click', () => {
          const sportId = card.getAttribute('data-sport-id');
          openSportModal(sportId);
        });
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        AudioFX.playClick();
        renderSports(filter);
      });
    });

    renderSports('all');
  }

  function openSportModal(sportId) {
    const sport = window.KREEDA_DATA.sports.find(s => s.id === sportId);
    if (!sport) return;

    const modal = document.getElementById('sport-detail-modal');
    const content = document.getElementById('sport-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="padding: 30px;">
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
          <div style="font-size: 3rem; width: 70px; height: 70px; border-radius: 18px; background: rgba(255, 103, 31, 0.15); display: flex; align-items: center; justify-content: center; border: 1px solid var(--saffron-primary);">
            ${sport.icon}
          </div>
          <div>
            <h2 style="font-size: 1.8rem;">${sport.name} <span style="font-size: 1.1rem; color: var(--text-muted);">(${sport.hindiName})</span></h2>
            <p style="color: var(--saffron-light); font-weight: 700; font-size: 0.95rem;">${sport.tagline}</p>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px; border-left: 4px solid var(--electric-cyan);">
          <h4 style="font-size: 0.85rem; color: var(--electric-cyan); text-transform: uppercase; margin-bottom: 6px;">Governing Body & Heritage</h4>
          <p style="font-size: 0.9rem; color: #FFFFFF; font-weight: 600;">${sport.governingBody}</p>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 4px;">Origin: ${sport.origin}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 1rem; color: #FFFFFF; margin-bottom: 8px;">Official Rules Brief</h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${sport.rulesBrief}</p>
        </div>

        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 1rem; color: #FFFFFF; margin-bottom: 10px;">Prominent National Champions</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${sport.champions.map(c => `
              <span style="font-size: 0.85rem; font-weight: 700; padding: 6px 14px; background: rgba(255, 215, 0, 0.12); color: var(--olympic-gold); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 99px;">
                ⭐ ${c}
              </span>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 1rem; color: #FFFFFF; margin-bottom: 10px;">Key Tournaments</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${sport.tournaments.map(t => `
              <span style="font-size: 0.82rem; padding: 4px 12px; background: rgba(255, 255, 255, 0.05); color: var(--text-primary); border-radius: 6px;">
                🏆 ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 14px; margin-top: 30px;">
          <a href="registration.html" class="btn-primary-glow" style="flex: 1; justify-content: center;">
            Register for ${sport.name} Trials →
          </a>
          <button class="btn-secondary-glass" onclick="document.getElementById('sport-detail-modal').classList.remove('open')">
            Close
          </button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    AudioFX.playClick();
  }

  /* --------------------------------------------------------------------------
     5. Live Match Scoreboards Render
     -------------------------------------------------------------------------- */
  function renderScoreboards() {
    const grid = document.getElementById('scoreboard-grid');
    if (!grid || !window.KREEDA_DATA) return;

    grid.innerHTML = window.KREEDA_DATA.liveScores.map(match => `
      <div class="scoreboard-card">
        <div class="score-top">
          <span class="score-sport-badge">
            <span class="live-dot" style="background: var(--saffron-primary);"></span>
            ${match.sport}
          </span>
          <span class="score-live-indicator">
            <span class="live-dot" style="background: #FF1744;"></span>
            ${match.badge}
          </span>
        </div>
        <div class="score-tournament">${match.tournament}</div>
        <div class="score-matchup">
          <div class="team-box">
            <div class="team-avatar">${match.team1.logo}</div>
            <div class="team-info">
              <h5>${match.team1.name}</h5>
              <span>${match.team1.state}</span>
            </div>
          </div>
          <div class="score-vs-display">
            <div class="score-points">${match.team1.score} - ${match.team2.score}</div>
            <div class="score-status-text">${match.status}</div>
          </div>
          <div class="team-box away">
            <div class="team-info">
              <h5>${match.team2.name}</h5>
              <span>${match.team2.state}</span>
            </div>
            <div class="team-avatar" style="background: linear-gradient(135deg, #b91c1c, #ef4444);">${match.team2.logo}</div>
          </div>
        </div>
        <div class="score-highlight">${match.highlight}</div>
        <div class="score-venue">📍 ${match.venue}</div>
      </div>
    `).join('');
  }

  function initScoreboards() {
    renderScoreboards();
  }

  /* --------------------------------------------------------------------------
     6. Wall of Champions (Athletes)
     -------------------------------------------------------------------------- */
  function initAthletesWall() {
    const grid = document.getElementById('athletes-grid');
    if (!grid || !window.KREEDA_DATA) return;

    grid.innerHTML = window.KREEDA_DATA.athletes.map(athlete => `
      <div class="athlete-card" data-athlete-id="${athlete.id}">
        <div class="athlete-card-banner">
          <span class="athlete-banner-badge">🏅 ${athlete.rank}</span>
          <div class="athlete-avatar-circle" style="background: linear-gradient(135deg, ${athlete.badgeColor}, #000);">
            ${athlete.avatarInitial}
          </div>
        </div>
        <div class="athlete-card-content">
          <h3>${athlete.name}</h3>
          <div class="athlete-sport-tag">${athlete.sport}</div>
          <div class="athlete-accolades">🏆 ${athlete.title}</div>
          <div class="athlete-stats-strip">
            <div class="athlete-stat-mini">
              <h6>State</h6>
              <span>${athlete.state.split(' ')[0]}</span>
            </div>
            <div class="athlete-stat-mini">
              <h6>Record</h6>
              <span>${athlete.personalBest}</span>
            </div>
          </div>
          <button class="athlete-view-btn">
            View Hall of Fame Profile →
          </button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.athlete-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-athlete-id');
        openAthleteModal(id);
      });
    });
  }

  function openAthleteModal(athleteId) {
    const athlete = window.KREEDA_DATA.athletes.find(a => a.id === athleteId);
    if (!athlete) return;

    const modal = document.getElementById('athlete-detail-modal');
    const content = document.getElementById('athlete-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="padding: 30px;">
        <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 24px;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--saffron-primary), var(--olympic-gold)); display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 900; color: white; border: 3px solid #FFF;">
            ${athlete.avatarInitial}
          </div>
          <div>
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--olympic-gold); text-transform: uppercase;">HALL OF FAME SPOTLIGHT</span>
            <h2 style="font-size: 1.8rem; margin: 4px 0;">${athlete.name}</h2>
            <p style="color: var(--electric-cyan); font-weight: 700; font-size: 0.95rem;">${athlete.sport} • ${athlete.state}</p>
          </div>
        </div>

        <blockquote style="padding: 14px 18px; background: rgba(255, 103, 31, 0.1); border-left: 4px solid var(--saffron-primary); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-style: italic; color: #FFFFFF; font-size: 0.95rem; margin-bottom: 24px;">
          "${athlete.quote}"
        </blockquote>

        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 1rem; color: #FFFFFF; margin-bottom: 8px;">Career Biography</h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${athlete.bio}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 1rem; color: #FFFFFF; margin-bottom: 10px;">National & International Medals</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            ${Object.entries(athlete.careerStats).map(([key, val]) => `
              <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.06);">
                <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">${key.replace(/([A-Z])/g, ' $1')}</span>
                <p style="font-size: 0.9rem; font-weight: 700; color: var(--olympic-gold);">${val}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 1rem; color: #FFFFFF; margin-bottom: 8px;">National Honours & Awards</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${athlete.awards.map(a => `<span style="font-size: 0.8rem; padding: 4px 10px; background: rgba(0, 230, 118, 0.12); color: var(--emerald-bright); border-radius: 4px;">🎖️ ${a}</span>`).join('')}
          </div>
        </div>

        <button class="btn-primary-glow" style="width: 100%; justify-content: center;" onclick="document.getElementById('athlete-detail-modal').classList.remove('open')">
          Close Profile
        </button>
      </div>
    `;

    modal.classList.add('open');
    AudioFX.playWhistle();
  }

  /* --------------------------------------------------------------------------
     7. Facilities & Stadium Locator
     -------------------------------------------------------------------------- */
  function initStadiumFinder() {
    const grid = document.getElementById('stadiums-grid');
    const stateSelect = document.getElementById('stadium-state-filter');
    const searchInput = document.getElementById('stadium-search-input');

    if (!grid || !window.KREEDA_DATA) return;

    function renderStadiums() {
      const stateVal = stateSelect?.value || 'all';
      const searchVal = searchInput?.value.toLowerCase().trim() || '';

      const filtered = window.KREEDA_DATA.stadiums.filter(s => {
        const matchesState = stateVal === 'all' || s.state.toLowerCase().includes(stateVal.toLowerCase());
        const matchesSearch = !searchVal || 
          s.name.toLowerCase().includes(searchVal) || 
          s.city.toLowerCase().includes(searchVal) ||
          s.type.toLowerCase().includes(searchVal);
        return matchesState && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No sports complex matches your search filter.</div>`;
        return;
      }

      grid.innerHTML = filtered.map(stadium => `
        <div class="stadium-card">
          <div class="stadium-tag-row">
            <span class="stadium-badge">${stadium.tag}</span>
            <span class="stadium-capacity">Capacity: ${stadium.capacity}</span>
          </div>
          <h3>${stadium.name}</h3>
          <div class="stadium-location">📍 ${stadium.city}, ${stadium.state}</div>
          <div style="font-size: 0.82rem; color: var(--electric-cyan); font-weight: 700; margin-bottom: 14px;">
            ${stadium.type}
          </div>
          <div class="stadium-facilities-list">
            ${stadium.facilities.map(f => `<div class="facility-item">${f}</div>`).join('')}
          </div>
          <div style="padding-top: 14px; border-top: 1px solid var(--glass-border); font-size: 0.75rem; color: var(--text-muted);">
            SAI Accreditation: <strong style="color: var(--emerald-bright);">${stadium.accreditation}</strong>
          </div>
        </div>
      `).join('');
    }

    stateSelect?.addEventListener('change', () => {
      AudioFX.playClick();
      renderStadiums();
    });

    searchInput?.addEventListener('input', renderStadiums);
    renderStadiums();
  }

  /* --------------------------------------------------------------------------
     8. Government Schemes & Financial Grants
     -------------------------------------------------------------------------- */
  function initSchemes() {
    const grid = document.getElementById('schemes-grid');
    if (!grid || !window.KREEDA_DATA) return;

    grid.innerHTML = window.KREEDA_DATA.schemes.map(scheme => `
      <div class="scheme-card">
        <div>
          <div class="scheme-icon-head">${scheme.icon}</div>
          <h3>${scheme.name}</h3>
          <p class="scheme-tagline">${scheme.tagline}</p>
          <div class="scheme-grant-box">
            <div class="grant-label">Financial Assistance & Benefits</div>
            <div class="grant-val">${scheme.grant}</div>
          </div>
        </div>
        <div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px;">
            <strong>Eligibility:</strong> ${scheme.eligibility}
          </div>
          <a href="registration.html" class="btn-secondary-glass" style="width: 100%; justify-content: center; font-size: 0.85rem;">
            Apply Scheme Online →
          </a>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     9. Official Merchandise & Cart Drawer
     -------------------------------------------------------------------------- */
  function initMerchStore() {
    const grid = document.getElementById('store-grid');
    const cartTrigger = document.getElementById('btn-cart-trigger');
    const cartBackdrop = document.getElementById('cart-drawer-backdrop');
    const cartClose = document.getElementById('btn-cart-close');
    const cartCount = document.getElementById('cart-badge-count');
    const cartItemsList = document.getElementById('cart-items-container');
    const cartTotalEl = document.getElementById('cart-subtotal-val');
    const checkoutBtn = document.getElementById('btn-checkout');

    if (!grid || !window.KREEDA_DATA) return;

    grid.innerHTML = window.KREEDA_DATA.merchandise.map(prod => `
      <div class="merch-card">
        <div class="merch-visual">
          <span class="merch-badge">${prod.badge}</span>
          <span>${prod.category === 'Apparel' ? '🎽' : prod.category === 'Equipment' ? '🏑' : prod.category === 'Footwear' ? '👟' : '🎖️'}</span>
        </div>
        <div class="merch-body">
          <div>
            <h4>${prod.name}</h4>
            <div style="font-size: 0.78rem; color: var(--saffron-light); font-weight: 700;">★ ${prod.rating} (${prod.reviews} verified athlete reviews)</div>
            <div class="merch-price-row">
              <span class="price-current">₹${prod.price.toLocaleString('en-IN')}</span>
              <span class="price-strike">₹${prod.originalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <button class="btn-add-cart" data-product-id="${prod.id}">
            Add to Kit 🛒
          </button>
        </div>
      </div>
    `).join('');

    function updateCartUI() {
      if (cartCount) cartCount.textContent = AppState.cart.length;

      if (!cartItemsList) return;

      if (AppState.cart.length === 0) {
        cartItemsList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 0;">Your sports kit is empty.</div>`;
        if (cartTotalEl) cartTotalEl.textContent = '₹0';
        return;
      }

      let total = 0;
      cartItemsList.innerHTML = AppState.cart.map((item, idx) => {
        total += item.price;
        return `
          <div class="cart-item">
            <div>
              <div style="font-size: 0.88rem; font-weight: 700; color: #FFFFFF;">${item.name}</div>
              <div style="font-size: 0.78rem; color: var(--olympic-gold);">₹${item.price.toLocaleString('en-IN')}</div>
            </div>
            <button style="background: transparent; color: #FF1744; font-size: 1.1rem; cursor: pointer;" onclick="window.removeCartItem(${idx})">
              ✕
            </button>
          </div>
        `;
      }).join('');

      if (cartTotalEl) cartTotalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    }

    grid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-product-id');
        const product = window.KREEDA_DATA.merchandise.find(p => p.id === prodId);
        if (product) {
          AppState.cart.push(product);
          updateCartUI();
          AudioFX.playClick();
          showToast(`Added ${product.name} to your kit!`);
          cartBackdrop?.classList.add('open');
        }
      });
    });

    window.removeCartItem = function (idx) {
      AppState.cart.splice(idx, 1);
      updateCartUI();
      AudioFX.playClick();
    };

    cartTrigger?.addEventListener('click', () => {
      cartBackdrop?.classList.add('open');
      AudioFX.playClick();
    });

    cartClose?.addEventListener('click', () => {
      cartBackdrop?.classList.remove('open');
    });

    cartBackdrop?.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) cartBackdrop.classList.remove('open');
    });

    checkoutBtn?.addEventListener('click', () => {
      if (AppState.cart.length === 0) {
        showToast('Your kit is empty. Please add items first!', 'info');
        return;
      }
      showToast('Order placed successfully! Team India kit dispatch simulated.');
      AppState.cart = [];
      updateCartUI();
      cartBackdrop?.classList.remove('open');
    });

    updateCartUI();
  }

  /* --------------------------------------------------------------------------
     10. Quick Command Palette (Ctrl+K Search)
     -------------------------------------------------------------------------- */
  function initSearchPalette() {
    const searchModal = document.getElementById('search-palette-modal');
    const searchInput = document.getElementById('palette-search-input');
    const resultsContainer = document.getElementById('palette-results-list');
    const triggerBtns = document.querySelectorAll('.search-trigger-btn');

    if (!searchModal || !searchInput) return;

    function openSearch() {
      searchModal.classList.add('open');
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
      AudioFX.playClick();
    }

    function closeSearch() {
      searchModal.classList.remove('open');
    }

    triggerBtns.forEach(btn => btn.addEventListener('click', openSearch));

    // Keyboard Shortcut Ctrl+K / Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchModal.classList.contains('open')) {
          closeSearch();
        } else {
          openSearch();
        }
      } else if (e.key === 'Escape') {
        closeSearch();
      }
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });

    function renderSearchResults(query) {
      if (!resultsContainer || !window.KREEDA_DATA) return;
      const q = query.toLowerCase().trim();

      const sports = window.KREEDA_DATA.sports
        .filter(s => !q || s.name.toLowerCase().includes(q) || s.hindiName.includes(q))
        .map(s => ({ title: s.name, sub: `${s.hindiName} • ${s.origin}`, type: 'Sport', id: s.id, action: () => openSportModal(s.id) }));

      const athletes = window.KREEDA_DATA.athletes
        .filter(a => !q || a.name.toLowerCase().includes(q) || a.sport.toLowerCase().includes(q))
        .map(a => ({ title: a.name, sub: `${a.sport} • ${a.state}`, type: 'Athlete', id: a.id, action: () => openAthleteModal(a.id) }));

      const stadiums = window.KREEDA_DATA.stadiums
        .filter(st => !q || st.name.toLowerCase().includes(q) || st.city.toLowerCase().includes(q))
        .map(st => ({ title: st.name, sub: `${st.city}, ${st.state}`, type: 'Facility', id: st.id, action: () => {
          closeSearch();
          window.location.href = '#stadiums';
        }}));

      const all = [...sports, ...athletes, ...stadiums].slice(0, 8);

      if (all.length === 0) {
        resultsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">No results found for "${query}"</div>`;
        return;
      }

      resultsContainer.innerHTML = all.map((item, index) => `
        <div class="search-result-item" data-index="${index}">
          <div class="search-item-left">
            <span class="search-item-badge">${item.type}</span>
            <div>
              <div style="font-weight: 700; color: #FFFFFF;">${item.title}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${item.sub}</div>
            </div>
          </div>
          <span style="color: var(--text-muted); font-size: 0.8rem;">Select ↵</span>
        </div>
      `).join('');

      resultsContainer.querySelectorAll('.search-result-item').forEach((elem, idx) => {
        elem.addEventListener('click', () => {
          all[idx].action();
          closeSearch();
        });
      });
    }

    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  /* --------------------------------------------------------------------------
     11. Generic Modals Controller
     -------------------------------------------------------------------------- */
  function initModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });
    });

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal-backdrop')?.classList.remove('open');
      });
    });
  }

})();
