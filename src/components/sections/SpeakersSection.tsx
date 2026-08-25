'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Quote } from 'lucide-react';
import { FEST_SPEAKERS } from '@/data/speakers';
import { useSoundFx } from '@/hooks/useSoundFx';

export function SpeakersSection() {
  const { playHover } = useSoundFx();

  return (
    <section id="speakers" className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#08090d] border-b border-white/6 overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E50914]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-4 tracking-widest">
              <span>ACT 03.1</span>
              <span className="text-zinc-700">//</span>
              <span>KEYNOTES</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              VISIONARY SPEAKERS
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-sm text-left md:text-right leading-[1.8]">
            Pioneers in Large Foundation Models, Superconducting Quantum Qubits, and Cyber Defense.
          </p>
        </div>

        {/* Speaker Cards — no photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEST_SPEAKERS.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onMouseEnter={playHover}
              className="group bg-[#0d0e16] border border-white/8 hover:border-[#E50914]/50 p-9 flex flex-col gap-7 transition-all duration-300"
            >
              {/* Delegate number + quote mark */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#E50914] tracking-widest">
                  DELEGATE #{speaker.number}
                </span>
                <Quote className="w-5 h-5 text-white/10 group-hover:text-[#E50914]/30 transition-colors" />
              </div>

              {/* Name & Role */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white tracking-tight font-editorial-serif leading-tight">
                  {speaker.name}
                </h3>
                <div className="font-mono text-xs text-[#E50914] font-bold tracking-wide">
                  {speaker.role}
                </div>
                <div className="font-mono text-[11px] text-zinc-500 tracking-wide">
                  {speaker.organization}
                </div>
              </div>

              {/* Keynote Topic */}
              <div className="border-l-2 border-[#E50914]/40 pl-4">
                <div className="font-mono text-[9px] text-zinc-600 tracking-[0.25em] uppercase mb-2">KEYNOTE TOPIC</div>
                <p className="text-sm text-white font-bold leading-snug font-editorial-serif">
                  {speaker.keynoteTopic}
                </p>
              </div>

              {/* Bio */}
              <p className="text-xs text-zinc-500 font-mono leading-[1.9]">
                {speaker.bio}
              </p>

              {/* Session Info */}
              <div className="border-t border-white/6 pt-6 space-y-2.5 font-mono text-[11px] text-zinc-500 mt-auto">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-[#E50914] shrink-0" />
                  <span>{speaker.talkDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#E50914] shrink-0" />
                  <span>{speaker.talkTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#E50914] shrink-0" />
                  <span className="truncate">{speaker.talkVenue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
