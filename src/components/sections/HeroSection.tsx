'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, Cpu } from 'lucide-react';
import { HeroCore } from '../canvas/HeroCore';
import { MagneticButton } from '../ui/MagneticButton';
import { useSoundFx } from '@/hooks/useSoundFx';

interface HeroSectionProps {
  onExploreClick: () => void;
  onRegisterClick: () => void;
}

export function HeroSection({ onExploreClick, onRegisterClick }: HeroSectionProps) {
  const { playClick, playHover } = useSoundFx();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-14 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-25" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Top slim label row */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-zinc-600 pb-6 border-b border-white/6">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
          <span className="tracking-[0.25em] uppercase text-zinc-500">Annual Technical Gala</span>
        </div>
        <span className="tracking-widest text-zinc-600 hidden sm:block">GEHU — DEHRADUN // OCT 24–25, 2026</span>
      </div>

      {/* CENTER: Main editorial lockup */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-12 lg:py-0">
        {/* Left: Oversized Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pre-title line */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[1px] bg-[#E50914]" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#E50914]">
                Where Ideas Become Innovation
              </span>
            </div>

            {/* Giant Headline */}
            <h1 className="text-[clamp(4rem,10vw,7.5rem)] font-black tracking-tighter text-white uppercase font-editorial-heading leading-[0.9] select-none">
              NIRVAN
              <span className="block text-[#E50914] text-[clamp(3rem,8vw,6rem)] mt-3 tracking-tight font-editorial-serif">
                &apos;26
              </span>
            </h1>
          </motion.div>

          {/* Description — separated with generous space */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-mono text-xs sm:text-sm text-zinc-400 max-w-lg leading-[1.8] mt-10"
          >
            A high-intensity digital crucible for builders, security researchers, and competitive creators.
            Experience 36 hours of non-stop algorithmic innovation at GEHU Dehradun.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <MagneticButton
              onClick={() => { playClick(); onExploreClick(); }}
              onMouseEnter={playHover}
              dataCursor="EXPLORE"
              className="px-7 sm:px-9 py-4 bg-white hover:bg-zinc-100 text-black font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2.5 transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)]"
            >
              <span>EXPLORE EVENTS</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              onClick={() => { playClick(); onRegisterClick(); }}
              onMouseEnter={playHover}
              dataCursor="REGISTER"
              className="px-7 sm:px-9 py-4 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2.5 transition-all shadow-[0_0_32px_rgba(229,9,20,0.45)]"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Interactive 3D WebGL Monolith Core */}
        <div className="lg:col-span-5 h-[320px] sm:h-[440px] lg:h-[520px] relative flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <HeroCore />
          </div>

          {/* Floating HUD Annotations — minimal */}
          <div className="absolute top-3 right-3 font-mono text-[9px] text-zinc-600 bg-[#060608]/70 border border-white/6 px-2 py-1 pointer-events-none backdrop-blur-sm">
            <span className="text-[#E50914]">CORE //</span> v2.6
          </div>

          <div className="absolute bottom-3 left-3 font-mono text-[9px] text-zinc-600 bg-[#060608]/70 border border-white/6 px-2 py-1 pointer-events-none backdrop-blur-sm flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>LIVE</span>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-20 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-[#E50914]" />
            <span className="text-zinc-500">PRIZES:</span>
            <span className="text-white font-bold tracking-wide">₹2,50,000+ POOL</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3 text-[#E50914]" />
            <span className="text-zinc-500">FORMAT:</span>
            <span className="text-white font-bold tracking-wide">HYBRID ON-CAMPUS</span>
          </div>
        </div>

        <button
          onClick={() => { playClick(); onExploreClick(); }}
          className="flex items-center gap-2 text-zinc-500 hover:text-[#E50914] transition-colors focus:outline-none"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">SCROLL TO ENTER NIRVAN</span>
          <ArrowDown className="w-3 h-3 animate-bounce text-[#E50914]" />
        </button>
      </div>
    </section>
  );
}
