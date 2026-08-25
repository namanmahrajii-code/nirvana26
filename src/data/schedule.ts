export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: 'KEYNOTE' | 'COMPETITION' | 'WORKSHOP' | 'GAMING' | 'CEREMONY' | 'COMMUNITY';
  venue: string;
  speakerOrLead?: string;
  highlight?: boolean;
  status?: 'UPCOMING' | 'LIVE' | 'ENDED';
}

export interface DaySchedule {
  dayNumber: string;
  date: string;
  theme: string;
  events: ScheduleItem[];
}

export const FEST_SCHEDULE: DaySchedule[] = [
  {
    dayNumber: 'DAY 01',
    date: 'SATURDAY // OCT 24, 2026',
    theme: 'GENESIS & THE ADVERSARIAL FORGE',
    events: [
      {
        id: 's1',
        time: '08:30 AM — 09:45 AM',
        title: 'IMMERSIVE CHECK-IN & RECEPTION PROTOCOL',
        category: 'COMMUNITY',
        venue: 'GEHU MAIN PORTAL // LOBBY A',
        speakerOrLead: 'NIRVAN Core Operations',
        status: 'UPCOMING'
      },
      {
        id: 's2',
        time: '10:00 AM — 11:30 AM',
        title: 'OPENING KEYNOTE: THE POST-SILICON PARADIGM',
        category: 'KEYNOTE',
        venue: 'CENTRAL AUDITORIUM (MAIN STAGE)',
        speakerOrLead: 'Dr. Aarav Mehta (AI Lead, Meta)',
        highlight: true,
        status: 'UPCOMING'
      },
      {
        id: 's3',
        time: '11:45 AM — 12:30 PM',
        title: 'HACKATHON LAUNCH & PROBLEM STATEMENT RELEASE',
        category: 'COMPETITION',
        venue: 'COMPUTING ARENA 01',
        speakerOrLead: 'Engineering Council',
        highlight: true,
        status: 'UPCOMING'
      },
      {
        id: 's4',
        time: '01:00 PM — 04:30 PM',
        title: 'MASTERCLASS: AGENTIC AI & AUTONOMOUS REASONING',
        category: 'WORKSHOP',
        venue: 'SEMINAR HALL 01',
        speakerOrLead: 'Elena Rostova (Senior Quantum Scientist)',
        status: 'UPCOMING'
      },
      {
        id: 's5',
        time: '01:30 PM — 09:00 PM',
        title: 'WAR ROOM: NIRVAN CTF 2026 FLAG-OFF',
        category: 'COMPETITION',
        venue: 'CYBER DEFENSE VAULT // B-WING',
        speakerOrLead: 'Kabir Singhania (Cybersecurity Architect)',
        highlight: true,
        status: 'UPCOMING'
      },
      {
        id: 's6',
        time: '06:00 PM — 08:30 PM',
        title: 'E-SPORTS GROUP STAGE ELIMINATORS',
        category: 'GAMING',
        venue: 'AMPHITHEATRE STAGE',
        speakerOrLead: 'League Casting Team',
        status: 'UPCOMING'
      },
      {
        id: 's7',
        time: '09:00 PM — 11:30 PM',
        title: 'CYBERPUNK DJ SET & MIDNIGHT LASER ART INSTALLATION',
        category: 'CEREMONY',
        venue: 'CAMPUS QUADRANGLE',
        speakerOrLead: 'Soundscape Collective',
        highlight: true,
        status: 'UPCOMING'
      }
    ]
  },
  {
    dayNumber: 'DAY 02',
    date: 'SUNDAY // OCT 25, 2026',
    theme: 'CULMINATION, ARENA & GLORY',
    events: [
      {
        id: 's8',
        time: '09:00 AM — 10:30 AM',
        title: 'FIRESIDE CHAT: FUTURE OF GLOBAL BUG BOUNTIES',
        category: 'KEYNOTE',
        venue: 'CENTRAL AUDITORIUM',
        speakerOrLead: 'Kabir Singhania & Guest Hackers',
        status: 'UPCOMING'
      },
      {
        id: 's9',
        time: '11:00 AM — 03:30 PM',
        title: 'HARDWARE ACCELERATED GRAPHICS & SHADERS WORKSHOP',
        category: 'WORKSHOP',
        venue: 'SEMINAR HALL 02',
        speakerOrLead: 'Creative Dev Guild',
        status: 'UPCOMING'
      },
      {
        id: 's10',
        time: '01:30 PM — 05:30 PM',
        title: 'CAMPUS-WIDE CRYPTOGRAPHIC TREASURE HUNT',
        category: 'COMPETITION',
        venue: 'GEHU PERIMETER & LABS',
        speakerOrLead: 'Cipher Syndicate',
        highlight: true,
        status: 'UPCOMING'
      },
      {
        id: 's11',
        time: '03:00 PM — 06:30 PM',
        title: 'E-SPORTS GRAND FINALS: VALORANT & BGMI CLASH',
        category: 'GAMING',
        venue: 'MAIN STADIUM ARENA',
        speakerOrLead: 'Pro Cast Team + Live Stream',
        highlight: true,
        status: 'UPCOMING'
      },
      {
        id: 's12',
        time: '04:00 PM — 06:00 PM',
        title: 'HACKATHON TOP 10 PITCH SHOWDOWN TO VCs',
        category: 'COMPETITION',
        venue: 'CENTRAL AUDITORIUM',
        speakerOrLead: 'Jury Panel & Angel Syndicate',
        highlight: true,
        status: 'UPCOMING'
      },
      {
        id: 's13',
        time: '07:00 PM — 09:30 PM',
        title: 'GRAND CLOSING GALA, AWARDS & AFTERPARTY',
        category: 'CEREMONY',
        venue: 'MAIN CONVOCATION GROUNDS',
        speakerOrLead: 'Chief Guests & Fest Leadership',
        highlight: true,
        status: 'UPCOMING'
      }
    ]
  }
];
