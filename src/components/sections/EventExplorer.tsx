'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Award, Calendar, Users, Filter } from 'lucide-react';
import { FEST_EVENTS, EventData } from '@/data/events';
import { useSoundFx } from '@/hooks/useSoundFx';

interface EventExplorerProps {
  onSelectEvent: (event: EventData) => void;
  onRegisterEvent: (eventId: string) => void;
}

type FilterCategory = 'ALL' | 'COMPETITION' | 'LEARNING' | 'GAMING' | 'ADVENTURE';

export function EventExplorer({ onSelectEvent, onRegisterEvent }: EventExplorerProps) {
  const { playClick, playHover } = useSoundFx();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [hoveredEvent, setHoveredEvent] = useState<EventData | null>(FEST_EVENTS[0]);

  const categories: FilterCategory[] = ['ALL', 'COMPETITION', 'LEARNING', 'GAMING', 'ADVENTURE'];

  const filteredEvents = activeCategory === 'ALL'
    ? FEST_EVENTS
    : FEST_EVENTS.filter((e) => e.category === activeCategory);

  return (
    <section className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#08080c] border-b border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-3 tracking-widest">
              <span>ACT 02.1</span>
              <span className="text-zinc-700">//</span>
              <span>DIRECTORY</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              EVENT EXPLORER
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={playHover}
                className={`px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-[#E50914] text-white shadow-[0_0_16px_rgba(229,9,20,0.4)]'
                    : 'bg-[#12131a] text-zinc-500 hover:text-white border border-white/8 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Explorer Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Vertical Event List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {filteredEvents.map((ev) => {
              const isHovered = hoveredEvent?.id === ev.id;
              return (
                <div
                  key={ev.id}
                  onMouseEnter={() => {
                    playHover();
                    setHoveredEvent(ev);
                  }}
                  onClick={() => {
                    playClick();
                    onSelectEvent(ev);
                  }}
                  data-cursor="VIEW"
                  className={`group relative py-7 px-6 cursor-pointer transition-all duration-300 ${
                    isHovered ? 'bg-[#12131c]' : 'bg-transparent hover:bg-white/[0.015]'
                  }`}
                >
                  {/* Left Crimson Active Line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#E50914] transition-all duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#E50914] font-bold">
                          {ev.number}
                        </span>
                        <span className="stamp-badge-white text-[10px]">
                          {ev.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#E50914] transition-colors tracking-tight font-editorial-serif">
                        {ev.title.split('//')[0]}
                      </h3>

                      <p className="text-xs text-zinc-400 font-mono">
                        {ev.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono shrink-0">
                      <div className="text-right">
                        <div className="text-[10px] text-zinc-500">PRIZE POOL</div>
                        <div className="text-[#E50914] font-bold">{ev.prizePool}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Hover Image Portal */}
          <div className="lg:col-span-5 sticky top-28 bg-[#0c0d14] border border-white/10 p-7 space-y-6">
            <AnimatePresence mode="wait">
              {hoveredEvent && (
                <motion.div
                  key={hoveredEvent.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Photo Portal */}
                  <div className="relative aspect-[16/10] w-full border border-white/20 overflow-hidden">
                    <Image
                      src={hoveredEvent.image}
                      alt={hoveredEvent.title}
                      fill
                      className="object-cover grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 font-mono text-[10px] text-white bg-black/70 px-2 py-0.5 border border-white/10">
                      {hoveredEvent.date}
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <div className="font-mono text-xs text-[#E50914] font-bold">
                      {hoveredEvent.category} // {hoveredEvent.teamSize}
                    </div>
                    <h4 className="text-xl font-bold text-white mt-1">
                      {hoveredEvent.title}
                    </h4>
                    <p className="text-xs text-zinc-300 font-mono mt-2 leading-relaxed">
                      {hoveredEvent.shortDesc}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        playClick();
                        onSelectEvent(hoveredEvent);
                      }}
                      className="flex-1 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold text-center border border-white/20 transition-colors"
                    >
                      READ RULES
                    </button>
                    <button
                      onClick={() => {
                        playClick();
                        onRegisterEvent(hoveredEvent.id);
                      }}
                      className="flex-1 py-2.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold text-center shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all"
                    >
                      REGISTER →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
