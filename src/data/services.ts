import type { Locale } from '~/i18n/locales';

export interface ServiceMeta {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  priceFrom: number;
  priceUnit: 'mes' | 'proyecto';
  shortDescription: Record<Locale, string>;
}

export const services: ServiceMeta[] = [
  {
    slug: 'mantenimiento-wordpress',
    title: 'Mantenimiento WordPress',
    shortTitle: 'Mantenimiento WP',
    icon: 'shield-check',
    priceFrom: 39,
    priceUnit: 'mes',
    shortDescription: {
      es: 'Tu web actualizada, segura, rápida y monitorizada 24/7.',
      ca: 'El teu web actualitzat, segur, ràpid i monitoritzat 24/7.',
      en: 'Your site updated, secure, fast and monitored 24/7.',
    },
  },
  {
    slug: 'desarrollo-wordpress',
    title: 'Desarrollo WordPress',
    shortTitle: 'Desarrollo WP',
    icon: 'layout-template',
    priceFrom: 890,
    priceUnit: 'proyecto',
    shortDescription: {
      es: 'Webs a medida: desde landings hasta e-commerce completo.',
      ca: 'Llocs web a mida: des de landings fins a e-commerce complet.',
      en: 'Custom WordPress sites: from landings to full e-commerce.',
    },
  },
  {
    slug: 'desarrollo-aplicaciones-web',
    title: 'Aplicaciones web',
    shortTitle: 'Apps web',
    icon: 'code-2',
    priceFrom: 2400,
    priceUnit: 'proyecto',
    shortDescription: {
      es: 'SPAs, dashboards, plataformas SaaS con Angular, React o Vue.',
      ca: 'SPAs, dashboards, plataformes SaaS amb Angular, React o Vue.',
      en: 'SPAs, dashboards, SaaS platforms with Angular, React or Vue.',
    },
  },
  {
    slug: 'posicionamiento-seo',
    title: 'Posicionamiento SEO',
    shortTitle: 'SEO',
    icon: 'trending-up',
    priceFrom: 290,
    priceUnit: 'mes',
    shortDescription: {
      es: 'SEO técnico, contenido y link building local en Tarragona.',
      ca: 'SEO tècnic, contingut i link building local a Tarragona.',
      en: 'Technical SEO, content and local link building in Tarragona.',
    },
  },
  {
    slug: 'hosting',
    title: 'Hosting especializado',
    shortTitle: 'Hosting',
    icon: 'server',
    priceFrom: 20,
    priceUnit: 'mes',
    shortDescription: {
      es: 'Optimizado para WordPress y apps web. Soporte en español.',
      ca: 'Optimitzat per a WordPress i apps web. Suport en espanyol.',
      en: 'Optimised for WordPress and web apps. Support in Spanish.',
    },
  },
];
