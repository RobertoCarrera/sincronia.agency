// Sincroniza reseñas de Google Places en src/data/google-reviews.json.
// Se ejecuta antes de `astro build` (ver scripts.build en package.json).
//
// En Cloudflare Pages las env vars GOOGLE_PLACES_API_KEY y GOOGLE_PLACE_ID
// están configuradas en Settings > Environment variables. En local, si no
// existen, escribe un placeholder vacío (no rompe el build).
//
// Output: src/data/google-reviews.json con estructura:
//   { fetchedAt, place: {name, rating, totalRatings, address, mapsUrl},
//     reviews: [{author, rating, text, time, relativeTime}, ...] }
//
// Notas:
// - Google Places API solo devuelve 5 reseñas en una sola llamada
//   (algoritmo propio: "most relevant" o "most recent" según reviews_sort).
//   Por eso fijamos a 5 y no usamos variable de count.
// - Las reseñas se truncan a 200 chars por Google (límite del JSON de Places).
// - Coste: ~$0.017 por llamada. Con 1 fetch al día son ~$0.50/mes.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'src', 'data', 'google-reviews.json');

const KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE = process.env.GOOGLE_PLACE_ID;
const LANG = process.env.GOOGLE_LANG ?? 'es';

const PLACEHOLDER = {
  fetchedAt: new Date(0).toISOString(),
  place: {
    name: 'Sincronia Agency',
    rating: 0,
    totalRatings: 0,
    address: '',
    mapsUrl: 'https://maps.app.goo.gl/qDuyVJGvNpvBT2u99',
  },
  reviews: [],
};

async function main() {
  if (!KEY || !PLACE) {
    console.log('[fetch-reviews] Sin GOOGLE_PLACES_API_KEY/PLACE_ID — escribiendo placeholder');
    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, JSON.stringify(PLACEHOLDER, null, 2));
    return;
  }

  // reviews_sort=newest devuelve las 5 más recientes.
  // Alternativa: reviews_sort=most_relevant (default de Google).
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE}&fields=name,rating,user_ratings_total,reviews,formatted_address,url&language=${LANG}&reviews_sort=newest&key=${KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Place Details HTTP ${res.status}`);
  }
  const json = await res.json();
  if (json.status !== 'OK') {
    throw new Error(`Place Details API ${json.status}: ${json.error_message ?? ''}`);
  }

  const data = {
    fetchedAt: new Date().toISOString(),
    place: {
      name: json.result.name,
      rating: json.result.rating,
      totalRatings: json.result.user_ratings_total,
      address: json.result.formatted_address,
      mapsUrl: json.result.url,
    },
    reviews: (json.result.reviews ?? []).map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.time,
      relativeTime: r.relative_time_description,
    })),
  };

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(`[fetch-reviews] ${data.reviews.length} reseñas — rating ${data.place.rating} (${data.place.totalRatings} totales)`);
}

main().catch((e) => {
  console.error('[fetch-reviews] ERROR:', e.message);
  // No rompemos el build: escribimos placeholder para que el sitio siga online.
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(PLACEHOLDER, null, 2));
  process.exit(0);
});
