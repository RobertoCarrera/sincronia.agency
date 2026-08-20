import type { Locale } from '~/i18n/locales';

export interface HomeContent {
  hero: { eyebrow: string; title: string; subtitle: string };
  intro: { eyebrow: string; title: string; body: string };
  services: { eyebrow: string; title: string; subtitle: string; ctaAll: string };
  products: { eyebrow: string; title: string; subtitle: string; ctaAll: string };
  coverage: { eyebrow: string; title: string; body: string };
  cta: { title: string; subtitle: string };
  servicePreviews: Array<{ slug: string; title: string; desc: string }>;
  productPreviews: Array<{ slug: string; name: string; tagline: string; desc: string }>;
}

export const home: Record<Locale, HomeContent> = {
  es: {
    hero: {
      eyebrow: 'Agencia técnica en Tarragona',
      title: 'Webs y aplicaciones que posicionan en Tarragona',
      subtitle: 'Diseño, desarrollo y SEO para WordPress y Angular en toda la provincia. Sincronizamos tu negocio con tu presencia online.',
    },
    intro: {
      eyebrow: 'Quiénes somos',
      title: 'Una agencia técnica, no una fábrica de webs',
      body: 'En Sincronia Agency no vendemos plantillas con tu logo. Diseñamos y desarrollamos webs a medida y aplicaciones web con criterio técnico: SEO on-page desde el primer commit, rendimiento que pasa Core Web Vitals, accesibilidad real, y código que se mantiene sin sorpresas. Llevamos desde 2017 haciendo webs y aplicaciones para negocios de Tarragona y el resto de España.',
    },
    services: {
      eyebrow: 'Lo que hacemos',
      title: 'Servicios',
      subtitle: 'Cinco áreas que cubrimos con la misma profundidad técnica.',
      ctaAll: 'Ver todos los servicios',
    },
    products: {
      eyebrow: 'Productos propios',
      title: 'Software que hemos construido nosotros',
      subtitle: 'Un CRM en beta con clientes, un CMS en alpha al que puedes apuntarte a la lista de espera.',
      ctaAll: 'Ver todos los productos',
    },
    coverage: {
      eyebrow: 'Cobertura',
      title: 'Trabajamos en toda la provincia de Tarragona',
      body: 'Atendemos clientes en Tarragona, Reus, El Vendrell, Cambrils, Tortosa, Salou, Calafell, Valls, Vila-seca, Amposta, Torredembarra, Sant Carles de la Ràpita, Cunit, Mont-roig del Camp y Deltebre. Y si tu negocio es online, trabajamos con clientes de toda España.',
    },
    cta: {
      title: '¿Listo para sincronizar tu presencia online?',
      subtitle: 'Cuéntanos tu proyecto. Te respondemos en menos de 24h con un presupuesto sin compromiso.',
    },
    servicePreviews: [
      { slug: 'mantenimiento-wordpress', title: 'Mantenimiento WordPress', desc: 'Tu web actualizada, segura, rápida y monitorizada 24/7. Sin sustos, sin actualizaciones rotas a las tres de la mañana.' },
      { slug: 'desarrollo-aplicaciones-web', title: 'Aplicaciones web', desc: 'SPAs, dashboards, plataformas SaaS. Principalmente con Angular, también React o Vue si el proyecto lo pide.' },
      { slug: 'posicionamiento-seo', title: 'Posicionamiento SEO', desc: 'SEO técnico, contenido y link building local. Para que te encuentren en Tarragona y toda la provincia.' },
    ],
    productPreviews: [
      { slug: 'simplifica', name: 'Simplifica', tagline: 'CRM multi-sector en beta', desc: 'El CRM que se adapta a tu sector, no al revés. Implementación personalizada para clínicas, asesorías, talleres y cualquier negocio con clientes y citas.' },
      { slug: 'strata', name: 'Strata', tagline: 'CMS con IA en alpha', desc: 'CMS propio con editor visual y asistente IA. Reduce el coste de tu web a la mitad. Apúntate a la lista de espera para acceso anticipado.' },
    ],
  },
  ca: {
    hero: {
      eyebrow: 'Agència tècnica a Tarragona',
      title: 'Llocs web i aplicacions que posicionen a Tarragona',
      subtitle: 'Disseny, desenvolupament i SEO per a WordPress i Angular a tota la província. Sincronitzem el teu negoci amb la teva presència en línia.',
    },
    intro: {
      eyebrow: 'Qui som',
      title: 'Una agència tècnica, no una fàbrica de webs',
      body: "A Sincronia Agency no venem plantilles amb el teu logotip. Dissenym i desenvolupem llocs web a mida i aplicacions web amb criteri tècnic: SEO on-page des del primer commit, rendiment que passa Core Web Vitals, accessibilitat real, i codi que es manté sense sorpreses. Des del 2017 fem llocs web i aplicacions per a negocis de Tarragona i la resta d'Espanya.",
    },
    services: {
      eyebrow: 'El que fem',
      title: 'Serveis',
      subtitle: 'Cinc àrees que cobrim amb la mateixa profunditat tècnica.',
      ctaAll: 'Veure tots els serveis',
    },
    products: {
      eyebrow: 'Productes propis',
      title: 'Programari que hem construït nosaltres',
      subtitle: 'Un CRM en beta amb clients, un CMS en alpha on pots apuntar-te a la llista d\'espera.',
      ctaAll: 'Veure tots els productes',
    },
    coverage: {
      eyebrow: 'Cobertura',
      title: 'Treballem a tota la província de Tarragona',
      body: 'Atenem clients a Tarragona, Reus, El Vendrell, Cambrils, Tortosa, Salou, Calafell, Valls, Vila-seca, Amposta, Torredembarra, Sant Carles de la Ràpita, Cunit, Mont-roig del Camp i Deltebre. I si el teu negoci és en línia, treballem amb clients de tota Espanya.',
    },
    cta: {
      title: 'Llest per sincronitzar la teva presència en línia?',
      subtitle: "Explica'ns el teu projecte. Et responem en menys de 24h amb un pressupost sense compromís.",
    },
    servicePreviews: [
      { slug: 'mantenimiento-wordpress', title: 'Manteniment WordPress', desc: 'El teu web actualitzat, segur, ràpid i monitoritzat 24/7. Sense ensurts, sense actualitzacions trencades a les tres de la matinada.' },
      { slug: 'desarrollo-aplicaciones-web', title: 'Aplicacions web', desc: 'SPAs, dashboards, plataformes SaaS. Principalment amb Angular, també React o Vue si el projecte ho demana.' },
      { slug: 'posicionamiento-seo', title: 'Posicionament SEO', desc: 'SEO tècnic, contingut i link building local. Perquè et trobin a Tarragona i tota la província.' },
    ],
    productPreviews: [
      { slug: 'simplifica', name: 'Simplifica', tagline: 'CRM multi-sector en beta', desc: "El CRM que s'adapta al teu sector, no a l'inrevés. Implementació personalitzada per a clíniques, assessories, tallers i qualsevol negoci amb clients i cites." },
      { slug: 'strata', name: 'Strata', tagline: 'CMS amb IA en alpha', desc: "CMS propi amb editor visual i assistent IA. Redueix el cost del teu web a la meitat. Apunta't a la llista d'espera per a accés anticipat." },
    ],
  },
  en: {
    hero: {
      eyebrow: 'Technical agency in Tarragona',
      title: 'Websites and apps that rank in Tarragona',
      subtitle: 'Design, development and SEO for WordPress and Angular across the province. We sync your business with your online presence.',
    },
    intro: {
      eyebrow: 'About us',
      title: 'A technical agency, not a website factory',
      body: "At Sincronia Agency we don't sell templates with your logo. We design and develop custom websites and web applications with technical rigour: on-page SEO from the first commit, Core Web Vitals-grade performance, real accessibility, and code that doesn't surprise you at 3am. Since 2017, we've been building websites and applications for businesses in Tarragona and across Spain.",
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services',
      subtitle: 'Five areas we cover with the same technical depth.',
      ctaAll: 'View all services',
    },
    products: {
      eyebrow: 'Our products',
      title: 'Software we built ourselves',
      subtitle: 'A CRM in beta with clients, a CMS in alpha you can join the waitlist for.',
      ctaAll: 'View all products',
    },
    coverage: {
      eyebrow: 'Coverage',
      title: 'We work across the province of Tarragona',
      body: 'We serve clients in Tarragona, Reus, El Vendrell, Cambrils, Tortosa, Salou, Calafell, Valls, Vila-seca, Amposta, Torredembarra, Sant Carles de la Ràpita, Cunit, Mont-roig del Camp and Deltebre. And if your business is online, we work with clients across Spain.',
    },
    cta: {
      title: 'Ready to sync your online presence?',
      subtitle: 'Tell us about your project. We reply in under 24 hours with a no-commitment quote.',
    },
    servicePreviews: [
      { slug: 'mantenimiento-wordpress', title: 'WordPress maintenance', desc: 'Your site updated, secure, fast and monitored 24/7. No surprises, no broken updates at 3am.' },
      { slug: 'desarrollo-aplicaciones-web', title: 'Web applications', desc: 'SPAs, dashboards, SaaS platforms. Mostly Angular, also React or Vue when the project calls for it.' },
      { slug: 'posicionamiento-seo', title: 'SEO positioning', desc: 'Technical SEO, content and local link building. So customers find you in Tarragona and across the province.' },
    ],
    productPreviews: [
      { slug: 'simplifica', name: 'Simplifica', tagline: 'Multi-sector CRM in beta', desc: 'A CRM that adapts to your sector, not the other way round. Custom implementation for clinics, consultancies, workshops and any business with clients and appointments.' },
      { slug: 'strata', name: 'Strata', tagline: 'AI-powered CMS in alpha', desc: 'Our own CMS with visual editor and AI assistant. Cuts your website cost in half. Join the waitlist for early access.' },
    ],
  },
};
