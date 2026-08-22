// Cloudflare Pages Function: /api/reviews
// Hace fetch a Google Places API server-side y devuelve las reseñas al cliente.
// La API key NUNCA sale del servidor: vive solo en env vars de Cloudflare Pages,
// y el cliente llama a este endpoint del mismo dominio (mismo origen, sin CORS).
//
// Env vars requeridas (de Cloudflare Pages → Settings → Environment variables):
//   PUBLIC_GOOGLE_PLACES_API_KEY  — API key (la key con restriction por HTTP referrer)
//   PUBLIC_GOOGLE_PLACE_ID        — ChIJ... del negocio en Google Maps
//
// Aunque las env vars tienen el prefijo PUBLIC_ (el mismo que usa Astro para
// exponerlas al cliente), dentro de un Pages Function se leen como
// context.env.PUBLIC_X y NUNCA salen al cliente (solo lo que devuelva la
// response se expone).
//
// Caching: 5 minutos en el edge (Cache-Control: public, max-age=300) para
// no golpear la API de Google con cada visita.
export async function onRequestGet(context) {
  const KEY = context.env.PUBLIC_GOOGLE_PLACES_API_KEY;
  const PLACE = context.env.PUBLIC_GOOGLE_PLACE_ID;

  if (!KEY || !PLACE) {
    return new Response(
      JSON.stringify({ error: 'PUBLIC_GOOGLE_PLACES_API_KEY or PUBLIC_GOOGLE_PLACE_ID not configured' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(PLACE)}&fields=name,rating,user_ratings_total,reviews,formatted_address,url&language=es&reviews_sort=newest&key=${encodeURIComponent(KEY)}`;

  const cache = caches.default;
  const cacheKey = new Request(url, { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) {
    return new Response(cached.body, {
      headers: { ...Object.fromEntries(cached.headers), 'x-cache': 'HIT' },
    });
  }

  const upstream = await fetch(url, { headers: { Referer: 'https://sincronia.agency/' } });
  if (!upstream.ok) {
    return new Response(JSON.stringify({ error: 'Google upstream HTTP ' + upstream.status }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
  const data = await upstream.json();
  if (data.status !== 'OK') {
    return new Response(JSON.stringify({ error: 'Google: ' + data.status, detail: data.error_message }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }

  // Cache 5 min en el edge
  const headers = new Headers({
    'content-type': 'application/json',
    'cache-control': 'public, max-age=300',
    'access-control-allow-origin': '*',
  });
  const body = JSON.stringify({
    place: {
      name: data.result.name,
      rating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
      address: data.result.formatted_address,
      mapsUrl: data.result.url,
    },
    reviews: (data.result.reviews ?? []).map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.time,
      relativeTime: r.relative_time_description,
    })),
  });
  const response = new Response(body, { headers });
  // Store in cache (best-effort, never await)
  context.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}
