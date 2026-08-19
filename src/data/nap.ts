/** Datos NAP (Name, Address, Phone) del negocio — fuente única de verdad. */
export const nap = {
  name: 'Sincronia Agency',
  shortName: 'Sincronia',
  legalName: 'Sincronia Agency',
  tagline: 'Agencia técnica de diseño, desarrollo y SEO en Tarragona',
  street: 'Carrer del Pisuerga 32',
  city: 'Segur de Calafell',
  region: 'Tarragona',
  postalCode: '43882',
  country: 'ES',
  phone: '+34 624 34 49 17',
  phoneDisplay: '624 34 49 17',
  email: 'hola@sincronia.agency',
  schedule: 'Lunes a domingo · 7:00–24:00',
  geo: { lat: 41.1934, lng: 1.5442 },
  priceRange: '€€',
  url: 'https://sincronia.agency',
  socials: {
    // Vacío por ahora, Roberto los añadirá cuando estén
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: '',
  },
} as const;

export const openingHoursSpecification = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  opens: '07:00',
  closes: '24:00',
} as const;
