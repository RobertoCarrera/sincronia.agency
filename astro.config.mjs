// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sincronia.agency',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Excluir del sitemap páginas internas de checkout/resultado
      // (tienen noindex de todos modos, pero mantenerlas fuera evita
      // que los crawlers las descubran y pierdan tiempo en ellas).
      filter: (page) =>
        !/\/(checkout|api)\//.test(page) &&
        !/\/(checkout|api)$/.test(page),
      // Añadimos lastmod a cada URL. Astro no expone el frontmatter
      // automáticamente, así que usamos la fecha de modificación del
      // archivo fuente como aproximación honesta. Si quieres una fecha
      // estática por página, añade `lastmod` al frontmatter y léelo aquí.
      serialize: (item) => ({
        ...item,
        lastmod: new Date(),
        changefreq: item.url.endsWith('/') && item.url.split('/').filter(Boolean).length <= 1
          ? 'weekly'
          : 'monthly',
        priority: item.url.endsWith('/') && item.url.split('/').filter(Boolean).length <= 1
          ? 1.0
          : 0.8,
      }),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          ca: 'ca-ES',
          en: 'en',
        },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    ssr: {
      noExternal: ['astro-i18next'],
    },
  },
});
