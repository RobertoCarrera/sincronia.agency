import type { Locale } from '~/i18n/locales';
import type { Tier } from '~/data/products';

export interface ServiceTier extends Tier {
  /** "Ideal para..." / target audience para este tier. Se muestra bajo el nombre. Opcional. */
  target?: string;
}

export interface ServiceMeta {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  /** unidad de precio. Default: "mes". */
  priceUnit?: 'mes' | 'proyecto';
  shortDescription: Record<Locale, string>;
  tiers: ServiceTier[];
  setupNote?: string;
  cta: { label: string; href: string };
  featured?: boolean;
}

export const services: ServiceMeta[] = [
  {
    slug: 'mantenimiento-wordpress',
    title: 'Mantenimiento WordPress',
    shortTitle: 'Mantenimiento WP',
    icon: 'shield-check',
    priceUnit: 'mes',
    shortDescription: {
      es: 'Tu web actualizada, segura, rápida y monitorizada 24/7.',
      ca: 'El teu web actualitzat, segur, ràpid i monitoritzat 24/7.',
      en: 'Your site updated, secure, fast and monitored 24/7.',
    },
    cta: { label: 'Empezar', href: '/contacto' },
    tiers: [
      {
        id: 'basico',
        name: 'Básico',
        price: 35,
        target: 'One Page',
        features: [
          'Updates mensuales',
          'Backups semanales',
          'Uptime monitor',
          'Soporte email 24h o telefónico instantáneo',
        ],
      },
      {
        id: 'estandar',
        name: 'Estándar',
        price: 70,
        target: 'Negocio local · web principal · web sin tráfico crítico',
        highlight: true,
        features: [
          'Updates mensuales',
          'Backups semanales',
          'Soporte email 24h o telefónico instantáneo',
        ],
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 100,
        target: 'Negocio serio · blog personal',
        features: [
          'Updates mensuales',
          'Backups semanales',
          '30 mins/mes de cambios',
          'Soporte email 24h o telefónico instantáneo',
        ],
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce',
        price: 150,
        target: 'Tienda online',
        features: [
          'Updates semanales',
          'Backups diarios',
          '1 h/mes de cambios',
          'Soporte email 24h o telefónico instantáneo',
        ],
      },
    ] as ServiceTier[],
  },
  {
    slug: 'desarrollo-wordpress',
    title: 'Desarrollo WordPress',
    shortTitle: 'Desarrollo WP',
    icon: 'layout-template',
    priceUnit: 'proyecto',
    shortDescription: {
      es: 'Webs a medida: desde landings hasta e-commerce completo.',
      ca: 'Llocs web a mida: des de landings fins a e-commerce complet.',
      en: 'Custom WordPress sites: from landings to full e-commerce.',
    },
    cta: { label: 'Pedir presupuesto', href: '/contacto' },
    tiers: [
      {
        id: 'proyecto',
        name: 'Proyecto',
        price: 890,
        target: 'Web a medida',
        features: [
          'Diseño a medida',
          'Desarrollo WordPress',
          'SEO técnico on-page',
          'Formación incluida',
        ],
      },
    ] as ServiceTier[],
  },
  {
    slug: 'desarrollo-aplicaciones-web',
    title: 'Aplicaciones web',
    shortTitle: 'Apps web',
    icon: 'code-2',
    priceUnit: 'proyecto',
    shortDescription: {
      es: 'SPAs, dashboards, plataformas SaaS con Angular, React o Vue.',
      ca: 'SPAs, dashboards, plataformes SaaS amb Angular, React o Vue.',
      en: 'SPAs, dashboards, SaaS platforms with Angular, React or Vue.',
    },
    cta: { label: 'Pedir presupuesto', href: '/contacto' },
    tiers: [
      {
        id: 'proyecto',
        name: 'Proyecto',
        price: 2400,
        target: 'App web a medida',
        features: [
          'Angular / React / Vue',
          'Backend y base de datos',
          'Despliegue en producción',
          'Soporte post-lanzamiento',
        ],
      },
    ] as ServiceTier[],
  },
  {
    slug: 'posicionamiento-seo',
    title: 'Posicionamiento SEO',
    shortTitle: 'SEO',
    icon: 'trending-up',
    priceUnit: 'mes',
    shortDescription: {
      es: 'SEO técnico, contenido y link building local en Tarragona.',
      ca: 'SEO tècnic, contingut i link building local a Tarragona.',
      en: 'Technical SEO, content and local link building in Tarragona.',
    },
    cta: { label: 'Pedir auditoría', href: '/contacto' },
    tiers: [
      {
        id: 'mensual',
        name: 'Mensual',
        price: 290,
        target: 'SEO continuo',
        features: [
          'Auditoría técnica inicial',
          'Optimización on-page',
          'Link building local',
          'Reporting mensual',
        ],
      },
    ] as ServiceTier[],
  },
  {
    slug: 'hosting',
    title: 'Hosting especializado',
    shortTitle: 'Hosting',
    icon: 'server',
    priceUnit: 'mes',
    shortDescription: {
      es: 'Optimizado para WordPress y apps web. Soporte en español.',
      ca: 'Optimitzat per a WordPress i apps web. Suport en espanyol.',
      en: 'Optimised for WordPress and web apps. Support in Spanish.',
    },
    cta: { label: 'Empezar', href: '/contacto' },
    tiers: [
      {
        id: 'mensual',
        name: 'Mensual',
        price: 20,
        target: 'Hosting WordPress / apps',
        features: [
          'Servidor optimizado',
          'SSL y backups diarios',
          'Soporte en español',
        ],
      },
    ] as ServiceTier[],
  },
];

/** Precio mas barato de un servicio (tier 0). */
export function getStartingServicePrice(service: ServiceMeta): number {
  return service.tiers[0]?.price ?? 0;
}
