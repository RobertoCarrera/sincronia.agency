import type { Locale } from '~/i18n/locales';

export interface AgenciaContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  whyAgency: { title: string; intro: string; items: Array<{ title: string; desc: string }> };
  services: { title: string; subtitle: string; items: Array<{ title: string; desc: string; href: string }> };
  process: { title: string; steps: Array<{ num: string; title: string; desc: string }> };
  coverage: { title: string; subtitle: string; municipalities: string[] };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  cta: { title: string; subtitle: string };
}

const S: AgenciaContent = {
  meta: {
    title: 'Agencia WordPress en Tarragona · Sincronia',
    description: 'Agencia WordPress en Tarragona: desarrollo a medida, mantenimiento profesional y hosting especializado. Una sola agencia para todo el ciclo de vida de tu web.',
  },
  hero: {
    eyebrow: 'Agencia WordPress en Tarragona',
    title: 'Tu agencia WordPress en Tarragona, de principio a fin',
    subtitle: 'Diseñamos, desarrollamos, mantenemos y alojamos webs WordPress. Sin saltos entre freelancers, sin plugins rotos, sin sustos de seguridad.',
  },
  whyAgency: {
    title: 'Por qué contratar una agencia WordPress (y no un freelance)',
    intro: 'WordPress es fácil de instalar, difícil de mantener. El 90% de las webs que vemos en Tarragona tienen plugins sin actualizar, temas comprados hace cinco años que ya no reciben soporte, y vulnerabilidades conocidas que cualquier bot encuentra en minutos. Una agencia profesional te da tranquilidad, velocidad de carga y resultados de negocio.',
    items: [
      { title: 'Equipo multidisciplinar', desc: 'Diseñador, desarrollador, DevOps y SEO trabajando juntos. Un freelance hace lo que sabe; una agencia cubre todo el ciclo.' },
      { title: 'Conocimiento real del ecosistema', desc: 'Sabemos qué plugin rompe con qué versión de PHP, qué tema está abandonado, qué hosting aguanta picos de tráfico y cuál no.' },
      { title: 'Stack premium incluido', desc: 'Licencias de plugins profesionales (WP Rocket, Rank Math Pro, Elementor Pro, Advanced Custom Fields Pro) sin coste extra para ti.' },
      { title: 'Soporte continuo', desc: 'No desaparecemos tras entregar la web. Monitorización 24/7, actualizaciones testeadas, soporte por email y WhatsApp.' },
      { title: 'SLA y compromiso', desc: 'Tiempos de respuesta definidos por contrato, informes mensuales, facturación clara. Sin sorpresas en la factura final.' },
      { title: 'Visión de negocio', desc: 'No entregamos "una web bonita". Entregamos una herramienta que convierte visitantes en clientes, medible y optimizable.' },
    ],
  },
  services: {
    title: 'Lo que hace una agencia WordPress como Sincronia',
    subtitle: 'Cuatro servicios que cubrimos en profundidad, todos relacionados con WordPress. Puedes contratar uno solo o el ciclo completo.',
    items: [
      { title: 'Desarrollo WordPress a medida', desc: 'Desde landings de 1 página hasta e-commerce completos con WooCommerce. Temas hijos propios, sin constructores pesados.', href: '/servicios/desarrollo-wordpress' },
      { title: 'Mantenimiento profesional', desc: 'Actualizaciones testeadas, backups automatizados, monitorización 24/7, seguridad hardening. 4 planes desde 35€/mes.', href: '/servicios/mantenimiento-wordpress' },
      { title: 'Hosting especializado', desc: 'AWS Lightsail con stack de 15 plugins premium incluido. 30% dto. los 3 primeros meses, luego desde 45€/mes.', href: '/servicios/hosting' },
      { title: 'SEO técnico WordPress', desc: 'Optimización de Core Web Vitals, schema markup, indexación, contenido. Para que tu web no solo exista, sino que se encuentre.', href: '/servicios/posicionamiento-seo' },
    ],
  },
  process: {
    title: 'Cómo trabajamos en Sincronia',
    steps: [
      { num: '01', title: 'Auditoría gratuita', desc: 'Revisamos tu web actual: estado de WP, plugins, tema, hosting, seguridad, SEO. Sin compromiso.' },
      { num: '02', title: 'Propuesta a medida', desc: 'Plan por escrito con alcance, plazos, precio cerrado. Sin paquetes inflados ni letra pequeña.' },
      { num: '03', title: 'Diseño y desarrollo', desc: 'Maquetamos en local, te enseñamos avances cada semana, integramos tu contenido y tu marca.' },
      { num: '04', title: 'Lanzamiento y formación', desc: 'Migración al hosting final, configuración de backups y monitorización. Te enseñamos a gestionar tu web.' },
      { num: '05', title: 'Mantenimiento continuo', desc: 'Nos quedamos contigo. Actualizaciones, soporte, mejoras incrementales. Sin sustos, sin abandonos.' },
    ],
  },
  coverage: {
    title: 'Donde trabajamos',
    subtitle: 'Estamos en Segur de Calafell (Tarragona) y damos servicio en toda la provincia. Nos desplazamos para reuniones de kickoff y formación presencial.',
    municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Torredembarra', 'Altafulla', 'Salou', 'Cambrils', 'Vila-seca', 'Constantí', 'Valls', 'Tarragona provincia'],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Cuánto cuesta una web WordPress en Tarragona?', a: 'Una landing empieza en 400€. Una web corporativa de 5-10 páginas con blog, en 1.000€. Un e-commerce WooCommerce completo, en 1.400€. Todos los precios son cerrados, sin sorpresas.' },
      { q: '¿Ofrecéis mantenimiento aunque no hayáis hecho la web?', a: 'Sí. La mitad de nuestros clientes de mantenimiento son webs que heredamos de otros proveedores. Hacemos auditoría previa gratuita y migramos a nuestro stack si compensa.' },
      { q: '¿Cuánto tardáis en hacer una web?', a: 'Una landing, 1-2 semanas. Una corporativa, 4-6 semanas. Un e-commerce, 6-10 semanas. Siempre con plazos cerrados en la propuesta.' },
      { q: '¿Puedo gestionar la web yo después?', a: 'Por supuesto. Te enseñamos a usar el editor de WordPress, a crear entradas, a cambiar imágenes. Si prefieres delegar, los planes Pro y Ecommerce incluyen horas de mantenimiento de contenido.' },
      { q: '¿Y si solo necesito una parte, no todo el ciclo?', a: 'Trabajamos por proyectos. Puedes contratarnos solo para el desarrollo, solo para el mantenimiento, o solo para SEO. No exigimos paquetes cerrados.' },
    ],
  },
  cta: {
    title: 'Hablemos de tu proyecto WordPress',
    subtitle: 'Cuéntanos qué necesitas. Te respondemos en menos de 24h con una propuesta concreta, sin compromiso.',
  },
};

