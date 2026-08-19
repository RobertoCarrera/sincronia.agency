/** Definición de los 2 productos propios. */
export interface ProductMeta {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  status: 'beta' | 'estable';
  priceFrom: number;
  priceUnit: string;
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
  },
  {
    slug: 'strata',
    name: 'Strata',
    shortName: 'Strata CMS',
    icon: 'layers',
    status: 'beta',
    priceFrom: 20,
    priceUnit: '/mes hosting',
  },
];
