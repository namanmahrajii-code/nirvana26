'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Terminal, Shield } from 'lucide-react';
import { useSoundFx } from '@/hooks/useSoundFx';
import { MagneticButton } from '../ui/MagneticButton';

interface FooterProps {
  onRegisterClick: () => void;
}

export function Footer({ onRegisterClick }: FooterProps) {
  const { playClick, playHover } = useSoundFx();
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'ABOUT // MANIFESTO', href: '#manifesto' },
    { label: 'EVENT UNIVERSE', href: '#events' },
    { label: 'TIMELINE SCHEDULE', href: '#schedule' },
    { label: 'KEYNOTE SPEAKERS', href: '#speakers' },
    { label: 'PHOTO GALLERY', href: '#gallery' },
    { label: 'SPONSOR PARTNERS', href: '#sponsors' },
    { label: 'CONTACT & FAQS', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#040406] text-white pt-32 pb-16 px-6 sm:px-8 lg:px-14 border-t border-[#E50914]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Monolithic Typography Lockup */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="stamp-badge">GEHU CAMPUS</span>
            <span className="font-mono text-[10px] text-zinc-600 tracking-widest">DEHRADUN // 2026</span>
          </div>

          <h2 className="text-5xl sm:text-8xl xl:text-9xl font-black tracking-tighter uppercase font-editorial-heading select-none">
            NIRVAN <span className="text-[#E50914] font-editorial-serif">&apos;26</span>
          </h2>

          <p className="font-mono text-xs tracking-[0.25em] text-[#E50914]/70 uppercase font-bold mt-5">
            WHERE IDEAS BECOME INNOVATION
          </p>
        </div>

        {/* Middle Navigation & CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-white/8 pt-14">
          {/* Quick Nav Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 font-mono text-xs">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onMouseEnter={playHover}
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  const target = document.querySelector(item.href);
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all py-1"
                data-cursor="NAVIGATE"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Button & Live Clock */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between space-y-6">
            <MagneticButton
              onClick={() => {
                playClick();
                onRegisterClick();
              }}
              onMouseEnter={playHover}
              dataCursor="REGISTER"
              className="px-8 py-3.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_30px_rgba(229,9,20,0.5)] transition-all"
            >
              <span>JOIN NIRVAN NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <div className="font-mono text-xs text-zinc-500 text-left md:text-right space-y-1">
              <div>CAMPUS CLOCK: <span className="text-white font-bold">{istTime}</span></div>
              <div className="text-[10px] text-zinc-600">GRAPHIC ERA HILL UNIVERSITY</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/8 pt-10 font-mono text-[10px] text-zinc-600">
          <div className="flex items-center gap-4">
            <span>© 2026 NIRVAN TECHNICAL COUNCIL</span>
            <span>/</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHover}
            data-cursor="TOP"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#E50914] border border-white/10 hover:border-[#E50914] px-4 py-2 bg-[#0b0c12] transition-colors focus:outline-none"
          >
            <span>BACK TO SUMMIT</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E50914]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