// --- Agencia SEO ----------------------------------------------------------
const SEO: AgenciaContent = {
  meta: {
    title: 'Agencia SEO en Tarragona · Sincronia',
    description: 'Agencia SEO en Tarragona: SEO técnico, contenido y link building local. Posicionamos tu web en Google para que te encuentren clientes de tu zona.',
  },
  hero: {
    eyebrow: 'Agencia SEO en Tarragona',
    title: 'Agencia SEO en Tarragona: te encuentran los clientes que ya te buscan',
    subtitle: 'SEO técnico, contenido que posiciona y link building local. Sin black-hat, sin atajos que penalicen a los 6 meses.',
  },
  whyAgency: {
    title: 'Por qué el SEO necesita una agencia (no un curso de YouTube)',
    intro: 'SEO no es "escribir artículos con la keyword". Es un trabajo técnico (Core Web Vitals, schema, indexación), de contenido (intención de búsqueda, calidad, arquitectura de información) y de autoridad (menciones, backlinks, señales locales). Una agencia SEO profesional combina las tres. Un curso de 10 horas o una herramienta automática solo araña la superficie.',
    items: [
      { title: 'SEO técnico profundo', desc: 'Auditamos Core Web Vitals, indexación, datos estructurados, canonicals, hreflang, schema local. Cosas que el 95% de "agencias SEO" ni miran.' },
      { title: 'Contenido con intención de búsqueda', desc: 'Cada pieza se crea respondiendo lo que el usuario realmente busca. No relleno de palabras clave: contenido útil que Google premia.' },
      { title: 'Link building local', desc: 'Menciones en medios de Tarragona, Reus, El Vendrell. Directorios locales, cámaras de comercio, asociaciones. Autoridad geográfica real.' },
      { title: 'Google Business Profile', desc: 'Optimización completa del perfil, gestión de reseñas, publicaciones semanales, fotos geolocalizadas. SEO local puro.' },
      { title: 'Reporting transparente', desc: 'Dashboards en Looker Studio con datos de Search Console, Analytics, posiciones y tráfico orgánico. Sabes exactamente qué pasa.' },
      { title: 'Sin permanencia, sin humo', desc: 'Trabajamos por meses. Si a los 3 meses no ves progreso, te quedas con todo el trabajo hecho y te vas. Sin cláusulas leoninas.' },
    ],
  },
  services: {
    title: 'Servicios SEO que cubrimos',
    subtitle: 'SEO integral, desde lo técnico hasta lo local. También nos integramos con tu equipo si ya tienes redacción interna.',
    items: [
      { title: 'Auditoría SEO técnica', desc: 'Revisión completa de tu web: rastreo, indexación, rendimiento, schema, canibalización de keywords. Informe accionable.', href: '/servicios/posicionamiento-seo' },
      { title: 'SEO local (Tarragona y provincia)', desc: 'Google Business Profile, citaciones locales, contenido geolocalizado, link building en medios de la zona.', href: '/servicios/posicionamiento-seo' },
      { title: 'SEO técnico WordPress', desc: 'Si tu web es WP, optimizamos Core Web Vitals, schema, indexación. Compatible con nuestro mantenimiento.', href: '/servicios/mantenimiento-wordpress' },
      { title: 'Desarrollo web orientado a SEO', desc: 'Webs nuevas con SEO técnico impecable desde el día uno. Sin rehacer trabajo 6 meses después.', href: '/servicios/desarrollo-wordpress' },
    ],
  },
  process: {
    title: 'Cómo abordamos un proyecto SEO',
    steps: [
      { num: '01', title: 'Auditoría inicial', desc: 'Analizamos tu web, tu sector y tu competencia directa en Tarragona. Detectamos quick wins y estructurales.' },
      { num: '02', title: 'Estrategia a 6 meses', desc: 'Roadmap con prioridades técnicas, de contenido y de autoridad. Objetivos medibles acordados contigo.' },
      { num: '03', title: 'Ejecución mensual', desc: 'Implementamos cambios técnicos, publicamos contenido, conseguimos menciones. Reporting quincenal.' },
      { num: '04', title: 'Medición y ajuste', desc: 'Cada 30 días revisamos qué ha funcionado y pivotamos. SEO no es "haz esto y olvídate".' },
    ],
  },
  coverage: {
    title: 'SEO local para toda la provincia de Tarragona',
    subtitle: 'El SEO local funciona por señales geográficas. Optimizamos tu presencia para que Google te muestre cuando alguien busca en tu zona.',
    municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Torredembarra', 'Salou', 'Cambrils', 'Vila-seca', 'Reus', 'Tortosa', 'Amposta', 'Tarragona provincia'],
  },
  faq: {
    title: 'Preguntas frecuentes sobre SEO',
    items: [
      { q: '¿Cuánto cuesta SEO en Tarragona?', a: 'Desde 300€/mes para SEO local de un solo negocio. 500€/mes es el plan recomendado para SEO técnico + contenido + link building. 900€/mes para proyectos competitivos con muchas keywords.' },
      { q: '¿Cuánto tardan en verse resultados?', a: 'SEO técnico: 1-3 meses. SEO de contenido: 3-6 meses. Link building + autoridad: 6-12 meses. Te decimos expectativas realistas desde el minuto uno.' },
      { q: '¿Garantizáis posiciones?', a: 'No, y desconfía de quien lo haga. Nadie controla Google. Garantizamos trabajo constante, reporting transparente y mejora medible. Si no cumplimos, hablamos.' },
      { q: '¿Trabajáis con webs que no son WordPress?', a: 'Sí. Hacemos SEO sobre cualquier plataforma: WordPress, Shopify, custom HTML, Angular, React. SEO es SEO.' },
      { q: '¿Y el SEO de mi Google Business Profile?', a: 'Es parte integral de cualquier plan SEO local. Lo optimizamos, gestionamos reseñas, publicamos ofertas y subimos fotos geolocalizadas. Es lo que más impacto tiene en SEO local.' },
    ],
  },
  cta: {
    title: 'Auditoría SEO gratuita de tu web',
    subtitle: 'Te enviamos un informe con los 5 problemas SEO más críticos de tu web y un plan de acción. Sin compromiso.',
  },
};

// --- Agencia Diseño Web ---------------------------------------------------
const DISENO: AgenciaContent = {
  meta: {
    title: 'Agencia de diseño web en Tarragona · Sincronia',
    description: 'Agencia de diseño web en Tarragona: webs que convierten, no solo webs bonitas. Diseño centrado en el usuario, accesible, rápido.',
  },
  hero: {
    eyebrow: 'Agencia de diseño web en Tarragona',
    title: 'Diseño web en Tarragona que convierte, no solo decora',
    subtitle: 'Diseñamos webs que cargan rápido, se ven bien en cualquier pantalla y guían al visitante hasta el botón de WhatsApp. Sin fuegos artificiales, sin tendencias que caducan en 6 meses.',
  },
  whyAgency: {
    title: 'Diseño web no es decoración, es estrategia',
    intro: 'Una web bonita que no convierte es un escaparate caro. Una agencia de diseño web profesional equilibra estética, usabilidad, accesibilidad y rendimiento. Lo que ves es el 20% del trabajo; el 80% está en arquitectura de información, jerarquía visual, optimización de conversión y mantenimiento posterior.',
    items: [
      { title: 'Diseño centrado en conversión', desc: 'Cada elemento tiene un porqué. Botones donde el ojo va, CTAs que destacan sin gritar, formularios que no frustran.' },
      { title: 'Accesibilidad WCAG AA', desc: 'Contraste, navegación por teclado, lectores de pantalla. Tu web llega a todos, no solo al 70% sin discapacidad.' },
      { title: 'Rendimiento desde el diseño', desc: 'Imágenes optimizadas, tipografías web variables, lazy loading. Lo que diseñamos ya está pensando en Core Web Vitals.' },
      { title: 'Diseño responsive real', desc: 'Probado en móvil, tablet, escritorio, smart TV. Lo que se ve en el Figma es lo que sale en producción.' },
      { title: 'Sistema de diseño propio', desc: 'No usamos el tema "del año". Construimos tu sistema (colores, tipografía, componentes) que puedes mantener 5 años.' },
      { title: 'Acompañamiento post-lanzamiento', desc: 'Te enseñamos a gestionar la web. Si prefieres delegar, los planes de mantenimiento lo incluyen.' },
    ],
  },
  services: {
    title: 'Servicios de diseño web',
    subtitle: 'Desde la landing más simple hasta el e-commerce más complejo. Diseño estratégico, no decorativo.',
    items: [
      { title: 'Diseño de landing page', desc: '1 página, 1 objetivo, 1 conversión. Ideal para campañas, lanzamientos, validación de producto.', href: '/servicios/desarrollo-wordpress' },
      { title: 'Diseño web corporativa', desc: '5-10 páginas con blog, contacto, casos de éxito, equipo. La web "típica" bien hecha.', href: '/servicios/desarrollo-wordpress' },
      { title: 'Diseño de e-commerce', desc: 'WooCommerce con UX pensado para vender: fichas de producto, checkout sin fricción, recuperación de carritos.', href: '/servicios/desarrollo-wordpress' },
      { title: 'Rediseño de web existente', desc: 'Tu web actual funciona pero está obsoleta. La modernizamos sin perder posicionamiento SEO.', href: '/servicios/desarrollo-wordpress' },
    ],
  },
  process: {
    title: 'Proceso de diseño',
    steps: [
      { num: '01', title: 'Briefing y descubrimiento', desc: 'Entendemos tu negocio, tu público, tu competencia. Sin esta fase, el diseño es decoración.' },
      { num: '02', title: 'Arquitectura y wireframes', desc: 'Estructura de páginas, navegación, jerarquía de contenido. Validamos antes de diseñar píxeles.' },
      { num: '03', title: 'Diseño visual en Figma', desc: 'Mockups de alta fidelidad con tu marca, tus colores, tu tono. Revisamos contigo 2 rondas.' },
      { num: '04', title: 'Desarrollo', desc: 'Maquetamos el diseño en código limpio, accesible, optimizado para SEO y rendimiento.' },
      { num: '05', title: 'Lanzamiento y medición', desc: 'Publicamos, configuramos analítica, te enseñamos a gestionar. Medimos y optimizamos.' },
    ],
  },
  coverage: {
    title: 'Diseño web para todo el Camp de Tarragona',
    subtitle: 'Hemos diseñado webs para negocios de Tarragona, Reus, el Penedès, el Baix Camp. Conocemos el público local y lo que espera ver.',
    municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Valls', 'Torredembarra', 'Altafulla', 'Salou', 'Cambrils', 'Reus', 'Vila-seca'],
  },
  faq: {
    title: 'Preguntas frecuentes sobre diseño web',
    items: [
      { q: '¿Cuánto cuesta diseñar una web en Tarragona?', a: 'Una landing, desde 400€. Una web corporativa, desde 1.000€. Un e-commerce, desde 1.400€. El precio depende del alcance, no de la "marca" de la agencia.' },
      { q: '¿Cuánto tardáis en entregar?', a: 'Landing: 1-2 semanas. Corporativa: 4-6 semanas. E-commerce: 6-10 semanas. Siempre con calendario pactado.' },
      { q: '¿Hacéis solo diseño o también desarrollo?', a: 'Las dos cosas. Diseñamos en Figma y maquetamos directamente en WordPress o en el stack que prefieras. Sin intermediarios.' },
      { q: '¿Puedo usar mi propio diseñador y solo contrataros el desarrollo?', a: 'Sí, pero somos más eficientes (y la web queda mejor) si controlamos diseño y desarrollo. Si ya tienes diseño en Figma, lo respetamos.' },
      { q: '¿La web será accesible?', a: 'Cumplimos WCAG 2.1 nivel AA por defecto. No es un extra: es lo mínimo. Si necesitas nivel AAA (por ejemplo, administración pública), lo hablamos.' },
    ],
  },
  cta: {
    title: 'Pide una propuesta de diseño sin compromiso',
    subtitle: 'Cuéntanos tu proyecto. Te respondemos en menos de 24h con presupuesto cerrado y plazos realistas.',
  },
};

