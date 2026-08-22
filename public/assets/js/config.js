// config.js — API key y Place ID públicos.
// El navegador del usuario los lee y hace fetch directo a Google Places API.
// ⚠️ SEGURIDAD CRÍTICA — LEE ANTES DE TOCAR:
// 1. La API key DEBE estar restringida en Google Cloud Console:
//    - Application restrictions → "HTTP referrers" → sincronia.agency/*
//    - API restrictions → SOLO "Places API (New)"
// 2. Si la key está abierta o mal restringida, cualquiera puede usarla y
//    Google te factura el uso (Places API New cuesta ~$32 por 1000 calls).
// 3. NUNCA commitear la key real al repo. Roberto tiene la suya en .env
//    y el script `dev-notes-upload-r2.mjs` (u otro) la inyecta en build.
//    Si la subes por error, rótala inmediatamente en Google Cloud.
// 4. La key está en PUBLIC porque esta web es HTML estática y el JS se
//    sirve al cliente. Mueveme.es y gaticidad.es usan el mismo patrón.
//    Con la key bien restringida por dominio, el riesgo es bajo.
window.SITIO_CONFIG = window.SITIO_CONFIG || {
  GOOGLE_MAPS_API_KEY: 'AIzaSyBX1S_X9jhkQZu3qzL5YhkgtimtVBUlKH0',
  GOOGLE_PLACE_ID: 'ChIJMwrnMJFY800Rrsn96EJgBGw',
};
