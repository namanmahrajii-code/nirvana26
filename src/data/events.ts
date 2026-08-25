export interface EventData {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: 'COMPETITION' | 'LEARNING' | 'GAMING' | 'ADVENTURE';
  date: string;
  time: string;
  venue: string;
  teamSize: string;
  registrationType: 'team' | 'solo_or_duo' | 'squad' | 'solo';
  minMembers: number;
  maxMembers: number;
  entryFee: string;
  prizePool: string;
  prizeFirst: string;
  prizeSecond: string;
  prizeThird: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  accentColor: string;
  rules: string[];
  timeline: { time: string; activity: string }[];
  judgingCriteria: string[];
  contactPerson: { name: string; phone: string; role: string };
  tracks?: string[];
  gameTitles?: string[];
}

export const FEST_EVENTS: EventData[] = [
  {
    id: 'hackathon',
    slug: 'hackathon',
    number: '01',
    title: 'HACKATHON // BUILD. CODE. COMPETE.',
    tagline: '36-Hour Non-Stop Engineering Gauntlet',
    category: 'COMPETITION',
    date: 'OCTOBER 24—25, 2026',
    time: '10:00 AM ONWARDS',
    venue: 'CENTRAL COMPUTING LAB & CS COMPLEX',
    teamSize: '2 — 4 MEMBERS',
    registrationType: 'team',
    minMembers: 2,
    maxMembers: 4,
    entryFee: '₹100 / MEMBER',
    prizePool: '₹1,00,000',
    prizeFirst: '₹50,000 + INCUBATION',
    prizeSecond: '₹30,000 + CREDITS',
    prizeThird: '₹20,000 + SWAG',
    shortDesc: 'Solve real-world challenges through AI, Web3, FinTech, and open innovation in a grueling 36-hour sprint.',
    longDesc: 'NIRVAN Hackathon is the flagship crucible for visionary engineers, builders, and designers. Teams will battle through high-intensity checkpoint reviews, mentorship rounds from Silicon Valley veterans, and live prototype deployment before a panel of elite judges.',
    image: '/assets/events/hackathon.jpg',
    accentColor: '#E50914',
    tracks: [
      'Autonomous AI & Agentic Systems',
      'Decentralized Infrastructure & Web3',
      'FinTech & High-Frequency Systems',
      'CleanTech & Smart Hardware Integration',
      'Open Innovation Track'
    ],
    rules: [
      'Team members must be enrolled students in an accredited university/college with valid college ID cards.',
      'All code, design assets, and architecture must be built exclusively during the 36-hour hackathon period. Pre-existing codebases will lead to instant disqualification.',
      'Open-source libraries, APIs, and frameworks are allowed, provided they are cited in the project repository README.',
      'Mandatory git commits every 4 hours. Final submissions must include working live deployment link, GitHub repo, and a 2-minute demo video.',
      'Strict zero-tolerance policy towards plagiarism, toxicity, or conduct violation.'
    ],
    timeline: [
      { time: '10:00 AM (Day 1)', activity: 'Problem Statements Released & Check-In' },
      { time: '12:00 PM (Day 1)', activity: 'Hacking Begins // Sprint 01' },
      { time: '07:00 PM (Day 1)', activity: 'Mentor Round 01: Architecture Evaluation' },
      { time: '02:00 AM (Day 2)', activity: 'Midnight Coffee Rush & Lightning Check' },
      { time: '09:00 AM (Day 2)', activity: 'Mentor Round 02: Code Review' },
      { time: '04:00 PM (Day 2)', activity: 'Code Freeze & Final Stage Pitches' }
    ],
    judgingCriteria: [
      'Innovation & Originality (25%)',
      'Technical Complexity & Architecture (30%)',
      'Real-world Impact & Viability (25%)',
      'UI/UX Polish & Stage Presentation (20%)'
    ],
    contactPerson: {
      name: 'Rohan Sharma',
      phone: '+91 98765 43210',
      role: 'Hackathon Lead Coordinator'
    }
  },
  {
    id: 'ctf',
    slug: 'ctf',
    number: '02',
    title: 'CTF // BREAK. CRACK. DEFEND.',
    tagline: 'Jeopardy-Style Offensive Cyber Warfare',
    category: 'COMPETITION',
    date: 'OCTOBER 24, 2026',
    time: '01:00 PM — 09:00 PM',
    venue: 'SECURE CYBER AUDITORIUM // WING B',
    teamSize: '1 — 2 MEMBERS',
    registrationType: 'solo_or_duo',
    minMembers: 1,
    maxMembers: 2,
    entryFee: '₹150 / PARTICIPANT',
    prizePool: '₹40,000',
    prizeFirst: '₹22,000 + OSCP VOUCHER',
    prizeSecond: '₹12,000 + BUG BOUNTY CREDITS',
    prizeThird: '₹6,000',
    shortDesc: 'Decompile binaries, exploit zero-days, decrypt cryptographic ciphers, and dominate the real-time live scoreboard.',
    longDesc: 'An adversarial cyber crucible crafted by veteran security researchers. Challenges span Binary Exploitation, Web Exploitation, Reverse Engineering, Cryptography, Forensics, and Hardware Hacking.',
    image: '/assets/events/ctf.jpg',
    accentColor: '#FF1E27',
    tracks: [
      'Web Security & API Exploitation',
      'Pwn & Binary Exploitation (x86_64)',
      'Reverse Engineering & Malware Decompilation',
      'Post-Quantum Cryptography & Ciphers',
      'Digital Forensics & Incident Response'
    ],
    rules: [
      'Flags follow format: NIRVAN{flag_text_here}.',
      'Attacking the scoring infrastructure, DDoS against the platform, or brute-forcing flag submission triggers immediate blacklisting.',
      'No sharing of flags, hints, or exploit scripts across competing teams.',
      'Dynamic scoring is enabled: harder challenges award higher points as solve count decreases.',
      'Writeups required for top 5 teams within 2 hours of competition close.'
    ],
    timeline: [
      { time: '01:00 PM', activity: 'Platform Credentials Release & Briefing' },
      { time: '01:30 PM', activity: 'Capture The Flag War Room Opens' },
      { time: '05:00 PM', activity: 'Wave 02 High-Difficulty Binary Drops' },
      { time: '08:30 PM', activity: 'Scoreboard Freeze (Final 30 Min)' },
      { time: '09:00 PM', activity: 'Competition Terminated & Verification' }
    ],
    judgingCriteria: [
      'Total Points on Dynamic Scoreboard (80%)',
      'Writeup Quality & Exploit Elegance (20%)'
    ],
    contactPerson: {
      name: 'Aditya Vardhan',
      phone: '+91 98765 43211',
      role: 'Cybersecurity Head'
    }
  },
  {
    id: 'workshop',
    slug: 'workshop',
    number: '03',
    title: 'WORKSHOP // LEARN. EXPLORE. CREATE.',
    tagline: 'Deep-Dive Masterclasses by Industry Pioneers',
    category: 'LEARNING',
    date: 'OCTOBER 24 & 25, 2026',
    time: '11:00 AM — 04:00 PM',
    venue: 'INNOVATION SEMINAR HALL 01',
    teamSize: 'INDIVIDUAL PASS',
    registrationType: 'solo',
    minMembers: 1,
    maxMembers: 1,
    entryFee: '₹200 / PASS (CERTIFIED)',
    prizePool: 'CERTIFICATES + GPU CLOUD CREDITS',
    prizeFirst: '$500 Cloud Compute Credits',
    prizeSecond: 'Pro Certification Badges',
    prizeThird: 'Exclusive 1-on-1 Mentorship',
    shortDesc: 'Hands-on intensive masterclasses on Neural Architecture, LLM Agents, and Hardware Quantum Simulators.',
    longDesc: 'Immerse yourself in direct technical workshops conducted by senior architects from Google, NVIDIA, and top research institutions. Walk out with functional projects deployed to production.',
    image: '/assets/events/workshop.jpg',
    accentColor: '#E50914',
    tracks: [
      'Track A: Building Agentic AI Systems with LangGraph & DeepSeek',
      'Track B: GPU-Accelerated Shaders & WebGL with Three.js',
      'Track C: Zero-Knowledge Proofs & Cryptographic Engineering'
    ],
    rules: [
      'Attendees must bring their own laptops with charger and pre-configured Node.js/Python 3.11 environment.',
      'Verified Certificate of Mastery issued to all attendees who complete the live lab assignment.',
      'Limited seats (120 participants max) to ensure direct 1:1 instructor support.'
    ],
    timeline: [
      { time: '11:00 AM', activity: 'Theoretical Framework & Architecture Deconstruction' },
      { time: '12:30 PM', activity: 'Live Coding Lab 01: Core Implementation' },
      { time: '02:00 PM', activity: 'Lunch & Network Break' },
      { time: '02:45 PM', activity: 'Live Coding Lab 02: Deployment & Optimization' },
      { time: '03:45 PM', activity: 'Q&A, Project Submissions & Certificate Verification' }
    ],
    judgingCriteria: [
      'Lab Milestone Completion (60%)',
      'Active Architecture Q&A Participation (40%)'
    ],
    contactPerson: {
      name: 'Dr. Neha Kapoor',
      phone: '+91 98765 43212',
      role: 'Workshop Coordinator'
    }
  },
  {
    id: 'esports',
    slug: 'esports',
    number: '04',
    title: 'E-SPORTS // COMPETE. REACT. WIN.',
    tagline: 'High-Octane Collegiate Arena Championship',
    category: 'GAMING',
    date: 'OCTOBER 25, 2026',
    time: '10:00 AM — 08:00 PM',
    venue: 'MAIN AMPHITHEATRE // GAMING STAGE',
    teamSize: 'SQUAD (4 PLAYERS + 1 SUB)',
    registrationType: 'squad',
    minMembers: 4,
    maxMembers: 5,
    entryFee: '₹400 / SQUAD',
    prizePool: '₹60,000',
    prizeFirst: '₹35,000 + CHAMPION TROPHY',
    prizeSecond: '₹18,000 + GAMING GEAR',
    prizeThird: '₹7,000 + MERCH',
    shortDesc: 'High-stakes battle in Valorant, BGMI, and FIFA 26 on tournament-grade rigs with live stage casting.',
    longDesc: 'The ultimate collegiate gaming showdown. Teams battle through double-elimination brackets with pro shoutcasters, multi-angle stadium cameras, and live twitch audience broadcasting.',
    image: '/assets/events/esports.jpg',
    accentColor: '#FF1E27',
    gameTitles: ['Valorant (5v5 Tactical)', 'BGMI (Squad Battle Royale)', 'EA Sports FC 26 (1v1 Solo)'],
    rules: [
      'Official game accounts in good standing required. Smurfing or use of macros/scripts leads to permanent ban.',
      'Tournament follows standard international esports competitive rulesets (VCS / BGIS standard).',
      'Teams must report to the briefing zone 30 minutes prior to scheduled match time.',
      'Decision of tournament referee is final and binding.'
    ],
    timeline: [
      { time: '10:00 AM', activity: 'Group Stage Eliminators' },
      { time: '01:30 PM', activity: 'Quarterfinals (Best of 1)' },
      { time: '04:00 PM', activity: 'Semifinals (Best of 3)' },
      { time: '06:30 PM', activity: 'Grand Final & Live Stadium Casting (Best of 5)' }
    ],
    judgingCriteria: [
      'Match Score & Bracket Victory Progression (100%)'
    ],
    contactPerson: {
      name: 'Samir Verma',
      phone: '+91 98765 43213',
      role: 'Esports League Director'
    }
  },
  {
    id: 'treasure-hunt',
    slug: 'treasure-hunt',
    number: '05',
    title: 'TREASURE HUNT // EXPLORE. SOLVE. DISCOVER.',
    tagline: 'Augmented Campus Cryptographic Odyssey',
    category: 'ADVENTURE',
    date: 'OCTOBER 25, 2026',
    time: '02:00 PM — 06:00 PM',
    venue: 'ENTIRE GEHU CAMPUS COMPLEX',
    teamSize: '2 — 3 MEMBERS',
    registrationType: 'team',
    minMembers: 2,
    maxMembers: 3,
    entryFee: '₹150 / TEAM',
    prizePool: '₹25,000',
    prizeFirst: '₹15,000 + ARTIFACT',
    prizeSecond: '₹7,000',
    prizeThird: '₹3,000',
    shortDesc: 'A campus-wide tech mystery involving RFID clues, cryptic ciphers, terminal debugging, and physical checkpoints.',
    longDesc: 'An exhilarating blend of alternate reality gaming, cyber puzzles, and campus exploration. Follow breadcrumbs left across hidden servers and physical campus coordinates to uncover the NIRVAN Core.',
    image: '/assets/events/treasure.jpg',
    accentColor: '#E50914',
    rules: [
      'Teams must stay together throughout the hunt; splitting up leads to checkpoint penalty.',
      'Use of personal smartphones allowed for QR decoding, geolocation, and terminal SSH access.',
      'No physical damage to campus property or unauthorized entry into restricted server rooms.',
      'Fastest team to solve all 7 puzzle nodes wins.'
    ],
    timeline: [
      { time: '02:00 PM', activity: 'Briefing & First Cipher Coordinate Drop' },
      { time: '02:30 PM', activity: 'Campus Hunt Active // Checkpoints 01—04' },
      { time: '04:30 PM', activity: 'Final Puzzle Lock & The Vault Coordinate' },
      { time: '05:30 PM', activity: 'Hunt Closes & Artifact Retrieval Ceremony' }
    ],
    judgingCriteria: [
      'Completion Time & Valid Key Fragments (100%)'
    ],
    contactPerson: {
      name: 'Ananya Joshi',
      phone: '+91 98765 43214',
      role: 'Adventure Quest Lead'
    }
  }
];
