import type { Locale } from '~/i18n/locales';

export interface PluginDetail {
  name: string;
  category: 'design' | 'performance' | 'security' | 'compliance';
  desc: string;
  /** Precio anual oficial en EUR. 0 si tiene tier gratuito suficiente para lo que ofrecemos. */
  priceAnnual: number;
  /** URL oficial del plugin. */
  url: string;
  /** Notas opcionales (ej: "Gratis hasta 5GB"). */
  priceNote?: string;
}

export const hostingPlugins: Record<Locale, {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  savings: {
    title: string;
    intro: string;
    totalLabel: string;
    monthlyLabel: string;
    perYearLabel: string;
    includedLabel: string;
  };
  intro: { title: string; paragraphs: string[] };
  cta: { title: string; subtitle: string };
}> = {
  es: {
    meta: {
      title: 'Stack de plugins premium WordPress incluidos con el hosting · Sincronia Agency',
      description: 'Más de 15 plugins premium de WordPress incluidos con tu hosting en Sincronia Agency: Divi, BerqWP, SEO Generator, Security Ninja, EWWW, North Commerce y más. Valor de mercado: más de 900€/año.',
    },
    hero: {
      eyebrow: 'Stack premium',
      title: 'Plugins premium de WordPress incluidos con tu hosting',
      subtitle: 'Más de 15 plugins que normalmente cuestan más de 900€/año, instalados, configurados y mantenidos por nosotros. Solo por contratar el hosting.',
    },
    savings: {
      title: 'Tu ahorro con el hosting de Sincronia Agency',
      intro: 'Si comprases cada plugin por separado, renovarías licencias todos los años. Con nuestro hosting, los gestionamos nosotros.',
      totalLabel: 'Valor de mercado anual',
      monthlyLabel: 'Ahorro mensual equivalente',
      perYearLabel: 'Ahorro anual con el hosting',
      includedLabel: 'Incluido con tu hosting desde',
    },
    intro: {
      title: 'Por qué regalamos este stack de plugins',
      paragraphs: [
        'Cuando montas una web WordPress en serio necesitas, como mínimo: un constructor visual decente (Divi), un plugin de caché que no se quede corto con el tráfico (BerqWP), una solución de SEO automatizado (SEO Generator), un firewall y suite de seguridad (Security Ninja), un optimizador de imágenes (EWWW), y un plugin de cookies conforme a RGPD. Solo con eso ya rondas los 400€/año en licencias.',
        'Si además quieres formularios avanzados (Deftform), redirecciones 301 bien gestionadas (WP 301 Redirects), limpieza de base de datos (Database Cleaner), modo oscuro (DarkMySite), un e-commerce sin la pesadez de WooCommerce (North Commerce), un editor de firmas de email (MySignature) y una gestión profesional de medios (Sigma Media Manager)… te plantas fácilmente en los 900€/año.',
        'Como para nosotros tu web tiene que funcionar bien sin que tú tengas que pelearte con plugins, los incluimos todos en el hosting. Así te olvidas de licencias, actualizaciones, compatibilidades y renovaciones. Si algún día te vas, los plugins se quedan con nosotros.',
      ],
    },
    cta: {
      title: '¿Listo para un hosting WordPress con stack premium?',
      subtitle: 'Tres planes desde 35€/mes. Migración inicial gratuita, sin permanencia.',
    },
  },
  ca: {
    meta: {
      title: 'Stack de plugins premium WordPress inclosos amb el hosting · Sincronia Agency',
      description: 'Més de 15 plugins premium de WordPress inclosos amb el teu hosting a Sincronia Agency: Divi, BerqWP, SEO Generator, Security Ninja, EWWW, North Commerce i més. Valor de mercat: més de 900€/any.',
    },
    hero: {
      eyebrow: 'Stack premium',
      title: 'Plugins premium de WordPress inclosos amb el teu hosting',
      subtitle: 'Més de 15 plugins que normalment costen més de 900€/any, instal·lats, configurats i mantinguts per nosaltres. Només per contractar el hosting.',
    },
    savings: {
      title: 'El teu estalvi amb el hosting de Sincronia Agency',
      intro: 'Si compressis cada plugin per separat, renovaries llicències cada any. Amb el nostre hosting, les gestionem nosaltres.',
      totalLabel: 'Valor de mercat anual',
      monthlyLabel: 'Estalvi mensual equivalent',
      perYearLabel: 'Estalvi anual amb el hosting',
      includedLabel: 'Inclos amb el teu hosting des de',
    },
    intro: {
      title: 'Per què regalem aquest stack de plugins',
      paragraphs: [
        'Quan muntar un web WordPress en sèrio necessites, com a mínim: un constructor visual decent (Divi), un plugin de memòria cau que no es quedi curt amb el trànsit (BerqWP), una solució de SEO automatitzat (SEO Generator), un tallafoc i suite de seguretat (Security Ninja), un optimitzador d\'imatges (EWWW), i un plugin de cookies conforme a RGPD. Només amb això ja rondes els 400€/any en llicències.',
        'Si a més vols formularis avançats (Deftform), redireccions 301 ben gestionades (WP 301 Redirects), neteja de base de dades (Database Cleaner), mode fosc (DarkMySite), un e-commerce sense la pesadesa de WooCommerce (North Commerce), un editor de signatures de correu (MySignature) i una gestió professional de mitjans (Sigma Media Manager)… te\'n plantes fàcilment en els 900€/any.',
        'Com que per a nosaltres el teu web ha de funcionar bé sense que tu hagis de barallar-te amb plugins, els incloem tots al hosting. Així t\'oblides de llicències, actualitzacions, compatibilitats i renovacions. Si algun dia te\'n vas, els plugins es queden amb nosaltres.',
      ],
    },
    cta: {
      title: 'Llest per a un hosting WordPress amb stack premium?',
      subtitle: 'Tres plans des de 35€/mes. Migració inicial gratuïta, sense permanència.',
    },
  },
  en: {
    meta: {
      title: 'Premium WordPress plugin stack included with hosting · Sincronia Agency',
      description: 'Over 15 premium WordPress plugins included with your hosting at Sincronia Agency: Divi, BerqWP, SEO Generator, Security Ninja, EWWW, North Commerce and more. Market value: over €900/year.',
    },
    hero: {
      eyebrow: 'Premium stack',
      title: 'Premium WordPress plugins included with your hosting',
      subtitle: 'Over 15 plugins that normally cost over €900/year, installed, configured and maintained by us. Just by signing up for the hosting.',
    },
    savings: {
      title: 'Your savings with Sincronia Agency hosting',
      intro: 'If you bought each plugin separately, you would renew licences every year. With our hosting, we handle all of it.',
      totalLabel: 'Annual market value',
      monthlyLabel: 'Equivalent monthly savings',
      perYearLabel: 'Annual savings with hosting',
      includedLabel: 'Included with your hosting from',
    },
    intro: {
      title: 'Why we give this plugin stack away',
      paragraphs: [
        'When you build a serious WordPress site you need, at minimum: a decent visual builder (Divi), a cache plugin that handles traffic spikes (BerqWP), an automated SEO solution (SEO Generator), a firewall and security suite (Security Ninja), an image optimiser (EWWW), and a GDPR-compliant cookie plugin. That alone is around €400/year in licences.',
        'If you also want advanced forms (Deftform), well-managed 301 redirects (WP 301 Redirects), database cleanup (Database Cleaner), dark mode (DarkMySite), a lightweight e-commerce alternative to WooCommerce (North Commerce), a professional email signature editor (MySignature) and a serious media library manager (Sigma Media Manager)… you easily reach €900/year.',
        'Since we believe your site should work well without you wrestling with plugins, we include them all in the hosting. So you forget about licences, updates, compatibilities and renewals. If you ever leave, the plugins stay with us.',
      ],
    },
    cta: {
      title: 'Ready for WordPress hosting with a premium stack?',
      subtitle: 'Three plans from €35/month. Initial migration free, no commitment.',
    },
  },
};

