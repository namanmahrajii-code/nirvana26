'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Zap } from 'lucide-react';
import { FEST_SPONSORS } from '@/data/sponsors';
import { useSoundFx } from '@/hooks/useSoundFx';

export function SponsorsSection() {
  const { playHover } = useSoundFx();

  const titleSponsors = FEST_SPONSORS.filter((s) => s.tier === 'TITLE');
  const goldSponsors = FEST_SPONSORS.filter((s) => s.tier === 'GOLD');
  const communitySponsors = FEST_SPONSORS.filter((s) => s.tier === 'COMMUNITY' || s.tier === 'ECOSYSTEM');

  return (
    <section id="sponsors" className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#06070a] border-b border-white/6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E50914]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-4 tracking-widest">
              <span>ACT 05</span>
              <span className="text-zinc-700">//</span>
              <span>ECOSYSTEM PARTNERS</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              SUPPORTED BY TITANS
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-sm text-left md:text-right leading-[1.8]">
            Backed by global technology leaders providing compute, incubation, and engineering infrastructure.
          </p>
        </div>

        {/* Tier 1: Title Sponsor */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] tracking-widest uppercase mb-6">
            <Cpu className="w-3 h-3" />
            <span>01 // TITLE PARTNER</span>
          </div>

          {titleSponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={playHover}
              className="group bg-[#0d0e16] border border-[#E50914]/50 hover:border-[#E50914] p-10 sm:p-14 shadow-[0_0_50px_rgba(229,9,20,0.12)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-300"
            >
              <div className="space-y-4">
                <span className="stamp-badge">{sponsor.badge}</span>
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-editorial-serif mt-3">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-zinc-400 font-mono max-w-xl leading-[1.9] mt-2">
                  {sponsor.desc}
                </p>
              </div>

              <div className="font-mono text-sm text-[#E50914] font-bold border border-[#E50914]/30 bg-[#E50914]/8 px-6 py-3 shrink-0 tracking-widest">
                {sponsor.symbol}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier 2: Gold Sponsors */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-6">
            <Terminal className="w-3 h-3 text-[#E50914]" />
            <span>02 // GOLD INFRASTRUCTURE PARTNERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goldSponsors.map((sponsor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={playHover}
                className="group bg-[#0e0f18] border border-white/8 hover:border-[#E50914]/50 p-8 sm:p-10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="stamp-badge-white">{sponsor.badge}</span>
                  <span className="font-mono text-xs text-[#E50914] font-bold tracking-widest">{sponsor.symbol}</span>
                </div>
                <h4 className="text-2xl font-bold text-white font-editorial-serif mb-3">{sponsor.name}</h4>
                <p className="text-xs text-zinc-500 font-mono leading-[1.9]">{sponsor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 3: Community & Ecosystem */}
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600 tracking-widest uppercase mb-6">
            <Zap className="w-3 h-3 text-[#E50914]" />
            <span>03 // COMMUNITY &amp; TOOLING ECOSYSTEM</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {communitySponsors.map((sponsor, idx) => (
              <div
                key={idx}
                onMouseEnter={playHover}
                className="bg-[#0b0c12] border border-white/8 hover:border-white/20 p-5 transition-colors"
              >
                <div className="font-mono text-[9px] text-[#E50914] tracking-widest mb-2">{sponsor.badge}</div>
                <div className="font-bold text-sm text-white mb-1">{sponsor.name}</div>
                <div className="font-mono text-[10px] text-zinc-600">{sponsor.category}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
