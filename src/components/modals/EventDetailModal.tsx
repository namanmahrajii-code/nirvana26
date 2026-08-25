'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, Calendar, Clock, MapPin, Users, Award, ShieldAlert, ArrowUpRight, Phone, CheckCircle } from 'lucide-react';
import { EventData } from '@/data/events';
import { useSoundFx } from '@/hooks/useSoundFx';
import { MagneticButton } from '../ui/MagneticButton';
import { SimplePhotoGallery } from '../ui/Rotating3DGallery';

interface EventDetailModalProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export function EventDetailModal({ event, isOpen, onClose, onRegister }: EventDetailModalProps) {
  const { playClick, playHover } = useSoundFx();

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="relative w-full max-w-5xl bg-[#090a0f] border-2 border-[#E50914] text-white shadow-[0_0_60px_rgba(229,9,20,0.35)] my-6 overflow-hidden bg-halftone"
      >
        {/* Top bar */}
        <div className="bg-[#0e0f16] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="stamp-badge">{event.category}</span>
            <span className="font-mono text-xs text-zinc-400">EVENT PROTOCOL // #{event.number}</span>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Hero Banner with Contact-Sheet image frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[#E50914] font-mono text-xs tracking-widest uppercase">
                {event.tagline}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-editorial-serif">
                {event.title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {event.longDesc}
              </p>

              {/* Key Quick Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 font-mono text-xs">
                <div className="p-2.5 bg-[#12131a] border border-white/10">
                  <div className="text-zinc-500 text-[10px] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#E50914]" /> DATE
                  </div>
                  <div className="font-bold text-white mt-0.5">{event.date}</div>
                </div>

                <div className="p-2.5 bg-[#12131a] border border-white/10">
                  <div className="text-zinc-500 text-[10px] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E50914]" /> TIMINGS
                  </div>
                  <div className="font-bold text-white mt-0.5">{event.time}</div>
                </div>

                <div className="p-2.5 bg-[#12131a] border border-white/10">
                  <div className="text-zinc-500 text-[10px] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E50914]" /> VENUE
                  </div>
                  <div className="font-bold text-white mt-0.5 truncate">{event.venue}</div>
                </div>

                <div className="p-2.5 bg-[#12131a] border border-white/10">
                  <div className="text-zinc-500 text-[10px] flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#E50914]" /> TEAM SIZE
                  </div>
                  <div className="font-bold text-white mt-0.5">{event.teamSize}</div>
                </div>

                <div className="p-2.5 bg-[#12131a] border border-white/10">
                  <div className="text-zinc-500 text-[10px] flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#E50914]" /> TOTAL PRIZE
                  </div>
                  <div className="font-bold text-[#E50914] mt-0.5">{event.prizePool}</div>
                </div>

                <div className="p-2.5 bg-[#12131a] border border-white/10">
                  <div className="text-zinc-500 text-[10px]">ENTRY FEE</div>
                  <div className="font-bold text-white mt-0.5">{event.entryFee}</div>
                </div>
              </div>
            </div>

            {/* Poster Frame Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full border-2 border-white/20 shadow-[0_0_30px_rgba(229,9,20,0.25)] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-zinc-400 flex justify-between bg-black/60 px-2 py-1 backdrop-blur-sm">
                  <span>GEHU TECH FEST // &apos;26</span>
                  <span className="text-[#E50914]">AUTHENTICATED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prize Breakdown & Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prize Pool Box */}
            <div className="bg-[#101118] border border-white/10 p-6 space-y-4">
              <h3 className="font-mono text-xs tracking-widest text-[#E50914] uppercase flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>PRIZE POOL BREAKDOWN // {event.prizePool}</span>
              </h3>
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center p-2.5 bg-[#171822] border-l-2 border-[#E50914]">
                  <span className="text-zinc-300 font-bold">1ST PLACE (GOLD MEDALIST)</span>
                  <span className="text-[#E50914] font-bold">{event.prizeFirst}</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#171822] border-l-2 border-zinc-400">
                  <span className="text-zinc-300">2ND PLACE (RUNNER UP)</span>
                  <span className="text-zinc-200 font-bold">{event.prizeSecond}</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#171822] border-l-2 border-zinc-600">
                  <span className="text-zinc-400">3RD PLACE</span>
                  <span className="text-zinc-400 font-bold">{event.prizeThird}</span>
                </div>
              </div>
            </div>

            {/* Event Tracks / Modules */}
            {event.tracks && (
              <div className="bg-[#101118] border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-xs tracking-widest text-[#E50914] uppercase">
                  PROBLEM DOMAINS & TRACKS
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                  {event.tracks.map((track, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#E50914] font-bold">0{idx + 1}.</span>
                      <span>{track}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.gameTitles && (
              <div className="bg-[#101118] border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-xs tracking-widest text-[#E50914] uppercase">
                  TOURNAMENT ARENA TITLES
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                  {event.gameTitles.map((g, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#E50914]" />
                      <span className="font-bold text-white">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Official Rules & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Rules (Brief Requirement: 01, 02, 03, 04) */}
            <div className="md:col-span-7 bg-[#101118] border border-white/10 p-6 space-y-4">
              <h3 className="font-mono text-xs tracking-widest text-[#E50914] uppercase flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                <span>OFFICIAL COMPETITION REGULATIONS</span>
              </h3>
              <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
                {event.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#151620] p-3 border border-white/5">
                    <span className="font-mono text-xs text-[#E50914] font-bold shrink-0">
                      RULE 0{idx + 1}
                    </span>
                    <p>{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline & Contact */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#101118] border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-xs tracking-widest text-[#E50914] uppercase">
                  RUN OF SHOW // TIMELINE
                </h3>
                <div className="space-y-2.5 font-mono text-xs">
                  {event.timeline.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 border-b border-white/5 pb-2">
                      <span className="text-[#E50914] font-bold shrink-0">{t.time}</span>
                      <span className="text-zinc-300">{t.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#101118] border border-white/10 p-6 space-y-2 font-mono text-xs">
                <div className="text-[10px] text-zinc-500 uppercase">OFFICIAL COORDINATOR</div>
                <div className="font-bold text-white">{event.contactPerson.name} ({event.contactPerson.role})</div>
                <div className="text-[#E50914] flex items-center gap-1.5 pt-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{event.contactPerson.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Photo Gallery — Hackathon */}
          {event.id === 'hackathon' && (
            <div className="pt-6 border-t border-white/8">
              <SimplePhotoGallery
                title="HACKATHON // EVENT GALLERY"
                accentColor="#E50914"
                images={[
                  { src: '/assets/hackathon/hack1.jpg', label: 'VENUE OVERVIEW', caption: 'Participants building through the night at GEHU campus hackathon arena.' },
                  { src: '/assets/hackathon/hack2.jpg', label: 'TEAM STATIONS', caption: 'Teams strategizing and coding across the main hall.' },
                  { src: '/assets/hackathon/hack-stage.jpg', label: 'AWARD CEREMONY', caption: 'Closing ceremony and prize distribution on stage.' },
                  { src: '/assets/hackathon/hack-opening.jpg', label: 'OPENING SESSION', caption: 'The opening sprint — problem statements released, teams go live.' },
                ]}
              />
            </div>
          )}

          {/* Event Photo Gallery — Esports */}
          {event.id === 'esports' && (
            <div className="pt-6 border-t border-white/8">
              <SimplePhotoGallery
                title="E-SPORTS // EVENT GALLERY"
                accentColor="#FF1E27"
                images={[
                  { src: '/assets/esports/esports1.png', label: 'GAMING ARENA', caption: 'Players battle on high-performance rigs in the tournament arena.' },
                  { src: '/assets/esports/esports2.png', label: 'STRATEGY ROOM', caption: 'Teams analysing opponent plays between rounds.' },
                ]}
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-zinc-400">
              <span>ENTRY: </span>
              <span className="text-[#E50914] font-bold">{event.entryFee}</span>
              <span className="text-zinc-500 ml-2">// SPOTS LIMITED</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="flex-1 sm:flex-none px-6 py-3 border border-white/20 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
              >
                CLOSE
              </button>

              <MagneticButton
                onClick={() => {
                  playClick();
                  onClose();
                  onRegister(event.id);
                }}
                onMouseEnter={playHover}
                dataCursor="REGISTER"
                className="flex-1 sm:flex-none px-8 py-3 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(229,9,20,0.5)] transition-all"
              >
                <span>REGISTER FOR {event.title.split('//')[0]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
