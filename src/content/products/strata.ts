import type { Locale } from '~/i18n/locales';
import type { ProductContent } from './simplifica';

export const strata: Record<Locale, ProductContent> = {
  es: {
    meta: {
      title: 'Strata — CMS con IA para webs que se mantienen solas · Sincronia Agency',
      description: 'CMS propio con editor visual y asistente IA. Reduce el coste de tu web a la mitad. Mantenimiento gratuito hasta 2027 — solo pagas 20€/mes de hosting.',
    },
    hero: {
      eyebrow: 'Producto propio en alpha',
      title: 'Strata — CMS con IA para webs autoeditables',
      subtitle: 'El CMS que estamos construyendo. Editor visual + asistente IA. Apúntate a la lista de espera para acceso anticipado cuando abramos la beta.',
    },
    intro: {
      title: 'WordPress es muy flexible, pero muy caro de mantener',
      paragraphs: [
        'Llevamos años construyendo webs con WordPress, Webflow, y frameworks a medida. Todos tienen el mismo problema: el coste de mantenimiento a 3-5 años supera el coste inicial de la web. Actualizaciones que rompen plugins, ataques de seguridad, problemas de rendimiento cuando crece el tráfico, desarrollador que cobra 60€/hora para "arreglar" cosas.',
        'Strata es nuestra respuesta. Un CMS propio con editor visual (tipo Webflow, pero más simple) y asistente IA integrado que ayuda a tu equipo a crear y mantener contenido sin tocar código. La infraestructura la gestionamos nosotros, la seguridad la gestionamos nosotros, el rendimiento lo optimizamos nosotros. Tú solo editas contenido y publicas.',
        'Strata está ahora en fase alpha: el producto funciona en entornos controlados, pero aún no está pulido para uso general. Si quieres acceso anticipado y nos das feedback real a cambio de descuento de por vida, apúntate a la lista de espera. Cuando abramos la beta pública (prevista para 2026), los 100 primeros de la lista tendrán condiciones especiales.',
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
      title: 'Fase alpha: acceso anticipado por lista de espera',
      body: 'Los precios de la tabla son estimaciones sujetas a cambios antes de la beta pública. El acceso en alpha es por invitación: te preparamos un sandbox con tu contenido, te enseñamos cómo funciona, y nos das feedback real a cambio de un descuento de por vida cuando salgamos a beta.',
    },
    faq: {
      title: 'Preguntas frecuentes sobre Strata',
      items: [
        { q: '¿Strata es para mí o sigo con WordPress?', a: 'Strata es ideal si tu web es principalmente contenido (corporativa, blog, portfolio, catálogo) y quieres que tu equipo la edite sin depender de un desarrollador. Para e-commerce complejo, comunidades o funcionalidades a medida, WordPress o un framework a medida siguen siendo mejor opción.' },
        { q: '¿Puedo migrar mi web de WordPress a Strata?', a: 'Sí. Cuando abramos la beta, migramos contenido, estructura, URLs (con redirects 301) y diseño básico. Para diseños muy personalizados, mantenemos el front-end hecho a medida y conectamos Strata solo como CMS del contenido.' },
        { q: '¿Qué pasa con mi SEO al migrar?', a: 'Mantenemos las URLs o configuramos redirects 301. El schema.org, sitemap, Open Graph y Core Web Vitals los implementamos bien en Strata (a veces mejor que en WP). Sin pérdida de posiciones.' },
        { q: '¿Cuánto costará cuando salga de alpha?', a: 'Los precios actuales son estimaciones: 20–100€/mes según el tier. El plan de mantenimiento incluirá hosting + actualizaciones + soporte. Los clientes alpha tendrán un descuento de por vida por ayudarnos en la fase temprana.' },
        { q: '¿Puedo usar Strata para múltiples webs?', a: 'Sí, plan multi-site con un panel centralizado para gestionar todas tus webs desde un solo lugar. Precio por web.' },
        { q: '¿Y si quiero una funcionalidad custom?', a: 'Strata tiene API y webhooks. Para funcionalidades muy específicas, integramos con servicios externos (Formspree, Calendly, Stripe, etc.) o desarrollamos plugins a medida en el plan enterprise.' },
      ],
    },
    cta: {
      title: 'Apúntate a la lista de espera de Strata',
      subtitle: 'Te avisamos cuando abramos la beta y te preparamos un sandbox con tu contenido. Sin coste durante la fase alpha.',
    },
  },
  ca: {
    meta: {
      title: 'Strata — CMS amb IA per a webs que es mantenen soles · Sincronia Agency',
      description: 'CMS propi amb editor visual i assistent IA. Redueix el cost del teu web a la meitat. Manteniment gratuït fins al 2027 — només pagues 20€/mes d\'hostatge.',
    },
    hero: {
      eyebrow: 'Producte propi en alpha',
      title: 'Strata — CMS amb IA per a webs autoeditables',
      subtitle: "El CMS que estem construint. Editor visual + assistent IA. Apunta't a la llista d'espera per a accés anticipat quan obrim la beta.",
    },
    intro: {
      title: 'WordPress és molt flexible, però molt car de mantenir',
      paragraphs: [
        'Portem anys construint webs amb WordPress, Webflow, i frameworks a mida. Tots tenen el mateix problema: el cost de manteniment a 3-5 anys supera el cost inicial del web. Actualitzacions que trenquen plugins, atacs de seguretat, problemes de rendiment quan creix el trànsit, desenvolupador que cobra 60€/hora per "arreglar" coses.',
        'Strata és la nostra resposta. Un CMS propi amb editor visual (tipus Webflow, però més simple) i assistent IA integrat que ajuda el teu equip a crear i mantenir contingut sense tocar codi. La infraestructura la gestionem nosaltres, la seguretat la gestionem nosaltres, el rendiment l\'optimitzem nosaltres. Tu només edites contingut i publiques.',
        'Strata està ara en fase alpha: el producte funciona en entorns controlats, però encara no està polit per a ús general. Si vols accés anticipat i ens dones feedback real a canvi de descompte de per vida, apunta\'t a la llista d\'espera. Quan obrim la beta pública (prevista per al 2026), els 100 primers de la llista tindran condicions especials.',
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
      title: "Fase alpha: accés anticipat per llista d'espera",
      body: "Els preus de la taula són estimacions subjectes a canvis abans de la beta pública. L'accés en alpha és per invitació: et preparem un sandbox amb el teu contingut, t'ensenyem com funciona, i ens dones feedback real a canvi d'un descompte de per vida quan sortim a beta.",
    },
    faq: {
      title: 'Preguntes freqüents sobre Strata',
      items: [
        { q: 'Strata és per a mi o segueixo amb WordPress?', a: 'Strata és ideal si el teu web és principalment contingut (corporativa, blog, portfolio, catàleg) i vols que el teu equip l\'editi sense dependre d\'un desenvolupador. Per a e-commerce complex, comunitats o funcionalitats a mida, WordPress o un framework a mida segueixen sent millor opció.' },
        { q: 'Puc migrar el meu web de WordPress a Strata?', a: 'Sí. Quan obrim la beta, migrations contingut, estructura, URLs (amb redirects 301) i disseny bàsic. Per a dissenys molt personalitzats, mantenim el front-end fet a mida i connectem Strata només com a CMS del contingut.' },
        { q: 'Què passa amb el meu SEO en migrar?', a: 'Mantenim les URLs o configurem redirects 301. El schema.org, sitemap, Open Graph i Core Web Vitals els implementem bé a Strata (de vegades millor que a WP). Sense pèrdua de posicions.' },
        { q: 'Quant costarà quan surti d\'alpha?', a: 'Els preus actuals són estimacions: 20–100€/mes segons el tier. El pla de manteniment inclourà hostatge + actualitzacions + suport. Els clients alpha tindran un descompte de per vida per ajudar-nos en la fase primerenca.' },
        { q: 'Puc fer servir Strata per a múltiples webs?', a: 'Sí, pla multi-site amb un panell centralitzat per gestionar totes les teves webs des d\'un sol lloc. Preu per web.' },
        { q: 'I si vull una funcionalitat custom?', a: 'Strata té API i webhooks. Per a funcionalitats molt específiques, integrem amb serveis externs (Formspree, Calendly, Stripe, etc.) o desenvolupem plugins a mida al pla enterprise.' },
      ],
    },
    cta: {
      title: "Apunta't a la llista d'espera de Strata",
      subtitle: "T'avísem quan obrim la beta i et preparem un sandbox amb el teu contingut. Sense cost durant la fase alpha.",
    },
  },
  en: {
    meta: {
      title: 'Strata — AI-powered CMS for self-maintaining websites · Sincronia Agency',
      description: 'Our own CMS with visual editor and AI assistant. Cuts your website cost in half. Free maintenance until 2027 — you only pay €20/month for hosting.',
    },
    hero: {
      eyebrow: 'Our own product in alpha',
      title: 'Strata — AI-powered CMS for self-editing websites',
      subtitle: 'The CMS we are building. Visual editor + AI assistant. Join the waitlist for early access when we open the beta.',
    },
    intro: {
      title: 'WordPress is very flexible, but very expensive to maintain',
      paragraphs: [
        'We have been building sites with WordPress, Webflow, and custom frameworks for years. They all have the same problem: maintenance cost at 3-5 years exceeds the initial site cost. Updates that break plugins, security attacks, performance issues when traffic grows, developer charging €60/hour to "fix" things.',
        'Strata is our answer. An own CMS with visual editor (Webflow-style but simpler) and integrated AI assistant that helps your team create and maintain content without touching code. We manage the infrastructure, we manage security, we optimise performance. You just edit content and publish.',
        'Strata is in alpha right now: the product works in controlled environments, but is not yet polished for general use. If you want early access and give us real feedback in exchange for a lifetime discount, join the waitlist. When we open public beta (planned for 2026), the first 100 on the list get special terms.',
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
      title: 'Alpha phase: early access via waitlist',
      body: 'Prices in the table are estimates subject to change before public beta. Alpha access is by invitation: we set up a sandbox with your content, show you how it works, and you give us real feedback in exchange for a lifetime discount when we go to beta.',
    },
    faq: {
      title: 'Frequently asked questions about Strata',
      items: [
        { q: 'Is Strata for me or do I stay with WordPress?', a: 'Strata is ideal if your site is mainly content (corporate, blog, portfolio, catalogue) and you want your team to edit it without depending on a developer. For complex e-commerce, communities or custom features, WordPress or a custom framework are still the best option.' },
        { q: 'Can I migrate my WordPress site to Strata?', a: 'Yes. When we open beta, we migrate content, structure, URLs (with 301 redirects) and basic design. For highly customised designs, we keep the custom front-end and connect Strata only as the content CMS.' },
        { q: 'What happens to my SEO when migrating?', a: 'We keep URLs or configure 301 redirects. Schema.org, sitemap, Open Graph and Core Web Vitals are implemented properly in Strata (sometimes better than in WP). No loss of rankings.' },
        { q: 'How much will it cost when alpha ends?', a: 'Current prices are estimates: €20–100/month depending on the tier. The maintenance plan will include hosting + updates + support. Alpha clients get a lifetime discount for helping us in the early phase.' },
        { q: 'Can I use Strata for multiple sites?', a: 'Yes, multi-site plan with a centralised panel to manage all your sites from one place. Price per site.' },
        { q: 'What if I want a custom feature?', a: 'Strata has API and webhooks. For very specific features, we integrate with external services (Formspree, Calendly, Stripe, etc.) or develop custom plugins in the enterprise plan.' },
      ],
    },
    cta: {
      title: 'Join the Strata waitlist',
      subtitle: 'We will let you know when we open beta and set up a sandbox with your content. No cost during the alpha phase.',
    },
  },
};
