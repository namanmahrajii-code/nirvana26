'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
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

        {/* Speaker Cards with Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEST_SPEAKERS.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onMouseEnter={playHover}
              className="group bg-[#0d0e16] border border-white/8 hover:border-[#E50914]/50 flex flex-col transition-all duration-300 overflow-hidden"
            >
              {/* Card Header Film Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/6 font-mono text-[10px] bg-black/40">
                <span className="text-[#E50914] tracking-widest font-bold">
                  DELEGATE #{speaker.number}
                </span>
                <span className="text-zinc-600 tracking-wider">
                  KODAK TX 400 // ISO 800
                </span>
              </div>

              {/* Speaker Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e16] via-transparent to-black/30" />
                <div className="absolute bottom-3 left-5 right-5 font-mono text-[10px] text-zinc-400">
                  <span className="bg-black/80 px-2 py-0.5 border border-white/10">{speaker.organization}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 gap-5">
                {/* Name & Role */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black text-white tracking-tight font-editorial-serif leading-tight">
                    {speaker.name}
                  </h3>
                  <div className="font-mono text-xs text-[#E50914] font-bold tracking-wide">
                    {speaker.role}
                  </div>
                </div>

                {/* Keynote Topic */}
                <div className="border-l-2 border-[#E50914]/40 pl-3.5 py-0.5">
                  <div className="font-mono text-[9px] text-zinc-600 tracking-[0.2em] uppercase mb-1">KEYNOTE TOPIC:</div>
                  <p className="text-xs text-white font-bold leading-snug font-editorial-serif">
                    {speaker.keynoteTopic}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-zinc-500 font-mono leading-[1.8] line-clamp-3">
                  {speaker.bio}
                </p>

                {/* Session Info */}
                <div className="border-t border-white/6 pt-4 space-y-2 font-mono text-[11px] text-zinc-500 mt-auto">
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
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
