'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Sparkles, Filter, Calendar } from 'lucide-react';
import { FEST_SCHEDULE, ScheduleItem } from '@/data/schedule';
import { useSoundFx } from '@/hooks/useSoundFx';

export function ScheduleSection() {
  const { playClick, playHover } = useSoundFx();
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [filterCat, setFilterCat] = useState<string>('ALL');

  const currentDay = FEST_SCHEDULE[selectedDayIdx];

  const categories = ['ALL', 'KEYNOTE', 'COMPETITION', 'WORKSHOP', 'GAMING', 'CEREMONY'];

  const filteredEvents = filterCat === 'ALL'
    ? currentDay.events
    : currentDay.events.filter((e) => e.category === filterCat);

  return (
    <section id="schedule" className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#06070a] border-b border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-3 tracking-widest">
              <span>ACT 03</span>
              <span className="text-zinc-700">//</span>
              <span>TIMELINE</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              FESTIVAL SCHEDULE
            </h2>
          </div>

          {/* Day Toggle Switch (DAY 01 / DAY 02) */}
          <div className="flex items-center gap-1.5 bg-[#12131b] p-1.5 border border-white/8">
            {FEST_SCHEDULE.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  playClick();
                  setSelectedDayIdx(idx);
                }}
                onMouseEnter={playHover}
                className={`px-6 py-2.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all ${
                  selectedDayIdx === idx
                    ? 'bg-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {day.dayNumber} // {idx === 0 ? 'OCT 24' : 'OCT 25'}
              </button>
            ))}
          </div>
        </div>

        {/* Day Subheader & Theme */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0d0e15] border-l-2 border-[#E50914]/70 px-6 py-4 font-mono text-xs">
          <div>
            <span className="text-[#E50914] font-bold mr-2">[{currentDay.dayNumber}]</span>
            <span className="text-white font-bold">{currentDay.date}</span>
            <span className="text-zinc-600 mx-2">—</span>
            <span className="text-zinc-400 uppercase">{currentDay.theme}</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setFilterCat(cat);
                }}
                className={`px-3 py-1 text-[9px] uppercase font-bold tracking-widest transition-colors ${
                  filterCat === cat
                    ? 'bg-white text-black'
                    : 'bg-white/4 text-zinc-500 hover:text-white border border-white/8'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Vertical Timeline Line */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-8 sm:pl-14 space-y-6 mt-10">
          {filteredEvents.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative group bg-[#0e0f18] border p-7 sm:p-8 transition-all duration-300 ${
                  item.highlight
                    ? 'border-[#E50914]/50 shadow-[0_0_30px_rgba(229,9,20,0.12)] bg-[#131422]'
                    : 'border-white/8 hover:border-white/20'
                }`}
              >
                {/* Timeline node pip */}
                <div
                  className={`absolute -left-[37px] sm:-left-[59px] top-7 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    item.highlight
                      ? 'bg-[#E50914] border-white shadow-[0_0_12px_#E50914]'
                      : 'bg-[#06070a] border-zinc-700 group-hover:border-[#E50914]'
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
                      <span className="text-[#E50914] font-bold flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                      <span className="stamp-badge-white">
                        {item.category}
                      </span>
                      {item.highlight && (
                        <span className="stamp-badge">FLAGSHIP</span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
                      {item.title}
                    </h3>

                    {item.speakerOrLead && (
                      <p className="text-xs text-zinc-500 font-mono">
                        Lead // {item.speakerOrLead}
                      </p>
                    )}
                  </div>

                  <div className="font-mono text-[10px] text-zinc-500 flex items-center gap-2 shrink-0 bg-[#171824] px-4 py-2.5 border border-white/5">
                    <MapPin className="w-3 h-3 text-[#E50914]" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
