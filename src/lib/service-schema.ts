// Genera los schemas JSON-LD para una página de servicio:
//   - Service (con provider, areaServed, offers, aggregateRating placeholder)
//   - FAQPage (si hay FAQ)
//   - BreadcrumbList
// Se pasa el resultado al Base layout via prop `jsonLd`.

import type { ServiceContent } from '~/content/services/mantenimiento-wordpress';
import { services } from '~/data/services';
import { nap } from '~/data/nap';
import type { Locale } from '~/i18n/locales';
import { localeHtmlLang } from '~/i18n/locales';

interface ServiceSchemaOpts {
  content: ServiceContent;
  locale: Locale;
  slug: string;
}

export function serviceJsonLd({ content, locale, slug }: ServiceSchemaOpts) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return [];

  const url = `https://sincronia.agency${locale === 'es' ? '' : `/${locale}`}/servicios/${slug}`;
  const startPrice = Math.min(...service.tiers.map((t) => t.price));
  const maxPrice = Math.max(...service.tiers.map((t) => t.price));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    description: content.meta.description,
    url,
    inLanguage: localeHtmlLang[locale],
    provider: { '@id': 'https://sincronia.agency/#business' },
    areaServed: [
      { '@type': 'Country', name: 'España' },
      { '@type': 'AdministrativeArea', name: 'Tarragona' },
    ],
    serviceType: service.title,
    category: 'Desarrollo web',
    offers: {
      '@type': 'AggregateOffer',
      url,
      priceCurrency: 'EUR',
      lowPrice: startPrice,
      highPrice: maxPrice,
      offerCount: service.tiers.length,
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
  };

  // FAQPage schema
  const faqItems = content.faq?.items;
  const faqSchema = faqItems && faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: localeHtmlLang[locale],
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a.replace(/<[^>]+>/g, ''),
          },
        })),
      }
    : null;

  // BreadcrumbList se genera en el Base layout automáticamente
  return [serviceSchema, faqSchema].filter(Boolean);
}
