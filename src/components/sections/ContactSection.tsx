'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Radio, HelpCircle } from 'lucide-react';
import { useSoundFx } from '@/hooks/useSoundFx';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'WHO IS ELIGIBLE TO PARTICIPATE IN NIRVAN 2026?',
    a: 'Any undergraduate or postgraduate student with a valid college ID from an accredited university or technical institute is eligible. Inter-college teams are fully permitted.'
  },
  {
    q: 'CAN A PARTICIPANT REGISTER FOR MULTIPLE EVENTS?',
    a: 'Yes, provided the timelines do not clash. For instance, you can participate in the Workshop on Day 1 and compete in the E-Sports Arena or Treasure Hunt on Day 2.'
  },
  {
    q: 'IS ACCOMMODATION PROVIDED FOR OUTSTATION TEAMS?',
    a: 'Yes, campus guest house and designated hostel accommodation with meals is provided for outstation Hackathon and CTF finalist teams on prior request.'
  },
  {
    q: 'HOW ARE HACKATHON PROJECTS SUBMITTED AND EVALUATED?',
    a: 'All submissions are processed through GitHub with live deployment URL and short demo video. Mentors perform two rigorous checkpoint reviews prior to stage pitches.'
  }
];

export function ContactSection() {
  const { playClick, playHover } = useSoundFx();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    playClick();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#08090d] border-b border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-4 tracking-widest">
              <span>ACT 06</span>
              <span className="text-zinc-700">//</span>
              <span>PROTOCOL DISPATCH</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              GET IN TOUCH
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-xs text-left md:text-right leading-[1.8]">
            NIRVAN &apos;26 Operations Desk &amp; Geolocation Coordinates.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Campus Info */}
          <div className="lg:col-span-5 bg-[#0d0e16] border border-white/8 p-9 sm:p-11 space-y-10">

            {/* Address */}
            <div className="space-y-3">
              <span className="stamp-badge">CAMPUS HEADQUARTERS</span>
              <h3 className="text-2xl font-black text-white tracking-tight font-editorial-serif mt-4 leading-snug">
                GRAPHIC ERA HILL UNIVERSITY
              </h3>
              <p className="font-mono text-xs text-zinc-500 leading-[1.9]">
                Society Area, Clement Town, Dehradun, Uttarakhand 248002
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-5 font-mono text-sm border-t border-white/6 pt-8">
              <a
                href="mailto:nirvan@gehu.in"
                onMouseEnter={playHover}
                className="flex items-center gap-4 text-white hover:text-[#E50914] transition-colors group"
                data-cursor="EMAIL"
              >
                <div className="p-2.5 bg-white/4 border border-white/8 group-hover:border-[#E50914]/40 transition-colors">
                  <Mail className="w-4 h-4 text-[#E50914]" />
                </div>
                <span className="text-zinc-300 group-hover:text-white transition-colors">nirvan@gehu.in</span>
              </a>

              <a
                href="tel:+911256489632"
                onMouseEnter={playHover}
                className="flex items-center gap-4 text-white hover:text-[#E50914] transition-colors group"
                data-cursor="CALL"
              >
                <div className="p-2.5 bg-white/4 border border-white/8 group-hover:border-[#E50914]/40 transition-colors">
                  <Phone className="w-4 h-4 text-[#E50914]" />
                </div>
                <span className="text-zinc-300 group-hover:text-white transition-colors">+91 1256489632</span>
              </a>

              <div className="flex items-center gap-4 text-zinc-500">
                <div className="p-2.5 bg-white/4 border border-white/8">
                  <MapPin className="w-4 h-4 text-[#E50914]" />
                </div>
                <span className="text-zinc-500 font-mono text-xs">LAT: 30.2711° N &nbsp;// &nbsp;LONG: 77.9984° E</span>
              </div>
            </div>

            {/* Radar visualization */}
            <div className="relative aspect-[16/7] bg-[#07080c] border border-white/6 p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between font-mono text-[9px] text-zinc-600 z-10">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Radio className="w-2.5 h-2.5 text-[#E50914] animate-pulse" />
                  RADAR ACTIVE
                </span>
                <span>DEHRADUN VALLEY</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 rounded-full border border-[#E50914]/15 animate-ping" />
                <div className="absolute w-48 h-48 rounded-full border border-white/4" />
                <div className="absolute w-2 h-2 rounded-full bg-[#E50914]" />
              </div>

              <div className="font-mono text-[8px] text-zinc-700 z-10 flex justify-between">
                <span>GEHU COMPUTING COMPLEX</span>
                <span className="text-[#E50914]/60">SECURE STATUS</span>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600 tracking-widest mb-8">
              <HelpCircle className="w-3 h-3 text-[#E50914]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#E50914]/40 bg-[#0e0f18]'
                        : 'border-white/8 bg-[#090a10] hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      onMouseEnter={playHover}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 font-mono text-xs sm:text-sm font-bold text-white focus:outline-none"
                    >
                      <span className="flex items-start gap-3 leading-relaxed">
                        <span className="text-[#E50914] shrink-0">0{idx + 1}.</span>
                        <span className="text-zinc-300">{faq.q}</span>
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-6 pb-6 text-xs text-zinc-400 font-mono leading-[1.9] border-t border-white/6 pt-4"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
