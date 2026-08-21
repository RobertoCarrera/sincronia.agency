import type { Locale } from '~/i18n/locales';

export type ProductStatus = 'alpha' | 'beta' | 'estable';
export type ProductSlug = 'simplifica' | 'strata';

export interface Tier {
  /** id corto en kebab-case */
  id: string;
  /** nombre del tier */
  name: string;
  /** precio mensual en EUR. 0 = gratis */
  price: number;
  /** número de usuarios incluidos (productos). null = ilimitado. Opcional para servicios. */
  users?: number | null;
  /** features destacadas (1-2 frases) */
  features: string[];
  /** destacar este tier como "popular" o "recomendado" */
  highlight?: boolean;
  /** etiqueta del CTA del tier. Si no, usa el cta por defecto del producto */
  ctaLabel?: string;
}

export interface SimplificaTier extends Tier {
  /** límite de contactos. null = ilimitado */
  contacts: number | null;
}

export interface StrataTier extends Tier {
  /** número de proyectos. Strata actualmente = 1 por tier */
  projects: number;
  /** número de páginas */
  pages: number;
  /** número de documentos (entradas de contenido) */
  docs: number;
  /** número de idiomas */
  languages: number;
}

export interface ProductMeta {
  slug: ProductSlug;
  name: string;
  shortName: string;
  icon: string;
  status: ProductStatus;
  /** descripción corta (1 línea) en cada idioma */
  shortDescription: Record<Locale, string>;
  /** lista de tiers del producto */
  tiers: SimplificaTier[] | StrataTier[];
  /** nota de setup o add-ons (se muestra al final de la tabla de precios) */
  setupNote?: string;
  /** CTA del bloque principal (botón grande al final de la página de detalle) */
  cta: { label: string; href: string };
  /** si true, este producto es el destacado del index (badge "RECOMENDADO") */
  featured?: boolean;
  /** Logo del producto (sustituye al icono SVG en el ProductCard cuando se proporciona) */
  logo?: {
    /** ruta pública base, sin extensión. El componente elige .webp con fallback .png */
    src: string;
    /** texto alternativo (mismo en todos los idiomas; describe el logo) */
    alt: string;
    /** ancho intrínseco del PNG original (para evitar layout shift) */
    width: number;
    /** alto intrínseco del PNG original */
    height: number;
  };
  /**
   * Lockup horizontal del producto (icono + texto). Se usa en el mega menu
   * del header, donde el icono 3D a 48px no se lee. Si está presente, el
   * MegaMenu prefiere este asset sobre `logo`.
   */
  logoLockup?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const products: ProductMeta[] = [
  {
    slug: 'simplifica',
    name: 'Simplifica',
    shortName: 'Simplifica CRM',
    icon: 'users-round',
    status: 'beta',
    logo: {
      src: '/productos/simplifica/icon',
      alt: 'Simplifica — CRM multi-sector by Sincronia',
      width: 256,
      height: 256,
    },
    logoLockup: {
      src: '/productos/simplifica/logo-on-light-320',
      alt: 'Simplifica CRM by Sincronia',
      width: 320,
      height: 137,
    },
    shortDescription: {
      es: 'CRM que se adapta a tu sector, no al revés.',
      ca: 'CRM que s\'adapta al teu sector, no a l\'inrevés.',
      en: 'A CRM that adapts to your sector, not the other way round.',
    },
    setupNote: 'Setup inicial gratuito. Implementación de features a medida o adaptadas a tu sector, presupuesto aparte.',
    cta: { label: 'Pedir demo', href: '/contacto' },
    tiers: [
      {
        id: 'free',
        name: 'Free',
        price: 0,
        users: 1,
        contacts: 20,
        features: [
          '1 usuario',
          'Hasta 20 contactos',
          'Pipeline básico',
          'Captura de leads',
          'Agenda de citas',
        ],
      },
      {
        id: 'starter',
        name: 'Starter',
        price: 50,
        users: 1,
        contacts: null,
        features: [
          '1 usuario',
          'Contactos ilimitados',
          'Email templates',
          'Automatizaciones simples',
          'Integraciones básicas',
        ],
        highlight: true,
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 100,
        users: 3,
        contacts: null,
        features: [
          'Hasta 3 usuarios',
          'Contactos ilimitados',
          'Workflows avanzados',
          'Multi-pipeline',
          'Multi-sucursal',
          'API',
        ],
      },
      {
        id: 'business',
        name: 'Business',
        price: 250,
        users: 10,
        contacts: null,
        features: [
          'Hasta 10 usuarios',
          'Contactos ilimitados',
          'Soporte prioritario',
          'SLA',
          'Integraciones a medida',
          'Formación',
        ],
      },
    ] as SimplificaTier[],
  },
  {
    slug: 'strata',
    name: 'Strata',
    shortName: 'Strata CMS',
    icon: 'layers',
    status: 'alpha',
    logo: {
      src: '/productos/strata/icon',
      alt: 'Strata — CMS con editor visual by Sincronia',
      width: 256,
      height: 256,
    },
    logoLockup: {
      src: '/productos/strata/logo-on-light-320',
      alt: 'Strata CMS by Sincronia',
      width: 320,
      height: 180,
    },
    shortDescription: {
      es: 'CMS con editor visual y asistente IA. Reduce el coste a la mitad.',
      ca: 'CMS amb editor visual i assistent IA. Redueix el cost a la meitat.',
      en: 'CMS with visual editor and AI assistant. Cuts cost in half.',
    },
    setupNote: 'Precios estimados — sujetos a cambios antes del lanzamiento en Beta pública. Accede a la lista de espera para el acceso anticipado.',
    cta: { label: 'Apuntarme a la lista de espera', href: '/contacto' },
    featured: true,
    tiers: [
      {
        id: 'free',
        name: 'Free',
        price: 0,
        users: 1,
        projects: 1,
        pages: 1,
        docs: 10,
        languages: 1,
        features: [
          '1 usuario',
          '1 proyecto, 1 página',
          'Hasta 10 documentos',
          'Editor visual básico',
          '1 idioma',
        ],
        ctaLabel: 'Empezar gratis',
      },
      {
        id: 'growth',
        name: 'Growth',
        price: 20,
        users: 1,
        projects: 1,
        pages: 1,
        docs: 20,
        languages: 3,
        features: [
          '1 usuario',
          '1 proyecto, 1 página',
          'Hasta 20 documentos',
          'Acceso a IA asistente',
          '3 idiomas',
        ],
        highlight: true,
        ctaLabel: 'Apuntarme a la lista de espera',
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 35,
        users: 1,
        projects: 1,
        pages: 5,
        docs: 50,
        languages: 3,
        features: [
          '1 usuario',
          '1 proyecto, hasta 5 páginas',
          'Hasta 50 documentos',
          'IA asistente (con límite)',
          '3 idiomas',
        ],
        ctaLabel: 'Apuntarme a la lista de espera',
      },
      {
        id: 'superior',
        name: 'Superior',
        price: 50,
        users: 1,
        projects: 1,
        pages: 10,
        docs: 50,
        languages: 5,
        features: [
          '1 usuario',
          '1 proyecto, hasta 10 páginas',
          'Hasta 50 documentos',
          'IA asistente (con límite)',
          '5 idiomas',
        ],
        ctaLabel: 'Apuntarme a la lista de espera',
      },
      {
        id: 'blog',
        name: 'Blog',
        price: 100,
        users: 1,
        projects: 1,
        pages: 100,
        docs: 5,
        languages: 5,
        features: [
          '1 usuario',
          '1 proyecto, hasta 100 páginas',
          '5 documentos por página',
          'IA asistente (con límite)',
          '5 idiomas',
          'Optimizado para contenido editorial',
        ],
        ctaLabel: 'Apuntarme a la lista de espera',
      },
    ] as StrataTier[],
  },
];

/** Precio más barato de un producto (tier free siempre = 0). Útil para "Desde X€". */
export function getStartingPrice(product: ProductMeta): number {
  return product.tiers[0]?.price ?? 0;
}

/** Devuelve el tier "popular" o el segundo tier (no free) si no hay highlight. */
export function getPopularTier(product: ProductMeta): Tier {
  return product.tiers.find((t) => t.highlight) ?? product.tiers[1] ?? product.tiers[0];
}
