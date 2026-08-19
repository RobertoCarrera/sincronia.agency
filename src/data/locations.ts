/** Top 15 municipios de la provincia de Tarragona por población — ordenados por prioridad SEO. */
export interface Location {
  slug: string;
  name: string;
  nameCa: string;
  population: number;
  comarca: string;
  isHq?: boolean;
}

export const locations: Location[] = [
  { slug: 'tarragona', name: 'Tarragona', nameCa: 'Tarragona', population: 135000, comarca: 'Tarragonès' },
  { slug: 'reus', name: 'Reus', nameCa: 'Reus', population: 107000, comarca: 'Baix Camp' },
  { slug: 'el-vendrell', name: 'El Vendrell', nameCa: 'El Vendrell', population: 37000, comarca: 'Baix Penedès' },
  { slug: 'cambrils', name: 'Cambrils', nameCa: 'Cambrils', population: 35000, comarca: 'Baix Camp' },
  { slug: 'tortosa', name: 'Tortosa', nameCa: 'Tortosa', population: 33000, comarca: 'Baix Ebre' },
  { slug: 'salou', name: 'Salou', nameCa: 'Salou', population: 28000, comarca: 'Tarragonès' },
  { slug: 'calafell', name: 'Calafell', nameCa: 'Calafell', population: 25000, comarca: 'Baix Penedès', isHq: true },
  { slug: 'valls', name: 'Valls', nameCa: 'Valls', population: 25000, comarca: 'Alt Camp' },
  { slug: 'vila-seca', name: 'Vila-seca', nameCa: 'Vila-seca', population: 22000, comarca: 'Tarragonès' },
  { slug: 'amposta', name: 'Amposta', nameCa: 'Amposta', population: 21000, comarca: 'Montsià' },
  { slug: 'torredembarra', name: 'Torredembarra', nameCa: 'Torredembarra', population: 16000, comarca: 'Tarragonès' },
  { slug: 'sant-carles-de-la-rapita', name: "Sant Carles de la Ràpita", nameCa: "Sant Carles de la Ràpita", population: 15000, comarca: 'Montsià' },
  { slug: 'cunit', name: 'Cunit', nameCa: 'Cunit', population: 14000, comarca: 'Baix Penedès' },
  { slug: 'mont-roig-del-camp', name: 'Mont-roig del Camp', nameCa: 'Mont-roig del Camp', population: 12000, comarca: 'Baix Camp' },
  { slug: 'deltebre', name: 'Deltebre', nameCa: 'Deltebre', population: 12000, comarca: 'Baix Ebre' },
];
