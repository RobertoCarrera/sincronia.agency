import type { Locale } from '~/i18n/locales';
import type { ServiceContent } from './mantenimiento-wordpress';

export const hosting: Record<Locale, ServiceContent> = {
  es: {
    meta: {
      title: 'Hosting especializado en Tarragona · Sincronia Agency',
      description: 'Hosting WordPress en AWS Lightsail con stack de plugins premium incluido (Divi, BerqWP, SEO Generator, EWWW, Security Ninja y más). Soporte en español, backups diarios. Desde 35€/mes.',
    },
    hero: {
      eyebrow: 'Servicio',
      title: 'Hosting WordPress con plugins premium incluidos',
      subtitle: 'Servidor en AWS Lightsail, soporte humano en español, backups diarios y un stack de plugins premium por el coste de un hosting normal. Sin sustos, sin tickets sin respuesta.',
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
    plugins: {
      title: 'Stack de plugins premium incluido en todos los planes',
      subtitle: 'Estos plugins cuestan más de 800€/año si los compras por separado. Con nuestro hosting vienen instalados, configurados y mantenidos por nosotros.',
      categories: [
        {
          name: 'Diseño y construcción',
          items: [
            { name: 'Divi (Elegant Themes)', desc: 'Constructor visual y tema premium. El estándar de la industria para diseñar WordPress sin tocar código.' },
            { name: 'Divi Next (Full Access)', desc: 'Extensiones y módulos extra para Divi: layouts, efectos, bloques adicionales.' },
            { name: 'Pee Aye Creative (All Divi Plugins)', desc: 'Suite completa de plugins para Divi. Decenas de widgets, layouts y herramientas.' },
          ],
        },
        {
          name: 'Rendimiento y SEO',
          items: [
            { name: 'BerqWP', desc: 'Caché premium de nueva generación. WordPress carga 3-5x más rápido que con WP Rocket o LiteSpeed.' },
            { name: 'EWWW Image Optimizer (5GB)', desc: 'Optimización y conversión automática de imágenes a WebP. Ahorra ancho de banda y mejora Core Web Vitals.' },
            { name: 'SEO Generator', desc: 'Genera meta titles, descriptions y schema.org automáticamente. Ahorra horas de trabajo SEO en cada página.' },
            { name: 'Sigma Media Manager', desc: 'Gestión avanzada de la biblioteca de medios: carpetas, búsqueda, reemplazo, optimización.' },
          ],
        },
        {
          name: 'Seguridad y mantenimiento',
          items: [
            { name: 'Security Ninja', desc: 'Suite de seguridad: firewall, escaneo de malware, hardening de WP. Más de 50 comprobaciones automáticas.' },
            { name: 'WP Reset', desc: 'Reset y recuperación de WordPress para staging y emergencias. Resetea la web a fábrica en minutos.' },
            { name: 'Database Cleaner', desc: 'Limpia revisions, transients, spam, drafts antiguos. Mantiene la base de datos ligera y rápida.' },
            { name: 'WP 301 Redirects', desc: 'Gestor de redirecciones 301. Esencial para SEO cuando cambias URLs o migras contenido.' },
          ],
        },
        {
          name: 'Cumplimiento y extras',
          items: [
            { name: 'Plugin de cookies RGPD', desc: 'Banner de cookies conforme a RGPD. Hasta 1.000 visitas/mes gratuitas en el plan básico.' },
            { name: 'DarkMySite', desc: 'Modo oscuro automático para tu web. Tendencia en diseño y mejora de accesibilidad.' },
            { name: 'Deftform', desc: 'Constructor de formularios avanzado: lógica condicional, integraciones, anti-spam.' },
            { name: 'North Commerce', desc: 'Alternativa ligera a WooCommerce. Tienda online sin la pesadez de WooCommerce.' },
            { name: 'MySignature (1 signature)', desc: 'Firma de email profesional con tu marca.' },
          ],
        },
      ],
    },
    pricing: {
      title: 'Precio y compromiso',
      body: 'Tres planes mensuales: Hosting WP Start a 35€ (2GB RAM), Hosting WP Pro a 60€ (4GB RAM, recomendado) y Hosting WP Business a 100€ (8GB RAM). Todos los planes incluyen el stack completo de plugins premium por el coste de un hosting normal. Sin permanencia. Migración inicial gratuita.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuánto cuesta el hosting?', a: 'Hosting WP Start desde 35€/mes, Hosting WP Pro a 60€/mes y Hosting WP Business a 100€/mes. Todos incluyen el stack de plugins premium.' },
        { q: '¿Qué plugins premium están incluidos?', a: 'Más de 15 plugins: Divi + Divi Next + Pee Aye Creative, BerqWP caché, EWWW Image Optimizer, SEO Generator, Security Ninja, WP 301 Redirects, Sigma Media Manager, North Commerce, plugin de cookies RGPD y más. Valor de mercado: más de 800€/año.' },
        { q: '¿Las licencias de los plugins son vuestras?', a: 'Sí. Las gestionamos nosotros como parte del servicio. Tú no te preocupas de renovar, actualizar ni mantenerlas. Si te vas del hosting, los plugins se quedan con nosotros.' },
        { q: '¿Puedo mantener mi dominio actual?', a: 'Sí. Solo necesitamos que apuntes el DNS a nuestros servidores. Te guiamos paso a paso.' },
        { q: '¿Hacéis migración desde mi hosting actual?', a: 'Sí, gratuita. Migramos tu web, base de datos, emails. Sin pérdida de datos, con tiempo de inactividad mínimo.' },
        { q: '¿Y si necesito más recursos?', a: 'Escalamos vertical u horizontalmente según el caso. A veces es cambiar de plan, a veces mover a un servidor dedicado o a Vercel.' },
        { q: '¿Tenéis servidores en España?', a: 'Servidores en AWS Lightsail (data centers europeos: Irlanda, Frankfurt, Londres según región). Cumple RGPD, baja latencia desde España.' },
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
      description: 'Hosting WordPress a AWS Lightsail amb stack de plugins premium inclòs (Divi, BerqWP, SEO Generator, EWWW, Security Ninja i més). Suport en espanyol, còpies de seguretat diàries. Des de 35€/mes.',
    },
    hero: {
      eyebrow: 'Servei',
      title: 'Hosting WordPress amb plugins premium inclosos',
      subtitle: 'Servidor a AWS Lightsail, suport humà en espanyol, còpies de seguretat diàries i un stack de plugins premium pel cost d\'un hosting normal. Sense ensurts, sense tiquets sense resposta.',
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
    plugins: {
      title: 'Stack de plugins premium inclòs a tots els plans',
      subtitle: 'Aquests plugins costen més de 800€/any si els compres per separat. Amb el nostre hosting vénen instal·lats, configurats i mantinguts per nosaltres.',
      categories: [
        {
          name: 'Disseny i construcció',
          items: [
            { name: 'Divi (Elegant Themes)', desc: 'Constructor visual i tema premium. L\'estàndard de la indústria per dissenyar WordPress sense tocar codi.' },
            { name: 'Divi Next (Full Access)', desc: 'Extensions i mòduls extra per a Divi: layouts, efectes, blocs addicionals.' },
            { name: 'Pee Aye Creative (All Divi Plugins)', desc: 'Suite completa de plugins per a Divi. Desenes de widgets, layouts i eines.' },
          ],
        },
        {
          name: 'Rendiment i SEO',
          items: [
            { name: 'BerqWP', desc: 'Caché premium de nova generació. WordPress carrega 3-5x més ràpid que amb WP Rocket o LiteSpeed.' },
            { name: 'EWWW Image Optimizer (5GB)', desc: 'Optimització i conversió automàtica d\'imatges a WebP. Estalvia ample de banda i millora Core Web Vitals.' },
            { name: 'SEO Generator', desc: 'Genera meta titles, descriptions i schema.org automàticament. Estalvia hores de feina SEO a cada pàgina.' },
            { name: 'Sigma Media Manager', desc: 'Gestió avançada de la biblioteca de mitjans: carpetes, cerca, reemplaçament, optimització.' },
          ],
        },
        {
          name: 'Seguretat i manteniment',
          items: [
            { name: 'Security Ninja', desc: 'Suite de seguretat: tallafoc, escaneig de malware, enduriment de WP. Més de 50 comprovacions automàtiques.' },
            { name: 'WP Reset', desc: 'Reset i recuperació de WordPress per a staging i emergències. Resseteja el web a fàbrica en minuts.' },
            { name: 'Database Cleaner', desc: 'Neteja revisions, transients, spam, esborranys antics. Manté la base de dades lleugera i ràpida.' },
            { name: 'WP 301 Redirects', desc: 'Gestor de redireccions 301. Essencial per SEO quan canvies URLs o migres contingut.' },
          ],
        },
        {
          name: 'Compliment i extres',
          items: [
            { name: 'Plugin de cookies RGPD', desc: 'Bàner de cookies conforme a RGPD. Fins a 1.000 visites/mes gratuïtes al pla bàsic.' },
            { name: 'DarkMySite', desc: 'Mode fosc automàtic per al teu web. Tendència en disseny i millora d\'accessibilitat.' },
            { name: 'Deftform', desc: 'Constructor de formularis avançat: lògica condicional, integracions, anti-spam.' },
            { name: 'North Commerce', desc: 'Alternativa lleugera a WooCommerce. Botiga en línia sense la pesadesa de WooCommerce.' },
            { name: 'MySignature (1 signature)', desc: 'Signatura de correu professional amb la teva marca.' },
          ],
        },
      ],
    },
    pricing: {
      title: 'Preu i compromís',
      body: 'Tres plans mensuals: Hosting WP Start a 35€ (2GB RAM), Hosting WP Pro a 60€ (4GB RAM, recomanat) i Hosting WP Business a 100€ (8GB RAM). Tots els plans inclouen el stack complet de plugins premium pel cost d\'un hosting normal. Sense permanència. Migració inicial gratuïta.',
    },
    faq: {
      title: 'Preguntes freqüents',
      items: [
        { q: 'Quant costa el hosting?', a: 'Hosting WP Start des de 35€/mes, Hosting WP Pro a 60€/mes i Hosting WP Business a 100€/mes. Tots inclouen el stack de plugins premium.' },
        { q: 'Quins plugins premium estan inclosos?', a: 'Més de 15 plugins: Divi + Divi Next + Pee Aye Creative, BerqWP caché, EWWW Image Optimizer, SEO Generator, Security Ninja, WP 301 Redirects, Sigma Media Manager, North Commerce, plugin de cookies RGPD i més. Valor de mercat: més de 800€/any.' },
        { q: 'Les llicències dels plugins són vostres?', a: 'Sí. Les gestionem nosaltres com a part del servei. Tu no et preocupes de renovar, actualitzar ni mantenir-les. Si te\'n vas del hosting, els plugins es queden amb nosaltres.' },
        { q: 'Puc mantenir el meu domini actual?', a: 'Sí. Només necessitem que apuntis el DNS als nostres servidors. T\'acompanyem pas a pas.' },
        { q: 'Feu migració des del meu hosting actual?', a: 'Sí, gratuïta. Migrations el teu web, base de dades, correus. Sense pèrdua de dades, amb temps d\'inactivitat mínim.' },
        { q: 'I si necessito més recursos?', a: 'Escalem vertical o horitzontalment segons el cas. De vegades és canviar de pla, de vegades moure a un servidor dedicat o a Vercel.' },
        { q: 'Teniu servidors a Espanya?', a: 'Servidors a AWS Lightsail (data centers europeus: Irlanda, Frankfurt, Londres segons regió). Compleix RGPD, baixa latència des d\'Espanya.' },
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
      description: 'WordPress hosting on AWS Lightsail with a premium plugin stack included (Divi, BerqWP, SEO Generator, EWWW, Security Ninja and more). Support in Spanish, daily backups. From €35/month.',
    },
    hero: {
      eyebrow: 'Service',
      title: 'WordPress hosting with premium plugins included',
      subtitle: 'AWS Lightsail server, human support in Spanish, daily backups and a premium plugin stack for the price of a regular hosting. No surprises, no unanswered tickets.',
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
    plugins: {
      title: 'Premium plugin stack included in every plan',
      subtitle: 'These plugins cost over €800/year if you buy them separately. With our hosting they come installed, configured and maintained by us.',
      categories: [
        {
          name: 'Design and build',
          items: [
            { name: 'Divi (Elegant Themes)', desc: 'Premium visual builder and theme. The industry standard for designing WordPress without touching code.' },
            { name: 'Divi Next (Full Access)', desc: 'Extra extensions and modules for Divi: layouts, effects, additional blocks.' },
            { name: 'Pee Aye Creative (All Divi Plugins)', desc: 'Complete Divi plugin suite. Dozens of widgets, layouts and tools.' },
          ],
        },
        {
          name: 'Performance and SEO',
          items: [
            { name: 'BerqWP', desc: 'Next-generation premium cache. WordPress loads 3-5x faster than with WP Rocket or LiteSpeed.' },
            { name: 'EWWW Image Optimizer (5GB)', desc: 'Automatic image optimisation and WebP conversion. Saves bandwidth and improves Core Web Vitals.' },
            { name: 'SEO Generator', desc: 'Generates meta titles, descriptions and schema.org automatically. Saves hours of SEO work per page.' },
            { name: 'Sigma Media Manager', desc: 'Advanced media library management: folders, search, replace, optimisation.' },
          ],
        },
        {
          name: 'Security and maintenance',
          items: [
            { name: 'Security Ninja', desc: 'Security suite: firewall, malware scan, WP hardening. Over 50 automatic checks.' },
            { name: 'WP Reset', desc: 'WordPress reset and recovery for staging and emergencies. Resets the site to factory in minutes.' },
            { name: 'Database Cleaner', desc: 'Cleans revisions, transients, spam, old drafts. Keeps the database light and fast.' },
            { name: 'WP 301 Redirects', desc: '301 redirect manager. Essential for SEO when changing URLs or migrating content.' },
          ],
        },
        {
          name: 'Compliance and extras',
          items: [
            { name: 'GDPR cookie plugin', desc: 'GDPR-compliant cookie banner. Up to 1,000 visits/month free on the basic plan.' },
            { name: 'DarkMySite', desc: 'Automatic dark mode for your site. Design trend and improved accessibility.' },
            { name: 'Deftform', desc: 'Advanced form builder: conditional logic, integrations, anti-spam.' },
            { name: 'North Commerce', desc: 'Lightweight WooCommerce alternative. Online store without WooCommerce bloat.' },
            { name: 'MySignature (1 signature)', desc: 'Professional email signature with your brand.' },
          ],
        },
      ],
    },
    pricing: {
      title: 'Price and commitment',
      body: 'Three monthly plans: Hosting WP Start at €35 (2GB RAM), Hosting WP Pro at €60 (4GB RAM, recommended) and Hosting WP Business at €100 (8GB RAM). Every plan includes the complete premium plugin stack for the price of a regular hosting. No commitment. Initial migration free.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How much does hosting cost?', a: 'Hosting WP Start from €35/month, Hosting WP Pro at €60/month and Hosting WP Business at €100/month. All include the premium plugin stack.' },
        { q: 'Which premium plugins are included?', a: 'Over 15 plugins: Divi + Divi Next + Pee Aye Creative, BerqWP cache, EWWW Image Optimizer, SEO Generator, Security Ninja, WP 301 Redirects, Sigma Media Manager, North Commerce, GDPR cookie plugin and more. Market value: over €800/year.' },
        { q: 'Are the plugin licences yours?', a: 'Yes. We manage them as part of the service. You do not worry about renewing, updating or maintaining them. If you leave the hosting, the plugins stay with us.' },
        { q: 'Can I keep my current domain?', a: 'Yes. We just need you to point DNS to our servers. We guide you step by step.' },
        { q: 'Do you migrate from my current hosting?', a: 'Yes, for free. We migrate your site, database, emails. No data loss, minimal downtime.' },
        { q: 'What if I need more resources?', a: 'We scale vertically or horizontally depending on the case. Sometimes it is changing plans, sometimes moving to a dedicated server or Vercel.' },
        { q: 'Do you have servers in Spain?', a: 'Servers on AWS Lightsail (European data centres: Ireland, Frankfurt, London depending on region). GDPR-compliant, low latency from Spain.' },
        { q: 'What about email?', a: 'Optionally included. Mailboxes with your domain, antispam, webmail, IMAP/SMTP. If you prefer Google Workspace or Microsoft 365, we configure that too.' },
      ],
    },
    cta: {
      title: 'Tired of your current hosting?',
      subtitle: 'Request a free audit of your hosting. We will tell you if it is worth migrating and which plan fits you.',
    },
  },
};
