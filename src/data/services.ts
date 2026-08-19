/** Definición de los 5 servicios principales — metadatos en castellano, contenido por slug en src/content/services/. */
export interface ServiceMeta {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // nombre del SVG inline
  priceFrom: number;
  priceUnit: 'mes' | 'proyecto';
}

export const services: ServiceMeta[] = [
  {
    slug: 'mantenimiento-wordpress',
    title: 'Mantenimiento WordPress',
    shortTitle: 'Mantenimiento WP',
    icon: 'shield-check',
    priceFrom: 39,
    priceUnit: 'mes',
  },
  {
    slug: 'desarrollo-wordpress',
    title: 'Desarrollo WordPress',
    shortTitle: 'Desarrollo WP',
    icon: 'layout-template',
    priceFrom: 890,
    priceUnit: 'proyecto',
  },
  {
    slug: 'desarrollo-aplicaciones-web',
    title: 'Desarrollo de aplicaciones web',
    shortTitle: 'Apps web',
    icon: 'code-2',
    priceFrom: 2400,
    priceUnit: 'proyecto',
  },
  {
    slug: 'posicionamiento-seo',
    title: 'Posicionamiento SEO',
    shortTitle: 'SEO',
    icon: 'trending-up',
    priceFrom: 290,
    priceUnit: 'mes',
  },
  {
    slug: 'hosting',
    title: 'Hosting especializado',
    shortTitle: 'Hosting',
    icon: 'server',
    priceFrom: 20,
    priceUnit: 'mes',
  },
];
