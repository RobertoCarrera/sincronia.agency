import type { Locale } from '~/i18n/locales';

export interface ServiceContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  intro: { title: string; paragraphs: string[] };
  includes: { title: string; items: Array<{ title: string; desc: string }> };
  process: { title: string; steps: Array<{ num: string; title: string; desc: string }> };
  pricing: { title: string; body: string };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  cta: { title: string; subtitle: string };
}

export const mantenimientoWordpress: Record<Locale, ServiceContent> = {
  es: {
    meta: {
      title: 'Mantenimiento WordPress en Tarragona · Sincronia Agency',
      description: 'Mantenimiento profesional de WordPress en Tarragona: actualizaciones, backups, monitorización 24/7, seguridad y soporte. Planes desde 39€/mes.',
    },
    hero: {
      eyebrow: 'Servicio',
      title: 'Mantenimiento WordPress en Tarragona',
      subtitle: 'Tu web WordPress actualizada, segura, rápida y monitorizada. Sin sustos, sin actualizaciones rotas a las tres de la mañana.',
    },
    intro: {
      title: 'Por qué tu WordPress necesita mantenimiento profesional',
      paragraphs: [
        'WordPress es el CMS más usado del mundo (más del 43% de todas las webs). Es también el más atacado. Cada mes se descubren vulnerabilidades nuevas en plugins y temas; los hackers automatizan el ataque en horas, no en días. Mantener WordPress no es "actualizar de vez en cuando": es un proceso continuo que combina actualizaciones testeadas, monitorización, backups, seguridad y rendimiento.',
        'En Sincronia Agency llevamos desde 2017 manteniendo WordPress de clientes en Tarragona, Reus, El Vendrell, Cambrils y el resto de la provincia. Sabemos qué plugins se rompen al actualizar, qué temas son un riesgo de seguridad, y qué configuración de hosting evita los problemas típicos. Tu web no es un experimento: es tu negocio.',
        'Por eso nuestro mantenimiento no es solo "te actualizo el plugin". Es un plan estructurado, con monitorización continua, informes mensuales, y soporte real de personas que conocen WordPress en profundidad.',
      ],
    },
    includes: {
      title: 'Qué incluye el mantenimiento',
      items: [
        { title: 'Actualizaciones testeadas', desc: 'Core, plugins y temas probados en staging antes de llevarlos a producción. Si hay incompatibilidad, te avisamos antes de romper nada.' },
        { title: 'Backups diarios automatizados', desc: 'Con retención de 30 días y restauración verificada mensualmente. Si algo va mal, volvemos a un punto sano en minutos.' },
        { title: 'Monitorización 24/7', desc: 'Vigilamos uptime, certificado SSL, expiración de dominio y métricas clave. Si algo cae, lo sabemos antes que tú.' },
        { title: 'Seguridad hardening', desc: 'WAF, escaneo de malware diario, protección de fuerza bruta, hardening de wp-config.php, cabeceras HTTP seguras.' },
        { title: 'Soporte prioritario', desc: 'Por email y teléfono en horario laboral. Incidencias críticas: respuesta en menos de 1 hora.' },
        { title: 'Informes mensuales', desc: 'Métricas de rendimiento, seguridad, actualizaciones aplicadas y recomendaciones. Sin jerga innecesaria.' },
        { title: 'Optimización de base de datos', desc: 'Limpieza mensual de transients, revisiones, comentarios de spam y datos huérfanos.' },
        { title: 'Revisión de logs', desc: 'Análisis periódico de logs de error, accesos sospechosos y patrones anómalos.' },
      ],
    },
    process: {
      title: 'Cómo trabajamos',
      steps: [
        { num: '01', title: 'Auditoría inicial gratuita', desc: 'Revisamos tu web actual: estado de WordPress, plugins, tema, hosting, seguridad, rendimiento. Te entregamos un informe con lo que está bien y lo que hay que mejorar.' },
        { num: '02', title: 'Plan a medida', desc: 'Según el tamaño, tráfico y criticidad de tu web, definimos el plan de mantenimiento que necesitas. Sin paquetes inflados con cosas que no vas a usar.' },
        { num: '03', title: 'Activación', desc: 'Configuramos backups, monitorización y seguridad. Estabilizamos tu web antes de empezar las actualizaciones programadas.' },
        { num: '04', title: 'Operación continua', desc: 'Mantenimiento mensual, informes, soporte. Te olvidas de WordPress y te centras en tu negocio.' },
      ],
    },
    pricing: {
      title: 'Precio y compromiso',
      body: 'Planes desde 39€/mes según el tamaño de tu web y el tráfico. Sin permanencia: cancelas cuando quieras con un email. Todos los planes incluyen las actualizaciones, backups, monitorización y soporte; los planes superiores añaden más horas de soporte, optimización de rendimiento avanzada y creación de contenido ligera.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Qué pasa si rompo algo al instalar un plugin?', a: 'Antes de tocar producción, probamos la actualización en un clon de tu web. Si hay incompatibilidad, te avisamos y la dejamos en pausa hasta resolver.' },
        { q: '¿Puedo mantener mi hosting actual?', a: 'Sí, trabajamos con la mayoría de hostings españoles y europeos. Si el tuyo no cumple requisitos mínimos, te recomendamos uno de nuestra cartera con condiciones especiales.' },
        { q: '¿Cuánto tardáis en responder?', a: 'Incidencias críticas: menos de 1 hora en horario laboral. Incidencias normales: mismo día laborable. Fuera de horario: ventana de respuesta definida en el SLA.' },
        { q: '¿Incluye creación de contenido?', a: 'No en el plan básico. Los planes superiores incluyen horas de maquetación de contenido (entradas de blog, landings, fichas de producto).' },
        { q: '¿Hacéis webs nuevas o solo mantenéis?', a: 'Las dos cosas. Si estás pensando en una web nueva, mira nuestro servicio de Desarrollo WordPress. Si tu web es un Frankenstein de plugins, te recomendamos rehacerla.' },
        { q: '¿Y si tengo un problema urgente un domingo?', a: 'Para incidencias críticas (web caída, hackeo) ofrecemos un canal de guardia. No es barato, pero existe.' },
      ],
    },
    cta: {
      title: 'Deja tu WordPress en manos de profesionales',
      subtitle: 'Pide una auditoría gratuita y te diremos exactamente qué necesita tu web.',
    },
  },
  ca: {
    meta: {
      title: 'Manteniment WordPress a Tarragona · Sincronia Agency',
      description: 'Manteniment professional de WordPress a Tarragona: actualitzacions, còpies de seguretat, monitoratge 24/7, seguretat i suport. Plans des de 39€/mes.',
    },
    hero: {
      eyebrow: 'Servei',
      title: 'Manteniment WordPress a Tarragona',
      subtitle: 'El teu web WordPress actualitzat, segur, ràpid i monitoritzat. Sense ensurts, sense actualitzacions trencades a les tres de la matinada.',
    },
    intro: {
      title: 'Per què el teu WordPress necessita manteniment professional',
      paragraphs: [
        'WordPress és el CMS més usat del món (més del 43% de tots els llocs web). També és el més atacat. Cada mes es descobreixen vulnerabilitats noves en plugins i temes; els hackers automatitzen l\'atac en hores, no en dies. Mantenir WordPress no és "actualitzar de tant en tant": és un procés continu que combina actualitzacions testades, monitoratge, còpies de seguretat, seguretat i rendiment.',
        'A Sincronia Agency portem des del 2017 mantenint WordPress de clients a Tarragona, Reus, El Vendrell, Cambrils i la resta de la província. Sabem quins plugins es trenquen en actualitzar, quins temes són un risc de seguretat, i quina configuració de hosting evita els problemes típics. El teu web no és un experiment: és el teu negoci.',
        'Per això el nostre manteniment no és només "t\'actualitzo el plugin". És un pla estructurat, amb monitoratge continu, informes mensuals, i suport real de persones que coneixen WordPress en profunditat.',
      ],
    },
    includes: {
      title: 'Què inclou el manteniment',
      items: [
        { title: 'Actualitzacions testades', desc: 'Core, plugins i temes provats en staging abans de portar-los a producció. Si hi ha incompatibilitat, t\'avisem abans de trencar res.' },
        { title: 'Còpies de seguretat diàries', desc: 'Amb retenció de 30 dies i restauració verificada mensualment. Si alguna cosa va malament, tornem a un punt sa en minuts.' },
        { title: 'Monitoratge 24/7', desc: 'Vigilem uptime, certificat SSL, expiració de domini i mètriques clau. Si alguna cosa cau, ho sabem abans que tu.' },
        { title: 'Enduriment de seguretat', desc: 'WAF, escaneig de programari maliciós diari, protecció de força bruta, enduriment de wp-config.php, capçaleres HTTP segures.' },
        { title: 'Suport prioritari', desc: 'Per correu i telèfon en horari laboral. Incidències crítiques: resposta en menys d\'1 hora.' },
        { title: 'Informes mensuals', desc: 'Mètriques de rendiment, seguretat, actualitzacions aplicades i recomanacions. Sense argot innecessari.' },
        { title: 'Optimització de base de dades', desc: 'Neteja mensual de transients, revisions, comentaris de correu brossa i dades òrfenes.' },
        { title: 'Revisió de logs', desc: 'Anàlisi periòdica de logs d\'error, accessos sospitosos i patrons anòmals.' },
      ],
    },
    process: {
      title: 'Com treballem',
      steps: [
        { num: '01', title: 'Auditoria inicial gratuïta', desc: 'Revisem el teu web actual: estat de WordPress, plugins, tema, hosting, seguretat, rendiment. T\'entreguem un informe amb el que està bé i el que cal millorar.' },
        { num: '02', title: 'Pla a mida', desc: 'Segons la mida, trànsit i criticitat del teu web, definim el pla de manteniment que necessites. Sense paquets inflats amb coses que no faràs servir.' },
        { num: '03', title: 'Activació', desc: 'Configurem còpies de seguretat, monitoratge i seguretat. Estabilitzem el teu web abans de començar les actualitzacions programades.' },
        { num: '04', title: 'Operació contínua', desc: 'Manteniment mensual, informes, suport. T\'oblides de WordPress i et centres en el teu negoci.' },
      ],
    },
    pricing: {
      title: 'Preu i compromís',
      body: 'Plans des de 39€/mes segons la mida del teu web i el trànsit. Sense permanència: cancel·les quan vulguis amb un correu. Tots els plans inclouen les actualitzacions, còpies de seguretat, monitoratge i suport; els plans superiors afegeixen més hores de suport, optimització de rendiment avançada i creació de contingut lleugera.',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        { q: 'Què passa si trenco alguna cosa en instal·lar un plugin?', a: 'Abans de tocar producció, provem l\'actualització en un clon del teu web. Si hi ha incompatibilitat, t\'avisem i la deixem en pausa fins resoldre.' },
        { q: 'Puc mantenir el meu hosting actual?', a: 'Sí, treballem amb la majoria d\'hostings espanyols i europeus. Si el teu no compleix requisits mínims, te\'n recomanem un de la nostra cartera amb condicions especials.' },
        { q: 'Quant trigueu a respondre?', a: 'Incidències crítiques: menys d\'1 hora en horari laboral. Incidències normals: mateix dia laborable. Fora d\'horari: finestra de resposta definida a l\'SLA.' },
        { q: 'Inclou creació de contingut?', a: 'No al pla bàsic. Els plans superiors inclouen hores de maquetació de contingut (entrades de blog, landings, fitxes de producte).' },
        { q: 'Feu webs noves o només manteniu?', a: 'Les dues coses. Si estàs pensant en un web nou, mira el nostre servei de Desenvolupament WordPress. Si el teu web és un Frankenstein de plugins, et recomanem refer-lo.' },
        { q: 'I si tinc un problema urgent un diumenge?', a: 'Per a incidències crítiques (web caigut, hackeig) oferim un canal de guàrdia. No és barat, però existeix.' },
      ],
    },
    cta: {
      title: 'Deixa el teu WordPress en mans de professionals',
      subtitle: 'Demana una auditoria gratuïta i et direm exactament què necessita el teu web.',
    },
  },
  en: {
    meta: {
      title: 'WordPress maintenance in Tarragona · Sincronia Agency',
      description: 'Professional WordPress maintenance in Tarragona: updates, backups, 24/7 monitoring, security and support. Plans from €39/month.',
    },
    hero: {
      eyebrow: 'Service',
      title: 'WordPress maintenance in Tarragona',
      subtitle: 'Your WordPress site updated, secure, fast and monitored. No surprises, no broken updates at 3am.',
    },
    intro: {
      title: 'Why your WordPress needs professional maintenance',
      paragraphs: [
        'WordPress is the most-used CMS in the world (over 43% of all websites). It is also the most attacked. Every month new vulnerabilities are discovered in plugins and themes; attackers automate the exploit within hours, not days. Maintaining WordPress is not "update once in a while": it is a continuous process combining tested updates, monitoring, backups, security and performance.',
        'At Sincronia Agency we have been maintaining WordPress sites for clients in Tarragona, Reus, El Vendrell, Cambrils and the rest of the province since 2017. We know which plugins break on update, which themes are a security risk, and which hosting configuration avoids the typical problems. Your site is not an experiment: it is your business.',
        'That is why our maintenance is not just "I will update the plugin for you". It is a structured plan, with continuous monitoring, monthly reports, and real support from people who know WordPress in depth.',
      ],
    },
    includes: {
      title: 'What the maintenance includes',
      items: [
        { title: 'Tested updates', desc: 'Core, plugins and themes tested in staging before going to production. If there is an incompatibility, we tell you before breaking anything.' },
        { title: 'Daily automated backups', desc: 'With 30-day retention and monthly verified restore. If something goes wrong, we roll back to a healthy point in minutes.' },
        { title: '24/7 monitoring', desc: 'We watch uptime, SSL certificate, domain expiry and key metrics. If something falls, we know before you do.' },
        { title: 'Security hardening', desc: 'WAF, daily malware scan, brute force protection, wp-config.php hardening, secure HTTP headers.' },
        { title: 'Priority support', desc: 'By email and phone during business hours. Critical incidents: response in under 1 hour.' },
        { title: 'Monthly reports', desc: 'Performance, security, applied updates and recommendations. No unnecessary jargon.' },
        { title: 'Database optimisation', desc: 'Monthly cleanup of transients, revisions, spam comments and orphaned data.' },
        { title: 'Log review', desc: 'Periodic analysis of error logs, suspicious access and anomalous patterns.' },
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { num: '01', title: 'Free initial audit', desc: 'We review your current site: WordPress state, plugins, theme, hosting, security, performance. We deliver a report on what is good and what needs improving.' },
        { num: '02', title: 'Bespoke plan', desc: 'Based on the size, traffic and criticality of your site, we define the maintenance plan you need. No inflated packages with things you will not use.' },
        { num: '03', title: 'Activation', desc: 'We configure backups, monitoring and security. We stabilise your site before starting scheduled updates.' },
        { num: '04', title: 'Continuous operation', desc: 'Monthly maintenance, reports, support. You forget about WordPress and focus on your business.' },
      ],
    },
    pricing: {
      title: 'Price and commitment',
      body: 'Plans from €39/month based on the size of your site and traffic. No commitment: cancel any time with an email. All plans include updates, backups, monitoring and support; higher plans add more support hours, advanced performance optimisation and light content creation.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What if I break something when installing a plugin?', a: 'Before touching production, we test the update on a clone of your site. If there is an incompatibility, we tell you and pause it until resolved.' },
        { q: 'Can I keep my current hosting?', a: 'Yes, we work with most Spanish and European hostings. If yours does not meet minimum requirements, we recommend one from our portfolio with special conditions.' },
        { q: 'How fast do you respond?', a: 'Critical incidents: under 1 hour during business hours. Normal incidents: same business day. Outside hours: response window defined in the SLA.' },
        { q: 'Does it include content creation?', a: 'Not in the basic plan. Higher plans include content layout hours (blog posts, landings, product sheets).' },
        { q: 'Do you build new sites or only maintain them?', a: 'Both. If you are thinking about a new site, see our WordPress development service. If your site is a Frankenstein of plugins, we recommend rebuilding it.' },
        { q: 'What if I have an urgent issue on a Sunday?', a: 'For critical incidents (site down, hack) we offer an on-call channel. Not cheap, but it exists.' },
      ],
    },
    cta: {
      title: 'Leave your WordPress in professional hands',
      subtitle: 'Request a free audit and we will tell you exactly what your site needs.',
    },
  },
};
