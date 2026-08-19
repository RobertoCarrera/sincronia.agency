import type { Locale } from '~/i18n/locales';

export interface ProductMeta {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  status: 'beta' | 'estable';
  priceFrom: number;
  priceUnit: string;
  shortDescription: Record<Locale, string>;
}

export const products: ProductMeta[] = [
  {
    slug: 'simplifica',
    name: 'Simplifica',
    shortName: 'Simplifica CRM',
    icon: 'users-round',
    status: 'beta',
    priceFrom: 20,
    priceUnit: '/mes hosting',
    shortDescription: {
      es: 'CRM que se adapta a tu sector, no al revés.',
      ca: 'CRM que s\'adapta al teu sector, no a l\'inrevés.',
      en: 'A CRM that adapts to your sector, not the other way round.',
    },
  },
  {
    slug: 'strata',
    name: 'Strata',
    shortName: 'Strata CMS',
    icon: 'layers',
    status: 'beta',
    priceFrom: 20,
    priceUnit: '/mes hosting',
    shortDescription: {
      es: 'CMS con editor visual y asistente IA. Reduce el coste a la mitad.',
      ca: 'CMS amb editor visual i assistent IA. Redueix el cost a la meitat.',
      en: 'CMS with visual editor and AI assistant. Cuts cost in half.',
    },
  },
];
