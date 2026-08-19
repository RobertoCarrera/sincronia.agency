import type { Locale } from '~/i18n/locales';
import type { ProductContent } from './simplifica';

export const strata: Record<Locale, ProductContent> = {
  es: {
    meta: {
      title: 'Strata — CMS con IA para webs que se mantienen solas · Sincronia Agency',
      description: 'CMS propio con editor visual y asistente IA. Reduce el coste de tu web a la mitad. Mantenimiento gratuito hasta 2027 — solo pagas 20€/mes de hosting.',
    },
    hero: {
      eyebrow: 'Producto propio en beta',
      title: 'Strata — CMS con IA para webs autoeditables',
      subtitle: 'El CMS que hemos construido para nuestros clientes. Editor visual + asistente IA. Tú editas tu web, nosotros la mantenemos.',
    },
    intro: {
      title: 'WordPress es muy flexible, pero muy caro de mantener',
      paragraphs: [
        'Llevamos años construyendo webs con WordPress, Webflow, y frameworks a medida. Todos tienen el mismo problema: el coste de mantenimiento a 3-5 años supera el coste inicial de la web. Actualizaciones que rompen plugins, ataques de seguridad, problemas de rendimiento cuando crece el tráfico, desarrollador que cobra 60€/hora para "arreglar" cosas.',
        'Strata es nuestra respuesta. Un CMS propio con editor visual (tipo Webflow, pero más simple) y asistente IA integrado que ayuda a tu equipo a crear y mantener contenido sin tocar código. La infraestructura la gestionamos nosotros, la seguridad la gestionamos nosotros, el rendimiento lo optimizamos nosotros. Tú solo editas contenido y publicas.',
        'Durante la beta, el hosting está incluido en los 20€/mes y el mantenimiento es gratuito hasta 2027. Sin permanencias, sin costes ocultos. Es el mismo modelo con el que probamos Simplifica: clientes beta a cambio de feedback real.',
      ],
    },
    features: {
      title: 'Qué puede hacer Strata por tu web',
      items: [
        { title: 'Editor visual drag & drop', desc: 'Edita cualquier página con bloques arrastrables. Sin HTML, sin shortcodes, sin tener que aprender WordPress. Como Notion, pero publica a tu dominio.' },
        { title: 'Asistente IA integrado', desc: 'Genera borradores de texto, sugiere mejoras de SEO, propone alt text para imágenes, resume textos largos. Tú apruebas antes de publicar.' },
        { title: 'Multi-idioma nativo', desc: 'Configura ES, CA, EN (o lo que necesites) con hreflang automático. El asistente IA traduce manteniendo el tono de tu marca.' },
        { title: 'SEO técnico incluido', desc: 'Schema.org, sitemap, Core Web Vitals verdes, Open Graph, canonicals. Configurado por defecto, no es un plugin que se activa al final.' },
      ],
    },
    pricing: {
      title: 'Fase beta: condiciones especiales',
      body: 'Durante la beta, hosting + mantenimiento incluidos en 20€/mes (gratis hasta 2027 para los 100 primeros clientes). Migramos tu web actual a Strata sin coste. Si en 6 meses no te convence, te ayudamos a migrar a otra plataforma y cancelas con un email.',
    },
    faq: {
      title: 'Preguntas frecuentes sobre Strata',
      items: [
        { q: '¿Strata es para mí o sigo con WordPress?', a: 'Strata es ideal si tu web es principalmente contenido (corporativa, blog, portfolio, catálogo) y quieres que tu equipo la edite sin depender de un desarrollador. Para e-commerce complejo, comunidades o funcionalidades a medida, WordPress o un framework a medida siguen siendo mejor opción.' },
        { q: '¿Puedo migrar mi web de WordPress a Strata?', a: 'Sí. Migramos contenido, estructura, URLs (con redirects 301) y diseño básico. Para diseños muy personalizados, mantenemos el front-end hecho a medida y conectamos Strata solo como CMS del contenido.' },
        { q: '¿Qué pasa con mi SEO al migrar?', a: 'Mantenemos las URLs o configuramos redirects 301. El schema.org, sitemap, Open Graph y Core Web Vitals los implementamos bien en Strata (a veces mejor que en WP). Sin pérdida de posiciones.' },
        { q: '¿Cuánto cuesta cuando salga de la beta?', a: 'El plan de mantenimiento será 39€/mes (hosting + actualizaciones + soporte). Por 20€/mes en beta estás pagando solo el hosting. Los clientes beta tendrán un descuento del 50% de por vida.' },
        { q: '¿Puedo usar Strata para múltiples webs?', a: 'Sí, plan multi-site con un panel centralizado para gestionar todas tus webs desde un solo lugar. Precio por web.' },
        { q: '¿Y si quiero una funcionalidad custom?', a: 'Strata tiene API y webhooks. Para funcionalidades muy específicas, integramos con servicios externos (Formspree, Calendly, Stripe, etc.) o desarrollamos plugins a medida en el plan enterprise.' },
      ],
    },
    cta: {
      title: 'Solicita acceso anticipado a Strata',
      subtitle: 'Te preparamos un sandbox con tu contenido y te enseñamos cómo funciona. Sin coste durante la beta.',
    },
  },
  ca: {
    meta: {
      title: 'Strata — CMS amb IA per a webs que es mantenen soles · Sincronia Agency',
      description: 'CMS propi amb editor visual i assistent IA. Redueix el cost del teu web a la meitat. Manteniment gratuït fins al 2027 — només pagues 20€/mes d\'hostatge.',
    },
    hero: {
      eyebrow: 'Producte propi en beta',
      title: 'Strata — CMS amb IA per a webs autoeditables',
      subtitle: 'El CMS que hem construït per als nostres clients. Editor visual + assistent IA. Tu edites el teu web, nosaltres el mantenim.',
    },
    intro: {
      title: 'WordPress és molt flexible, però molt car de mantenir',
      paragraphs: [
        'Portem anys construint webs amb WordPress, Webflow, i frameworks a mida. Tots tenen el mateix problema: el cost de manteniment a 3-5 anys supera el cost inicial del web. Actualitzacions que trenquen plugins, atacs de seguretat, problemes de rendiment quan creix el trànsit, desenvolupador que cobra 60€/hora per "arreglar" coses.',
        'Strata és la nostra resposta. Un CMS propi amb editor visual (tipus Webflow, però més simple) i assistent IA integrat que ajuda el teu equip a crear i mantenir contingut sense tocar codi. La infraestructura la gestionem nosaltres, la seguretat la gestionem nosaltres, el rendiment l\'optimitzem nosaltres. Tu només edites contingut i publiques.',
        'Durant la beta, l\'hostatge està inclòs en els 20€/mes i el manteniment és gratuït fins al 2027. Sense permanències, sense costos ocults. És el mateix model amb el que vam provar Simplifica: clients beta a canvi de feedback real.',
      ],
    },
    features: {
      title: 'Què pot fer Strata pel teu web',
      items: [
        { title: 'Editor visual drag & drop', desc: 'Edita qualsevol pàgina amb blocs arrossegables. Sense HTML, sense shortcodes, sense haver d\'aprendre WordPress. Com Notion, però publica al teu domini.' },
        { title: 'Assistent IA integrat', desc: 'Genera esborranys de text, suggereix millores de SEO, proposa alt text per a imatges, resumeix textos llargs. Tu aproves abans de publicar.' },
        { title: 'Multi-idioma natiu', desc: 'Configura ES, CA, EN (o el que necessitis) amb hreflang automàtic. L\'assistent IA tradueix mantenint el to de la teva marca.' },
        { title: 'SEO tècnic inclòs', desc: 'Schema.org, sitemap, Core Web Vitals verds, Open Graph, canonicals. Configurat per defecte, no és un plugin que s\'activa al final.' },
      ],
    },
    pricing: {
      title: 'Fase beta: condicions especials',
      body: 'Durant la beta, hostatge + manteniment inclosos en 20€/mes (gratuït fins al 2027 per als 100 primers clients). Migrations el teu web actual a Strata sense cost. Si en 6 mesos no et convé, t\'ajudem a migrar a una altra plataforma i cancel·les amb un correu.',
    },
    faq: {
      title: 'Preguntes freqüents sobre Strata',
      items: [
        { q: 'Strata és per a mi o segueixo amb WordPress?', a: 'Strata és ideal si el teu web és principalment contingut (corporativa, blog, portfolio, catàleg) i vols que el teu equip l\'editi sense dependre d\'un desenvolupador. Per a e-commerce complex, comunitats o funcionalitats a mida, WordPress o un framework a mida segueixen sent millor opció.' },
        { q: 'Puc migrar el meu web de WordPress a Strata?', a: 'Sí. Migrations contingut, estructura, URLs (amb redirects 301) i disseny bàsic. Per a dissenys molt personalitzats, mantenim el front-end fet a mida i connectem Strata només com a CMS del contingut.' },
        { q: 'Què passa amb el meu SEO en migrar?', a: 'Mantenim les URLs o configurem redirects 301. El schema.org, sitemap, Open Graph i Core Web Vitals els implementem bé a Strata (de vegades millor que a WP). Sense pèrdua de posicions.' },
        { q: 'Quant costarà quan surti de la beta?', a: 'El pla de manteniment serà 39€/mes (hostatge + actualitzacions + suport). Per 20€/mes en beta estàs pagant només l\'hostatge. Els clients beta tindran un descompte del 50% de per vida.' },
        { q: 'Puc fer servir Strata per a múltiples webs?', a: 'Sí, pla multi-site amb un panell centralitzat per gestionar totes les teves webs des d\'un sol lloc. Preu per web.' },
        { q: 'I si vull una funcionalitat custom?', a: 'Strata té API i webhooks. Per a funcionalitats molt específiques, integrem amb serveis externs (Formspree, Calendly, Stripe, etc.) o desenvolupem plugins a mida al pla enterprise.' },
      ],
    },
    cta: {
      title: 'Sol·licita accés anticipat a Strata',
      subtitle: "Et preparem un sandbox amb el teu contingut i t'ensenyem com funciona. Sense cost durant la beta.",
    },
  },
  en: {
    meta: {
      title: 'Strata — AI-powered CMS for self-maintaining websites · Sincronia Agency',
      description: 'Our own CMS with visual editor and AI assistant. Cuts your website cost in half. Free maintenance until 2027 — you only pay €20/month for hosting.',
    },
    hero: {
      eyebrow: 'Our own product in beta',
      title: 'Strata — AI-powered CMS for self-editing websites',
      subtitle: 'The CMS we built for our clients. Visual editor + AI assistant. You edit your site, we maintain it.',
    },
    intro: {
      title: 'WordPress is very flexible, but very expensive to maintain',
      paragraphs: [
        'We have been building sites with WordPress, Webflow, and custom frameworks for years. They all have the same problem: maintenance cost at 3-5 years exceeds the initial site cost. Updates that break plugins, security attacks, performance issues when traffic grows, developer charging €60/hour to "fix" things.',
        'Strata is our answer. An own CMS with visual editor (Webflow-style but simpler) and integrated AI assistant that helps your team create and maintain content without touching code. We manage the infrastructure, we manage security, we optimise performance. You just edit content and publish.',
        'During beta, hosting is included in the €20/month and maintenance is free until 2027. No commitment, no hidden costs. It is the same model we tested with Simplifica: beta clients in exchange for real feedback.',
      ],
    },
    features: {
      title: 'What Strata can do for your website',
      items: [
        { title: 'Drag & drop visual editor', desc: 'Edit any page with draggable blocks. No HTML, no shortcodes, no learning WordPress. Like Notion, but publish to your domain.' },
        { title: 'Integrated AI assistant', desc: 'Generate text drafts, suggest SEO improvements, propose alt text for images, summarise long texts. You approve before publishing.' },
        { title: 'Native multi-language', desc: 'Configure ES, CA, EN (or what you need) with automatic hreflang. The AI assistant translates keeping your brand tone.' },
        { title: 'Technical SEO included', desc: 'Schema.org, sitemap, green Core Web Vitals, Open Graph, canonicals. Configured by default, not a plugin you switch on at the end.' },
      ],
    },
    pricing: {
      title: 'Beta phase: special conditions',
      body: 'During beta, hosting + maintenance included at €20/month (free until 2027 for the first 100 clients). We migrate your current site to Strata at no cost. If in 6 months it does not convince you, we help you migrate to another platform and you cancel with an email.',
    },
    faq: {
      title: 'Frequently asked questions about Strata',
      items: [
        { q: 'Is Strata for me or do I stay with WordPress?', a: 'Strata is ideal if your site is mainly content (corporate, blog, portfolio, catalogue) and you want your team to edit it without depending on a developer. For complex e-commerce, communities or custom features, WordPress or a custom framework are still the best option.' },
        { q: 'Can I migrate my WordPress site to Strata?', a: 'Yes. We migrate content, structure, URLs (with 301 redirects) and basic design. For highly customised designs, we keep the custom front-end and connect Strata only as the content CMS.' },
        { q: 'What happens to my SEO when migrating?', a: 'We keep URLs or configure 301 redirects. Schema.org, sitemap, Open Graph and Core Web Vitals are implemented properly in Strata (sometimes better than in WP). No loss of rankings.' },
        { q: 'How much will it cost when beta ends?', a: 'The maintenance plan will be €39/month (hosting + updates + support). For €20/month in beta you are only paying for hosting. Beta clients get a 50% lifetime discount.' },
        { q: 'Can I use Strata for multiple sites?', a: 'Yes, multi-site plan with a centralised panel to manage all your sites from one place. Price per site.' },
        { q: 'What if I want a custom feature?', a: 'Strata has API and webhooks. For very specific features, we integrate with external services (Formspree, Calendly, Stripe, etc.) or develop custom plugins in the enterprise plan.' },
      ],
    },
    cta: {
      title: 'Request early access to Strata',
      subtitle: 'We prepare a sandbox with your content and show you how it works. No cost during beta.',
    },
  },
};
