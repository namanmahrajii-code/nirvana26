export interface SpeakerData {
  id: string;
  number: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  keynoteTopic: string;
  talkDate: string;
  talkTime: string;
  talkVenue: string;
  image: string;
  quote: string;
  socials: { twitter?: string; linkedin?: string; github?: string };
}

export const FEST_SPEAKERS: SpeakerData[] = [
  {
    id: 'dr-aarav-mehta',
    number: '01',
    name: 'DR. AARAV MEHTA',
    role: 'DIRECTOR OF AI RESEARCH & ARCHITECTURE',
    organization: 'META AI LABS / EX-DEEPMIND',
    bio: 'Pioneered neuro-symbolic reasoning frameworks and large multimodal agent foundations. Recipient of ACM Doctoral Dissertation Award.',
    keynoteTopic: 'BEYOND TRANSFORMERS: EMBODIED AUTONOMY IN REAL-TIME SYSTEMS',
    talkDate: 'OCTOBER 24, 2026',
    talkTime: '10:00 AM — 11:30 AM',
    talkVenue: 'CENTRAL AUDITORIUM // MAIN STAGE',
    image: '/assets/speakers/aarav.jpg',
    quote: 'Innovation is not merely iteration; it is the deliberate destruction of obsolete constraints.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'elena-rostova',
    number: '02',
    name: 'ELENA ROSTOVA',
    role: 'HEAD OF QUANTUM ARCHITECTURE',
    organization: 'RIGETTI QUANTUM / CERN ALUMNA',
    bio: 'Leading researcher in fault-tolerant superconducting qubit control pipelines and hybrid classical-quantum optimization algorithms.',
    keynoteTopic: 'QUANTUM ANNEALING & HIGH-ENTROPY CRYPTOGRAPHY AT SCALE',
    talkDate: 'OCTOBER 24, 2026',
    talkTime: '01:00 PM — 04:30 PM',
    talkVenue: 'SEMINAR HALL 01',
    image: '/assets/speakers/elena.jpg',
    quote: 'When computation breaks into quantum superposition, classical logic becomes the past.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'kabir-singhania',
    number: '03',
    name: 'KABIR SINGHANIA',
    role: 'CHIEF THREAT ARCHITECT & RED TEAM LEADER',
    organization: 'CROWDSTRIKE LABS / BUG BOUNTY #1',
    bio: 'Identified 120+ zero-day CVEs across hypervisors and kernel subsystems. Advisor to international cyber defense coalitions.',
    keynoteTopic: 'THE ADVERSARY MINDSET: EXPLOITATION IN ZERO-TRUST PERIMETERS',
    talkDate: 'OCTOBER 25, 2026',
    talkTime: '09:00 AM — 10:30 AM',
    talkVenue: 'SECURE AUDITORIUM // WING B',
    image: '/assets/speakers/kabir.jpg',
    quote: 'Every secure system is just an unsolved riddle waiting for sufficient obsession.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
];
