import type { Locale } from '~/i18n/locales';
import type { ServiceContent } from './mantenimiento-wordpress';

export const desarrolloAplicacionesWeb: Record<Locale, ServiceContent> = {
  es: {
    meta: {
      title: 'Desarrollo de aplicaciones web en Tarragona · Sincronia Agency',
      description: 'SPAs, dashboards y plataformas SaaS con Angular, React o Vue. Backend en Node, Python o Go. Desde 3.500€. Equipo senior, código mantenible, deploy continuo.',
    },
    hero: {
      eyebrow: 'Servicio',
      title: 'Aplicaciones web con Angular, React o Vue',
      subtitle: 'Cuando WordPress se queda corto: SPAs, dashboards, plataformas SaaS, integraciones a medida. Código que escala y se mantiene.',
    },
    intro: {
      title: 'Cuándo necesitas una aplicación web (y cuándo no)',
      paragraphs: [
        'WordPress cubre el 80% de las necesidades web: webs corporativas, blogs, e-commerce pequeño/medio, landings. Pero hay un 20% donde WordPress es la herramienta equivocada: dashboards con datos en tiempo real, plataformas con roles complejos, integraciones profundas con tu stack, aplicaciones SaaS con suscripciones y multi-tenancy.',
        'Para eso existen los frameworks SPA (Angular, React, Vue) y los backends modernos (Node, Python, Go). La diferencia no es técnica, es de problema: si tu producto tiene flujos que cambian según el usuario, si necesitas un backend robusto con API documentada, si la lógica de negocio no cabe en un plugin, necesitas una aplicación web.',
        'En Sincronia Agency desarrollamos aplicaciones web desde 2017, con foco principal en Angular (es nuestro framework de cabecera) pero también React y Vue cuando el proyecto lo pide. Te ayudamos a decidir si tu proyecto necesita una app o se resuelve con WordPress. Si toca app, la construimos con criterio: arquitectura limpia, tests, CI/CD, código que otro equipo puede mantener cuando nosotros no estemos.',
      ],
    },
    includes: {
      title: 'Qué incluye el desarrollo',
      items: [
        { title: 'Stack moderno a medida', desc: 'Angular (nuestro fuerte), React o Vue para el frontend. Node, Python o Go para el backend. PostgreSQL o MongoDB para los datos. Elegimos según el proyecto.' },
        { title: 'API REST o GraphQL', desc: 'Backend con API documentada (OpenAPI/Swagger), autenticación robusta (JWT, OAuth, SSO), control de acceso por roles y permisos.' },
        { title: 'Frontend SPA con SSR opcional', desc: 'Single Page Application con SSR (Server-Side Rendering) cuando el SEO importa, o CSR puro para herramientas internas.' },
        { title: 'Integraciones a medida', desc: 'Conectamos tu app con ERPs, CRMs, pasarelas de pago, servicios de email, APIs de terceros. Hacemos que tu stack se comunique.' },
        { title: 'CI/CD y deploy automatizado', desc: 'Pipelines de integración continua con tests automatizados. Deploy a Cloudflare Pages, Vercel, AWS, o tu infraestructura on-premise.' },
        { title: 'Tests automatizados', desc: 'Tests unitarios, de integración y end-to-end. Tu equipo puede refactorizar sin miedo a romper nada.' },
        { title: 'Monitorización y observabilidad', desc: 'Logs estructurados, métricas de uso, alertas. Sabes qué pasa en producción sin tener que entrar al servidor.' },
        { title: 'Documentación técnica', desc: 'Documentación de arquitectura, onboarding para nuevos developers, diagramas de flujo. Tu equipo puede seguir sin nosotros.' },
      ],
    },
    process: {
      title: 'Cómo trabajamos una aplicación web',
      steps: [
        { num: '01', title: 'Análisis técnico', desc: 'Reunión para entender los flujos de usuario, integraciones necesarias y objetivos técnicos. Definimos stack, arquitectura y fases.' },
        { num: '02', title: 'Arquitectura y prototipado', desc: 'Diseñamos la arquitectura: modelo de datos, endpoints de API, estructura de componentes frontend. Prototipo navegable para validar UX antes de programar.' },
        { num: '03', title: 'Desarrollo iterativo', desc: 'Sprints de 2 semanas con demos. Cada sprint entrega funcionalidad testeable y desplegable en staging.' },
        { num: '04', title: 'QA, seguridad y deploy', desc: 'Tests de seguridad, auditorías, optimización de rendimiento. Deploy a producción con monitorización y alertas configuradas.' },
      ],
    },
    pricing: {
      title: 'Precio y forma de pago',
      body: 'Desde 3.500€ por proyecto. Tres tiers según alcance: herramienta interna, MVP o plataforma SaaS completa. Cada proyecto se presupuesta según alcance tras el análisis técnico. Forma de pago por hitos. Para proyectos largos, también trabajamos en retainer mensual con horas garantizadas.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Angular, React o Vue? ¿Cuál me conviene?', a: 'Depende del proyecto. Angular es nuestra casa para apps grandes con equipo: opinionado, mantenible, escalable. React es más flexible y tiene más ecosistema. Vue es el equilibrio. Te lo recomendamos en el análisis técnico.' },
        { q: '¿Cuánto cuesta una aplicación web?', a: 'Herramientas internas: desde 3.500€. MVPs: desde 8.000€. Plataformas SaaS completas: desde 15.000€+. Te damos presupuesto cerrado tras el análisis.' },
        { q: '¿Podéis mantener la app después del lanzamiento?', a: 'Sí, tenemos planes de mantenimiento para aplicaciones web: monitorización, updates, nuevas features por sprint o retainer.' },
        { q: '¿Y si ya tengo una app legacy que necesita modernizarse?', a: 'Hacemos migraciones progresivas: envolvemos la app antigua, modernizamos por módulos, sin reescrituras de golpe que duran 2 años y no entregan nada.' },
        { q: '¿Cuánto tarda un proyecto de app web?', a: 'Un MVP funcional: 2-3 meses. Una plataforma SaaS completa: 4-8 meses. Te lo confirmamos en el análisis.' },
        { q: '¿Podéis trabajar con mi equipo interno?', a: 'Por supuesto. Hacemos pair programming, code reviews, formación. Si tienes equipo, lo complementamos; si no, vamos solos.' },
      ],
    },
    cta: {
      title: '¿Tienes una idea de app?',
      subtitle: 'Hablemos 30 minutos y vemos si tu proyecto es para Angular/React o si con WordPress ya cubrimos.',
    },
  },
  ca: {
    meta: {
      title: 'Desenvolupament d\'aplicacions web a Tarragona · Sincronia Agency',
      description: 'SPAs, dashboards i plataformes SaaS amb Angular, React o Vue. Backend en Node, Python o Go. Des de 3.500€. Equip sènior, codi mantenible, deploy continu.',
    },
    hero: {
      eyebrow: 'Servei',
      title: 'Aplicacions web amb Angular, React o Vue',
      subtitle: 'Quan WordPress es queda curt: SPAs, dashboards, plataformes SaaS, integracions a mida. Codi que escala i es manté.',
    },
    intro: {
      title: 'Quan necessites una aplicació web (i quan no)',
      paragraphs: [
        'WordPress cobreix el 80% de les necessitats web: webs corporatives, blogs, e-commerce petit/mig, landings. Però hi ha un 20% on WordPress és l\'eina equivocada: dashboards amb dades en temps real, plataformes amb rols complexos, integracions profundes amb el teu stack, aplicacions SaaS amb subscripcions i multi-tenancy.',
        'Per a això existeixen els frameworks SPA (Angular, React, Vue) i els backends moderns (Node, Python, Go). La diferència no és tècnica, és de problema: si el teu producte té fluxos que canvien segons l\'usuari, si necessites un backend robust amb API documentada, si la lògica de negoci no cap en un plugin, necessites una aplicació web.',
        'A Sincronia Agency desenvolupem aplicacions web des del 2017, amb focus principal en Angular (és el nostre framework de capçalera) però també React i Vue quan el projecte ho demana. T\'ajudem a decidir si el teu projecte necessita una app o es resol amb WordPress. Si toca app, la construïm amb criteri: arquitectura neta, tests, CI/CD, codi que un altre equip pot mantenir quan nosaltres no hi siguem.',
      ],
    },
    includes: {
      title: 'Què inclou el desenvolupament',
      items: [
        { title: 'Stack modern a mida', desc: 'Angular (el nostre fort), React o Vue per al frontend. Node, Python o Go per al backend. PostgreSQL o MongoDB per a les dades. Triem segons el projecte.' },
        { title: 'API REST o GraphQL', desc: 'Backend amb API documentada (OpenAPI/Swagger), autenticació robusta (JWT, OAuth, SSO), control d\'accés per rols i permisos.' },
        { title: 'Frontend SPA amb SSR opcional', desc: 'Single Page Application amb SSR (Server-Side Rendering) quan el SEO importa, o CSR pur per a eines internes.' },
        { title: 'Integracions a mida', desc: 'Connectem la teva app amb ERPs, CRMs, pasarel·les de pagament, serveis de correu, APIs de tercers. Fem que el teu stack es comuniqui.' },
        { title: 'CI/CD i deploy automatitzat', desc: 'Pipelines d\'integració contínua amb tests automatitzats. Deploy a Cloudflare Pages, Vercel, AWS, o la teva infraestructura on-premise.' },
        { title: 'Tests automatitzats', desc: 'Tests unitaris, d\'integració i end-to-end. El teu equip pot refactorar sense por de trencar res.' },
        { title: 'Monitoratge i observabilitat', desc: 'Logs estructurats, mètriques d\'ús, alertes. Saps què passa en producció sense haver d\'entrar al servidor.' },
        { title: 'Documentació tècnica', desc: 'Documentació d\'arquitectura, onboarding per a nous developers, diagrames de flux. El teu equip pot continuar sense nosaltres.' },
      ],
    },
    process: {
      title: 'Com treballem una aplicació web',
      steps: [
        { num: '01', title: 'Anàlisi tècnica', desc: 'Reunió per entendre els fluxos d\'usuari, integracions necessàries i objectius tècnics. Definim stack, arquitectura i fases.' },
        { num: '02', title: 'Arquitectura i prototipat', desc: 'Dissenym l\'arquitectura: model de dades, endpoints d\'API, estructura de components frontend. Prototip navegable per validar UX abans de programar.' },
        { num: '03', title: 'Desenvolupament iteratiu', desc: 'Sprints de 2 setmanes amb demos. Cada sprint entrega funcionalitat testejable i desplegable a staging.' },
        { num: '04', title: 'QA, seguretat i deploy', desc: 'Tests de seguretat, auditories, optimització de rendiment. Deploy a producció amb monitoratge i alertes configurades.' },
      ],
    },
    pricing: {
      title: 'Preu i forma de pagament',
      body: 'Des de 3.500€ per projecte. Tres tiers segons l\'abast: eina interna, MVP o plataforma SaaS completa. Cada projecte es pressuposta segons l\'abast després de l\'anàlisi tècnica. Forma de pagament per fites. Per a projectes llargs, també treballem en retainer mensual amb hores garantides.',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        { q: 'Angular, React o Vue? Quin em convé?', a: 'Depèn del projecte. Angular és la nostra casa per a apps grans amb equip: opinat, mantenible, escalable. React és més flexible i té més ecosistema. Vue és l\'equilibri. T\'ho recomanem a l\'anàlisi tècnica.' },
        { q: 'Quant costa una aplicació web?', a: 'Eines internes: des de 3.500€. MVPs: des de 8.000€. Plataformes SaaS completes: des de 15.000€+. T\'donem pressupost tancat després de l\'anàlisi.' },
        { q: 'Podeu mantenir l\'app després del llançament?', a: 'Sí, tenim plans de manteniment per a aplicacions web: monitoratge, updates, noves features per sprint o retainer.' },
        { q: 'I si ja tinc una app legacy que necessita modernitzar-se?', a: 'Fem migracions progressives: emboliquem l\'app antiga, modernitzem per mòduls, sense reescriptures de cop que duren 2 anys i no entreguen res.' },
        { q: 'Quant triga un projecte d\'app web?', a: 'Un MVP funcional: 2-3 mesos. Una plataforma SaaS completa: 4-8 mesos. T\'ho confirmem a l\'anàlisi.' },
        { q: 'Podeu treballar amb el meu equip intern?', a: 'Per descomptat. Fem pair programming, code reviews, formació. Si tens equip, el complementem; si no, anem sols.' },
      ],
    },
    cta: {
      title: 'Tens una idea d\'app?',
      subtitle: 'Parlem 30 minuts i veiem si el teu projecte és per a Angular/React o si amb WordPress ja cobrim.',
    },
  },
  en: {
    meta: {
      title: 'Web application development in Tarragona · Sincronia Agency',
      description: 'SPAs, dashboards and SaaS platforms with Angular, React or Vue. Backend in Node, Python or Go. From €3,500. Senior team, maintainable code, continuous deploy.',
    },
    hero: {
      eyebrow: 'Service',
      title: 'Web applications with Angular, React or Vue',
      subtitle: 'When WordPress falls short: SPAs, dashboards, SaaS platforms, custom integrations. Code that scales and is maintainable.',
    },
    intro: {
      title: 'When you need a web app (and when you do not)',
      paragraphs: [
        'WordPress covers 80% of web needs: corporate sites, blogs, small/medium e-commerce, landings. But there is a 20% where WordPress is the wrong tool: dashboards with real-time data, platforms with complex roles, deep integrations with your stack, SaaS applications with subscriptions and multi-tenancy.',
        'For that, SPA frameworks (Angular, React, Vue) and modern backends (Node, Python, Go) exist. The difference is not technical, it is about the problem: if your product has flows that change per user, if you need a robust backend with documented API, if the business logic does not fit in a plugin, you need a web application.',
        'At Sincronia Agency we have been building web applications since 2017, with main focus on Angular (our house framework) but also React and Vue when the project calls for it. We help you decide whether your project needs an app or is solved with WordPress. If it is an app, we build it with criteria: clean architecture, tests, CI/CD, code another team can maintain when we are gone.',
      ],
    },
    includes: {
      title: 'What the development includes',
      items: [
        { title: 'Bespoke modern stack', desc: 'Angular (our strength), React or Vue for the frontend. Node, Python or Go for the backend. PostgreSQL or MongoDB for data. We choose based on the project.' },
        { title: 'REST or GraphQL API', desc: 'Backend with documented API (OpenAPI/Swagger), robust authentication (JWT, OAuth, SSO), access control by roles and permissions.' },
        { title: 'SPA frontend with optional SSR', desc: 'Single Page Application with SSR (Server-Side Rendering) when SEO matters, or pure CSR for internal tools.' },
        { title: 'Bespoke integrations', desc: 'We connect your app with ERPs, CRMs, payment gateways, email services, third-party APIs. We make your stack talk to each other.' },
        { title: 'CI/CD and automated deploy', desc: 'Continuous integration pipelines with automated tests. Deploy to Cloudflare Pages, Vercel, AWS, or your on-premise infrastructure.' },
        { title: 'Automated tests', desc: 'Unit, integration and end-to-end tests. Your team can refactor without fear of breaking anything.' },
        { title: 'Monitoring and observability', desc: 'Structured logs, usage metrics, alerts. You know what happens in production without having to log into the server.' },
        { title: 'Technical documentation', desc: 'Architecture documentation, onboarding for new developers, flow diagrams. Your team can continue without us.' },
      ],
    },
    process: {
      title: 'How we work a web app',
      steps: [
        { num: '01', title: 'Technical analysis', desc: 'Meeting to understand user flows, required integrations and technical goals. We define stack, architecture and phases.' },
        { num: '02', title: 'Architecture and prototyping', desc: 'We design the architecture: data model, API endpoints, frontend component structure. Navigable prototype to validate UX before coding.' },
        { num: '03', title: 'Iterative development', desc: '2-week sprints with demos. Each sprint delivers testable, deployable functionality to staging.' },
        { num: '04', title: 'QA, security and deploy', desc: 'Security tests, audits, performance optimisation. Deploy to production with monitoring and alerts configured.' },
      ],
    },
    pricing: {
      title: 'Price and payment terms',
      body: 'From €3,500 per project. Three tiers by scope: internal tool, MVP or full SaaS platform. Each project is quoted based on scope after technical analysis. Payment by milestones. For long projects, we also work on monthly retainer with guaranteed hours.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Angular, React or Vue? Which should I use?', a: 'Depends on the project. Angular is our home for large team-scale apps: opinionated, maintainable, scalable. React is more flexible with a bigger ecosystem. Vue is the balance. We recommend in technical analysis.' },
        { q: 'How much does a web app cost?', a: 'Internal tools: from €3,500. MVPs: from €8,000. Complete SaaS platforms: from €15,000+. We give a fixed quote after analysis.' },
        { q: 'Can you maintain the app after launch?', a: 'Yes, we have maintenance plans for web apps: monitoring, updates, new features by sprint or retainer.' },
        { q: 'What if I already have a legacy app that needs modernising?', a: 'We do progressive migrations: wrap the old app, modernise by modules, no big-bang rewrites that take 2 years and deliver nothing.' },
        { q: 'How long does a web app project take?', a: 'A functional MVP: 2-3 months. A complete SaaS platform: 4-8 months. We confirm in analysis.' },
        { q: 'Can you work with my internal team?', a: 'Of course. We do pair programming, code reviews, training. If you have a team, we complement them; if not, we go alone.' },
      ],
    },
    cta: {
      title: 'Got an app idea?',
      subtitle: 'Let us talk 30 minutes and see if your project is for Angular/React or if WordPress already covers it.',
    },
  },
};
