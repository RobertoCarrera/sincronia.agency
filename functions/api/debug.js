// Endpoint temporal de diagnóstico: devuelve las env vars que la function ve.
// BORRAR después de diagnosticar.
export async function onRequestGet(context) {
  return new Response(
    JSON.stringify({
      envKeys: Object.keys(context.env ?? {}).sort(),
      hasGoogleKey: Boolean(context.env.GOOGLE_PLACES_API_KEY),
      hasGooglePlace: Boolean(context.env.GOOGLE_PLACE_ID),
      hasPublicGoogleKey: Boolean(context.env.PUBLIC_GOOGLE_PLACES_API_KEY),
      hasPublicGooglePlace: Boolean(context.env.PUBLIC_GOOGLE_PLACE_ID),
    }, null, 2),
    { headers: { 'content-type': 'application/json' } }
  );
}
