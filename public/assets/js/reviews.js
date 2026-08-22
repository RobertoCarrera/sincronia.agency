// reviews.js — Google Places reviews, render + rotación.
// Réplica exacta del approach de mueveme.es / gaticidad.es.
// Fetch directo a Places API (New) v1, sin SDK (el SDK rompe el parseo
// en algunas versiones). FieldMask obligatorio (sin él, cobran más y
// la respuesta pesa más).
(function () {
  'use strict';

  var CFG = window.SITIO_CONFIG || {};
  var KEY = CFG.GOOGLE_MAPS_API_KEY;
  var PLACE = CFG.GOOGLE_PLACE_ID;
  var params = new URLSearchParams(window.location.search);
  var MOCK = params.has('mock') || params.has('mock=reviews');
  var ROTATE_MS = 5000;
  var VISIBLE = 2;

  // ---------- Datos de mock (solo ?mock=1) ----------
  var MOCK_DATA = {
    displayName: { text: 'Sincronia Agency' },
    rating: 5.0,
    userRatingCount: 8,
    reviews: [
      { authorAttribution: { displayName: 'Carlos G.', photoUri: '', uri: '#' },
        rating: 5, text: { text: 'Servicio impecable, resolvieron una urgencia el mismo día. Muy recomendables.' } },
      { authorAttribution: { displayName: 'María L.', photoUri: '', uri: '#' },
        rating: 5, text: { text: 'Web rápida, bien posicionada y con mantenimiento impecable. Cero sustos.' } },
      { authorAttribution: { displayName: 'Jordi P.', photoUri: '', uri: '#' },
        rating: 5, text: { text: 'Migración de hosting sin downtime y mejoras SEO claras a los 2 meses.' } },
      { authorAttribution: { displayName: 'Anna R.', photoUri: '', uri: '#' },
        rating: 5, text: { text: 'Atención al detalle brutal. Diseñaron algo que convierte, no solo que es bonito.' } },
    ],
  };

  // ---------- DOM helpers ----------
  function $(sel) { return document.querySelector(sel); }
  function starsSvg(size) {
    // Inline width/height porque el CSS del componente está scoped por Astro
    // y el HTML inyectado via innerHTML no lleva data-astro-cid, así que las
    // reglas .review__stars svg { width: 14px } no se aplican. El SVG sin
    // width/height toma el default 300x150, que es lo que se ve enorme.
    var s = size || 14;
    return '<svg viewBox="0 0 20 20" width="' + s + '" height="' + s + '" fill="currentColor" aria-hidden="true"><path d="M10 1l2.928 6.343 6.572.95-4.75 4.628 1.121 6.534L10 16.85l-5.871 2.65 1.121-6.534L0.5 8.293l6.572-.95z"/></svg>';
  }
  function buildStars(n, size) {
    var s = '';
    for (var i = 0; i < 5; i++) s += starsSvg(size);
    return s;
  }
  function buildSkeleton() {
    return [
      '<article class="review review--skeleton" aria-hidden="true">',
        '<div class="review__head"><div class="review__avatar sk"></div><div><span class="sk sk-line sk-line--xs"></span></div></div>',
        '<span class="sk sk-line sk-line--lg"></span>',
        '<span class="sk sk-line sk-line--md"></span>',
        '<span class="sk sk-line sk-line--sm"></span>',
      '</article>'
    ].join('');
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c];
    });
  }
  function initial(name) {
    return (name || '?').trim().charAt(0).toUpperCase() || '?';
  }

  // ---------- Error / hide ----------
  function showError() {
    var grid = $('[data-reviews-grid]');
    if (grid) {
      grid.classList.add('reviews-grid--empty');
      grid.innerHTML = '';
    }
    var err = $('[data-reviews-error]');
    if (err) err.hidden = false;
    var count = $('[data-reviews-count]');
    if (count) count.textContent = 'Reseñas no disponibles';
  }

  // ---------- Render ----------
  function setScore(place) {
    var scoreEl = $('[data-reviews-score]');
    var starsEl = $('[data-reviews-stars]');
    var summaryEl = $('[data-reviews-summary]');
    var linkEl = $('[data-reviews-link]');
    var countEl = $('[data-reviews-count]');
    var rating = place.rating;
    var count = place.userRatingCount;
    if (scoreEl) scoreEl.textContent = rating != null ? rating.toFixed(1) : '–';
    if (starsEl) {
      starsEl.setAttribute('role', 'img');
      starsEl.setAttribute('aria-label', (rating || 0) + ' estrellas sobre 5');
      starsEl.innerHTML = buildStars(Math.round(rating || 0), 18);
    }
    if (summaryEl) summaryEl.textContent = 'Verificado por Google · ' + (count || 0) + ' opiniones';
    if (linkEl) linkEl.href = 'https://search.google.com/local/reviews?placeid=' + encodeURIComponent(PLACE || '');
    if (countEl) countEl.textContent = (count || 0) + ' reseñas verificadas de Google';
  }

  function renderCard(r) {
    var author = (r.authorAttribution && r.authorAttribution.displayName) || 'Anónimo';
    var authorUri = (r.authorAttribution && r.authorAttribution.uri) || '#';
    var photo = r.authorAttribution && r.authorAttribution.photoUri;
    var text = (r.text && r.text.text) || '';
    var stars = Math.max(0, Math.min(5, Math.round(r.rating || 0)));
    var head = photo
      ? '<img class="review__photo" src="' + escapeHtml(photo) + '" alt="" loading="lazy" width="44" height="44" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;" />'
      : '<div class="review__avatar" aria-hidden="true" style="width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#1B3A6B 0%,#FF7A4D 100%);color:#fff;font-weight:700;flex-shrink:0;">' + escapeHtml(initial(author)) + '</div>';
    return [
      '<article class="review">',
        '<div class="review__head">',
          head,
          '<div>',
            '<p class="review__name">' + escapeHtml(author) + '</p>',
            '<p class="review__stars" role="img" aria-label="' + stars + ' estrellas sobre 5">' + buildStars(stars, 14) + '</p>',
          '</div>',
        '</div>',
        '<p class="review__text">' + escapeHtml(text) + '</p>',
        '<p class="review__src">Google · <a href="' + escapeHtml(authorUri) + '" target="_blank" rel="noopener">Ver perfil</a></p>',
      '</article>'
    ].join('');
  }

  // ---------- Rotación ----------
  var rotationTimer = null;
  var currentStart = 0;
  var reviews = [];

  function renderVisible() {
    var grid = $('[data-reviews-grid]');
    if (!grid) return;
    var slice = reviews.slice(currentStart, currentStart + VISIBLE);
    grid.classList.add('reviews-grid--fading');
    setTimeout(function () {
      grid.innerHTML = slice.map(renderCard).join('');
      grid.classList.remove('reviews-grid--fading', 'reviews-grid--loading', 'reviews-grid--empty');
    }, 350);
  }

  function startRotation() {
    if (rotationTimer || reviews.length <= VISIBLE) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var grid = $('[data-reviews-grid]');
    if (!grid) return;
    grid.addEventListener('mouseenter', function () { if (rotationTimer) { clearInterval(rotationTimer); rotationTimer = null; } });
    grid.addEventListener('mouseleave', function () { if (!rotationTimer) startRotation(); });
    rotationTimer = setInterval(function () {
      currentStart = (currentStart + 1) % reviews.length;
      renderVisible();
    }, ROTATE_MS);
  }

  // ---------- Init ----------
  function init() {
    var grid = $('[data-reviews-grid]');
    if (grid) grid.innerHTML = buildSkeleton() + buildSkeleton();

    var dataPromise;
    if (MOCK) {
      dataPromise = Promise.resolve(MOCK_DATA);
    } else if (!KEY || !PLACE) {
      // Sin key configurada: ocultamos la sección entera, no pintamos nada falso.
      showError();
      return;
    } else {
      var url = 'https://places.googleapis.com/v1/places/' + encodeURIComponent(PLACE)
        + '?fields=displayName,rating,userRatingCount,reviews&languageCode=es';
      dataPromise = fetch(url, {
        headers: { 'X-Goog-Api-Key': KEY, 'Accept': 'application/json' }
      })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then(function (j) {
          if (!j.displayName) throw new Error('Empty place');
          return j;
        });
    }

    dataPromise
      .then(function (place) {
        setScore(place);
        reviews = (place.reviews || []).slice();
        if (reviews.length === 0) {
          showError();
          return;
        }
        renderVisible();
        startRotation();
      })
      .catch(function (e) {
        console.warn('[reviews] fetch failed:', e);
        showError();
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
