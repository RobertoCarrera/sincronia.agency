/**
 * Mapeo de rutas → OG images en R2.
 *
 * Hay 12 OG images por idioma (es/ca/en) = 36 PNGs. Si una ruta no está en el
 * mapa, se usa el og-home del idioma correspondiente como fallback.
 *
 * Los archivos viven en R2 bucket `sincronia-media` (custom domain
 * `media.sincronia.agency`). El helper `assetUrl` se encarga del prefijo.
 *
 * Uso:
 *   import { getOgImage } from '~/lib/og';
 *   <meta property="og:image" content={getOgImage('/productos/simplifica', 'es')} />
 */

import { assetUrl } from '~/lib/assets';

/**
 * Conceptos disponibles (uno por archivo PNG). Las claves son rutas lógicas
 * de la web, los valores son el slug del archivo PNG (sin locale ni extension).
 *
 * Si añades un OG image nuevo:
 *   1. Sube el PNG a public/og/{es,ca,en}/og-{slug}.png
 *   2. Sube el script dev-notes-upload-r2.mjs (los sube a R2)
 *   3. Añade la entrada aquí
 */
const OG_MAP: Record<string, string> = {
  '/': 'og-home',
  '/servicios': 'og-services',
  '/productos': 'og-products',
  '/mantenimiento-wordpress': 'og-mantenimiento-wordpress',
  '/desarrollo-wordpress': 'og-desarrollo-wordpress',
  '/aplicaciones-web': 'og-aplicaciones-web',
  '/seo-local': 'og-seo-local',
  '/hosting-wordpress': 'og-hosting-wordpress',
  '/plugins-premium': 'og-plugins-premium',
  '/productos/simplifica': 'og-simplifica-crm',
  '/productos/strata': 'og-strata-cms',
  '/sobre-nosotros': 'og-sobre-nosotros',
  // Aliases (algunas rutas tienen OG dedicados pero también caen en productos/<slug>)
  '/contacto/simplifica': 'og-simplifica-crm',
  '/contacto/strata': 'og-strata-cms',
};

const FALLBACK = 'og-home';

/**
 * Devuelve la URL absoluta del OG image para una ruta + locale.
 * Si la ruta no está en OG_MAP, usa el og-home del idioma.
 */
export function getOgImage(pathname: string, locale: 'es' | 'ca' | 'en'): string {
  // Normalizar: quitar trailing slash, lowercase
  const normalized = pathname.replace(/\/$/, '') || '/';
  const slug = OG_MAP[normalized] ?? FALLBACK;
  return assetUrl(`/og/${locale}/${slug}.png`);
}
