# sincronia.agency

Web profesional de **Sincronia Agency**, agencia técnica de diseño, desarrollo y SEO en Tarragona.

Stack: **Astro 7** (estático) · TypeScript estricto · i18n nativo (ES, CA, EN) · Deploy en Cloudflare Pages.

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo (localhost:4321)
npm run build    # Build de producción → ./dist
npm run preview  # Preview del build local
```

## Estructura

```
src/
├── i18n/           Diccionarios y configuración de locales
├── data/           Datos del negocio (NAP, servicios, productos, ubicaciones)
├── lib/            Helpers (i18n, SEO)
├── components/     Componentes Astro reutilizables
├── content/        Contenido por página en 3 idiomas
├── layouts/        Layout base
├── pages/          Rutas (ES en raíz, CA en /ca/, EN en /en/)
└── styles/         CSS global con design tokens
public/
├── logos/          Logotipo oficial (transparente y con fondo)
├── favicon.svg
└── robots.txt
```

## Deploy en Cloudflare Pages

1. Conectar el repositorio en https://dash.cloudflare.com → Pages
2. Build command: `npm run build`
3. Build output: `dist`
4. Variables de entorno: ninguna (sitio 100% estático)
5. Dominio personalizado: `sincronia.agency` (ya en Cloudflare)

## SEO on-page

- `LocalBusiness` schema en cada página (NAP oficial)
- `hreflang` correcto entre ES / CA / EN + `x-default`
- Sitemap multilingüe en `/sitemap-index.xml`
- `robots.txt` con referencia al sitemap
- Imágenes servidas como PNG (logo) — pendientes WebP/AVIF para Fase 2C

## Pendiente (próximas fases)

- **Fase 2A (resto)**: páginas de servicios 2-5, producto Strata, sobre nosotros, contacto, 3 páginas legales
- **Fase 2B**: 15 hubs de municipio (Tarragona, Reus, Calafell, etc.) × 3 idiomas = 45 páginas
- **Fase 2C**: blog, recursos descargables, casos de estudio
