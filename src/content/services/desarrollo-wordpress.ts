import type { Locale } from '~/i18n/locales';
import type { ServiceContent } from './mantenimiento-wordpress';

export const desarrolloWordpress: Record<Locale, ServiceContent> = {
  es: {
    meta: {
      title: 'Desarrollo WordPress en Tarragona · Sincronia Agency',
      description: 'Diseño y desarrollo de webs a medida con WordPress: desde landings de 400€ hasta e-commerce completo. SEO técnico integrado desde el primer commit.',
    },
    hero: {
      eyebrow: 'Servicio',
      title: 'Desarrollo WordPress a medida en Tarragona',
      subtitle: 'Webs únicas, rápidas y posicionables. Sin plantillas cerradas, sin constructores pesados, sin sorpresas a los seis meses.',
    },
    intro: {
      title: 'WordPress a medida, no plantilla con tu logo',
      paragraphs: [
        'WordPress mueve el 43% de las webs del mundo, y por buenas razones: flexible, escalable, con un ecosistema que no depende de un único proveedor. Pero también es el CMS donde más "trampas" se cometen: themes comprados en marketplaces que no se actualizan, constructores visuales que añaden 800 KB de JavaScript, plugins premium abandonados por sus autores.',
        'En Sincronia Agency no instalamos un theme y le cambiamos el color. Diseñamos y desarrollamos WordPress desde el inicio: theme propio o starter robusto (Sage, Customify), arquitectura de contenido pensada para SEO desde el día uno, plugins精选 y mantenidos, y código que otro desarrollador puede entender y extender sin maldecirnos.',
        'Desde 2017 hemos lanzado webs para clientes de Tarragona, Reus, El Vendrell, Cambrils y Tortosa: landings de captación, e-commerce con WooCommerce, plataformas de reservas, webs corporativas multidioma. Si tu proyecto cabe en WordPress, lo construimos. Si no cabe, te decimos qué sí.',
      ],
    },
    includes: {
      title: 'Qué incluye el desarrollo',
      items: [
        { title: 'Diseño UX/UI a medida', desc: 'Wireframes, mockups y diseño visual específico para tu marca. No partimos de un theme que luego se parece a 5.000 webs más.' },
        { title: 'Desarrollo con theme propio o starter robusto', desc: 'Sage (Roots), Timber o tema propio minimalista. Código limpio, mantenible, sin dependencias fantasma.' },
        { title: 'E-commerce con WooCommerce', desc: 'Si vendes online, montamos WooCommerce con la pasarela que prefieras, configuración fiscal correcta y envíos optimizados.' },
        { title: 'SEO técnico desde el primer commit', desc: 'Schema.org, sitemap, canonicals, hreflang, Core Web Vitals, structured data, Open Graph. El SEO no es un plugin que se activa al final.' },
        { title: 'Editor de bloques Gutenberg', desc: 'Tu equipo podrá editar contenido sin tocarnos: bloques personalizados para tus casos de uso reales, training incluido.' },
        { title: 'Integraciones a medida', desc: 'CRM, ERP, pasarelas de pago, email marketing, herramientas de analítica. Hacemos que WordPress hable con tu stack.' },
        { title: 'Formación al equipo', desc: 'Sesión de 2h al lanzamiento para que tu equipo pueda mantener la web sin depender de nosotros para todo.' },
        { title: 'Plan de mantenimiento opcional', desc: 'Si quieres que nos encarguemos de las actualizaciones y monitorización, te lo dejamos presupuestado desde el día uno.' },
      ],
    },
    process: {
      title: 'Cómo trabajamos un proyecto web',
      steps: [
        { num: '01', title: 'Discovery', desc: 'Reunión de kick-off para entender tu negocio, audiencia, competidores y objetivos. Definimos alcance, plazos y presupuesto cerrado.' },
        { num: '02', title: 'Diseño UX/UI', desc: 'Wireframes de baja fidelidad, mockups visuales, iteración contigo. Probamos la arquitectura de información antes de tocar código.' },
        { num: '03', title: 'Desarrollo iterativo', desc: 'Construimos por sprints de 1-2 semanas. Cada sprint tiene una demo donde ves el avance y das feedback.' },
        { num: '04', title: 'Lanzamiento y formación', desc: 'Deploy, configuración de analytics, formación al equipo, handover del proyecto. Tu web queda lista y tu equipo la puede mantener.' },
      ],
    },
    pricing: {
      title: 'Precio y forma de pago',
      body: '4 planes por proyecto: Landing 400€ (hasta 3 secciones, sin blog), One-Page 600€ (hasta 10 secciones, sin blog), Web corporativa 1000€ (5-10 páginas + blog), E-commerce 1400€ (WooCommerce + pasarela). Forma de pago: 40% al inicio, 30% a mitad, 30% al lanzamiento. Sin sorpresas, sin extras no acordados.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuánto cuesta una web WordPress?', a: 'Desde 400€ para una landing de 1 vista, hasta 1400€ para un e-commerce con WooCommerce y pasarela. Los planes intermedios: One-Page 600€ y Web corporativa 1000€. Si tu proyecto se sale de estos planes, te presupuestamos a medida.' },
        { q: '¿Cuánto tarda un proyecto web?', a: 'Una landing: 2-3 semanas. Una web corporativa: 4-6 semanas. Un e-commerce con varios productos: 6-10 semanas. Te lo confirmamos en el discovery.' },
        { q: '¿Usáis constructores como Elementor o Divi?', a: 'Solo si el cliente lo pide explícitamente y entiende las implicaciones (rendimiento, mantenimiento, lock-in). Por defecto, Gutenberg con bloques personalizados.' },
        { q: '¿Puedo traer mi propio diseño?', a: 'Por supuesto. Si tienes un diseño en Figma, Sketch o Adobe XD, lo implementamos tal cual. Si no tienes, lo diseñamos nosotros.' },
        { q: '¿La web será mía cuando termine el proyecto?', a: 'Sí. El código, los contenidos, el dominio y el hosting son tuyos al 100%. Te entregamos todo y te enseñamos a gestionarlo.' },
        { q: '¿Y si después quiero ampliar?', a: 'Te dejamos el código preparado para crecer. Si quieres una nueva sección, funcionalidad o integración, presupuestamos aparte y lo añadimos.' },
        { q: '¿Hacéis webs multidioma?', a: 'Sí, con WPML o Polylang. Compatible con el SEO multidioma (hreflang, subdominios o subdirectorios según el caso).' },
      ],
    },
    cta: {
      title: '¿Listo para tu nueva web?',
      subtitle: 'Cuéntanos tu proyecto. Te respondemos en menos de 24h con un primer alcance y presupuesto.',
    },
  },
  ca: {
    meta: {
      title: 'Desenvolupament WordPress a Tarragona · Sincronia Agency',
      description: 'Disseny i desenvolupament de llocs web a mida amb WordPress: des de landings de 400€ fins a e-commerce complet. SEO tècnic integrat des del primer commit.',
    },
    hero: {
      eyebrow: 'Servei',
      title: 'Desenvolupament WordPress a mida a Tarragona',
      subtitle: 'Llocs web únics, ràpids i posicionables. Sense plantilles tancades, sense constructors pesats, sense sorpreses als sis mesos.',
    },
    intro: {
      title: 'WordPress a mida, no plantilla amb el teu logotip',
      paragraphs: [
        'WordPress mou el 43% dels llocs web del món, i per bones raons: flexible, escalable, amb un ecosistema que no depèn d\'un únic proveïdor. Però també és el CMS on més "trampes" es fan: temes comprats en marketplaces que no s\'actualitzen, constructors visuals que afegeixen 800 KB de JavaScript, plugins premium abandonats pels seus autors.',
        'A Sincronia Agency no instal·lem un tema i li canviem el color. Dissenym i desenvolupem WordPress des de l\'inici: tema propi o starter robust (Sage, Customify), arquitectura de contingut pensada per a SEO des del dia u, plugins seleccionats i mantinguts, i codi que un altre desenvolupador pot entendre i estendre sense maleir-nos.',
        'Des del 2017 hem llançat llocs web per a clients de Tarragona, Reus, El Vendrell, Cambrils i Tortosa: landings de captació, e-commerce amb WooCommerce, plataformes de reserves, webs corporatives multilingües. Si el teu projecte cap a WordPress, el construïm. Si no hi cap, et diem què sí.',
      ],
    },
    includes: {
      title: 'Què inclou el desenvolupament',
      items: [
        { title: 'Disseny UX/UI a mida', desc: 'Wireframes, mockups i disseny visual específic per a la teva marca. No partim d\'un tema que després s\'assembla a 5.000 webs més.' },
        { title: 'Desenvolupament amb tema propi o starter robust', desc: 'Sage (Roots), Timber o tema propi minimalista. Codi net, mantenible, sense dependències fantasma.' },
        { title: 'E-commerce amb WooCommerce', desc: 'Si vens online, muntem WooCommerce amb la pasarel·la que prefereixis, configuració fiscal correcta i enviaments optimitzats.' },
        { title: 'SEO tècnic des del primer commit', desc: 'Schema.org, sitemap, canonicals, hreflang, Core Web Vitals, structured data, Open Graph. El SEO no és un plugin que s\'activa al final.' },
        { title: 'Editor de blocs Gutenberg', desc: 'El teu equip podrà editar contingut sense tocar-nos: blocs personalitzats per als teus casos d\'ús reals, training inclòs.' },
        { title: 'Integracions a mida', desc: 'CRM, ERP, pasarel·les de pagament, email marketing, eines d\'analítica. Fem que WordPress parli amb el teu stack.' },
        { title: 'Formació a l\'equip', desc: 'Sessió de 2h al llançament perquè el teu equip pugui mantenir el web sense dependre de nosaltres per a tot.' },
        { title: 'Pla de manteniment opcional', desc: 'Si vols que ens encarreguem de les actualitzacions i monitoratge, te\'l deixem pressupostat des del dia u.' },
      ],
    },
    process: {
      title: 'Com treballem un projecte web',
      steps: [
        { num: '01', title: 'Discovery', desc: 'Reunió de kick-off per entendre el teu negoci, audiència, competidors i objectius. Definim abast, terminis i pressupost tancat.' },
        { num: '02', title: 'Disseny UX/UI', desc: 'Wireframes de baixa fidelitat, mockups visuals, iteració amb tu. Provem l\'arquitectura d\'informació abans de tocar codi.' },
        { num: '03', title: 'Desenvolupament iteratiu', desc: 'Construïm per sprints d\'1-2 setmanes. Cada sprint té una demo on veus l\'avanç i dones feedback.' },
        { num: '04', title: 'Llançament i formació', desc: 'Deploy, configuració d\'analytics, formació a l\'equip, handover del projecte. El teu web queda llest i el teu equip el pot mantenir.' },
      ],
    },
    pricing: {
      title: 'Preu i forma de pagament',
      body: '4 plans per projecte: Landing 400€ (fins a 3 seccions, sense bloc), One-Page 600€ (fins a 10 seccions, sense bloc), Web corporativa 1000€ (5-10 pàgines + bloc), E-commerce 1400€ (WooCommerce + pasarel·la). Forma de pagament: 40% a l\'inici, 30% a meitat, 30% al llançament. Sense sorpreses, sense extres no acordats.',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        { q: 'Quant costa un web WordPress?', a: 'Des de 400€ per a una landing d\'1 vista, fins a 1400€ per a un e-commerce amb WooCommerce i pasarel·la. Els plans intermitjos: One-Page 600€ i Web corporativa 1000€. Si el teu projecte surt d\'aquests plans, t\'ho pressupostem a mida.' },
        { q: 'Quant triga un projecte web?', a: 'Una landing: 2-3 setmanes. Una web corporativa: 4-6 setmanes. Un e-commerce amb diversos productes: 6-10 setmanes. T\'ho confirmem al discovery.' },
        { q: 'Feu servir constructors com Elementor o Divi?', a: 'Només si el client ho demana explícitament i entén les implicacions (rendiment, manteniment, lock-in). Per defecte, Gutenberg amb blocs personalitzats.' },
        { q: 'Puc portar el meu propi disseny?', a: 'Per descomptat. Si tens un disseny en Figma, Sketch o Adobe XD, l\'implementem tal qual. Si no en tens, el dissenyem nosaltres.' },
        { q: 'El web serà meu quan acabi el projecte?', a: 'Sí. El codi, els continguts, el domini i el hosting són teus al 100%. T\'entreguem tot i t\'ensenyem a gestionar-ho.' },
        { q: 'I si després vull ampliar?', a: 'Et deixem el codi preparat per créixer. Si vols una nova secció, funcionalitat o integració, pressupostem a part i ho afegim.' },
        { q: 'Feu webs multilingües?', a: 'Sí, amb WPML o Polylang. Compatible amb el SEO multilingüe (hreflang, subdominis o subdirectoris segons el cas).' },
      ],
    },
    cta: {
      title: 'Llest per al teu nou web?',
      subtitle: "Explica'ns el teu projecte. Et responem en menys de 24h amb un primer abast i pressupost.",
    },
  },
  en: {
    meta: {
      title: 'WordPress development in Tarragona · Sincronia Agency',
      description: 'Bespoke WordPress design and development: from €400 landings to full e-commerce. Technical SEO integrated from the first commit.',
    },
    hero: {
      eyebrow: 'Service',
      title: 'Bespoke WordPress development in Tarragona',
      subtitle: 'Unique, fast and rankable websites. No closed templates, no heavy builders, no surprises six months in.',
    },
    intro: {
      title: 'Bespoke WordPress, not a template with your logo',
      paragraphs: [
        'WordPress powers 43% of the world\'s websites, and for good reasons: flexible, scalable, with an ecosystem that does not depend on a single vendor. But it is also the CMS where most "traps" happen: themes bought in marketplaces that never get updated, visual builders that add 800 KB of JavaScript, premium plugins abandoned by their authors.',
        'At Sincronia Agency we do not install a theme and change the colour. We design and develop WordPress from the ground up: own theme or robust starter (Sage, Customify), content architecture designed for SEO from day one, curated and maintained plugins, and code another developer can understand and extend without cursing us.',
        'Since 2017 we have launched websites for clients in Tarragona, Reus, El Vendrell, Cambrils and Tortosa: lead generation landings, WooCommerce stores, booking platforms, multilingual corporate sites. If your project fits in WordPress, we will build it. If it does not, we will tell you what does.',
      ],
    },
    includes: {
      title: 'What the development includes',
      items: [
        { title: 'Bespoke UX/UI design', desc: 'Wireframes, mockups and visual design specific to your brand. We do not start from a theme that then looks like 5,000 other websites.' },
        { title: 'Development with own theme or robust starter', desc: 'Sage (Roots), Timber or a minimalist own theme. Clean, maintainable code, no phantom dependencies.' },
        { title: 'E-commerce with WooCommerce', desc: 'If you sell online, we set up WooCommerce with your preferred gateway, correct tax configuration and optimised shipping.' },
        { title: 'Technical SEO from the first commit', desc: 'Schema.org, sitemap, canonicals, hreflang, Core Web Vitals, structured data, Open Graph. SEO is not a plugin you switch on at the end.' },
        { title: 'Gutenberg block editor', desc: 'Your team can edit content without depending on us: custom blocks for your real use cases, training included.' },
        { title: 'Bespoke integrations', desc: 'CRM, ERP, payment gateways, email marketing, analytics tools. We make WordPress talk to your stack.' },
        { title: 'Team training', desc: '2-hour session at launch so your team can maintain the site without depending on us for everything.' },
        { title: 'Optional maintenance plan', desc: 'If you want us to handle updates and monitoring, we budget it in from day one.' },
      ],
    },
    process: {
      title: 'How we work a web project',
      steps: [
        { num: '01', title: 'Discovery', desc: 'Kick-off meeting to understand your business, audience, competitors and goals. We define scope, timeline and fixed budget.' },
        { num: '02', title: 'UX/UI design', desc: 'Low-fidelity wireframes, visual mockups, iteration with you. We test the information architecture before touching code.' },
        { num: '03', title: 'Iterative development', desc: 'We build in 1-2 week sprints. Each sprint has a demo where you see progress and give feedback.' },
        { num: '04', title: 'Launch and training', desc: 'Deploy, analytics setup, team training, project handover. Your site is ready and your team can maintain it.' },
      ],
    },
    pricing: {
      title: 'Price and payment terms',
      body: '4 project plans: Landing €400 (up to 3 sections, no blog), One-Page €600 (up to 10 sections, no blog), Corporate website €1000 (5-10 pages + blog), E-commerce €1400 (WooCommerce + payment gateway). Payment: 40% upfront, 30% mid-project, 30% at launch. No surprises, no unagreed extras.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How much does a WordPress site cost?', a: 'From €400 for a 1-view landing, up to €1400 for an e-commerce with WooCommerce and payment gateway. Mid-range plans: One-Page €600 and Corporate website €1000. If your project falls outside these plans, we quote it bespoke.' },
        { q: 'How long does a web project take?', a: 'A landing: 2-3 weeks. A corporate site: 4-6 weeks. An e-commerce with several products: 6-10 weeks. We confirm in discovery.' },
        { q: 'Do you use builders like Elementor or Divi?', a: 'Only if the client asks explicitly and understands the implications (performance, maintenance, lock-in). By default, Gutenberg with custom blocks.' },
        { q: 'Can I bring my own design?', a: 'Of course. If you have a design in Figma, Sketch or Adobe XD, we implement it as is. If you do not, we design it.' },
        { q: 'Will the website be mine when the project ends?', a: 'Yes. Code, content, domain and hosting are 100% yours. We hand over everything and teach you to manage it.' },
        { q: 'What if I want to expand later?', a: 'We leave the code ready to grow. If you want a new section, feature or integration, we quote it separately and add it.' },
        { q: 'Do you build multilingual sites?', a: 'Yes, with WPML or Polylang. Compatible with multilingual SEO (hreflang, subdomains or subdirectories depending on the case).' },
      ],
    },
    cta: {
      title: 'Ready for your new website?',
      subtitle: 'Tell us about your project. We reply in under 24 hours with a first scope and budget.',
    },
  },
};
