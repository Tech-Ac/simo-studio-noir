
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  cover: string;
  hero: string;
  overview: string;
  challenge: string;
  strategy: string;
  identity: string;
  palette: string[];
  typography: { primary: string; secondary: string };
  results: string[];
  gallery: string[];
  nextSlug?: string;
};

export const projects: Project[] = [
  {
    slug: 'myogi',
    title: 'MYOGI',
    category: 'Restaurant Branding',
    year: '2025',
    location: 'Casablanca, MA',
    cover: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
    hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600',
    overview: 'MYOGI is a modern Japanese izakaya reinterpreting traditional flavors for a Moroccan audience. The brand needed to feel Tokyo minimal, not sushi cliché.',
    challenge: 'Japanese restaurants in Morocco all look the same: red, black, koi fish. Client wanted to stand out as premium and contemporary without alienating local diners.',
    strategy: 'Position MYOGI as a quiet luxury hideaway. Strategy: wabi-sabi minimalism, muted stone palette, editorial typography, focus on craft over color.',
    identity: 'Wordmark inspired by sumi brush but geometrically refined. System uses heavy negative space, blind emboss, and stone-textured paper to convey calm.',
    palette: ['#0A0A0A','#E8E3DC','#B8A99A','#6B6B6B'],
    typography: { primary: 'Instrument Serif', secondary: 'Geist Mono' },
    results: ['+84% Instagram saves in 30 days','Featured in M le Monde Food','Reservation waitlist 2 weeks'],
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200',
    ]
  },
  {
    slug: 'z-secrets',
    title: 'Z SECRETS',
    category: 'Beauty — Identity & Packaging',
    year: '2025',
    location: 'Paris, FR',
    cover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200',
    hero: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600',
    overview: 'Direct-to-consumer beauty ritual brand for sensitive skin. Needed to compete with Aesop and Le Labo on a startup budget.',
    challenge: 'Crowded beauty shelf. Need to look luxury at €32 price point, be gender-neutral, and photograph well on TikTok.',
    strategy: 'Apothecary minimalism: stark white, single accent, lots of air. Typography does the talking. Packaging system designed for refill.',
    identity: 'Monospaced logotype with tracked-out letters. System built on 1 typeface, 1 grid, 1 material: miron violet glass.',
    palette: ['#FFFFFF','#0A0A0A','#D6CCC2','#9C8C7C'],
    typography: { primary: 'Geist Sans', secondary: 'Geist Mono' },
    results: ['Sold out first batch 1,200 units in 72h','42% repeat purchase','Stocked at Oh My Cream'],
    gallery: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200',
      'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    ]
  },
  {
    slug: 'plantina',
    title: 'PLANTINA',
    category: 'Packaging & Visual System',
    year: '2024',
    location: 'Marrakech, MA',
    cover: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200',
    hero: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1600',
    overview: 'Plant-based deli and market. Needed identity that avoids green clichés and feels like a boutique, not a health store.',
    challenge: 'Vegan visual codes are exhausted. Client wanted premium urban grocer, not hippie.',
    strategy: 'Editorial produce: use scientific plant names, beige paper stock, and brutalist grid. Color comes from product, not brand.',
    identity: 'Custom wordmark with ink traps. System uses rubber stamps and newsprint menus to feel tactile and daily.',
    palette: ['#F5F1EB','#1A1A1A','#8A9A8F','#C2B8AD'],
    typography: { primary: 'Neue Montreal', secondary: 'Instrument Serif' },
    results: ['Foot traffic +57% after rebrand','Press: L’Officiel Maroc'],
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200',
    ]
  },
  {
    slug: 'titrit',
    title: 'TITRIT',
    category: 'Hospitality — Boutique Hotel',
    year: '2024',
    location: 'Essaouira, MA',
    cover: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200',
    hero: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600',
    overview: '8-room boutique hotel named after the Berber word for star. Identity needed to bridge heritage and modern slow travel.',
    challenge: 'Avoid ethnic pastiche while honoring Amazigh culture. Must work on stone, linen, and wax seals.',
    strategy: 'Symbol system derived from Tifinagh, reduced to geometric star grid. Quiet, spiritual, timeless.',
    identity: 'Custom symbol + bilingual wordmark (Latin / Tifinagh). All applications letterpressed on raw materials.',
    palette: ['#0F0F0F','#EDE8E3','#A89B8C','#5A5350'],
    typography: { primary: 'Instrument Serif', secondary: 'Geist Sans' },
    results: ['ADR increased 34%','Featured on Cereal Magazine'],
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200',
      'https://images.unsplash.com/photo-1551882547-b79c53c6f3d6?q=80&w=1200',
    ]
  },
  {
    slug: 'orchid-island',
    title: 'ORCHID ISLAND',
    category: 'Real Estate — Luxury',
    year: '2024',
    location: 'Dakhla, MA',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600',
    overview: 'Off-plan luxury villas targeting GCC investors. Needed identity that feels private, not promotional.',
    challenge: 'Real estate branding in Morocco feels generic gold. Need to signal ultra-premium without showing product yet.',
    strategy: 'Private member club codes: no photography, only texture and typography. Invitation-only language.',
    identity: 'Thin serif logotype with generous tracking. System uses blind deboss on black paper. No imagery, only material.',
    palette: ['#080808','#F7F5F2','#B1A9A0','#3A3633'],
    typography: { primary: 'Instrument Serif Light', secondary: 'Geist Mono' },
    results: ['12 villas reserved pre-launch','Investor deck conversion +41%'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200',
    ]
  },
  {
    slug: 'la-table-noir',
    title: 'LA TABLE NOIR',
    category: 'Restaurant Branding',
    year: '2023',
    location: 'Rabat, MA',
    cover: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200',
    hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600',
    overview: 'Fine dining concept exploring Moroccan ingredients through French technique. Dark, theatrical, intimate.',
    challenge: 'Compete with established fine dining while being new. Must feel Michelin before the guide arrives.',
    strategy: 'Noir editorial: black menus, white ink, single candle light photography. Voice is quiet and confident.',
    identity: 'Wordmark with high contrast serif. System built on contrast and silence.',
    palette: ['#000000','#FFFFFF','#2B2B2B','#9A9A9A'],
    typography: { primary: 'Instrument Serif', secondary: 'Geist Sans' },
    results: ['Booked out 3 months after launch','Best New Restaurant 2023 Gault&Millau Maroc'],
    gallery: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200',
    ]
  }
];

export const getProject = (slug: string) => projects.find(p=>p.slug===slug);
export const getNextProject = (slug: string) => {
  const idx = projects.findIndex(p=>p.slug===slug);
  if(idx===-1) return projects[0];
  return projects[(idx+1)%projects.length];
}
