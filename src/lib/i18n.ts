import { locales, type Locale, defaultLocale } from '~/i18n/locales';

/** Extrae el locale actual de la URL. */
export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0];
  if ((locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

/** Devuelve la ruta sin el prefijo de locale. */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if ((locales as readonly string[]).includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname || '/';
}

/** Construye una URL localizada para un path y locale dados. */
export function localizePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

/** Construye las URLs alternativas (hreflang) para una ruta dada. */
export function getAlternateLinks(pathname: string): Array<{ lang: string; href: string }> {
  const path = getPathWithoutLocale(pathname);
  return [
    { lang: 'es-ES', href: `https://sincronia.agency${localizePath(path, 'es')}` },
    { lang: 'ca-ES', href: `https://sincronia.agency${localizePath(path, 'ca')}` },
    { lang: 'en', href: `https://sincronia.agency${localizePath(path, 'en')}` },
    { lang: 'x-default', href: `https://sincronia.agency${localizePath(path, 'es')}` },
  ];
}
