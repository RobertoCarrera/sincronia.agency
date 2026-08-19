import type { Locale } from '~/i18n/locales';
import type { ServiceContent } from './mantenimiento-wordpress';

export const hosting: Record<Locale, ServiceContent> = {
  es: {
    meta: {
      title: 'Hosting especializado en Tarragona · Sincronia Agency',
      description: 'Hosting optimizado para WordPress y aplicaciones web (Node, Angular, Python). Servidores en Europa, soporte en español, backups diarios. Desde 20€/mes.',
    },
    hero: {
      eyebrow: 'Servicio',
      title: 'Hosting especializado para WordPress y apps web',
      subtitle: 'Servidores rápidos, soporte humano en español, backups diarios, monitorización 24/7. Sin sustos, sin tickets sin respuesta.',
    },
    intro: {
      title: 'Por qué el hosting "barato" sale caro',
      paragraphs: [
        'El hosting es la base de todo. Un hosting lento, con caídas frecuentes o sin soporte técnico te hace perder posiciones en Google, clientes, y dinero. La mayoría de hostings baratos (los de 3€/mes) comparten recursos entre miles de webs, no tienen soporte real cuando algo falla, y cuando crece tu tráfico, se caen.',
        'En Sincronia Agency ofrecemos hosting especializado: WordPress optimizado en servidores con caché a nivel servidor, PHP 8.x, MariaDB rápido, CDN global. Para aplicaciones web: Node, Angular, Python en instancias dedicadas o PaaS como Vercel/Railway/Fly.io según el caso. Servidores en Europa (cumple RGPD), backups diarios automatizados, monitorización 24/7, soporte en español por personas que saben lo que hacen.',
        'Llevamos desde 2017 alojando webs de clientes de Tarragona y provincia. Sabemos qué configuración evita los problemas típicos y qué hacer cuando un cliente tiene un pico de tráfico inesperado. Y si ya tienes hosting, migramos tu web sin cortes y sin coste adicional.',
      ],
    },
    includes: {
      title: 'Qué incluye el hosting',
      items: [
        { title: 'Servidores optimizados', desc: 'NVMe SSD, PHP 8.x, MariaDB 10.x, Nginx, HTTP/3, Brotli. WordPress corre 4-5x más rápido que en hostings genéricos.' },
        { title: 'CDN global', desc: 'Cloudflare Pro incluido: caché global en 300+ ciudades, protección DDoS, WAF, optimización de imágenes automática.' },
        { title: 'Backups diarios', desc: 'Snapshots automáticos diarios con retención 30 días. Restauración con un click desde el panel de cliente.' },
        { title: 'Monitorización 24/7', desc: 'Vigilamos uptime, SSL, expiración de dominio, métricas de rendimiento. Alertas por email y SMS si algo falla.' },
        { title: 'Soporte humano en español', desc: 'Por email y teléfono. Personas con criterio técnico, no chatbots. SLA de respuesta: incidencias críticas < 1h.' },
        { title: 'SSL gratuito', desc: 'Certificado Let\'s Encrypt incluido y renovación automática. HTTP/2 y HTTP/3 habilitados por defecto.' },
        { title: 'Email corporativo opcional', desc: 'Buzones con tu dominio (hola@tuempresa.com) si lo necesitas. Antispam DKIM/SPF/DMARC configurado.' },
        { title: 'Migración sin coste', desc: 'Si ya tienes hosting, migramos tu web y tus emails sin cortes. Sin coste adicional, sin pérdida de datos.' },
      ],
    },
    process: {
      title: 'Cómo migramos tu hosting',
      steps: [
        { num: '01', title: 'Auditoría del hosting actual', desc: 'Revisamos tu plan actual, rendimiento, configuraciones. Te decimos si merece la pena migrar o si puedes quedarte donde estás.' },
        { num: '02', title: 'Plan a medida', desc: 'Elegimos el plan según el tráfico, el CMS y las necesidades técnicas. Sin paquetes inflados con cosas que no necesitas.' },
        { num: '03', title: 'Migración sin cortes', desc: 'Copiamos tu web, base de datos, emails. Cambiamos DNS solo cuando todo está verificado. Downtime: minutos.' },
        { num: '04', title: 'Operación continua', desc: 'Monitorización, backups, soporte. Tu web funciona, tú duermes tranquilo.' },
      ],
    },
    pricing: {
      title: 'Precio y compromiso',
      body: 'Hosting WordPress desde 20€/mes (1 web, 25GB SSD, tráfico ilimitado razonable). Hosting aplicaciones web desde 35€/mes (1 instancia, según recursos). Sin permanencia: cancelas cuando quieras. Migración inicial gratuita.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuánto cuesta el hosting?', a: 'WordPress desde 20€/mes, aplicaciones web desde 35€/mes. Planes personalizados para casos especiales (muchas webs, alto tráfico, requisitos específicos).' },
        { q: '¿Puedo mantener mi dominio actual?', a: 'Sí. Solo necesitamos que apuntes el DNS a nuestros servidores. Te guiamos paso a paso.' },
        { q: '¿Hacéis migración desde mi hosting actual?', a: 'Sí, gratuita. Migramos tu web, base de datos, emails. Sin pérdida de datos, con tiempo de inactividad mínimo.' },
        { q: '¿Y si necesito más recursos?', a: 'Escalamos vertical u horizontalmente según el caso. A veces es cambiar de plan, a veces mover a un servidor dedicado o a Vercel.' },
        { q: '¿Tenéis servidores en España?', a: 'Servidores en centros de datos europeos (Países Bajos, Alemania, Francia según proveedor). Cumple RGPD, baja latencia desde España.' },
        { q: '¿Y los emails?', a: 'Incluidos opcionalmente. Buzones con tu dominio, antispam, webmail, IMAP/SMTP. Si prefieres Google Workspace o Microsoft 365, también te lo configuramos.' },
      ],
    },
    cta: {
      title: '¿Cansado de tu hosting actual?',
      subtitle: 'Pide una auditoría gratuita de tu hosting. Te diremos si merece la pena migrar y qué plan encaja contigo.',
    },
  },
  ca: {
    meta: {
      title: 'Hosting especialitzat a Tarragona · Sincronia Agency',
      description: 'Hosting optimitzat per a WordPress i aplicacions web (Node, Angular, Python). Servidors a Europa, suport en espanyol, còpies de seguretat diàries. Des de 20€/mes.',
    },
    hero: {
      eyebrow: 'Servei',
      title: 'Hosting especialitzat per a WordPress i apps web',
      subtitle: 'Servidors ràpids, suport humà en espanyol, còpies de seguretat diàries, monitoratge 24/7. Sense ensurts, sense tiquets sense resposta.',
    },
    intro: {
      title: 'Per què el hosting "barat" surt car',
      paragraphs: [
        'El hosting és la base de tot. Un hosting lent, amb caigudes freqüents o sense suport tècnic et fa perdre posicions a Google, clients, i diners. La majoria d\'hostings barats (els de 3€/mes) comparteixen recursos entre milers de webs, no tenen suport real quan alguna cosa falla, i quan creix el teu trànsit, es cauen.',
        'A Sincronia Agency oferim hosting especialitzat: WordPress optimitzat en servidors amb memòria cau a nivell de servidor, PHP 8.x, MariaDB ràpid, CDN global. Per a aplicacions web: Node, Angular, Python en instàncies dedicades o PaaS com Vercel/Railway/Fly.io segons el cas. Servidors a Europa (compleix RGPD), còpies de seguretat diàries automatitzades, monitoratge 24/7, suport en espanyol per persones que saben el que fan.',
        'Portem des del 2017 allotjant webs de clients de Tarragona i província. Sabem quina configuració evita els problemes típics i què fer quan un client té un pic de trànsit inesperat. I si ja tens hosting, migrem el teu web sense talls i sense cost addicional.',
      ],
    },
    includes: {
      title: 'Què inclou el hosting',
      items: [
        { title: 'Servidors optimitzats', desc: 'NVMe SSD, PHP 8.x, MariaDB 10.x, Nginx, HTTP/3, Brotli. WordPress corre 4-5x més ràpid que en hostings genèrics.' },
        { title: 'CDN global', desc: 'Cloudflare Pro inclòs: memòria cau global en 300+ ciutats, protecció DDoS, WAF, optimització d\'imatges automàtica.' },
        { title: 'Còpies de seguretat diàries', desc: 'Snapshots automàtics diaris amb retenció 30 dies. Restauració amb un click des del panell de client.' },
        { title: 'Monitoratge 24/7', desc: 'Vigilem uptime, SSL, expiració de domini, mètriques de rendiment. Alertes per correu i SMS si alguna cosa falla.' },
        { title: 'Suport humà en espanyol', desc: 'Per correu i telèfon. Persones amb criteri tècnic, no chatbots. SLA de resposta: incidències crítiques < 1h.' },
        { title: 'SSL gratuït', desc: 'Certificat Let\'s Encrypt inclòs i renovació automàtica. HTTP/2 i HTTP/3 habilitats per defecte.' },
        { title: 'Correu corporatiu opcional', desc: 'Bústies amb el teu domini (hola@laempresa.com) si ho necessites. Antispam DKIM/SPF/DMARC configurat.' },
        { title: 'Migració sense cost', desc: 'Si ja tens hosting, migrem el teu web i els teus correus sense talls. Sense cost addicional, sense pèrdua de dades.' },
      ],
    },
    process: {
      title: 'Com migrem el teu hosting',
      steps: [
        { num: '01', title: 'Auditoria del hosting actual', desc: 'Revisem el teu pla actual, rendiment, configuracions. Et diem si val la pena migrar o si pots quedar-te on ets.' },
        { num: '02', title: 'Pla a mida', desc: 'Triem el pla segons el trànsit, el CMS i les necessitats tècniques. Sense paquets inflats amb coses que no necessites.' },
        { num: '03', title: 'Migració sense talls', desc: 'Copiem el teu web, base de dades, correus. Canviem DNS només quan tot està verificat. Downtime: minuts.' },
        { num: '04', title: 'Operació contínua', desc: 'Monitoratge, còpies de seguretat, suport. El teu web funciona, tu dorms tranquil.' },
      ],
    },
    pricing: {
      title: 'Preu i compromís',
      body: 'Hosting WordPress des de 20€/mes (1 web, 25GB SSD, trànsit il·limitat raonable). Hosting aplicacions web des de 35€/mes (1 instància, segons recursos). Sense permanència: cancel·les quan vulguis. Migració inicial gratuïta.',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        { q: 'Quant costa el hosting?', a: 'WordPress des de 20€/mes, aplicacions web des de 35€/mes. Plans personalitzats per a casos especials (moltes webs, alt trànsit, requisits específics).' },
        { q: 'Puc mantenir el meu domini actual?', a: 'Sí. Només necessitem que apuntis el DNS als nostres servidors. T\'acompanyem pas a pas.' },
        { q: 'Feu migració des del meu hosting actual?', a: 'Sí, gratuïta. Migrations el teu web, base de dades, correus. Sense pèrdua de dades, amb temps d\'inactivitat mínim.' },
        { q: 'I si necessito més recursos?', a: 'Escalem vertical o horitzontalment segons el cas. De vegades és canviar de pla, de vegades moure a un servidor dedicat o a Vercel.' },
        { q: 'Teniu servidors a Espanya?', a: 'Servidors en centres de dades europeus (Països Baixos, Alemanya, França segons proveïdor). Compleix RGPD, baixa latència des d\'Espanya.' },
        { q: 'I els correus?', a: 'Inclosos opcionalment. Bústies amb el teu domini, antispam, webmail, IMAP/SMTP. Si prefereixes Google Workspace o Microsoft 365, també t\'ho configurem.' },
      ],
    },
    cta: {
      title: 'Cansat del teu hosting actual?',
      subtitle: 'Demana una auditoria gratuïta del teu hosting. Et direm si val la pena migrar i quin pla encaixa amb tu.',
    },
  },
  en: {
    meta: {
      title: 'Specialised hosting in Tarragona · Sincronia Agency',
      description: 'Hosting optimised for WordPress and web applications (Node, Angular, Python). Servers in Europe, support in Spanish, daily backups. From €20/month.',
    },
    hero: {
      eyebrow: 'Service',
      title: 'Specialised hosting for WordPress and web apps',
      subtitle: 'Fast servers, human support in Spanish, daily backups, 24/7 monitoring. No surprises, no unanswered tickets.',
    },
    intro: {
      title: 'Why "cheap" hosting costs you more',
      paragraphs: [
        'Hosting is the foundation of everything. A slow hosting, with frequent outages or no real technical support, makes you lose Google rankings, customers, and money. Most cheap hostings (the €3/month ones) share resources across thousands of sites, have no real support when something fails, and when your traffic grows, they crash.',
        'At Sincronia Agency we offer specialised hosting: WordPress optimised on servers with server-level caching, PHP 8.x, fast MariaDB, global CDN. For web applications: Node, Angular, Python on dedicated instances or PaaS like Vercel/Railway/Fly.io depending on the case. Servers in Europe (GDPR-compliant), automated daily backups, 24/7 monitoring, support in Spanish by people who know what they are doing.',
        'We have been hosting sites for clients in Tarragona and the province since 2017. We know which configuration avoids the typical problems and what to do when a client has an unexpected traffic spike. And if you already have hosting, we migrate your site with no downtime and no extra cost.',
      ],
    },
    includes: {
      title: 'What the hosting includes',
      items: [
        { title: 'Optimised servers', desc: 'NVMe SSD, PHP 8.x, MariaDB 10.x, Nginx, HTTP/3, Brotli. WordPress runs 4-5x faster than on generic hostings.' },
        { title: 'Global CDN', desc: 'Cloudflare Pro included: global cache in 300+ cities, DDoS protection, WAF, automatic image optimisation.' },
        { title: 'Daily backups', desc: 'Automatic daily snapshots with 30-day retention. One-click restore from the client panel.' },
        { title: '24/7 monitoring', desc: 'We watch uptime, SSL, domain expiry, performance metrics. Email and SMS alerts if something fails.' },
        { title: 'Human support in Spanish', desc: 'By email and phone. People with technical judgement, not chatbots. Response SLA: critical incidents < 1h.' },
        { title: 'Free SSL', desc: 'Let\'s Encrypt certificate included with automatic renewal. HTTP/2 and HTTP/3 enabled by default.' },
        { title: 'Optional corporate email', desc: 'Mailboxes with your domain (hello@yourcompany.com) if you need it. DKIM/SPF/DMARC antispam configured.' },
        { title: 'Free migration', desc: 'If you already have hosting, we migrate your site and emails with no downtime. No extra cost, no data loss.' },
      ],
    },
    process: {
      title: 'How we migrate your hosting',
      steps: [
        { num: '01', title: 'Current hosting audit', desc: 'We review your current plan, performance, configurations. We tell you if it is worth migrating or if you can stay where you are.' },
        { num: '02', title: 'Bespoke plan', desc: 'We choose the plan based on traffic, CMS and technical needs. No inflated packages with things you do not need.' },
        { num: '03', title: 'Migration with no downtime', desc: 'We copy your site, database, emails. We change DNS only when everything is verified. Downtime: minutes.' },
        { num: '04', title: 'Continuous operation', desc: 'Monitoring, backups, support. Your site works, you sleep well.' },
      ],
    },
    pricing: {
      title: 'Price and commitment',
      body: 'WordPress hosting from €20/month (1 site, 25GB SSD, reasonable unlimited traffic). Web application hosting from €35/month (1 instance, depending on resources). No commitment: cancel any time. Initial migration free.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How much does hosting cost?', a: 'WordPress from €20/month, web applications from €35/month. Custom plans for special cases (many sites, high traffic, specific requirements).' },
        { q: 'Can I keep my current domain?', a: 'Yes. We just need you to point DNS to our servers. We guide you step by step.' },
        { q: 'Do you migrate from my current hosting?', a: 'Yes, for free. We migrate your site, database, emails. No data loss, minimal downtime.' },
        { q: 'What if I need more resources?', a: 'We scale vertically or horizontally depending on the case. Sometimes it is changing plans, sometimes moving to a dedicated server or Vercel.' },
        { q: 'Do you have servers in Spain?', a: 'Servers in European data centres (Netherlands, Germany, France depending on provider). GDPR-compliant, low latency from Spain.' },
        { q: 'What about email?', a: 'Optionally included. Mailboxes with your domain, antispam, webmail, IMAP/SMTP. If you prefer Google Workspace or Microsoft 365, we configure that too.' },
      ],
    },
    cta: {
      title: 'Tired of your current hosting?',
      subtitle: 'Request a free audit of your hosting. We will tell you if it is worth migrating and which plan fits you.',
    },
  },
};