// --- Agencia Desarrollo Web -----------------------------------------------
const DESARROLLO: AgenciaContent = {
  meta: {
    title: 'Agencia de desarrollo web en Tarragona · Sincronia',
    description: 'Agencia de desarrollo web en Tarragona: WordPress, aplicaciones a medida, e-commerce. Full-stack, de Tarragona para el mundo.',
  },
  hero: {
    eyebrow: 'Agencia de desarrollo web en Tarragona',
    title: 'Agencia de desarrollo web en Tarragona, de WordPress a apps a medida',
    subtitle: 'Desarrollamos desde webs WordPress hasta aplicaciones web complejas con Angular, React o Vue. Una sola agencia para todo tu stack digital.',
  },
  whyAgency: {
    title: 'Una agencia para todo tu stack, no un puzzle de proveedores',
    intro: 'La mayoría de negocios en Tarragona contratan a un diseñador, a un programador WordPress, a otro para la app, a un consultor SEO, a un hosting, a un mantenimiento. Cinco interlocutores, cinco facturas, cero visión global. Una agencia de desarrollo web integral te da un único equipo que entiende tu proyecto de principio a fin.',
    items: [
      { title: 'Full-stack real', desc: 'Front, back, infra, SEO, mantenimiento. Si lo necesitas, lo cubrimos. Sin "eso no lo hacemos, busca a otro".' },
      { title: 'Stack moderno', desc: 'WordPress con tema propio, Angular/React/Vue para apps, Node y PHP en back, AWS/Cloudflare en infra. Lo que toca, no lo que sabemos solo.' },
      { title: 'Código mantenible', desc: 'Sin spaghetti code, sin dependencias abandonadas. Lo que entregamos lo puedes mantener 5 años sin que se rompa.' },
      { title: 'Coherencia entre productos', desc: 'Tu web WordPress y tu app a medida comparten marca, comparten datos si hace falta, comparten mantenimiento. Una sola agencia, una visión.' },
      { title: 'Coste optimizado', desc: 'No es lo mismo 1.000€ en una landing que 1.000€ en una app a medida. Te decimos qué necesitas realmente y qué es over-engineering.' },
      { title: 'Sin rotación de equipo', desc: 'Cuando contratas Sincronia, contratas a Roberto. No te cambian el account manager cada 3 meses.' },
    ],
  },
  services: {
    title: 'Servicios de desarrollo web',
    subtitle: 'Lo que desarrollamos en Sincronia, de menos a más complejo.',
    items: [
      { title: 'Desarrollo WordPress', desc: 'Webs corporativas, landings, e-commerce WooCommerce. Temas hijos propios, plugins a medida, sin constructores pesados.', href: '/servicios/desarrollo-wordpress' },
      { title: 'Aplicaciones web a medida', desc: 'SPAs, dashboards internos, plataformas SaaS, integraciones. Angular, React, Vue o lo que tenga sentido para tu caso.', href: '/servicios/desarrollo-aplicaciones-web' },
      { title: 'Mantenimiento y evolución', desc: 'No te dejamos tirado tras entregar. Mantenimiento, soporte, mejoras incrementales, migración cuando hace falta.', href: '/servicios/mantenimiento-wordpress' },
      { title: 'Hosting especializado', desc: 'AWS Lightsail con stack de 15 plugins premium incluido. O tu propio cloud si prefieres. Configuramos lo que necesitas.', href: '/servicios/hosting' },
    ],
  },
  process: {
    title: 'Proceso de desarrollo',
    steps: [
      { num: '01', title: 'Discovery técnico', desc: 'Definimos alcance, requisitos, stack, plazos. Sin esta fase, todo es un "ya veremos" que siempre sale mal.' },
      { num: '02', title: 'Diseño UX/UI', desc: 'Wireframes, mockups, prototipos interactivos. Validamos contigo antes de tocar código.' },
      { num: '03', title: 'Desarrollo iterativo', desc: 'Sprints de 2 semanas con demos. Ves avances reales, no slides de PowerPoint.' },
      { num: '04', title: 'QA y testing', desc: 'Tests automatizados, testing manual, revisión de accesibilidad, performance audit. Antes de lanzar, todo funciona.' },
      { num: '05', title: 'Lanzamiento y soporte', desc: 'Migración a producción, monitorización, formación. Nos quedamos contigo para lo que venga.' },
    ],
  },
  coverage: {
    title: 'Desarrollo web en Tarragona y para todo el mundo',
    subtitle: 'Aunque estamos en Tarragona, trabajamos con clientes de toda España y Europa. La distancia no es problema con buenas herramientas de comunicación.',
    municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Barcelona', 'Madrid', 'Valencia', 'Comunitat Europea', 'Tarragona provincia'],
  },
  faq: {
    title: 'Preguntas frecuentes sobre desarrollo web',
    items: [
      { q: '¿Cuánto cuesta desarrollar una web a medida?', a: 'Una landing WordPress, desde 400€. Una corporativa con blog, desde 1.000€. Un e-commerce, desde 1.400€. Una aplicación web a medida, desde 3.500€. Todos los precios cerrados en propuesta.' },
      { q: '¿Cuánto tarda un proyecto?', a: 'Landing: 1-2 semanas. Corporativa: 4-6. E-commerce: 6-10. App a medida: 2-6 meses según complejidad. Siempre con planning pactado.' },
      { q: '¿Qué tecnología usáis?', a: 'WordPress con tema hijo propio (no constructores) para webs. Angular, React o Vue para apps. Node y PHP en back. PostgreSQL o MySQL. AWS o Cloudflare en infra. Lo que tenga más sentido para tu caso, no lo que más nos guste.' },
      { q: '¿Y si ya tengo una web que queremos evolucionar?', a: 'Lo hacemos. Trabajamos sobre código existente, migramos cuando es necesario, mantenemos lo que funciona. No tiramos trabajo a la basura por deporte.' },
      { q: '¿Puedo ver ejemplos de vuestro trabajo?', a: 'Por supuesto. En la página de cada servicio tienes casos de estudio. Si quieres ver algo específico, pídenos una demo por WhatsApp.' },
    ],
  },
  cta: {
    title: 'Cuéntanos qué quieres construir',
    subtitle: 'Sea un WordPress, una app a medida, un e-commerce o algo que todavía no tienes claro. Respondemos en menos de 24h.',
  },
};

// --- Traducciones CA y EN ------------------------------------------------

const tAgency = (es: AgenciaContent, lang: 'ca' | 'en'): AgenciaContent => {
  // Traducciones reales para los bloques cortos. Los párrafos largos que
  // dependen mucho del idioma se traducen in-line abajo; este helper sólo
  // existe para mantener el shape coherente.
  return es;
};

