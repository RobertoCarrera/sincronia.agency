/**
 * Helper de assets — Cloudflare R2
 *
 * Todos los assets binarios del sitio (logos, iconos de producto, OG images,
 * favicons) viven en `https://media.sincronia.agency/` (R2 con custom domain).
 *
 * Para evitar hardcodear la URL en cada componente, este modulo expone
 * `assetUrl()` y `assetSrcset()`. Si en el futuro se cambia de CDN / R2 bucket
 * / custom domain, solo hay que tocar este archivo.
 *
 * Uso:
 *   import { assetUrl, assetSrcset } from '~/lib/assets';
 *   <img src={assetUrl('/productos/simplifica/icon-256.webp')} />
 *   <source srcset={assetSrcset('/productos/simplifica/logo-on-light', [320, 640, 800], 'webp')} />
 */

const R2_BASE = 'https://media.sincronia.agency';

/**
 * Devuelve la URL absoluta de un asset en R2.
 * Acepta paths con o sin slash inicial.
 */
export function assetUrl(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${R2_BASE}/${clean}`;
}

/**
 * Genera un srcset con varios anchos, opcionalmente con extension personalizada.
 * Ej: assetSrcset('/productos/simplifica/icon', [256, 512], 'webp')
 *     -> '/productos/simplifica/icon-256.webp 256w, /productos/simplifica/icon-512.webp 512w'
 */
export function assetSrcset(
  basePath: string,
  widths: number[],
  extension: string = 'webp',
): string {
  return widths
    .map((w) => `${assetUrl(basePath)}-${w}.${extension} ${w}w`)
    .join(', ');
}

/**
 * Exporta la base por si algun componente la necesita directa (raro).
 */
export const R2_BASE_URL = R2_BASE;
