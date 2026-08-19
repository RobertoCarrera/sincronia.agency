export const locales = ['es', 'ca', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
};

export const localeHtmlLang: Record<Locale, string> = {
  es: 'es-ES',
  ca: 'ca-ES',
  en: 'en',
};

export const localeOgLocale: Record<Locale, string> = {
  es: 'es_ES',
  ca: 'ca_ES',
  en: 'en_US',
};
