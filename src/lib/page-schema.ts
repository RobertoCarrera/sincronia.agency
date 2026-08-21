// Genera el schema BreadcrumbList para una página.
// Recibe una lista de items {name, href} y devuelve el schema listo para JSON-LD.

import type { Locale } from '~/i18n/locales';
import { localeHtmlLang } from '~/i18n/locales';

export interface Crumb {
  name: string;
  href: string;
}

const labels: Record<Locale, Record<string, string>> = {
  es: { home: 'Inicio', services: 'Servicios', products: 'Productos', about: 'Sobre nosotros', contact: 'Contacto', hosting: 'Hosting', plugins: 'Plugins premium' },
  ca: { home: 'Inici', services: 'Serveis', products: 'Productes', about: 'Sobre nosaltres', contact: 'Contacte', hosting: 'Hosting', plugins: 'Plugins premium' },
  en: { home: 'Home', services: 'Services', products: 'Products', about: 'About us', contact: 'Contact', hosting: 'Hosting', plugins: 'Premium plugins' },
};

export function breadcrumbJsonLd(crumbs: Crumb[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.href,
    })),
  };
}

export function commonCrumb(locale: Locale, key: keyof typeof labels['es']): string {
  return labels[locale][key] ?? labels.es[key];
}
