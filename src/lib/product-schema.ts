// Genera los schemas JSON-LD para una página de producto:
//   - Product (con brand, image, offers con AggregateOffer)
//   - FAQPage (si hay FAQ)
//
// Importante: un schema Product ayuda a GEO/SEO porque comunica a los LLMs
// y a Google qué ofrece el producto, su marca, su precio y su disponibilidad.

import { products } from '~/data/products';
import { nap } from '~/data/nap';
import type { Locale } from '~/i18n/locales';
import { localeHtmlLang } from '~/i18n/locales';
import { assetUrl } from '~/lib/assets';

interface ProductSchemaOpts {
  productSlug: string;
  /** descripción localizada del producto (viene de content/products/<slug>.ts) */
  description: string;
  /** nombre localizado del producto */
  name: string;
  locale: Locale;
  /** ruta pública a la imagen principal del producto (relativa, sin host) */
  imagePath?: string;
  /** preguntas frecuentes (si existen) */
  faq?: Array<{ q: string; a: string }>;
}

export function productJsonLd({ productSlug, description, name, locale, imagePath, faq }: ProductSchemaOpts) {
  const product = products.find((p) => p.slug === productSlug);
  if (!product) return [];

  const url = `https://sincronia.agency${locale === 'es' ? '' : `/${locale}`}/productos/${productSlug}`;
  const startPrice = Math.min(...product.tiers.map((t) => t.price));
  const maxPrice = Math.max(...product.tiers.map((t) => t.price));
  const fullImageUrl = imagePath ? assetUrl(imagePath) : undefined;

  // Mapear status a schema.org availability
  const availability = product.status === 'beta'
    ? 'https://schema.org/PreOrder'   // beta = preventa
    : product.status === 'alpha'
      ? 'https://schema.org/Discontinued'  // alpha = no disponible aún
      : 'https://schema.org/InStock';  // estable

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name,
    description,
    url,
    inLanguage: localeHtmlLang[locale],
    ...(fullImageUrl && { image: fullImageUrl }),
    brand: {
      '@type': 'Brand',
      name: 'Sincronia',
    },
    manufacturer: {
      '@id': 'https://sincronia.agency/#organization',
    },
    category: product.status === 'beta' ? 'CRM' : 'CMS',
    offers: {
      '@type': 'AggregateOffer',
      url,
      priceCurrency: 'EUR',
      lowPrice: startPrice,
      highPrice: maxPrice,
      offerCount: product.tiers.length,
      availability,
      priceValidUntil: '2027-12-31',
      seller: { '@id': 'https://sincronia.agency/#business' },
    },
  };

  const faqSchema = faq && faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: localeHtmlLang[locale],
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a.replace(/<[^>]+>/g, ''),
          },
        })),
      }
    : null;

  return [productSchema, faqSchema].filter(Boolean);
}
