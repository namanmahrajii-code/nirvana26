'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Users, MapPin, Sparkles } from 'lucide-react';
import { FEST_EVENTS, EventData } from '@/data/events';
import { EventUniverseCanvas } from '../canvas/EventUniverseCanvas';
import { MagneticButton } from '../ui/MagneticButton';
import { useSoundFx } from '@/hooks/useSoundFx';

interface EventUniverseProps {
  onSelectEvent: (event: EventData) => void;
  onRegisterEvent: (eventId: string) => void;
}

export function EventUniverse({ onSelectEvent, onRegisterEvent }: EventUniverseProps) {
  const { playClick, playHover } = useSoundFx();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeEvent = FEST_EVENTS[activeIndex];

  return (
    <section id="events" className="relative min-h-screen py-32 px-6 sm:px-8 lg:px-14 bg-[#050608] border-b border-white/6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-3 tracking-widest">
              <span>ACT 02</span>
              <span className="text-zinc-700">//</span>
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              EVENT UNIVERSE
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-xs text-left sm:text-right leading-relaxed">
            5 Dimensional Flagships. 36 Hours. Choose your battleground.
          </p>
        </div>

        {/* The 3D Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px]">
          {/* Left: 3D Constellation Sphere */}
          <div className="lg:col-span-6 h-[380px] sm:h-[480px] relative bg-[#090a10] border border-white/10 p-2 overflow-hidden">
            <EventUniverseCanvas activeIndex={activeIndex} />

            {/* Event Navigator Tabs at bottom of canvas */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1.5 z-10">
              {FEST_EVENTS.map((ev, idx) => (
                <button
                  key={ev.id}
                  onClick={() => {
                    playClick();
                    setActiveIndex(idx);
                  }}
                  onMouseEnter={playHover}
                  className={`px-3 py-1 text-[10px] font-mono transition-all ${
                    activeIndex === idx
                      ? 'bg-[#E50914] text-white font-bold shadow-[0_0_10px_rgba(229,9,20,0.5)]'
                      : 'bg-black/60 text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {ev.number}
                </button>
              ))}
            </div>

            {/* Top Tag */}
            <div className="absolute top-3 left-3 font-mono text-[10px] text-zinc-500 bg-black/60 px-2 py-1 border border-white/10">
              ORBITAL NODE: {activeEvent.title.split('//')[0]}
            </div>
          </div>

          {/* Right: Active Event Spotlight Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-[#0c0d14] border border-white/10 p-8 sm:p-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Event Category & Number */}
                <div className="flex items-center justify-between">
                  <span className="stamp-badge">{activeEvent.category}</span>
                  <span className="font-mono text-3xl font-black text-white/20">
                    {activeEvent.number}
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-editorial-serif">
                    {activeEvent.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-[#E50914] font-bold mt-1">
                    {activeEvent.tagline}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-mono">
                  {activeEvent.shortDesc}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
                  <div className="bg-[#12141e] p-4 border border-white/8">
                    <div className="text-zinc-600 text-[9px] flex items-center gap-1 mb-1.5 tracking-widest uppercase">
                      <Award className="w-3 h-3 text-[#E50914]" /> PRIZE POOL
                    </div>
                    <div className="font-bold text-[#E50914] text-sm">{activeEvent.prizePool}</div>
                  </div>

                  <div className="bg-[#12141e] p-4 border border-white/8">
                    <div className="text-zinc-600 text-[9px] flex items-center gap-1 mb-1.5 tracking-widest uppercase">
                      <Users className="w-3 h-3 text-[#E50914]" /> TEAM SIZE
                    </div>
                    <div className="font-bold text-white text-sm">{activeEvent.teamSize}</div>
                  </div>

                  <div className="bg-[#12141e] p-4 border border-white/8">
                    <div className="text-zinc-600 text-[9px] mb-1.5 tracking-widest uppercase">ENTRY FEE</div>
                    <div className="font-bold text-white">{activeEvent.entryFee}</div>
                  </div>

                  <div className="bg-[#12141e] p-4 border border-white/8">
                    <div className="text-zinc-600 text-[9px] flex items-center gap-1 mb-1.5 tracking-widest uppercase">
                      <MapPin className="w-3 h-3 text-[#E50914]" /> VENUE
                    </div>
                    <div className="font-bold text-white truncate">{activeEvent.venue.split('//')[0]}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8">
                  <button
                    onClick={() => {
                      playClick();
                      onSelectEvent(activeEvent);
                    }}
                    onMouseEnter={playHover}
                    data-cursor="VIEW"
                    className="px-6 py-3.5 border border-white/15 hover:border-[#E50914]/60 bg-white/4 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors"
                  >
                    VIEW BRIEF &amp; RULES
                  </button>

                  <MagneticButton
                    onClick={() => {
                      playClick();
                      onRegisterEvent(activeEvent.id);
                    }}
                    onMouseEnter={playHover}
                    dataCursor="REGISTER"
                    className="px-7 py-3.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_24px_rgba(229,9,20,0.4)] transition-all"
                  >
                    <span>REGISTER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
