'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, Trophy, Shield } from 'lucide-react';

export function ManifestoSection() {
  const pillars = [
    {
      num: '01',
      title: '2 DAYS',
      subtitle: 'OCT 24 — 25, 2026',
      desc: '48 hours of continuous hack sprints, keynote debates, live war-rooms and arena esports.',
      icon: Terminal
    },
    {
      num: '02',
      title: 'TECHNOLOGY',
      subtitle: 'ADVANCED PARADIGMS',
      desc: 'Exploring autonomous AI agents, post-quantum cryptography, and GPU shader architectures.',
      icon: Zap
    },
    {
      num: '03',
      title: 'COMPETITION',
      subtitle: '₹2,50,000+ PRIZES',
      desc: 'High-stakes battlegrounds with direct angel investment, incubation and global recognition.',
      icon: Trophy
    },
    {
      num: '04',
      title: 'COMMUNITY',
      subtitle: '5000+ INNOVATORS',
      desc: 'Uniting 50+ universities, research labs, venture scouts and visionary developers under one roof.',
      icon: Shield
    }
  ];

  return (
    <section id="manifesto" className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#08090d] border-t border-white/6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-white/8 pb-5 font-mono text-[10px] text-zinc-600 mb-20">
          <div className="flex items-center gap-2.5">
            <span className="text-[#E50914] font-bold tracking-widest">ACT 01</span>
            <span className="text-zinc-700">//</span>
            <span className="tracking-widest">THE MANIFESTO</span>
          </div>
          <span className="hidden sm:block tracking-widest">GEHU INNOVATION DISPATCH // 2026</span>
        </div>

        {/* Cinematic Manifesto Headline */}
        <div className="max-w-5xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-white leading-[1.05] tracking-tight uppercase font-editorial-serif"
          >
            NIRVAN IS WHERE <br />
            <span className="text-[#E50914] font-editorial-heading">IDEAS</span>{' '}
            BECOME <br />
            <span className="underline decoration-[#E50914]/70 underline-offset-[10px]">INNOVATION.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs sm:text-sm text-zinc-400 max-w-2xl mt-8 leading-[1.9]"
          >
            We reject the template. We dismantle the ordinary. NIRVAN&apos;26 exists to forge raw intellectual
            ambition into tangible breakthroughs through adversarial challenges and hands-on creation.
          </motion.p>
        </div>

        {/* 4 Pillar Cards — spacious and independent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-[#0e0f16] border border-white/8 hover:border-[#E50914]/60 p-8 transition-all duration-400 flex flex-col min-h-[260px]"
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] text-zinc-700 group-hover:text-[#E50914]/60 transition-colors tracking-widest">
                    {p.num}
                  </span>
                  <Icon className="w-3.5 h-3.5 text-zinc-700 group-hover:text-[#E50914]/70 transition-colors" />
                </div>

                {/* Label */}
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#E50914]/80 uppercase mb-3">
                  {p.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white tracking-tight font-editorial-heading mb-4">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-500 font-mono leading-[1.8] mt-auto">
                  {p.desc}
                </p>

                {/* Bottom accent line */}
                <div className="w-full h-px bg-white/5 group-hover:bg-[#E50914]/40 transition-colors mt-8" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
