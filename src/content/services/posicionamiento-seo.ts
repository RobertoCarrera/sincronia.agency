import type { Locale } from '~/i18n/locales';
import type { ServiceContent } from './mantenimiento-wordpress';

export const posicionamientoSeo: Record<Locale, ServiceContent> = {
  es: {
    meta: {
      title: 'Posicionamiento SEO en Tarragona · Sincronia Agency',
      description: 'SEO técnico, contenido y link building local para que tu web aparezca en Google cuando alguien busca tus servicios en Tarragona y provincia. Desde 290€/mes.',
    },
    hero: {
      eyebrow: 'Servicio',
      title: 'SEO local en Tarragona y provincia',
      subtitle: 'Para que te encuentren en Google cuando alguien busca lo que haces. SEO técnico, contenido y autoridad local.',
    },
    intro: {
      title: 'Por qué el SEO local es tu mejor inversión',
      paragraphs: [
        'Si tienes un negocio local — una clínica en Reus, un taller en El Vendrell, una asesoría en Tortosa — tus clientes te buscan en Google con búsquedas como "dentista Reus" o "asesoría fiscal Tarragona". Si no apareces en las primeras posiciones, no existes. Y los anuncios de Google Ads son caros: cada clic te cuesta entre 1€ y 10€ dependiendo del sector.',
        'El SEO local bien hecho es la inversión con mejor retorno a medio plazo: un click orgánico es gratis, y los resultados se acumulan con el tiempo. La clave es hacer SEO técnico desde el inicio (tu web tiene que ser rápida, accesible y bien estructurada para Google), publicar contenido que responde a las preguntas de tus clientes, y construir autoridad local (Google Business Profile, directorios, menciones, enlaces de webs de tu zona).',
        'Desde 2017 trabajamos SEO local para clientes de Tarragona y provincia. Conocemos el mercado, laskeywords del sector, y las señales que Google valora en cada nicho. No vendemos paquetes genéricos: cada proyecto SEO empieza con una auditoría real y termina con un plan ejecutable.',
      ],
    },
    includes: {
      title: 'Qué incluye el servicio SEO',
      items: [
        { title: 'Auditoría SEO técnica', desc: 'Revisión completa de tu web: rastreo, indexación, velocidad, Core Web Vitals, schema.org, canibalización de keywords, contenido duplicado, enlaces rotos.' },
        { title: 'Keyword research local', desc: 'Investigación de las palabras clave que tus clientes buscan: por servicio, por municipio, por intención (informacional, transaccional, navegación).' },
        { title: 'SEO on-page', desc: 'Optimización de títulos, meta descriptions, headings, contenido, estructura de URLs, enlazado interno, imágenes. Para cada página importante de tu web.' },
        { title: 'Google Business Profile', desc: 'Configuración y optimización completa de tu ficha de Google: categorías, servicios, fotos, posts, reseñas, horarios. La ficha aparece en el Local Pack y Google Maps.' },
        { title: 'Estrategia de contenidos', desc: 'Calendario editorial de 6-12 meses con los temas que tu audiencia busca. Te lo damos listo para ejecutar (con redactor opcional).' },
        { title: 'Link building local', desc: 'Construcción de autoridad con menciones y enlaces desde webs relevantes: directorios locales, medios de comunicación, blogs sectoriales, partners.' },
        { title: 'Reportes mensuales', desc: 'Informes claros: posiciones, tráfico orgánico, conversiones, acciones realizadas. Sin jerga, con lo que importa al negocio.' },
        { title: 'Reuniones de seguimiento', desc: 'Una reunión mensual para revisar resultados, ajustar estrategia y planificar el siguiente sprint.' },
      ],
    },
    process: {
      title: 'Cómo trabajamos un proyecto SEO',
      steps: [
        { num: '01', title: 'Auditoría inicial', desc: 'Revisamos tu web actual, tu presencia local, tus competidores. Te entregamos un informe con lo que funciona, lo que falla, y las oportunidades.' },
        { num: '02', title: 'Estrategia y plan', desc: 'Definimos objetivos (tráfico, posiciones, leads), keywords prioritarias, acciones técnicas, calendario de contenidos, presupuesto mensual.' },
        { num: '03', title: 'Ejecución mensual', desc: 'Implementamos las acciones técnicas, publicamos contenido, construimos enlaces, optimizamos tu Google Business Profile. Cada mes, entregable concreto.' },
        { num: '04', title: 'Medición y ajuste', desc: 'Medimos resultados, comparamos contra objetivos, ajustamos la estrategia. SEO es un proceso iterativo, no un proyecto con final.' },
      ],
    },
    pricing: {
      title: 'Precio y compromiso',
      body: 'Plan mensual de 290€. Incluye auditoría inicial, keyword research, optimizaciones técnicas, contenido (2-4 piezas/mes), link building, reportes y reuniones. Sin permanencia: cancelas con un email y te quedas con todos los activos (textos, enlaces, datos).',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuánto tarda en verse resultados?', a: 'SEO es medio-largo plazo. Primeros movimientos: 1-2 meses. Resultados significativos: 4-6 meses. ROI sostenido: 6-12 meses. No hay atajos sin riesgo de penalización.' },
        { q: '¿Garantizáis posiciones?', a: 'No. Nadie serio garantiza posiciones en Google (si te lo garantizan, sal corriendo). Lo que sí garantizamos es trabajo técnico impecable, contenido de calidad, y transparencia total con los datos.' },
        { q: '¿Trabajáis con webs que no son vuestras?', a: 'Sí, hacemos auditorías y SEO sobre webs de terceros. Si la web está muy mal técnicamente, recomendamos rehacerla antes de invertir en SEO.' },
        { q: '¿Y el SEO internacional?', a: 'SEO internacional (hreflang, subdominios por país, etc.) lo cubrimos con la configuración multidioma de Astro. Es parte del setup técnico desde el inicio.' },
        { q: '¿Hacéis SEO local para una sola ciudad o para toda la provincia?', a: 'Ambos. Podemos enfocar el SEO a una ciudad (donde está tu sede principal) o atacar varias ciudades con páginas dedicadas (recomendado para "dominar" la provincia).' },
        { q: '¿Qué pasa con las actualizaciones de Google?', a: 'Las seguimos. Te informamos de cualquier cambio relevante (Core Update, nuevo factor de ranking) y ajustamos la estrategia si hace falta.' },
      ],
    },
    cta: {
      title: '¿Quieres aparecer en Google cuando te buscan?',
      subtitle: 'Pide una auditoría SEO gratuita de tu web. Te diremos exactamente qué necesita.',
    },
  },
  ca: {
    meta: {
      title: 'Posicionament SEO a Tarragona · Sincronia Agency',
      description: 'SEO tècnic, contingut i link building local perquè el teu web aparegui a Google quan algú busca els teus serveis a Tarragona i província. Des de 290€/mes.',
    },
    hero: {
      eyebrow: 'Servei',
      title: 'SEO local a Tarragona i província',
      subtitle: 'Perquè et trobin a Google quan algú busca el que fas. SEO tècnic, contingut i autoritat local.',
    },
    intro: {
      title: 'Per què el SEO local és la teva millor inversió',
      paragraphs: [
        'Si tens un negoci local — una clínica a Reus, un taller a El Vendrell, una assessoria a Tortosa — els teus clients et busquen a Google amb cerques com "dentista Reus" o "assessoria fiscal Tarragona". Si no apareixes a les primeres posicions, no existeixes. I els anuncis de Google Ads són cars: cada clic et costa entre 1€ i 10€ segons el sector.',
        'El SEO local ben fet és la inversió amb millor retorn a mitjà termini: un click orgànic és gratis, i els resultats s\'acumulen amb el temps. La clau és fer SEO tècnic des de l\'inici (el teu web ha de ser ràpid, accessible i ben estructurat per a Google), publicar contingut que respon a les preguntes dels teus clients, i construir autoritat local (Google Business Profile, directoris, mencions, enllaços de webs de la teva zona).',
        'Des del 2017 treballem SEO local per a clients de Tarragona i província. Coneixem el mercat, les paraules clau del sector, i els senyals que Google valora en cada nínxol. No venem paquets genèrics: cada projecte SEO comença amb una auditoria real i acaba amb un plan executable.',
      ],
    },
    includes: {
      title: 'Què inclou el servei SEO',
      items: [
        { title: 'Auditoria SEO tècnica', desc: 'Revisió completa del teu web: rastreig, indexació, velocitat, Core Web Vitals, schema.org, canibalització de paraules clau, contingut duplicat, enllaços trencats.' },
        { title: 'Keyword research local', desc: 'Recerca de les paraules clau que els teus clients busquen: per servei, per municipi, per intenció (informacional, transaccional, navegació).' },
        { title: 'SEO on-page', desc: 'Optimització de títols, meta descriptions, headings, contingut, estructura d\'URLs, enllaçat intern, imatges. Per a cada pàgina important del teu web.' },
        { title: 'Google Business Profile', desc: 'Configuració i optimització completa de la teva fitxa de Google: categories, serveis, fotos, posts, ressenyes, horaris. La fitxa apareix al Local Pack i Google Maps.' },
        { title: 'Estratègia de continguts', desc: 'Calendari editorial de 6-12 mesos amb els temes que la teva audiència busca. T\'ho donem llest per executar (amb redactor opcional).' },
        { title: 'Link building local', desc: 'Construcció d\'autoritat amb mencions i enllaços des de webs rellevants: directoris locals, mitjans de comunicació, blogs sectorials, partners.' },
        { title: 'Reports mensuals', desc: 'Informes clars: posicions, trànsit orgànic, conversions, accions realitzades. Sense argot, amb el que importa al negoci.' },
        { title: 'Reunions de seguiment', desc: 'Una reunió mensual per revisar resultats, ajustar estratègia i planificar el següent sprint.' },
      ],
    },
    process: {
      title: 'Com treballem un projecte SEO',
      steps: [
        { num: '01', title: 'Auditoria inicial', desc: 'Revisem el teu web actual, la teva presència local, els teus competidors. T\'entreguem un informe amb el que funciona, el que falla, i les oportunitats.' },
        { num: '02', title: 'Estratègia i pla', desc: 'Definim objectius (trànsit, posicions, leads), paraules clau prioritàries, accions tècniques, calendari de continguts, pressupost mensual.' },
        { num: '03', title: 'Execució mensual', desc: 'Implementem les accions tècniques, publiquem contingut, construïm enllaços, optimitzem el teu Google Business Profile. Cada mes, entregable concret.' },
        { num: '04', title: 'Mesurament i ajust', desc: 'Mesurem resultats, comparem contra objectius, ajustem l\'estratègia. SEO és un procés iteratiu, no un projecte amb final.' },
      ],
    },
    pricing: {
      title: 'Preu i compromís',
      body: 'Pla mensual de 290€. Inclou auditoria inicial, keyword research, optimitzacions tècniques, contingut (2-4 peces/mes), link building, reports i reunions. Sense permanència: cancel·les amb un correu i et quedes amb tots els actius (textos, enllaços, dades).',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        { q: 'Quant triga a veure\'s resultats?', a: 'SEO és mig-llarg termini. Primers moviments: 1-2 mesos. Resultats significatius: 4-6 mesos. ROI sostingut: 6-12 mesos. No hi ha dreceres sense risc de penalització.' },
        { q: 'Garantiu posicions?', a: 'No. Ningú seriós garanteix posicions a Google (si te\'ls garanteixen, surt corrent). El que sí garantim és treball tècnic impecable, contingut de qualitat, i transparència total amb les dades.' },
        { q: 'Treballeu amb webs que no són vostres?', a: 'Sí, fem auditories i SEO sobre webs de tercers. Si el web està molt malament tècnicament, recomanem refer-lo abans d\'invertir en SEO.' },
        { q: 'I el SEO internacional?', a: 'SEO internacional (hreflang, subdominis per país, etc.) el cobrim amb la configuració multilingüe d\'Astro. És part del setup tècnic des de l\'inici.' },
        { q: 'Feu SEO local per a una sola ciutat o per a tota la província?', a: 'Ambdós. Podem enfocar el SEO a una ciutat (on està la teva seu principal) o atacar diverses ciutats amb pàgines dedicades (recomanat per "dominar" la província).' },
        { q: 'Què passa amb les actualitzacions de Google?', a: 'Les seguim. T\'informem de qualsevol canvi rellevant (Core Update, nou factor de ranking) i ajustem l\'estratègia si cal.' },
      ],
    },
    cta: {
      title: 'Vols aparèixer a Google quan et busquen?',
      subtitle: "Demana una auditoria SEO gratuïta del teu web. Et direm exactament què necessita.",
    },
  },
  en: {
    meta: {
      title: 'SEO positioning in Tarragona · Sincronia Agency',
      description: 'Technical SEO, content and local link building so your site appears in Google when someone searches for your services in Tarragona and the province. From €290/month.',
    },
    hero: {
      eyebrow: 'Service',
      title: 'Local SEO in Tarragona and the province',
      subtitle: 'So they find you on Google when someone searches for what you do. Technical SEO, content and local authority.',
    },
    intro: {
      title: 'Why local SEO is your best investment',
      paragraphs: [
        'If you have a local business — a clinic in Reus, a workshop in El Vendrell, a consultancy in Tortosa — your customers find you on Google with searches like "dentist Reus" or "tax advisor Tarragona". If you do not appear in the first positions, you do not exist. And Google Ads are expensive: each click costs between €1 and €10 depending on the sector.',
        'Local SEO done well is the medium-term investment with the best return: an organic click is free, and results accumulate over time. The key is technical SEO from the start (your site must be fast, accessible and well-structured for Google), publishing content that answers your customers\' questions, and building local authority (Google Business Profile, directories, mentions, links from local websites).',
        'Since 2017 we have been doing local SEO for clients in Tarragona and the province. We know the market, the sector keywords, and the signals Google values in each niche. We do not sell generic packages: every SEO project starts with a real audit and ends with an executable plan.',
      ],
    },
    includes: {
      title: 'What the SEO service includes',
      items: [
        { title: 'Technical SEO audit', desc: 'Full review of your site: crawl, indexing, speed, Core Web Vitals, schema.org, keyword cannibalisation, duplicate content, broken links.' },
        { title: 'Local keyword research', desc: 'Research of the keywords your customers search: by service, by municipality, by intent (informational, transactional, navigational).' },
        { title: 'On-page SEO', desc: 'Optimisation of titles, meta descriptions, headings, content, URL structure, internal linking, images. For every important page on your site.' },
        { title: 'Google Business Profile', desc: 'Full configuration and optimisation of your Google listing: categories, services, photos, posts, reviews, hours. The listing appears in the Local Pack and Google Maps.' },
        { title: 'Content strategy', desc: '6-12 month editorial calendar with the topics your audience searches for. We deliver it ready to execute (with optional writer).' },
        { title: 'Local link building', desc: 'Authority building with mentions and links from relevant websites: local directories, media, sector blogs, partners.' },
        { title: 'Monthly reports', desc: 'Clear reports: positions, organic traffic, conversions, actions taken. No jargon, only what matters to the business.' },
        { title: 'Follow-up meetings', desc: 'A monthly meeting to review results, adjust strategy and plan the next sprint.' },
      ],
    },
    process: {
      title: 'How we work an SEO project',
      steps: [
        { num: '01', title: 'Initial audit', desc: 'We review your current site, your local presence, your competitors. We deliver a report on what works, what does not, and the opportunities.' },
        { num: '02', title: 'Strategy and plan', desc: 'We define goals (traffic, positions, leads), priority keywords, technical actions, content calendar, monthly budget.' },
        { num: '03', title: 'Monthly execution', desc: 'We implement technical actions, publish content, build links, optimise your Google Business Profile. Each month, a concrete deliverable.' },
        { num: '04', title: 'Measurement and adjustment', desc: 'We measure results, compare against goals, adjust strategy. SEO is an iterative process, not a project with an end.' },
      ],
    },
    pricing: {
      title: 'Price and commitment',
      body: 'Monthly plan at €290. Includes initial audit, keyword research, technical optimisations, content (2-4 pieces/month), link building, reports and meetings. No commitment: cancel with an email and keep all assets (texts, links, data).',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How long until I see results?', a: 'SEO is medium-long term. First movements: 1-2 months. Significant results: 4-6 months. Sustained ROI: 6-12 months. There are no shortcuts without risk of penalty.' },
        { q: 'Do you guarantee positions?', a: 'No. Nobody serious guarantees positions on Google (if they do, run). What we do guarantee is impeccable technical work, quality content, and total transparency with the data.' },
        { q: 'Do you work with sites you did not build?', a: 'Yes, we do audits and SEO on third-party sites. If the site is technically very bad, we recommend rebuilding it before investing in SEO.' },
        { q: 'What about international SEO?', a: 'International SEO (hreflang, country subdomains, etc.) is covered by Astro\'s multilingual configuration. It is part of the technical setup from day one.' },
        { q: 'Do you do local SEO for one city or the whole province?', a: 'Both. We can focus SEO on one city (where your main HQ is) or target several cities with dedicated pages (recommended to "dominate" the province).' },
        { q: 'What about Google updates?', a: 'We follow them. We inform you of any relevant change (Core Update, new ranking factor) and adjust strategy if needed.' },
      ],
    },
    cta: {
      title: 'Want to show up on Google when they search?',
      subtitle: 'Request a free SEO audit of your site. We will tell you exactly what it needs.',
    },
  },
};
