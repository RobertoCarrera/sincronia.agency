import type { Locale } from '~/i18n/locales';
import { localeHtmlLang, localeOgLocale } from '~/i18n/locales';

export interface SeoProps {
  title: string;
  description: string;
  locale: Locale;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  canonical?: string;
  jsonLd?: object | object[];
}

/** Genera el bloque de meta tags SEO a incluir en el `<head>`. */
export function buildSeoMeta({
  title,
  description,
  locale,
  ogImage = '/og-default.png',
  ogType = 'website',
  noindex = false,
  canonical,
  jsonLd,
}: SeoProps) {
  return {
    title,
    description,
    lang: localeHtmlLang[locale],
    ogLocale: localeOgLocale[locale],
    ogImage: `https://sincronia.agency${ogImage}`,
    ogType,
    noindex,
    canonical: canonical ?? `https://sincronia.agency`,
    jsonLd: jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : undefined,
  };
}
