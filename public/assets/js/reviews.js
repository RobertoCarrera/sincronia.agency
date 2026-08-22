// reviews.js — Google Places reviews, 1 reseña estática grande.
// Réplica del enfoque de mueveme.es pero adaptado a diseño Sincronia.
// Fetch directo a Places API (New) v1, sin SDK.
// Render via textContent (no innerHTML) para que el CSS scoped de Astro
// controle tamaños de estrellas, padding, etc. — no más SVG gigantes.
(function () {
  'use strict';

  var CFG = window.SITIO_CONFIG || {};
  var KEY = CFG.GOOGLE_MAPS_API_KEY;
  var PLACE = CFG.GOOGLE_PLACE_ID;
  var params = new URLSearchParams(window.location.search);
  var MOCK = params.has('mock') || params.has('mock=reviews');

  // ---------- Mock (solo ?mock=1) ----------
  var MOCK_DATA = {
    displayName: { text: 'Sincronia Agency' },
    rating: 5.0,
    userRatingCount: 8,
    reviews: [
      { authorAttribution: { displayName: 'Pia Mill', photoUri: '', uri: 'https://www.google.com/maps/contrib/' },
        rating: 5, text: { text: 'Trabajar con Roberto ha sido una experiencia increíble. Es un profesional excepcional en el desarrollo de webs y una gran capacidad para plasmar exactamente lo que necesitas. Desde el primer momento, entendió mi visión y me ayudó en todos mis proyectos. Además, su comunicación es excelente: siempre está disponible para resolver dudas y hacer mejoras. Si buscas a alguien confiable, creativo y eficiente para tu proyecto web, sin duda, Roberto es la mejor opción. ¡Recomendadísimo! 🚀💻' },
      { authorAttribution: { displayName: 'Alberto Domínguez Jiménez', photoUri: '', uri: 'https://www.google.com/maps/contrib/' },
        rating: 5, text: { text: 'Colaborar con Roberto ha sido, y sigue siendo, una de las mejores decisiones que he tomado en mi trabajo. Es un profesional con muchísimo conocimiento en desarrollo web y SEO, pero lo que realmente marca la diferencia es su cercanía y la atención que pone en cada detalle. Siempre está dispuesto a escuchar, proponer ideas y adaptarse a lo que necesita cada proyecto, haciendo que tanto yo como mis clientes nos sintamos acompañados y en buenas manos. Los resultados hablan por sí solos: webs funcionales, bien posicionadas y que realmente conectan con el público objetivo. Trabajar con él es sinónimo de confianza, compromiso y calidad. Si buscas a alguien resolutivo, con criterio y que además te haga sentir que forma parte de tu equipo, Roberto es esa persona. ¡Encantado de tenerlo como colaborador!' },
      { authorAttribution: { displayName: 'Cliente 3', photoUri: '', uri: '#' },
        rating: 5, text: { text: 'Trabajo impecable y muy profesional. Recomendado sin dudar.' } },
      { authorAttribution: { displayName: 'Cliente 4', photoUri: '', uri: '#' },
        rating: 5, text: { text: 'Súper atento y rápido. Resolvió todo en tiempo récord.' } },
    ],
  };

  // ---------- DOM helpers ----------
  function $(sel) { return document.querySelector(sel); }
  function initial(name) {
    return (name || '?').trim().charAt(0).toUpperCase() || '?';
  }

  // ---------- Estado ----------
  function showSkeleton() {
    var sk = $('[data-reviews-skeleton]');
    var body = $('[data-reviews-body]');
    var err = $('[data-reviews-error]');
    if (sk) sk.hidden = false;
    if (body) body.hidden = true;
    if (err) err.hidden = true;
  }

  function showError() {
    var sk = $('[data-reviews-skeleton]');
    var body = $('[data-reviews-body]');
    var err = $('[data-reviews-error]');
    if (sk) sk.hidden = true;
    if (body) body.hidden = true;
    if (err) err.hidden = false;
  }

  function paintStars(rating) {
    var stars = $('[data-reviews-stars]');
    if (!stars) return;
    var n = Math.round(rating || 0);
    stars.setAttribute('aria-label', n + ' estrellas sobre 5');
    var html = '';
    for (var i = 0; i < 5; i++) html += '<span class="reviews__star' + (i < n ? ' is-on' : '') + '"></span>';
    stars.innerHTML = html;
  }

  function paintReview(place, review) {
    // Header
    var avatar = $('[data-reviews-avatar]');
    var name = $('[data-reviews-name]');
    var time = $('[data-reviews-time]');
    var text = $('[data-reviews-text]');
    var profile = $('[data-reviews-profile]');
    var count = $('[data-reviews-count]');
    var all = $('[data-reviews-all]');

    var author = (review.authorAttribution && review.authorAttribution.displayName) || 'Anónimo';
    var photo = (review.authorAttribution && review.authorAttribution.photoUri) || '';
    var authorUri = (review.authorAttribution && review.authorAttribution.uri) || '#';
    var reviewText = (review.text && review.text.text) || '';
    var when = review.relativePublishTimeDescription || review.relativeTimeDescription || '';

    if (avatar) {
      avatar.innerHTML = '';
      if (photo) {
        var img = document.createElement('img');
        img.src = photo;
        img.alt = '';
        img.loading = 'lazy';
        img.width = 48;
        img.height = 48;
        avatar.appendChild(img);
      } else {
        avatar.textContent = initial(author);
      }
    }
    if (name) name.textContent = author;
    if (time) time.textContent = when;
    if (text) text.textContent = reviewText;
    if (profile) {
      profile.href = authorUri !== '#' ? authorUri : 'https://search.google.com/local/reviews?placeid=' + encodeURIComponent(PLACE || '');
    }
    if (count) count.textContent = (place.userRatingCount || 0) + ' reseñas verificadas de Google';
    if (all) {
      all.textContent = 'Ver las ' + (place.userRatingCount || 0) + ' reseñas en Google →';
      all.href = 'https://search.google.com/local/reviews?placeid=' + encodeURIComponent(PLACE || '');
    }
  }

  function show(place) {
    var reviews = (place.reviews || []).filter(function (r) { return r && r.text && r.text.text; });
    if (reviews.length === 0) {
      showError();
      return;
    }
    paintStars(place.rating);
    // Escogemos la primera (más reciente con reviews_sort=newest).
    paintReview(place, reviews[0]);

    var sk = $('[data-reviews-skeleton]');
    var body = $('[data-reviews-body]');
    if (sk) sk.hidden = true;
    if (body) body.hidden = false;
  }

  // ---------- Init ----------
  function init() {
    showSkeleton();

    if (MOCK) {
      show(MOCK_DATA);
      return;
    }

    if (!KEY || !PLACE) {
      showError();
      return;
    }

    var url = 'https://places.googleapis.com/v1/places/' + encodeURIComponent(PLACE)
      + '?fields=displayName,rating,userRatingCount,reviews&languageCode=es';

    fetch(url, {
      headers: { 'X-Goog-Api-Key': KEY, 'Accept': 'application/json' }
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (j) {
        if (!j.displayName) throw new Error('Empty place response');
        show(j);
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
