'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { useSoundFx } from '@/hooks/useSoundFx';
import { MagneticButton } from '../ui/MagneticButton';

interface NavbarProps {
  onOpenRegister: (eventId?: string) => void;
}

export function Navbar({ onOpenRegister }: NavbarProps) {
  const { muted, toggleMute, playClick, playHover } = useSoundFx();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 60, hours: 14, mins: 22, secs: 45 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, mins: 59, secs: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: '01 // MANIFESTO', href: '#manifesto' },
    { label: '02 // EVENT UNIVERSE', href: '#events' },
    { label: '03 // TIMELINE', href: '#schedule' },
    { label: '04 // SPEAKERS', href: '#speakers' },
    { label: '05 // GALLERY', href: '#gallery' },
    { label: '06 // SPONSORS', href: '#sponsors' },
    { label: '07 // VENUE & FAQ', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    playClick();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#060608]/92 backdrop-blur-lg border-b border-white/8 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              playClick();
            }}
            className="flex items-center gap-3 group focus:outline-none"
            data-cursor="NIRVAN"
          >
            <div className="w-8 h-8 bg-[#E50914] flex items-center justify-center font-mono font-black text-black text-sm tracking-tighter shadow-[0_0_15px_rgba(229,9,20,0.5)]">
              N26
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.25em] font-bold text-white group-hover:text-[#E50914] transition-colors">
                NIRVAN &apos;26
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#8E8E98]">
                GEHU // DEHRADUN
              </span>
            </div>
          </a>

          {/* Center HUD Status (Desktop) */}
          <div className="hidden lg:flex items-center gap-5 font-mono text-[10px] text-[#8E8E98] border border-white/8 px-5 py-2 bg-[#0e0f14]/50">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
              <span className="text-zinc-500 tracking-widest">LIVE</span>
              <span className="text-[#FF1E27] font-bold tracking-wider">
                T-{timeLeft.days}D {timeLeft.hours}H {timeLeft.mins}M {timeLeft.secs}S
              </span>
            </div>
            <span className="w-px h-3 bg-white/15" />
            <span className="text-zinc-500 tracking-widest">OCT 24—25, 2026</span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleMute();
                playClick();
              }}
              onMouseEnter={playHover}
              title={muted ? 'Enable Audio FX' : 'Mute Audio FX'}
              className="p-2.5 text-zinc-400 hover:text-white border border-white/8 hover:border-[#E50914]/60 bg-[#0e0f14]/60 transition-colors focus:outline-none"
              data-cursor="AUDIO"
            >
              {muted ? (
                <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#E50914]" />
              )}
            </button>

            {/* Quick Register CTA */}
            <MagneticButton
              onClick={() => {
                playClick();
                onOpenRegister();
              }}
              onMouseEnter={playHover}
              dataCursor="REGISTER"
              className="hidden sm:inline-flex px-5 py-2.5 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono text-xs font-bold tracking-widest uppercase items-center gap-2 shadow-[0_0_24px_rgba(229,9,20,0.35)] transition-all"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Menu Drawer Toggle */}
            <button
              onClick={() => {
                playClick();
                setMenuOpen(!menuOpen);
              }}
              onMouseEnter={playHover}
              className="p-2.5 text-white border border-white/10 hover:border-[#E50914]/60 bg-[#0e0f14]/60 transition-colors focus:outline-none"
              data-cursor="MENU"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060608]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 pt-28 bg-halftone"
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Navigation Links */}
              <div className="lg:col-span-8 flex flex-col gap-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#E50914] uppercase">
                  [ DIRECTORY NAVIGATION ]
                </span>
                <nav className="flex flex-col gap-2 mt-2">
                  {navLinks.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      onMouseEnter={playHover}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      data-cursor="NAVIGATE"
                      className="group flex items-center justify-between py-2.5 border-b border-white/5 hover:border-[#E50914] text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white/80 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 opacity-0 group-hover:opacity-100 group-hover:text-[#E50914] transition-all" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Fest Metadata Sidebar */}
              <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 font-mono text-xs text-zinc-400 space-y-6">
                <div>
                  <div className="stamp-badge mb-4">GEHU DEHRADUN</div>
                  <h3 className="text-white font-bold text-lg mb-2">NIRVAN &apos;26</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Graphic Era Hill University&apos;s annual inter-university technology crucible.
                    Where Ideas Become Innovation.
                  </p>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-zinc-500">DATES</span>
                    <span className="text-white">OCT 24 & 25, 2026</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-zinc-500">PRIZE POOL</span>
                    <span className="text-[#E50914] font-bold">₹2,50,000+</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-zinc-500">VENUE</span>
                    <span className="text-white">CAMPUS COMPLEX</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-zinc-500">ENCRYPTED PROTOCOL</span>
                    <span className="text-zinc-300 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E50914]" /> VERIFIED
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3 bg-[#E50914] hover:bg-[#FF1E27] text-white font-mono font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                >
                  <span>REGISTER FOR EVENTS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Footer info */}
            <div className="max-w-6xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-2">
              <span>DESIGNED FOR SPEED, PRECISION & IMPACT</span>
              <span>© 2026 NIRVAN // ALL RIGHTS RESERVED</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