/** Lista de plugins con precios oficiales. Mismos datos en los 3 idiomas (datos cuantitativos). */
export const pluginList: PluginDetail[] = [
  // Diseño y construcción
  { name: 'Divi (Elegant Themes)', category: 'design', desc: 'Constructor visual y tema premium. Estándar de la industria para diseñar WordPress sin tocar código.', priceAnnual: 89, url: 'https://www.elegantthemes.com/gallery/divi/' },
  { name: 'Divi Next (Full Access)', category: 'design', desc: 'Extensiones y módulos extra para Divi: layouts, efectos, bloques adicionales.', priceAnnual: 99, url: 'https://divinext.com/' },
  { name: 'Pee Aye Creative (All Divi Plugins)', category: 'design', desc: 'Suite completa de plugins para Divi. Decenas de widgets, layouts y herramientas.', priceAnnual: 99, url: 'https://peaeyecreative.com/' },

  // Rendimiento y SEO
  { name: 'BerqWP', category: 'performance', desc: 'Caché premium de nueva generación. WordPress carga 3-5x más rápido que con WP Rocket o LiteSpeed.', priceAnnual: 120, url: 'https://berqwp.com/' },
  { name: 'EWWW Image Optimizer', category: 'performance', desc: 'Optimización y conversión automática de imágenes a WebP. Ahorra ancho de banda y mejora Core Web Vitals.', priceAnnual: 0, url: 'https://wordpress.org/plugins/ewww-image-optimizer/', priceNote: 'Gratis (tier 5GB incluido)' },
  { name: 'SEO Generator', category: 'performance', desc: 'Genera meta titles, descriptions y schema.org automáticamente. Ahorra horas de trabajo SEO por página.', priceAnnual: 79, url: 'https://codecanyon.net/item/seo-generator/2864636' },
  { name: 'Sigma Media Manager', category: 'performance', desc: 'Gestión avanzada de la biblioteca de medios: carpetas, búsqueda, reemplazo, optimización.', priceAnnual: 40, url: 'https://sigmadev.io/sigma-media-manager' },

  // Seguridad y mantenimiento
  { name: 'Security Ninja Pro', category: 'security', desc: 'Suite de seguridad: firewall, escaneo de malware, hardening de WP. Más de 50 comprobaciones automáticas.', priceAnnual: 119, url: 'https://wpsecurityninja.com/' },
  { name: 'WP Reset', category: 'security', desc: 'Reset y recuperación de WordPress para staging y emergencias. Resetea a fábrica en minutos.', priceAnnual: 50, url: 'https://wpreset.com/' },
  { name: 'Database Cleaner (Optimize DB)', category: 'security', desc: 'Limpia revisions, transients, spam, drafts antiguos. Mantiene la base de datos ligera y rápida.', priceAnnual: 25, url: 'https://wordpress.org/plugins/optimize-database-after-deleting-revisions/' },
  { name: 'WP 301 Redirects Pro', category: 'security', desc: 'Gestor de redirecciones 301. Esencial para SEO cuando cambias URLs o migras contenido.', priceAnnual: 30, url: 'https://wp301redirects.com/' },

  // Cumplimiento y extras
  { name: 'Plugin de cookies RGPD (Complianz / CookieYes)', category: 'compliance', desc: 'Banner de cookies conforme a RGPD. Hasta 1.000 visitas/mes gratuitas en el plan básico.', priceAnnual: 0, url: 'https://complianz.io/', priceNote: 'Gratis (tier 1k visitas/mes)' },
  { name: 'DarkMySite', category: 'compliance', desc: 'Modo oscuro automático para tu web. Tendencia en diseño y mejora de accesibilidad.', priceAnnual: 35, url: 'https://darkmysite.com/' },
  { name: 'Deftform', category: 'compliance', desc: 'Constructor de formularios avanzado: lógica condicional, integraciones, anti-spam.', priceAnnual: 35, url: 'https://codecanyon.net/item/deftform-wordpress-form-builder/28414150' },
  { name: 'North Commerce', category: 'compliance', desc: 'Alternativa ligera a WooCommerce. Tienda online sin la pesadez de WooCommerce.', priceAnnual: 149, url: 'https://northcommerce.io/' },
  { name: 'MySignature (1 firma)', category: 'compliance', desc: 'Firma de email profesional con tu marca.', priceAnnual: 30, url: 'https://mysignature.io/' },
];

/** Suma total de precio anual oficial (referencia, en USD). */
export const TOTAL_ANNUAL_USD = pluginList.reduce((sum, p) => sum + p.priceAnnual, 0);
/** Equivalente aproximado en EUR (USD * 0.92). */
export const TOTAL_ANNUAL_EUR = Math.round(TOTAL_ANNUAL_USD * 0.92);
/** Ahorro mensual equivalente. */
export const MONTHLY_SAVINGS_EUR = Math.round(TOTAL_ANNUAL_EUR / 12);
