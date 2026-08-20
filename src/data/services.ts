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
        id: 'landing',
        name: 'Landing',
        price: 400,
        target: 'Captación de leads: hasta 3 secciones, sin blog',
        features: [
          'Diseño a medida de 1 vista',
          'Desarrollo WordPress',
          'SEO técnico on-page',
          'Formación incluida',
        ],
      },
      {
        id: 'one-page',
        name: 'One-Page',
        price: 600,
        target: 'Captación de leads: hasta 10 secciones, sin blog',
        highlight: true,
        features: [
          'Diseño a medida de 1 vista extendida',
          'Desarrollo WordPress',
          'SEO técnico on-page',
          'Formación incluida',
        ],
      },
      {
        id: 'web-corporativa',
        name: 'Web corporativa',
        price: 1000,
        target: 'Negocio local / pyme con servicios: 5-10 páginas + blog, contact + sobre nosotros + servicios',
        features: [
          'Diseño UX/UI a medida',
          'Desarrollo WordPress multi-página',
          'Blog Gutenberg',
          'SEO técnico on-page',
          'Formación al equipo',
        ],
      },
      {
        id: 'ecommerce',
        name: 'E-commerce',
        price: 1400,
        target: 'Tienda WooCommerce: 20, pasarela de pago',
        features: [
          'Diseño UX/UI a medida',
          'WooCommerce configurado',
          'Pasarela de pago y envíos',
          'SEO técnico on-page',
          'Formación al equipo',
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
      es: 'SPAs, dashboards, plataformas SaaS con Angular, React o Vue. Desde 3.500€.',
      ca: 'SPAs, dashboards, plataformes SaaS amb Angular, React o Vue. Des de 3.500€.',
      en: 'SPAs, dashboards, SaaS platforms with Angular, React or Vue. From €3,500.',
    },
    cta: { label: 'Pedir presupuesto', href: '/contacto' },
    tiers: [
      {
        id: 'herramienta-interna',
        name: 'Herramienta interna',
        price: 3500,
        target: 'Dashboard simple, CRUD o panel admin a medida (1-2 semanas)',
        features: [
          'Stack SPA a medida (Angular, React o Vue)',
          'Backend con API documentada',
          'Base de datos y autenticación básica',
          'Despliegue en producción',
        ],
      },
      {
        id: 'mvp',
        name: 'MVP',
        price: 8000,
        target: 'Producto con auth, roles, API completa y base de datos real (1-2 meses)',
        highlight: true,
        features: [
          'Stack SPA a medida (Angular, React o Vue)',
          'Backend robusto con API REST o GraphQL',
          'Autenticación con JWT, OAuth o SSO',
          'Roles, permisos y panel de administración',
          'CI/CD, tests y monitorización',
        ],
      },
      {
        id: 'plataforma-saas',
        name: 'Plataforma SaaS',
        price: 15000,
        target: 'Multi-tenancy, suscripciones, integraciones y escalado (3-6 meses)',
        features: [
          'Arquitectura multi-tenant',
          'Suscripciones y pasarela de pago',
          'Integraciones a medida (ERP, CRM, APIs)',
          'SSR, SEO técnico y rendimiento optimizado',
          'CI/CD, tests E2E y monitorización 24/7',
          'Documentación técnica completa',
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
      es: 'SEO técnico, contenido y link building local en Tarragona. Desde 300€/mes.',
      ca: 'SEO tècnic, contingut i link building local a Tarragona. Des de 300€/mes.',
      en: 'Technical SEO, content and local link building in Tarragona. From €300/month.',
    },
    cta: { label: 'Pedir auditoría', href: '/contacto' },
    tiers: [
      {
        id: 'seo-local',
        name: 'SEO Local',
        price: 300,
        target: 'Negocio con 1 sede / 1 ciudad principal',
        features: [
          'Auditoría SEO técnica inicial',
          'Keyword research local',
          'Optimización on-page completa',
          'Google Business Profile optimizado',
          '2 piezas de contenido / mes',
          'Link building local básico',
          'Reporte mensual y reunión de seguimiento',
        ],
      },
      {
        id: 'seo-provincial',
        name: 'SEO Provincial',
        price: 500,
        target: 'Negocio que quiere dominar varias ciudades de la provincia',
        highlight: true,
        features: [
          'Todo lo del plan SEO Local',
          '4 piezas de contenido / mes',
          'Link building local activo',
          'Páginas dedicadas por municipio (Tarragona, Reus, El Vendrell…)',
          'Optimización de Google Business Profile por sede',
          'Reporte quincenal y 2 reuniones de seguimiento',
        ],
      },
      {
        id: 'seo-competitivo',
        name: 'SEO Competitivo',
        price: 900,
        target: 'Sector muy competido, e-commerce, multi-sede nacional',
        features: [
          'Todo lo del plan SEO Provincial',
          '8 piezas de contenido / mes',
          'Link building agresivo (medios, sector, partners)',
          'CRO (Conversion Rate Optimization)',
          'Reporting semanal y dashboard en tiempo real',
          'Reuniones semanales de iteración',
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
      es: 'Hosting WordPress en AWS Lightsail con stack de plugins premium incluido. Desde 35€/mes.',
      ca: 'Hosting WordPress a AWS Lightsail amb stack de plugins premium inclòs. Des de 35€/mes.',
      en: 'WordPress hosting on AWS Lightsail with premium plugin stack included. From €35/month.',
    },
    cta: { label: 'Empezar', href: '/contacto' },
    tiers: [
      {
        id: 'hosting-wp-start',
        name: 'Hosting WP Start',
        price: 35,
        target: 'WP estándar: blog, web corporativa, landing',
        features: [
          'Servidor AWS Lightsail (2GB RAM, 60GB SSD, 3TB transfer)',
          'WordPress optimizado (PHP 8.x, MariaDB 10.x, Nginx, HTTP/3)',
          'CDN Cloudflare Pro + SSL gratuito',
          'Backups diarios automatizados (30 días de retención)',
          'Monitorización 24/7 y alertas',
          'Stack completo de plugins premium incluido (Divi, BerqWP, SEO Generator, EWWW, Security Ninja…)',
          'Soporte humano en español (email)',
        ],
      },
      {
        id: 'hosting-wp-pro',
        name: 'Hosting WP Pro',
        price: 60,
        target: 'WP con tráfico alto, e-commerce pequeño, hasta 3 webs',
        highlight: true,
        features: [
          'Servidor AWS Lightsail (4GB RAM, 80GB SSD, 4TB transfer)',
          'WordPress optimizado (PHP 8.x, MariaDB 10.x, Nginx, HTTP/3)',
          'CDN Cloudflare Pro + SSL gratuito',
          'Backups diarios automatizados (60 días de retención)',
          'Monitorización 24/7 y alertas',
          'Stack completo de plugins premium incluido (Divi, BerqWP, SEO Generator, EWWW, Security Ninja…)',
          'Soporte prioritario en español (email + teléfono, SLA < 4h)',
          'Entorno staging para probar cambios sin riesgo',
        ],
      },
      {
        id: 'hosting-wp-business',
        name: 'Hosting WP Business',
        price: 100,
        target: 'WooCommerce medio, multi-site, alto tráfico',
        features: [
          'Servidor AWS Lightsail (8GB RAM, 160GB SSD, 5TB transfer)',
          'WordPress optimizado (PHP 8.x, MariaDB 10.x, Nginx, HTTP/3)',
          'CDN Cloudflare Pro + SSL gratuito',
          'Backups cada 6 horas (90 días de retención)',
          'Monitorización 24/7 y alertas',
          'Stack completo de plugins premium incluido (Divi, BerqWP, SEO Generator, EWWW, Security Ninja…)',
          'Soporte premium en español (email + teléfono + WhatsApp, SLA < 30min en críticas)',
          'Entorno staging + IP fija opcional',
          'Auditoría trimestral de rendimiento y seguridad',
        ],
      },
    ] as ServiceTier[],
  },
];

/** Precio mas barato de un servicio (tier 0). */
export function getStartingServicePrice(service: ServiceMeta): number {
  return service.tiers[0]?.price ?? 0;
}
