import type { Locale } from '~/i18n/locales';

export interface ProductContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  intro: { title: string; paragraphs: string[] };
  features: { title: string; items: Array<{ title: string; desc: string }> };
  pricing: { title: string; body: string };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  cta: { title: string; subtitle: string };
}

export const simplifica: Record<Locale, ProductContent> = {
  es: {
    meta: {
      title: 'Simplifica — CRM multi-sector en beta · Sincronia Agency',
      description: 'CRM que se adapta a tu sector, no al revés. Implementación personalizada para clínicas, asesorías, talleres y negocios con clientes y citas. Solo pagas el hosting.',
    },
    hero: {
      eyebrow: 'Producto propio en beta',
      title: 'Simplifica — CRM multi-sector',
      subtitle: 'El CRM que se adapta a tu sector, no al revés. Implementación personalizada para clínicas, asesorías, talleres y cualquier negocio con clientes y citas.',
    },
    intro: {
      title: 'Un CRM sin las trampas de los CRM',
      paragraphs: [
        'Todos hemos usado un CRM genérico que no encajaba con nuestro negocio. Campos que sobran, flujos que no aplican, informes que nadie mira, y un precio por usuario que se dispara. Lo que prometía ahorrar tiempo acaba costando meses de adaptación y formación.',
        'Simplifica nace de la frustración de implementar CRMs comerciales para clientes que nunca llegaban a usarlos. La solución no es otro CRM más: es un CRM que se construye contigo, según tu sector, tus clientes y tus procesos. Sin campos de relleno, sin flujos importados, sin funciones premium que te obligan a pagar más.',
        'Durante la fase beta, la implementación inicial es gratuita. Solo pagas el hosting desde 20€/mes. Sin contratos de permanencia. Y cuando esté listo, lo mantendremos nosotros para que tú te centres en tu negocio.',
      ],
    },
    features: {
      title: 'Qué puede hacer Simplifica por tu negocio',
      items: [
        { title: 'Gestión de clientes y leads', desc: 'Ficha unificada con todo el historial: emails, llamadas, citas, facturas, documentos adjuntos. Sin perder nada en hilos de email o notas dispersas.' },
        { title: 'Agenda y citas recurrentes', desc: 'Calendario con vistas por profesional, recurso o sede. Confirmaciones automáticas por email y SMS, gestión de cancelaciones y lista de espera.' },
        { title: 'Facturación integrada', desc: 'Generación de facturas, presupuestos y albaranes desde el propio CRM. Compatible con Verifactu y los principales formatos de exportación.' },
        { title: 'Informes y KPIs', desc: 'Dashboard con los números que importan a tu negocio: ocupación, ticket medio, recurrencia, fuentes de lead. Exportable a CSV o conectado a tu herramienta de BI.' },
      ],
    },
    pricing: {
      title: 'Fase beta: condiciones especiales',
      body: 'Durante la beta, la implementación inicial es gratuita. Solo pagas el hosting desde 20€/mes (incluye backups, monitorización, seguridad y mantenimiento del CRM). Sin contratos de permanencia: si en 3 meses no te convence, te ayudamos a migrar tus datos y cancelas con un email.',
    },
    faq: {
      title: 'Preguntas frecuentes sobre Simplifica',
      items: [
        { q: '¿Qué sectores cubre Simplifica?', a: 'Lo hemos implementado para clínicas dentales y de fisioterapia, asesorías fiscales y laborales, talleres mecánicos, centros de formación y estudios de diseño. La arquitectura modular permite adaptarlo a casi cualquier negocio con clientes y citas recurrentes.' },
        { q: '¿Cuánto tarda la implementación?', a: 'Entre 2 y 6 semanas según la complejidad. Una clínica pequeña con 3 profesionales puede estar operativa en 2 semanas; una asesoría con 15 profesionales y múltiples departamentos puede necesitar 6.' },
        { q: '¿Puedo migrar mis datos de otro CRM?', a: 'Sí. Migramos desde HubSpot, Pipedrive, Zoho, Salesforce, o cualquier Excel/CSV razonable. La migración está incluida en la implementación.' },
        { q: '¿Qué pasa cuando salga de la beta?', a: 'El precio de hosting se mantiene en 20€/mes. La implementación, que era gratuita en beta, pasará a tener un coste (estimado entre 1.500€ y 5.000€ según complejidad). Los clientes beta tendrán condiciones preferentes.' },
        { q: '¿Y si no quiero seguir con vosotros?', a: 'Tus datos son tuyos. Te los entregamos en formato estándar (CSV + JSON) y te ayudamos a migrar a otra plataforma. Sin letra pequeña.' },
      ],
    },
    cta: {
      title: 'Solicita una demo personalizada de Simplifica',
      subtitle: 'Cuéntanos tu negocio y te preparamos una demo con tus propios casos de uso. Sin compromiso.',
    },
  },
  ca: {
    meta: {
      title: 'Simplifica — CRM multi-sector en beta · Sincronia Agency',
      description: "CRM que s'adapta al teu sector, no a l'inrevés. Implementació personalitzada per a clíniques, assessories, tallers i negocis amb clients i cites. Només pagues l'hostatge.",
    },
    hero: {
      eyebrow: 'Producte propi en beta',
      title: 'Simplifica — CRM multi-sector',
      subtitle: "El CRM que s'adapta al teu sector, no a l'inrevés. Implementació personalitzada per a clíniques, assessories, tallers i qualsevol negoci amb clients i cites.",
    },
    intro: {
      title: 'Un CRM sense les trampes dels CRM',
      paragraphs: [
        "Tots hem fet servir un CRM genèric que no encaixava amb el nostre negoci. Camps que sobren, fluxos que no apliquen, informes que ningú mira, i un preu per usuari que es dispara. El que prometia estalviar temps acaba costant mesos d'adaptació i formació.",
        "Simplifica neix de la frustració d'implementar CRMs comercials per a clients que mai no acabaven de fer-los servir. La solució no és un altre CRM més: és un CRM que es construeix amb tu, segons el teu sector, els teus clients i els teus processos. Sense camps d'ompliment, sense fluxos importats, sense funcions premium que t'obliguen a pagar més.",
        "Durant la fase beta, la implementació inicial és gratuïta. Només pagues l'hostatge des de 20€/mes. Sense contractes de permanència. I quan estigui llest, el mantindrem nosaltres perquè tu et centris en el teu negoci.",
      ],
    },
    features: {
      title: 'Què pot fer Simplifica pel teu negoci',
      items: [
        { title: 'Gestió de clients i leads', desc: 'Fitxa unificada amb tot l\'historial: correus, trucades, cites, factures, documents adjunts. Sense perdre res en fils de correu o notes disperses.' },
        { title: 'Agenda i cites recurrents', desc: 'Calendari amb vistes per professional, recurs o seu. Confirmacions automàtiques per correu i SMS, gestió de cancel·lacions i llista d\'espera.' },
        { title: 'Facturació integrada', desc: 'Generació de factures, pressupostos i albarans des del propi CRM. Compatible amb Verifactu i els principals formats d\'exportació.' },
        { title: 'Informes i KPIs', desc: 'Dashboard amb els números que importen al teu negoci: ocupació, tiquet mitjà, recurrència, fonts de lead. Exportable a CSV o connectat a la teva eina de BI.' },
      ],
    },
    pricing: {
      title: 'Fase beta: condicions especials',
      body: "Durant la beta, la implementació inicial és gratuïta. Només pagues l'hostatge des de 20€/mes (inclou còpies de seguretat, monitoratge, seguretat i manteniment del CRM). Sense contractes de permanència: si en 3 mesos no et convé, t'ajudem a migrar les teves dades i cancel·les amb un correu.",
    },
    faq: {
      title: 'Preguntes freqüents sobre Simplifica',
      items: [
        { q: 'Quins sectors cobreix Simplifica?', a: "L'hem implementat per a clíniques dentals i de fisioteràpia, assessories fiscals i laborals, tallers mecànics, centres de formació i estudis de disseny. L'arquitectura modular permet adaptar-lo a gairebé qualsevol negoci amb clients i cites recurrents." },
        { q: 'Quant triga la implementació?', a: "Entre 2 i 6 setmanes segons la complexitat. Una clínica petita amb 3 professionals pot estar operativa en 2 setmanes; una assessoria amb 15 professionals i múltiples departaments pot necessitar 6." },
        { q: 'Puc migrar les meves dades d\'un altre CRM?', a: 'Sí. Migrations des de HubSpot, Pipedrive, Zoho, Salesforce, o qualsevol Excel/CSV raonable. La migració està inclosa a la implementació.' },
        { q: 'Què passa quan surti de la beta?', a: "El preu d'hostatge es manté en 20€/mes. La implementació, que era gratuïta en beta, passarà a tenir un cost (estimat entre 1.500€ i 5.000€ segons complexitat). Els clients beta tindran condicions preferents." },
        { q: 'I si no vull continuar amb vosaltres?', a: 'Les teves dades són teves. Te les lliurem en format estàndard (CSV + JSON) i t\'ajudem a migrar a una altra plataforma. Sense lletra petita.' },
      ],
    },
    cta: {
      title: 'Sol·licita una demo personalitzada de Simplifica',
      subtitle: "Explica'ns el teu negoci i et preparem una demo amb els teus propis casos d'ús. Sense compromís.",
    },
  },
  en: {
    meta: {
      title: 'Simplifica — Multi-sector CRM in beta · Sincronia Agency',
      description: 'A CRM that adapts to your sector, not the other way round. Custom implementation for clinics, consultancies, workshops and businesses with clients and appointments. You only pay for hosting.',
    },
    hero: {
      eyebrow: 'Our own product in beta',
      title: 'Simplifica — Multi-sector CRM',
      subtitle: 'A CRM that adapts to your sector, not the other way round. Custom implementation for clinics, consultancies, workshops and any business with clients and appointments.',
    },
    intro: {
      title: 'A CRM without the CRM traps',
      paragraphs: [
        'We have all used a generic CRM that did not fit our business. Fields that do not apply, workflows we never trigger, reports nobody reads, and per-user pricing that spirals. What promised to save time ends up costing months of adaptation and training.',
        'Simplifica was born from the frustration of implementing commercial CRMs for clients who never ended up using them. The solution is not yet another CRM: it is a CRM built with you, according to your sector, your clients and your processes. No filler fields, no imported workflows, no premium features that force you to pay more.',
        'During the beta phase, the initial implementation is free. You only pay hosting from €20/month. No commitment contracts. And when it is ready, we will maintain it so you can focus on your business.',
      ],
    },
    features: {
      title: 'What Simplifica can do for your business',
      items: [
        { title: 'Client and lead management', desc: 'Unified record with full history: emails, calls, appointments, invoices, attachments. Nothing lost in email threads or scattered notes.' },
        { title: 'Recurring appointments', desc: 'Calendar with views by professional, resource or location. Automatic email and SMS confirmations, cancellation handling and wait list.' },
        { title: 'Integrated invoicing', desc: 'Generate invoices, quotes and delivery notes from within the CRM. Compatible with Verifactu and the main export formats.' },
        { title: 'Reports and KPIs', desc: 'Dashboard with the numbers that matter to your business: occupancy, average ticket, recurrence, lead sources. Exportable to CSV or connected to your BI tool.' },
      ],
    },
    pricing: {
      title: 'Beta phase: special conditions',
      body: 'During beta, the initial implementation is free. You only pay hosting from €20/month (includes backups, monitoring, security and CRM maintenance). No commitment: if within 3 months it does not convince you, we help you migrate your data and you cancel with an email.',
    },
    faq: {
      title: 'Frequently asked questions about Simplifica',
      items: [
        { q: 'Which sectors does Simplifica cover?', a: 'We have implemented it for dental and physiotherapy clinics, tax and labour consultancies, mechanical workshops, training centres and design studios. The modular architecture lets us adapt it to almost any business with clients and recurring appointments.' },
        { q: 'How long does the implementation take?', a: 'Between 2 and 6 weeks depending on complexity. A small clinic with 3 professionals can be operational in 2 weeks; a consultancy with 15 professionals and multiple departments may need 6.' },
        { q: 'Can I migrate my data from another CRM?', a: 'Yes. We migrate from HubSpot, Pipedrive, Zoho, Salesforce, or any reasonable Excel/CSV. Migration is included in the implementation.' },
        { q: 'What happens when beta ends?', a: 'Hosting stays at €20/month. Implementation, free during beta, will have a cost (estimated €1,500–€5,000 depending on complexity). Beta clients get preferential conditions.' },
        { q: 'What if I do not want to continue with you?', a: 'Your data is yours. We hand it over in standard format (CSV + JSON) and help you migrate to another platform. No fine print.' },
      ],
    },
    cta: {
      title: 'Request a personalised Simplifica demo',
      subtitle: 'Tell us about your business and we will prepare a demo with your own use cases. No commitment.',
    },
  },
};
