'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, QrCode, Download, Printer, Plus, Trash2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FEST_EVENTS, EventData } from '@/data/events';
import { useSoundFx } from '@/hooks/useSoundFx';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventId?: string;
}

export function RegistrationModal({ isOpen, onClose, initialEventId }: RegistrationModalProps) {
  const { playClick, playGlitch } = useSoundFx();
  const [selectedEventId, setSelectedEventId] = useState<string>(initialEventId || 'hackathon');
  const [step, setStep] = useState<'form' | 'ticket'>('form');

  // Common Form Fields
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [collegeName, setCollegeName] = useState('Graphic Era Hill University');
  const [studentId, setStudentId] = useState('');

  // Category Specific Fields
  const [teamName, setTeamName] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [hackerHandle, setHackerHandle] = useState('');
  const [selectedGame, setSelectedGame] = useState('Valorant (5v5 Tactical)');
  const [discordTag, setDiscordTag] = useState('');
  const [hasLaptop, setHasLaptop] = useState(true);

  // Dynamic Team Members (For Hackathon / E-Sports / Treasure Hunt)
  const [teamMembers, setTeamMembers] = useState<Array<{ name: string; email: string; roleOrIgn: string }>>([
    { name: '', email: '', roleOrIgn: '' }
  ]);

  // Generated Ticket Data
  const [generatedTicket, setGeneratedTicket] = useState<{
    ticketId: string;
    timestamp: string;
    event: EventData;
    leadName: string;
    teamName?: string;
    seatCount: number;
  } | null>(null);

  const currentEvent = FEST_EVENTS.find((e) => e.id === selectedEventId) || FEST_EVENTS[0];

  useEffect(() => {
    if (initialEventId) {
      setSelectedEventId(initialEventId);
    }
  }, [initialEventId]);

  useEffect(() => {
    if (currentEvent.tracks && currentEvent.tracks.length > 0) {
      setSelectedTrack(currentEvent.tracks[0]);
    }
    if (currentEvent.gameTitles && currentEvent.gameTitles.length > 0) {
      setSelectedGame(currentEvent.gameTitles[0]);
    }
  }, [currentEvent]);

  if (!isOpen) return null;

  const handleAddMember = () => {
    playClick();
    if (teamMembers.length + 1 < currentEvent.maxMembers) {
      setTeamMembers([...teamMembers, { name: '', email: '', roleOrIgn: '' }]);
    }
  };

  const handleRemoveMember = (idx: number) => {
    playClick();
    setTeamMembers(teamMembers.filter((_, i) => i !== idx));
  };

  const handleMemberChange = (idx: number, field: 'name' | 'email' | 'roleOrIgn', val: string) => {
    const updated = [...teamMembers];
    updated[idx][field] = val;
    setTeamMembers(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    // Generate random cyberpunk ticket ID
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const ticketId = `NRV26-${currentEvent.id.substring(0, 3).toUpperCase()}-${randomHex}`;

    const ticket = {
      ticketId,
      timestamp: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
      event: currentEvent,
      leadName: leadName || 'Cadet Innovator',
      teamName: currentEvent.registrationType !== 'solo' ? teamName || 'Squad Alpha' : undefined,
      seatCount: currentEvent.registrationType === 'solo' ? 1 : 1 + teamMembers.filter(m => m.name.trim().length > 0).length,
    };

    setGeneratedTicket(ticket);
    setStep('ticket');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E50914', '#FF1E27', '#ffffff', '#222222']
      });
    } catch {
      // Ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-4xl bg-[#090a0f] border-2 border-[#E50914]/60 text-white shadow-[0_0_50px_rgba(229,9,20,0.3)] my-8 overflow-hidden bg-halftone"
      >
        {/* Header Ribbon */}
        <div className="bg-[#0f1016] border-b border-[#E50914]/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#E50914] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] font-bold text-white uppercase">
              NIRVAN &apos;26 // REGISTRATION PROTOCOL
            </span>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Registration Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {/* Event Category Selector */}
            <div className="mb-8">
              <label className="block font-mono text-[11px] uppercase tracking-widest text-[#E50914] mb-3">
                SELECT TARGET MISSION / EVENT
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {FEST_EVENTS.map((ev) => {
                  const active = ev.id === selectedEventId;
                  return (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => {
                        playClick();
                        setSelectedEventId(ev.id);
                      }}
                      className={`p-3 text-left border transition-all ${
                        active
                          ? 'border-[#E50914] bg-[#E50914]/15 text-white shadow-[0_0_15px_rgba(229,9,20,0.2)]'
                          : 'border-white/10 bg-[#12131a]/60 text-zinc-400 hover:border-white/30'
                      }`}
                    >
                      <div className="font-mono text-[10px] text-zinc-500">{ev.number}</div>
                      <div className="font-bold text-xs truncate mt-0.5">{ev.title.split('//')[0]}</div>
                      <div className="text-[10px] text-[#E50914] mt-1 font-mono">{ev.entryFee}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Event Header Banner */}
            <div className="bg-[#12131a] border-l-4 border-[#E50914] p-4 mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#E50914] uppercase">
                  {currentEvent.category} // {currentEvent.teamSize}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">{currentEvent.title}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">{currentEvent.shortDesc}</p>
              </div>
              <div className="text-left sm:text-right font-mono shrink-0">
                <div className="text-xs text-zinc-400">PRIZE POOL</div>
                <div className="text-sm font-bold text-[#E50914]">{currentEvent.prizePool}</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Information (For Team / Squad / Duo events) */}
              {currentEvent.registrationType !== 'solo' && (
                <div className="space-y-4 border-b border-white/10 pb-6">
                  <h4 className="font-mono text-xs tracking-widest text-[#E50914] uppercase flex items-center gap-2">
                    <span>01 // SQUAD & IDENTITY DETAILS</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                        TEAM / SQUAD NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="e.g. CyberVanguard"
                        className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                      />
                    </div>

                    {currentEvent.id === 'hackathon' && currentEvent.tracks && (
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                          PROBLEM TRACK *
                        </label>
                        <select
                          value={selectedTrack}
                          onChange={(e) => setSelectedTrack(e.target.value)}
                          className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                        >
                          {currentEvent.tracks.map((t, idx) => (
                            <option key={idx} value={t} className="bg-[#090a0f] text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {currentEvent.id === 'esports' && currentEvent.gameTitles && (
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                          GAME ARENA SELECTION *
                        </label>
                        <select
                          value={selectedGame}
                          onChange={(e) => setSelectedGame(e.target.value)}
                          className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                        >
                          {currentEvent.gameTitles.map((g, idx) => (
                            <option key={idx} value={g} className="bg-[#090a0f] text-white">
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Leader / Primary Registrant Info */}
              <div className="space-y-4 border-b border-white/10 pb-6">
                <h4 className="font-mono text-xs tracking-widest text-[#E50914] uppercase flex items-center gap-2">
                  <span>{currentEvent.registrationType === 'solo' ? '01 // ATTENDEE CREDENTIALS' : '02 // TEAM LEADER CREDENTIALS'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                      FULL LEGAL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                      OFFICIAL EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="alex.m@university.edu"
                      className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                      CONTACT NUMBER (WHATSAPP) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                      COLLEGE / UNIVERSITY *
                    </label>
                    <input
                      type="text"
                      required
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                    />
                  </div>

                  {currentEvent.id === 'hackathon' && (
                    <div className="sm:col-span-2">
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                        GITHUB / PORTFOLIO / DEVPOST REPOSITORY URL
                      </label>
                      <input
                        type="url"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        placeholder="https://github.com/your-handle"
                        className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                      />
                    </div>
                  )}

                  {currentEvent.id === 'ctf' && (
                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                        HACKER ALIAS / HANDLE *
                      </label>
                      <input
                        type="text"
                        required
                        value={hackerHandle}
                        onChange={(e) => setHackerHandle(e.target.value)}
                        placeholder="e.g. 0xNullByte"
                        className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                      />
                    </div>
                  )}

                  {currentEvent.id === 'esports' && (
                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1">
                        CAPTAIN IN-GAME ID & DISCORD TAG *
                      </label>
                      <input
                        type="text"
                        required
                        value={discordTag}
                        onChange={(e) => setDiscordTag(e.target.value)}
                        placeholder="e.g. VORTEX#1337 // Discord: vortex_lead"
                        className="w-full bg-[#14151e] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#E50914] focus:outline-none"
                      />
                    </div>
                  )}

                  {currentEvent.id === 'workshop' && (
                    <div className="sm:col-span-2 flex items-center gap-3 bg-[#12131a] p-3 border border-white/10">
                      <input
                        type="checkbox"
                        id="laptop-check"
                        checked={hasLaptop}
                        onChange={(e) => setHasLaptop(e.target.checked)}
                        className="w-4 h-4 accent-[#E50914]"
                      />
                      <label htmlFor="laptop-check" className="text-xs text-zinc-300">
                        I confirm I will bring a working laptop with charger for the hands-on lab sessions.
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Team Members (Dynamic for Hackathon / E-Sports / Treasure Hunt) */}
              {currentEvent.registrationType !== 'solo' && currentEvent.maxMembers > 1 && (
                <div className="space-y-4 border-b border-white/10 pb-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs tracking-widest text-[#E50914] uppercase">
                      03 // ADDITIONAL SQUAD MEMBERS (MAX {currentEvent.maxMembers - 1})
                    </h4>
                    {teamMembers.length + 1 < currentEvent.maxMembers && (
                      <button
                        type="button"
                        onClick={handleAddMember}
                        className="font-mono text-xs text-[#E50914] hover:text-white flex items-center gap-1 border border-[#E50914]/40 px-2.5 py-1 bg-[#E50914]/10 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD MEMBER</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    {teamMembers.map((member, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#12131a] border border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                      >
                        <div className="sm:col-span-1 font-mono text-xs text-zinc-500">
                          #{idx + 2}
                        </div>
                        <div className="sm:col-span-4">
                          <input
                            type="text"
                            placeholder={`Member ${idx + 2} Full Name`}
                            value={member.name}
                            onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                            className="w-full bg-[#181922] border border-white/10 px-2.5 py-1.5 text-xs text-white focus:border-[#E50914] focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-4">
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={member.email}
                            onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                            className="w-full bg-[#181922] border border-white/10 px-2.5 py-1.5 text-xs text-white focus:border-[#E50914] focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <input
                            type="text"
                            placeholder={currentEvent.id === 'esports' ? 'IGN Tag' : 'Role (Dev/UI)'}
                            value={member.roleOrIgn}
                            onChange={(e) => handleMemberChange(idx, 'roleOrIgn', e.target.value)}
                            className="w-full bg-[#181922] border border-white/10 px-2.5 py-1.5 text-xs text-white focus:border-[#E50914] focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-1 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(idx)}
                            className="text-zinc-500 hover:text-[#E50914] p-1 transition-colors"
                            title="Remove Member"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="font-mono text-xs text-zinc-400">
                  <span>ENTRY FEE: </span>
                  <span className="text-[#E50914] font-bold">{currentEvent.entryFee}</span>
                  <span className="text-zinc-500 ml-2">(Pay at Check-in Desk)</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CONFIRM & GENERATE CYBER PASS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Futuristic Digital Ticket Pass */
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4" />
              <span>REGISTRATION CONFIRMED // CREDENTIALS SECURED</span>
            </div>

            {/* The Cyber Ticket Card */}
            <div
              id="printable-ticket"
              className="relative bg-gradient-to-br from-[#12131c] via-[#090a0f] to-[#141622] border-2 border-[#E50914] p-6 sm:p-8 shadow-[0_0_40px_rgba(229,9,20,0.3)] font-mono"
            >
              {/* Watermark brand */}
              <div className="absolute top-4 right-6 text-right opacity-25 select-none pointer-events-none">
                <div className="text-5xl font-black text-[#E50914]">N26</div>
                <div className="text-[9px] tracking-widest text-white">GEHU // OFFICIAL PASS</div>
              </div>

              {/* Ticket Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="stamp-badge">AUTHENTICATED DELEGATE</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-2">
                    {generatedTicket?.event.title.split('//')[0]}
                  </h3>
                  <div className="text-xs text-[#E50914]">{generatedTicket?.event.tagline}</div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-[10px] text-zinc-500">TICKET IDENTIFIER</div>
                  <div className="text-sm font-mono font-bold text-white tracking-wider">
                    {generatedTicket?.ticketId}
                  </div>
                </div>
              </div>

              {/* Ticket Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mb-6">
                <div>
                  <span className="text-zinc-500 text-[10px]">PRIMARY REGISTRANT</span>
                  <div className="font-bold text-white mt-0.5">{generatedTicket?.leadName}</div>
                </div>
                {generatedTicket?.teamName && (
                  <div>
                    <span className="text-zinc-500 text-[10px]">SQUAD IDENTITY</span>
                    <div className="font-bold text-[#E50914] mt-0.5">{generatedTicket.teamName}</div>
                  </div>
                )}
                <div>
                  <span className="text-zinc-500 text-[10px]">EVENT DATE & TIME</span>
                  <div className="font-bold text-white mt-0.5">{generatedTicket?.event.date}</div>
                  <div className="text-[10px] text-zinc-400">{generatedTicket?.event.time}</div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px]">VENUE LOCATION</span>
                  <div className="font-bold text-white mt-0.5">{generatedTicket?.event.venue}</div>
                </div>
              </div>

              {/* QR Code & Barcode Section */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-dashed border-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white p-1.5 flex items-center justify-center shrink-0">
                    <QrCode className="w-full h-full text-black" />
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    <div className="text-white font-bold">SCAN AT REGISTRATION DESK</div>
                    <div>Show this cyber pass along with your college ID at the Main Gate.</div>
                    <div className="text-[10px] text-[#E50914] mt-1">TIMESTAMP: {generatedTicket?.timestamp}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-zinc-500">PAYMENT STATUS</div>
                  <div className="text-xs font-bold text-amber-400">PAYABLE ON-SITE ({generatedTicket?.event.entryFee})</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setStep('form');
                }}
                className="px-4 py-2 border border-white/20 text-zinc-300 hover:text-white hover:border-white text-xs font-mono transition-colors"
              >
                ← REGISTER ANOTHER EVENT
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>PRINT PASS</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-[#E50914] text-white hover:bg-[#FF1E27] font-mono text-xs font-bold tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>SAVE PASS</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
