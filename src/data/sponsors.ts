export interface Sponsor {
  name: string;
  tier: 'TITLE' | 'GOLD' | 'COMMUNITY' | 'ECOSYSTEM';
  badge: string;
  category: string;
  symbol: string;
  desc: string;
}

export const FEST_SPONSORS: Sponsor[] = [
  {
    name: 'NVIDIA INC.',
    tier: 'TITLE',
    badge: 'PRESENTING TECH TITAN',
    category: 'ACCELERATED COMPUTING & AI',
    symbol: 'NVDA // GEFORCE',
    desc: 'Empowering deep learning and GPU computing across the entire NIRVAN engineering infrastructure.'
  },
  {
    name: 'GOOGLE CLOUD',
    tier: 'GOLD',
    badge: 'INFRASTRUCTURE PARTNER',
    category: 'CLOUD & VERTEX AI',
    symbol: 'GCP // COMPUTE',
    desc: 'Providing $50,000+ in cloud credits, TPU accelerators, and hackathon incubation.'
  },
  {
    name: 'GITHUB EDUCATION',
    tier: 'GOLD',
    badge: 'DEVELOPER ECOSYSTEM',
    category: 'OPEN SOURCE INFRASTRUCTURE',
    symbol: 'OCTOCAT // GITHUB',
    desc: 'Official platform partner powering all project repositories, CI/CD, and developer packs.'
  },
  {
    name: 'RED BULL ON-PREMISE',
    tier: 'COMMUNITY',
    badge: 'ENERGY & FUEL PARTNER',
    category: 'FESTIVAL RECHARGE',
    symbol: 'RB // UNLEASH',
    desc: 'Powering non-stop 36-hour hacker gauntlet with relentless energy.'
  },
  {
    name: 'JETBRAINS',
    tier: 'COMMUNITY',
    badge: 'DEVELOPER TOOLS',
    category: 'IDE & TOOLING',
    symbol: 'JB // ALL-PRODUCTS',
    desc: 'Complimentary Pro IDE licenses for all event participants and hackathon finalists.'
  },
  {
    name: 'POLYGON LABS',
    tier: 'ECOSYSTEM',
    badge: 'WEB3 TRACK SPONSOR',
    category: 'DECENTRALIZED PROTOCOLS',
    symbol: 'MATIC // ZERO-KNOWLEDGE',
    desc: 'Special bounty pool of ₹50,000 for top decentralized dApps deployed on zkEVM.'
  },
  {
    name: 'RAZER GAMING',
    tier: 'ECOSYSTEM',
    badge: 'HARDWARE & GEAR',
    category: 'PRO GAMING PERIPHERALS',
    symbol: 'RAZER // CHROMA',
    desc: 'Tournament-grade mechanical keyboards, high-DPI mice, and headsets for E-Sports arena.'
  }
];