const S_ca: AgenciaContent = {
  meta: { title: 'Agència WordPress a Tarragona · Sincronia', description: 'Agència WordPress a Tarragona: desenvolupament a mida, manteniment professional i allotjament especialitzat. Una sola agència per a tot el cicle de vida del teu web.' },
  hero: { eyebrow: 'Agència WordPress a Tarragona', title: 'La teva agència WordPress a Tarragona, de principi a fi', subtitle: 'Dissenyem, desenvolupem, mantenim i allotgem webs WordPress. Sense salts entre freelancers, sense plugins trencats, sense ensurts de seguretat.' },
  whyAgency: { title: 'Per què contractar una agència WordPress (i no un freelance)', intro: 'WordPress és fàcil d\'instal·lar, difícil de mantenir. El 90% de les webs que veiem a Tarragona tenen plugins sense actualitzar, temes comprats fa cinc anys que ja no reben suport, i vulnerabilitats conegudes que qualsevol bot troba en minuts. Una agència professional et dona tranquil·litat, velocitat de càrrega i resultats de negoci.', items: [
    { title: 'Equip multidisciplinari', desc: 'Dissenyador, desenvolupador, DevOps i SEO treballant junts. Un freelance fa el que sap; una agència cobreix tot el cicle.' },
    { title: 'Coneixement real de l\'ecosistema', desc: 'Sabem quin plugin es trenca amb quina versió de PHP, quin tema està abandonat, quin allotjament aguanta pics de trànsit i quin no.' },
    { title: 'Stack premium inclòs', desc: 'Llicències de plugins professionals (WP Rocket, Rank Math Pro, Elementor Pro, Advanced Custom Fields Pro) sense cost extra per a tu.' },
    { title: 'Suport continu', desc: 'No desapareixem després de lliurar el web. Monitoratge 24/7, actualitzacions testades, suport per email i WhatsApp.' },
    { title: 'SLA i compromís', desc: 'Temps de resposta definits per contracte, informes mensuals, facturació clara. Sense sorpreses a la factura final.' },
    { title: 'Visió de negoci', desc: 'No lliurem "un web bonic". Lliurem una eina que converteix visitants en clients, mesurable i optimitzable.' },
  ] },
  services: { title: 'El que fa una agència WordPress com Sincronia', subtitle: 'Quatre serveis que cobrim en profunditat, tots relacionats amb WordPress. Pots contractar-ne un sol o el cicle complet.', items: [
    { title: 'Desenvolupament WordPress a mida', desc: 'Des de landings d\'1 pàgina fins a e-commerce complets amb WooCommerce. Temes fills propis, sense constructors pesats.', href: '/ca/servicios/desarrollo-wordpress' },
    { title: 'Manteniment professional', desc: 'Actualitzacions testades, còpies de seguretat automatitzades, monitoratge 24/7, seguretat hardening. 4 plans des de 35€/mes.', href: '/ca/servicios/mantenimiento-wordpress' },
    { title: 'Allotjament especialitzat', desc: 'AWS Lightsail amb stack de 15 plugins premium inclòs. 30% dto. els 3 primers mesos, després des de 45€/mes.', href: '/ca/servicios/hosting' },
    { title: 'SEO tècnic WordPress', desc: 'Optimització de Core Web Vitals, schema markup, indexació, contingut. Perquè el teu web no només existeixi, sinó que es trobi.', href: '/ca/servicios/posicionamiento-seo' },
  ] },
  process: { title: 'Com treballem a Sincronia', steps: [
    { num: '01', title: 'Auditoria gratuïta', desc: 'Revisem el teu web actual: estat de WP, plugins, tema, allotjament, seguretat, SEO. Sense compromís.' },
    { num: '02', title: 'Proposta a mida', desc: 'Pla per escrit amb abast, terminis, preu tancat. Sense paquets inflats ni lletra petita.' },
    { num: '03', title: 'Disseny i desenvolupament', desc: 'Maquetem en local, t\'ensenyem avenços cada setmana, integrem el teu contingut i la teva marca.' },
    { num: '04', title: 'Llançament i formació', desc: 'Migració a l\'allotjament final, configuració de còpies i monitoratge. T\'ensenyem a gestionar el teu web.' },
    { num: '05', title: 'Manteniment continu', desc: 'Ens quedem amb tu. Actualitzacions, suport, millores incrementals. Sense ensurts, sense abandonaments.' },
  ] },
  coverage: { title: 'On treballem', subtitle: 'Som a Segur de Calafell (Tarragona) i donem servei a tota la província. Ens desplacem per a reunions de kickoff i formació presencial.', municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Torredembarra', 'Altafulla', 'Salou', 'Cambrils', 'Vila-seca', 'Constantí', 'Valls', 'Província de Tarragona'] },
  faq: { title: 'Preguntes freqüents', items: [
    { q: 'Quant costa un web WordPress a Tarragona?', a: 'Una landing comença en 400€. Un web corporatiu de 5-10 pàgines amb blog, en 1.000€. Un e-commerce WooCommerce complet, en 1.400€. Tots els preus són tancats, sense sorpreses.' },
    { q: 'Ofereiu manteniment encara que no hàgiu fet el web?', a: 'Sí. La meitat dels nostres clients de manteniment són webs que heretem d\'altres proveïdors. Fem auditoria prèvia gratuïta i migrés al nostre stack si compensa.' },
    { q: 'Quant trigau a fer un web?', a: 'Una landing, 1-2 setmanes. Una corporativa, 4-6. Un e-commerce, 6-10. Sempre amb terminis tancats a la proposta.' },
    { q: 'Puc gestionar el web jo després?', a: 'Per descomptat. T\'ensenyem a usar l\'editor de WordPress, a crear entrades, a canviar imatges. Si prefereixes delegar, els plans Pro i Ecommerce inclouen hores de manteniment de contingut.' },
    { q: 'I si només necessito una part, no tot el cicle?', a: 'Treballem per projectes. Pots contractar-nos només per al desenvolupament, només per al manteniment, o només per a SEO. No exigim paquets tancats.' },
  ] },
  cta: { title: 'Parlem del teu projecte WordPress', subtitle: 'Explica\'ns què necessites. Et respondrem en menys de 24h amb una proposta concreta, sense compromís.' },
};

const SEO_ca: AgenciaContent = {
  meta: { title: 'Agència SEO a Tarragona · Sincronia', description: 'Agència SEO a Tarragona: SEO tècnic, contingut i link building local. Posicionem el teu web a Google perquè et trobin clients de la teva zona.' },
  hero: { eyebrow: 'Agència SEO a Tarragona', title: 'Agència SEO a Tarragona: et troben els clients que ja et busquen', subtitle: 'SEO tècnic, contingut que posiciona i link building local. Sense black-hat, sense dreceres que penalitzin als 6 mesos.' },
  whyAgency: { title: 'Per què el SEO necessita una agència (no un curs de YouTube)', intro: 'SEO no és "escriure articles amb la keyword". És un treball tècnic (Core Web Vitals, schema, indexació), de contingut (intenció de cerca, qualitat, arquitectura d\'informació) i d\'autoritat (mencions, backlinks, senyals locals). Una agència SEO professional combina les tres. Un curs de 10 hores o una eina automàtica només rasca la superfície.', items: [
    { title: 'SEO tècnic profund', desc: 'Auditem Core Web Vitals, indexació, dades estructurades, canonicals, hreflang, schema local. Coses que el 95% de "agències SEO" ni miren.' },
    { title: 'Contingut amb intenció de cerca', desc: 'Cada peça es crea responent el que l\'usuari realment busca. No farciment de paraules clau: contingut útil que Google premia.' },
    { title: 'Link building local', desc: 'Mencions en mitjans de Tarragona, Reus, El Vendrell. Directoris locals, cambres de comerç, associacions. Autoritat geogràfica real.' },
    { title: 'Google Business Profile', desc: 'Optimització completa del perfil, gestió de ressenyes, publicacions setmanals, fotos geolocalitzades. SEO local pur.' },
    { title: 'Reporting transparent', desc: 'Dashboards a Looker Studio amb dades de Search Console, Analytics, posicions i trànsit orgànic. Saps exactament què passa.' },
    { title: 'Sense permanència, sense fum', desc: 'Treballem per mesos. Si als 3 mesos no veus progrés, et quedes amb tota la feina feta i te\'n vas. Sense clàusules leonines.' },
  ] },
  services: { title: 'Serveis SEO que cobrim', subtitle: 'SEO integral, des del tècnic fins al local. També ens integrem amb el teu equip si ja tens redacció interna.', items: [
    { title: 'Auditoria SEO tècnica', desc: 'Revisió completa del teu web: rastreig, indexació, rendiment, schema, canibalització de keywords. Informe accionable.', href: '/ca/servicios/posicionamiento-seo' },
    { title: 'SEO local (Tarragona i província)', desc: 'Google Business Profile, citacions locals, contingut geolocalitzat, link building en mitjans de la zona.', href: '/ca/servicios/posicionamiento-seo' },
    { title: 'SEO tècnic WordPress', desc: 'Si el teu web és WP, optimitzem Core Web Vitals, schema, indexació. Compatible amb el nostre manteniment.', href: '/ca/servicios/mantenimiento-wordpress' },
    { title: 'Desenvolupament web orientat a SEO', desc: 'Webs nous amb SEO tècnic impecable des del primer dia. Sense refer feina 6 mesos després.', href: '/ca/servicios/desarrollo-wordpress' },
  ] },
  process: { title: 'Com abordem un projecte SEO', steps: [
    { num: '01', title: 'Auditoria inicial', desc: 'Analitzem el teu web, el teu sector i la teva competència directa a Tarragona. Detectem quick wins i estructurals.' },
    { num: '02', title: 'Estratègia a 6 mesos', desc: 'Roadmap amb prioritats tècniques, de contingut i d\'autoritat. Objectius mesurables acordats amb tu.' },
    { num: '03', title: 'Execució mensual', desc: 'Implementem canvis tècnics, publiquem contingut, aconseguim mencions. Reporting quinzenal.' },
    { num: '04', title: 'Mesura i ajust', desc: 'Cada 30 dies revisem què ha funcionat i pivotem. SEO no és "fes això i oblida\'t".' },
  ] },
  coverage: { title: 'SEO local per a tota la província de Tarragona', subtitle: 'El SEO local funciona per senyals geogràfiques. Optimitzem la teva presència perquè Google et mostri quan algú busca a la teva zona.', municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Torredembarra', 'Salou', 'Cambrils', 'Vila-seca', 'Tortosa', 'Amposta', 'Província de Tarragona'] },
  faq: { title: 'Preguntes freqüents sobre SEO', items: [
    { q: 'Quant costa SEO a Tarragona?', a: 'Des de 300€/mes per a SEO local d\'un sol negoci. 500€/mes és el plan recomanat per a SEO tècnic + contingut + link building. 900€/mes per a projectes competitius amb moltes keywords.' },
    { q: 'Quant trigues a veure resultats?', a: 'SEO tècnic: 1-3 mesos. SEO de contingut: 3-6 mesos. Link building + autoritat: 6-12 mesos. T\'ho diem amb expectatives realistes des del primer minut.' },
    { q: 'Garantiu posicions?', a: 'No, i desconfia de qui ho faci. Ningú controla Google. Garantim treball constant, reporting transparent i millora mesurable. Si no complim, ho parlem.' },
    { q: 'Treballeu amb webs que no són WordPress?', a: 'Sí. Fem SEO sobre qualsevol plataforma: WordPress, Shopify, custom HTML, Angular, React. SEO és SEO.' },
    { q: 'I el SEO del meu Google Business Profile?', a: 'És part integral de qualsevol pla SEO local. L\'optimitzem, gestionem ressenyes, publiquem ofertes i pugem fotos geolocalitzades. És el que més impacte té en SEO local.' },
  ] },
  cta: { title: 'Auditoria SEO gratuïta del teu web', subtitle: 'T\'enviem un informe amb els 5 problemes SEO més crítics del teu web i un pla d\'acció. Sense compromís.' },
};

const DISENO_ca: AgenciaContent = {
  meta: { title: 'Agència de disseny web a Tarragona · Sincronia', description: 'Agència de disseny web a Tarragona: webs que converteixen, no només webs boniques. Disseny centrat en l\'usuari, accessible, ràpid.' },
  hero: { eyebrow: 'Agència de disseny web a Tarragona', title: 'Disseny web a Tarragona que converteix, no només decora', subtitle: 'Dissenyem webs que carreguen ràpid, es veuen bé en qualsevol pantalla i guien el visitant fins al botó de WhatsApp. Sense focs d\'artifici, sense tendències que caduquin als 6 mesos.' },
  whyAgency: { title: 'Disseny web no és decoració, és estratègia', intro: 'Un web bonic que no converteix és un aparador car. Una agència de disseny web professional equilibra estètica, usabilitat, accessibilitat i rendiment. El que veus és el 20% de la feina; el 80% està en arquitectura d\'informació, jerarquia visual, optimització de conversió i manteniment posterior.', items: [
    { title: 'Disseny centrat en conversió', desc: 'Cada element té un perquè. Botons on l\'ull va, CTAs que destaquen sense cridar, formularis que no frustren.' },
    { title: 'Accessibilitat WCAG AA', desc: 'Contrast, navegació per teclat, lectors de pantalla. El teu web arriba a tothom, no només al 70% sense discapacitat.' },
    { title: 'Rendiment des del disseny', desc: 'Imatges optimitzades, tipografies web variables, lazy loading. El que dissenyem ja està pensant en Core Web Vitals.' },
    { title: 'Disseny responsive real', desc: 'Provat en mòbil, tablet, escriptori, smart TV. El que es veu al Figma és el que surt en producció.' },
    { title: 'Sistema de disseny propi', desc: 'No usem el tema "de l\'any". Construïm el teu sistema (colors, tipografia, components) que pots mantenir 5 anys.' },
    { title: 'Acompanyament post-llançament', desc: 'T\'ensenyem a gestionar el web. Si prefereixes delegar, els plans de manteniment ho inclouen.' },
  ] },
  services: { title: 'Serveis de disseny web', subtitle: 'Des de la landing més simple fins a l\'e-commerce més complex. Disseny estratègic, no decoratiu.', items: [
    { title: 'Disseny de landing page', desc: '1 pàgina, 1 objectiu, 1 conversió. Ideal per a campanyes, llançaments, validació de producte.', href: '/ca/servicios/desarrollo-wordpress' },
    { title: 'Disseny web corporatiu', desc: '5-10 pàgines amb blog, contacte, casos d\'èxit, equip. El web "típic" ben fet.', href: '/ca/servicios/desarrollo-wordpress' },
    { title: 'Disseny d\'e-commerce', desc: 'WooCommerce amb UX pensat per vendre: fitxes de producte, checkout sense fricció, recuperació de carretons.', href: '/ca/servicios/desarrollo-wordpress' },
    { title: 'Redisseny de web existent', desc: 'El teu web actual funciona però està obsolet. El modernitzem sense perdre posicionament SEO.', href: '/ca/servicios/desarrollo-wordpress' },
  ] },
  process: { title: 'Procés de disseny', steps: [
    { num: '01', title: 'Briefing i descobriment', desc: 'Entenem el teu negoci, el teu públic, la teva competència. Sense aquesta fase, el disseny és decoració.' },
    { num: '02', title: 'Arquitectura i wireframes', desc: 'Estructura de pàgines, navegació, jerarquia de contingut. Validem abans de dissenyar píxels.' },
    { num: '03', title: 'Disseny visual a Figma', desc: 'Mockups d\'alta fidelitat amb la teva marca, els teus colors, el teu to. Revisem amb tu 2 rondes.' },
    { num: '04', title: 'Desenvolupament', desc: 'Maquetem el disseny en codi net, accessible, optimitzat per a SEO i rendiment.' },
    { num: '05', title: 'Llançament i mesura', desc: 'Publiquem, configurem analítica, t\'ensenyem a gestionar. Mesurem i optimitzem.' },
  ] },
  coverage: { title: 'Disseny web per a tot el Camp de Tarragona', subtitle: 'Hem dissenyat webs per a negocis de Tarragona, Reus, el Penedès, el Baix Camp. Coneixem el públic local i el que espera veure.', municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Valls', 'Torredembarra', 'Altafulla', 'Salou', 'Cambrils', 'Vila-seca'] },
  faq: { title: 'Preguntes freqüents sobre disseny web', items: [
    { q: 'Quant costa dissenyar un web a Tarragona?', a: 'Una landing, des de 400€. Un web corporatiu, des de 1.000€. Un e-commerce, des de 1.400€. El preu depèn de l\'abast, no de la "marca" de l\'agència.' },
    { q: 'Quant trigau a lliurar?', a: 'Landing: 1-2 setmanes. Corporatiu: 4-6. E-commerce: 6-10. Sempre amb calendari pactat.' },
    { q: 'Feu només disseny o també desenvolupament?', a: 'Les dues coses. Dissenyem a Figma i maquetem directament a WordPress o al stack que prefereixis. Sense intermediaris.' },
    { q: 'Puc usar el meu propi dissenyador i només contractar-vos el desenvolupament?', a: 'Sí, però som més eficients (i el web queda millor) si controlem disseny i desenvolupament. Si ja tens disseny a Figma, el respectem.' },
    { q: 'El web serà accessible?', a: 'Complim WCAG 2.1 nivell AA per defecte. No és un extra: és el mínim. Si necessites nivell AAA (per exemple, administració pública), ho parlem.' },
  ] },
  cta: { title: 'Demana una proposta de disseny sense compromís', subtitle: 'Explica\'ns el teu projecte. Et respondrem en menys de 24h amb pressupost tancat i terminis realistes.' },
};

const DESARROLLO_ca: AgenciaContent = {
  meta: { title: 'Agència de desenvolupament web a Tarragona · Sincronia', description: 'Agència de desenvolupament web a Tarragona: WordPress, aplicacions a mida, e-commerce. Full-stack, de Tarragona per al món.' },
  hero: { eyebrow: 'Agència de desenvolupament web a Tarragona', title: 'Agència de desenvolupament web a Tarragona, de WordPress a apps a mida', subtitle: 'Desenvolupem des de webs WordPress fins a aplicacions web complexes amb Angular, React o Vue. Una sola agència per a tot el teu stack digital.' },
  whyAgency: { title: 'Una agència per a tot el teu stack, no un trencaclosques de proveïdors', intro: 'La majoria de negocis a Tarragona contracten un dissenyador, un programador WordPress, un altre per a l\'app, un consultor SEO, un allotjament, un manteniment. Cinc interlocutors, cinc factures, zero visió global. Una agència de desenvolupament web integral et dona un únic equip que entén el teu projecte de principi a fi.', items: [
    { title: 'Full-stack real', desc: 'Front, back, infra, SEO, manteniment. Si ho necessites, ho cobrim. Sense "això no ho fem, busca un altre".' },
    { title: 'Stack modern', desc: 'WordPress amb tema propi, Angular/React/Vue per a apps, Node i PHP en back, AWS/Cloudflare en infra. El que toca, no només el que sabem.' },
    { title: 'Codi mantenible', desc: 'Sense spaghetti code, sense dependències abandonades. El que lliurem ho pots mantenir 5 anys sense que es trenqui.' },
    { title: 'Coherència entre productes', desc: 'El teu web WordPress i la teva app a mesura comparteixen marca, comparteixen dades si cal, comparteixen manteniment. Una sola agència, una visió.' },
    { title: 'Cost optimitzat', desc: 'No és el mateix 1.000€ en una landing que 1.000€ en una app a mida. T\'ho diem què necessites realment i què és over-engineering.' },
    { title: 'Sense rotació d\'equip', desc: 'Quan contractes Sincronia, contractes en Roberto. No et canvien l\'account manager cada 3 mesos.' },
  ] },
  services: { title: 'Serveis de desenvolupament web', subtitle: 'El que desenvolupem a Sincronia, de menys a més complex.', items: [
    { title: 'Desenvolupament WordPress', desc: 'Webs corporatives, landings, e-commerce WooCommerce. Temes fills propis, plugins a mida, sense constructors pesats.', href: '/ca/servicios/desarrollo-wordpress' },
    { title: 'Aplicacions web a mida', desc: 'SPAs, dashboards interns, plataformes SaaS, integracions. Angular, React, Vue o el que tingui sentit per al teu cas.', href: '/ca/servicios/desarrollo-aplicaciones-web' },
    { title: 'Manteniment i evolució', desc: 'No et deixem tirat després de lliurar. Manteniment, suport, millores incrementals, migració quan cal.', href: '/ca/servicios/mantenimiento-wordpress' },
    { title: 'Allotjament especialitzat', desc: 'AWS Lightsail amb stack de 15 plugins premium inclòs. O el teu propi cloud si ho prefereixes. Configurem el que necessites.', href: '/ca/servicios/hosting' },
  ] },
  process: { title: 'Procés de desenvolupament', steps: [
    { num: '01', title: 'Discovery tècnic', desc: 'Definim abast, requisits, stack, terminis. Sense aquesta fase, tot és un "ja veurem" que sempre surt malament.' },
    { num: '02', title: 'Disseny UX/UI', desc: 'Wireframes, mockups, prototips interactius. Validem amb tu abans de tocar codi.' },
    { num: '03', title: 'Desenvolupament iteratiu', desc: 'Sprints de 2 setmanes amb demos. Veus avenços reals, no diapositives de PowerPoint.' },
    { num: '04', title: 'QA i testing', desc: 'Tests automatitzats, testing manual, revisió d\'accessibilitat, performance audit. Abans de llançar, tot funciona.' },
    { num: '05', title: 'Llançament i suport', desc: 'Migració a producció, monitoratge, formació. Ens quedem amb tu per al que vingui.' },
  ] },
  coverage: { title: 'Desenvolupament web a Tarragona i per a tot el món', subtitle: 'Encara que som a Tarragona, treballem amb clients de tota Espanya i Europa. La distància no és problema amb bones eines de comunicació.', municipalities: ['Tarragona capital', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Barcelona', 'Madrid', 'València', 'Comunitat Europea', 'Província de Tarragona'] },
  faq: { title: 'Preguntes freqüents sobre desenvolupament web', items: [
    { q: 'Quant costa desenvolupar un web a mida?', a: 'Una landing WordPress, des de 400€. Un web corporatiu amb blog, des de 1.000€. Un e-commerce, des de 1.400€. Una aplicació web a mida, des de 3.500€. Tots els preus tancats a la proposta.' },
    { q: 'Quant dura un projecte?', a: 'Landing: 1-2 setmanes. Corporatiu: 4-6. E-commerce: 6-10. App a mida: 2-6 mesos segons complexitat. Sempre amb planning pactat.' },
    { q: 'Quina tecnologia useu?', a: 'WordPress amb tema fill propi (no constructors) per a webs. Angular, React o Vue per a apps. Node i PHP en back. PostgreSQL o MySQL. AWS o Cloudflare en infra. El que tingui més sentit per al teu cas, no el que més ens agradi.' },
    { q: 'I si ja tinc un web que volem evolucionar?', a: 'Ho fem. Treballem sobre codi existent, migrés quan és necessari, mantenim el que funciona. No llencem feina a la brossa per esport.' },
    { q: 'Puc veure exemples de la vostra feina?', a: 'Per descomptat. A la pàgina de cada servei tens casos d\'estudi. Si vols veure alguna cosa específica, demana\'ns una demo per WhatsApp.' },
  ] },
  cta: { title: 'Explica\'ns què vols construir', subtitle: 'Sigui un WordPress, una app a mida, un e-commerce o alguna cosa que encara no tens clara. Respondrem en menys de 24h.' },
};

const S_en: AgenciaContent = {
  meta: { title: 'WordPress agency in Tarragona · Sincronia', description: 'WordPress agency in Tarragona: custom development, professional maintenance, and specialised hosting. One agency for the full lifecycle of your website.' },
  hero: { eyebrow: 'WordPress agency in Tarragona', title: 'Your WordPress agency in Tarragona, from start to finish', subtitle: 'We design, develop, maintain, and host WordPress sites. No bouncing between freelancers, no broken plugins, no security scares.' },
  whyAgency: { title: 'Why hire a WordPress agency (and not a freelancer)', intro: 'WordPress is easy to install, hard to maintain. 90% of the sites we audit in Tarragona have outdated plugins, themes bought five years ago that no longer get support, and known vulnerabilities any bot finds in minutes. A professional agency gives you peace of mind, fast load times, and business results.', items: [
    { title: 'Multidisciplinary team', desc: 'Designer, developer, DevOps, and SEO working together. A freelancer does what they know; an agency covers the whole cycle.' },
    { title: 'Real ecosystem knowledge', desc: 'We know which plugin breaks with which PHP version, which theme is abandoned, which hosting survives traffic spikes and which does not.' },
    { title: 'Premium stack included', desc: 'Professional plugin licences (WP Rocket, Rank Math Pro, Elementor Pro, Advanced Custom Fields Pro) at no extra cost to you.' },
    { title: 'Ongoing support', desc: 'We do not disappear after delivery. 24/7 monitoring, tested updates, support via email and WhatsApp.' },
    { title: 'SLA and commitment', desc: 'Contractually defined response times, monthly reports, clear billing. No surprises on the final invoice.' },
    { title: 'Business vision', desc: 'We do not deliver "a pretty website". We deliver a tool that converts visitors into customers, measurable and optimisable.' },
  ] },
  services: { title: 'What a WordPress agency like Sincronia does', subtitle: 'Four services we cover in depth, all WordPress-related. You can hire just one or the full cycle.', items: [
    { title: 'Custom WordPress development', desc: 'From one-page landings to complete WooCommerce e-commerce. Custom child themes, no bulky builders.', href: '/en/servicios/desarrollo-wordpress' },
    { title: 'Professional maintenance', desc: 'Tested updates, automated backups, 24/7 monitoring, security hardening. 4 plans from €35/month.', href: '/en/servicios/mantenimiento-wordpress' },
    { title: 'Specialised hosting', desc: 'AWS Lightsail with stack of 15 premium plugins included. 30% off the first 3 months, then from €45/month.', href: '/en/servicios/hosting' },
    { title: 'WordPress technical SEO', desc: 'Core Web Vitals optimisation, schema markup, indexing, content. So your site not only exists, it is found.', href: '/en/servicios/posicionamiento-seo' },
  ] },
  process: { title: 'How we work at Sincronia', steps: [
    { num: '01', title: 'Free audit', desc: 'We review your current site: WP state, plugins, theme, hosting, security, SEO. No commitment.' },
    { num: '02', title: 'Tailored proposal', desc: 'Written plan with scope, timelines, fixed price. No inflated packages, no small print.' },
    { num: '03', title: 'Design and development', desc: 'We mockup locally, show you progress weekly, integrate your content and brand.' },
    { num: '04', title: 'Launch and training', desc: 'Migration to final hosting, backup and monitoring setup. We teach you to manage your site.' },
    { num: '05', title: 'Ongoing maintenance', desc: 'We stay with you. Updates, support, incremental improvements. No scares, no abandonment.' },
  ] },
  coverage: { title: 'Where we work', subtitle: 'We are based in Segur de Calafell (Tarragona) and serve the entire province. We travel for kickoff meetings and on-site training.', municipalities: ['Tarragona city', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Torredembarra', 'Altafulla', 'Salou', 'Cambrils', 'Vila-seca', 'Constantí', 'Valls', 'Tarragona province'] },
  faq: { title: 'Frequently asked questions', items: [
    { q: 'How much does a WordPress site cost in Tarragona?', a: 'A landing starts at €400. A 5-10 page corporate site with blog, at €1,000. A complete WooCommerce e-commerce, at €1,400. All prices are fixed, no surprises.' },
    { q: 'Do you offer maintenance even if you did not build the site?', a: 'Yes. Half of our maintenance clients are sites we inherited from other providers. We do a free preliminary audit and migrate to our stack if it makes sense.' },
    { q: 'How long does it take to build a site?', a: 'A landing, 1-2 weeks. A corporate site, 4-6 weeks. An e-commerce, 6-10 weeks. Always with fixed timelines in the proposal.' },
    { q: 'Can I manage the site myself afterwards?', a: 'Of course. We teach you to use the WordPress editor, create posts, change images. If you prefer to delegate, Pro and Ecommerce plans include content maintenance hours.' },
    { q: 'What if I only need part of the cycle, not all of it?', a: 'We work per project. You can hire us only for development, only for maintenance, or only for SEO. We do not require closed packages.' },
  ] },
  cta: { title: 'Let us talk about your WordPress project', subtitle: 'Tell us what you need. We respond in under 24h with a concrete proposal, no commitment.' },
};

const SEO_en: AgenciaContent = {
  meta: { title: 'SEO agency in Tarragona · Sincronia', description: 'SEO agency in Tarragona: technical SEO, content, and local link building. We rank your site on Google so customers from your area find you.' },
  hero: { eyebrow: 'SEO agency in Tarragona', title: 'SEO agency in Tarragona: the customers already searching for you will find you', subtitle: 'Technical SEO, content that ranks, and local link building. No black-hat, no shortcuts that get you penalised 6 months later.' },
  whyAgency: { title: 'Why SEO needs an agency (not a YouTube course)', intro: 'SEO is not "writing articles with the keyword". It is technical work (Core Web Vitals, schema, indexing), content (search intent, quality, information architecture), and authority (mentions, backlinks, local signals). A professional SEO agency combines all three. A 10-hour course or an automated tool only scratches the surface.', items: [
    { title: 'Deep technical SEO', desc: 'We audit Core Web Vitals, indexing, structured data, canonicals, hreflang, local schema. Things 95% of "SEO agencies" do not even look at.' },
    { title: 'Search-intent content', desc: 'Every piece is created answering what the user is actually looking for. No keyword stuffing: useful content that Google rewards.' },
    { title: 'Local link building', desc: 'Mentions in Tarragona, Reus, El Vendrell media. Local directories, chambers of commerce, associations. Real geographic authority.' },
    { title: 'Google Business Profile', desc: 'Full profile optimisation, review management, weekly posts, geolocated photos. Pure local SEO.' },
    { title: 'Transparent reporting', desc: 'Looker Studio dashboards with Search Console, Analytics, ranking and organic traffic data. You know exactly what is happening.' },
    { title: 'No lock-in, no smoke', desc: 'We work month to month. If after 3 months you see no progress, you keep all the work and leave. No predatory clauses.' },
  ] },
  services: { title: 'SEO services we cover', subtitle: 'Full SEO, from technical to local. We also integrate with your team if you already have in-house writing.', items: [
    { title: 'Technical SEO audit', desc: 'Full review of your site: crawl, indexing, performance, schema, keyword cannibalisation. Actionable report.', href: '/en/servicios/posicionamiento-seo' },
    { title: 'Local SEO (Tarragona and province)', desc: 'Google Business Profile, local citations, geolocated content, link building in local media.', href: '/en/servicios/posicionamiento-seo' },
    { title: 'WordPress technical SEO', desc: 'If your site is WP, we optimise Core Web Vitals, schema, indexing. Compatible with our maintenance.', href: '/en/servicios/mantenimiento-wordpress' },
    { title: 'SEO-oriented web development', desc: 'New sites with impeccable technical SEO from day one. No redoing work 6 months later.', href: '/en/servicios/desarrollo-wordpress' },
  ] },
  process: { title: 'How we approach an SEO project', steps: [
    { num: '01', title: 'Initial audit', desc: 'We analyse your site, your industry, and your direct competition in Tarragona. We identify quick wins and structural issues.' },
    { num: '02', title: '6-month strategy', desc: 'Roadmap with technical, content, and authority priorities. Measurable goals agreed with you.' },
    { num: '03', title: 'Monthly execution', desc: 'We implement technical changes, publish content, secure mentions. Biweekly reporting.' },
    { num: '04', title: 'Measure and adjust', desc: 'Every 30 days we review what worked and pivot. SEO is not "do this and forget it".' },
  ] },
  coverage: { title: 'Local SEO for the entire Tarragona province', subtitle: 'Local SEO works on geographic signals. We optimise your presence so Google shows you when someone searches in your area.', municipalities: ['Tarragona city', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Torredembarra', 'Salou', 'Cambrils', 'Vila-seca', 'Tortosa', 'Amposta', 'Tarragona province'] },
  faq: { title: 'Frequently asked questions about SEO', items: [
    { q: 'How much does SEO cost in Tarragona?', a: 'From €300/month for local SEO of a single business. €500/month is the recommended plan for technical SEO + content + link building. €900/month for competitive projects with many keywords.' },
    { q: 'How long until I see results?', a: 'Technical SEO: 1-3 months. Content SEO: 3-6 months. Link building + authority: 6-12 months. We set realistic expectations from minute one.' },
    { q: 'Do you guarantee rankings?', a: 'No, and distrust anyone who does. Nobody controls Google. We guarantee constant work, transparent reporting, and measurable improvement. If we do not deliver, we talk.' },
    { q: 'Do you work with sites that are not WordPress?', a: 'Yes. We do SEO on any platform: WordPress, Shopify, custom HTML, Angular, React. SEO is SEO.' },
    { q: 'What about my Google Business Profile SEO?', a: ' reviews, publish offers, and upload geolocated photos. It is the highest-impact local SEO activity.' },
  ] },
  cta: { title: 'Free SEO audit of your site', subtitle: 'We send you a report with the 5 most critical SEO issues on your site and an action plan. No commitment.' },
};

const DISENO_en: AgenciaContent = {
  meta: { title: 'Web design agency in Tarragona · Sincronia', description: 'Web design agency in Tarragona: sites that convert, not just pretty sites. User-centred, accessible, fast design.' },
  hero: { eyebrow: 'Web design agency in Tarragona', title: 'Web design in Tarragona that converts, not just decorates', subtitle: 'We design sites that load fast, look great on any screen, and guide the visitor to the WhatsApp button. No fireworks, no trends that expire in 6 months.' },
  whyAgency: { title: 'Web design is not decoration, it is strategy', intro: 'A pretty site that does not convert is an expensive shop window. A professional web design agency balances aesthetics, usability, accessibility, and performance. What you see is 20% of the work; the other 80% is information architecture, visual hierarchy, conversion optimisation, and post-launch maintenance.', items: [
    { title: 'Conversion-centred design', desc: 'Every element has a reason. Buttons where the eye goes, CTAs that stand out without shouting, forms that do not frustrate.' },
    { title: 'WCAG AA accessibility', desc: 'Contrast, keyboard navigation, screen readers. Your site reaches everyone, not just the 70% without disabilities.' },
    { title: 'Performance from the design phase', desc: 'Optimised images, variable web fonts, lazy loading. What we design already thinks about Core Web Vitals.' },
    { title: 'Real responsive design', desc: 'Tested on mobile, tablet, desktop, smart TV. What you see in Figma is what ships in production.' },
    { title: 'Custom design system', desc: 'We do not use the theme of the year. We build your system (colours, typography, components) that you can maintain for 5 years.' },
    { title: 'Post-launch support', desc: 'We teach you to manage the site. If you prefer to delegate, the maintenance plans include it.' },
  ] },
  services: { title: 'Web design services', subtitle: 'From the simplest landing to the most complex e-commerce. Strategic design, not decorative.', items: [
    { title: 'Landing page design', desc: '1 page, 1 goal, 1 conversion. Ideal for campaigns, launches, product validation.', href: '/en/servicios/desarrollo-wordpress' },
    { title: 'Corporate web design', desc: '5-10 pages with blog, contact, success stories, team. The typical site done right.', href: '/en/servicios/desarrollo-wordpress' },
    { title: 'E-commerce design', desc: 'WooCommerce with UX designed to sell: product pages, frictionless checkout, cart recovery.', href: '/en/servicios/desarrollo-wordpress' },
    { title: 'Existing site redesign', desc: 'Your current site works but looks dated. We modernise it without losing SEO rankings.', href: '/en/servicios/desarrollo-wordpress' },
  ] },
  process: { title: 'Design process', steps: [
    { num: '01', title: 'Briefing and discovery', desc: 'We understand your business, your audience, your competition. Without this phase, design is decoration.' },
    { num: '02', title: 'Architecture and wireframes', desc: 'Page structure, navigation, content hierarchy. We validate before designing pixels.' },
    { num: '03', title: 'Visual design in Figma', desc: 'High-fidelity mockups with your brand, your colours, your tone. We review 2 rounds with you.' },
    { num: '04', title: 'Development', desc: 'We implement the design in clean, accessible code, optimised for SEO and performance.' },
    { num: '05', title: 'Launch and measurement', desc: 'We publish, configure analytics, teach you to manage. We measure and optimise.' },
  ] },
  coverage: { title: 'Web design for the entire Camp de Tarragona', subtitle: 'We have designed sites for businesses in Tarragona, Reus, Penedes, Baix Camp. We know the local audience and what they expect to see.', municipalities: ['Tarragona city', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Valls', 'Torredembarra', 'Altafulla', 'Salou', 'Cambrils', 'Vila-seca'] },
  faq: { title: 'Frequently asked questions about web design', items: [
    { q: 'How much does it cost to design a site in Tarragona?', a: 'A landing, from €400. A corporate site, from €1,000. An e-commerce, from €1,400. The price depends on scope, not on the agency brand.' },
    { q: 'How long does delivery take?', a: 'Landing: 1-2 weeks. Corporate: 4-6. E-commerce: 6-10. Always with agreed timeline.' },
    { q: 'Do you do only design or also development?', a: 'Both. We design in Figma and implement directly in WordPress or whatever stack you prefer. No middlemen.' },
    { q: 'Can I use my own designer and only hire you for development?', a: 'Yes, but we are more efficient (and the site comes out better) if we control design and development. If you already have Figma design, we respect it.' },
    { q: 'Will the site be accessible?', a: 'We default to WCAG 2.1 AA. It is not an extra: it is the minimum. If you need AAA (e.g. public administration), we discuss it.' },
  ] },
  cta: { title: 'Request a design proposal with no commitment', subtitle: 'Tell us about your project. We respond in under 24h with a fixed budget and realistic timelines.' },
};

const DESARROLLO_en: AgenciaContent = {
  meta: { title: 'Web development agency in Tarragona · Sincronia', description: 'Web development agency in Tarragona: WordPress, custom applications, e-commerce. Full-stack, from Tarragona to the world.' },
  hero: { eyebrow: 'Web development agency in Tarragona', title: 'Web development agency in Tarragona, from WordPress to custom apps', subtitle: 'We develop from WordPress sites to complex web applications with Angular, React, or Vue. One agency for your entire digital stack.' },
  whyAgency: { title: 'One agency for your entire stack, not a puzzle of providers', intro: 'Most businesses in Tarragona hire a designer, a WordPress developer, another for the app, an SEO consultant, a hosting, a maintenance. Five contacts, five invoices, zero global vision. A full-service web development agency gives you a single team that understands your project end to end.', items: [
    { title: 'Real full-stack', desc: 'Front, back, infra, SEO, maintenance. If you need it, we cover it. No we do not do that, find someone else.' },
    { title: 'Modern stack', desc: 'WordPress with custom theme, Angular/React/Vue for apps, Node and PHP in back, AWS/Cloudflare for infra. What fits, not just what we know.' },
    { title: 'Maintainable code', desc: 'No spaghetti code, no abandoned dependencies. What we deliver can be maintained for 5 years without breaking.' },
    { title: 'Coherence across products', desc: 'Your WordPress site and your custom app share brand, share data when needed, share maintenance. One agency, one vision.' },
    { title: 'Optimised cost', desc: '€1,000 on a landing is not the same as €1,000 on a custom app. We tell you what you actually need and what is over-engineering.' },
    { title: 'No team rotation', desc: 'When you hire Sincronia, you hire Roberto. They do not change your account manager every 3 months.' },
  ] },
  services: { title: 'Web development services', subtitle: 'What we develop at Sincronia, from least to most complex.', items: [
    { title: 'WordPress development', desc: 'Corporate sites, landings, WooCommerce e-commerce. Custom child themes, custom plugins, no bulky builders.', href: '/en/servicios/desarrollo-wordpress' },
    { title: 'Custom web applications', desc: 'SPAs, internal dashboards, SaaS platforms, integrations. Angular, React, Vue, or whatever makes sense for your case.', href: '/en/servicios/desarrollo-aplicaciones-web' },
    { title: 'Maintenance and evolution', desc: 'We do not leave you hanging after delivery. Maintenance, support, incremental improvements, migration when needed.', href: '/en/servicios/mantenimiento-wordpress' },
    { title: 'Specialised hosting', desc: 'AWS Lightsail with stack of 15 premium plugins included. Or your own cloud if you prefer. We configure what you need.', href: '/en/servicios/hosting' },
  ] },
  process: { title: 'Development process', steps: [
    { num: '01', title: 'Technical discovery', desc: 'We define scope, requirements, stack, timelines. Without this phase, everything is a we will see that always goes wrong.' },
    { num: '02', title: 'UX/UI design', desc: 'Wireframes, mockups, interactive prototypes. We validate with you before touching code.' },
    { num: '03', title: 'Iterative development', desc: '2-week sprints with demos. You see real progress, not PowerPoint slides.' },
    { num: '04', title: 'QA and testing', desc: 'Automated tests, manual testing, accessibility review, performance audit. Before launch, everything works.' },
    { num: '05', title: 'Launch and support', desc: 'Production migration, monitoring, training. We stay with you for whatever comes next.' },
  ] },
  coverage: { title: 'Web development in Tarragona and for the whole world', subtitle: 'Although we are based in Tarragona, we work with clients across Spain and Europe. Distance is not a problem with the right communication tools.', municipalities: ['Tarragona city', 'Reus', 'El Vendrell', 'Calafell', 'Segur de Calafell', 'Barcelona', 'Madrid', 'Valencia', 'European Union', 'Tarragona province'] },
  faq: { title: 'Frequently asked questions about web development', items: [
    { q: 'How much does custom web development cost?', a: 'A WordPress landing, from €400. A corporate site with blog, from €1,000. An e-commerce, from €1,400. A custom web application, from €3,500. All prices fixed in the proposal.' },
    { q: 'How long does a project take?', a: 'Landing: 1-2 weeks. Corporate: 4-6. E-commerce: 6-10. Custom app: 2-6 months depending on complexity. Always with agreed planning.' },
    { q: 'What technology do you use?', a: 'WordPress with custom child theme (no builders) for sites. Angular, React, or Vue for apps. Node and PHP in back. PostgreSQL or MySQL. AWS or Cloudflare for infra. What makes the most sense for your case, not what we like most.' },
    { q: 'What if I already have a site we want to evolve?', a: 'We do it. We work on existing code, migrate when necessary, keep what works. We do not throw work away for sport.' },
    { q: 'Can I see examples of your work?', a: 'Of course. On each service page you have case studies. If you want to see something specific, ask us for a demo via WhatsApp.' },
  ] },
  cta: { title: 'Tell us what you want to build', subtitle: 'Whether it is a WordPress, a custom app, an e-commerce, or something you are not sure about yet. We respond in under 24h.' },
};

export const agencias: Record<'wordpress' | 'seo' | 'diseno-web' | 'desarrollo-web', Record<Locale, AgenciaContent>> = {
  wordpress: { es: S, ca: S_ca, en: S_en },
  seo: { es: SEO, ca: SEO_ca, en: SEO_en },
  'diseno-web': { es: DISENO, ca: DISENO_ca, en: DISENO_en },
  'desarrollo-web': { es: DESARROLLO, ca: DESARROLLO_ca, en: DESARROLLO_en },
};
