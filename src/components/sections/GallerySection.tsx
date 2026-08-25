'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Maximize2, Camera, Eye } from 'lucide-react';
import { Lightbox, GalleryPhoto } from '../ui/Lightbox';
import { useSoundFx } from '@/hooks/useSoundFx';

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'THE MIDNIGHT FORGE',
    category: 'HACKATHON SPRINT',
    caption: '36 hours of non-stop neural architecture and algorithm development at Central Lab.',
    src: '/assets/gallery/hackathon.jpg',
    iso: 'LEICA M11 // 35MM F/1.4'
  },
  {
    id: 'g2',
    title: 'AUTONOMOUS DRONE ARENA',
    category: 'AEROSPACE RACING',
    caption: 'Micro-drones navigating high-speed optical obstacle courses in dark arena.',
    src: '/assets/gallery/drone.jpg',
    iso: 'SONY A1 // 1/2000s ISO 6400'
  },
  {
    id: 'g3',
    title: 'E-SPORTS ARENA MAINSTAGE',
    category: 'GAMING CHAMPIONSHIP',
    caption: 'Collegiate grand finals in front of 3,000+ electrified spectators.',
    src: '/assets/gallery/esports.jpg',
    iso: 'HASSELBLAD X2D // 55MM'
  },
  {
    id: 'g4',
    title: 'CYBERNETIC ROBOTIC CALIBRATION',
    category: 'ROBOTICS LAB',
    caption: 'Laser grid alignment of humanoid prosthetic limbs and neural feedback actuators.',
    src: '/assets/gallery/robotics.jpg',
    iso: 'CANON R5C // 50MM F/1.2'
  },
  {
    id: 'g5',
    title: 'CAMPUS MONOLITH INSTALLATION',
    category: 'DIGITAL ART INSTALLATION',
    caption: 'Kinetic pyramid sculpture illuminating the GEHU Quadrangle at midnight.',
    src: '/assets/gallery/night.jpg',
    iso: 'FUJIFILM GFX 100 // 23MM'
  },
  {
    id: 'g6',
    title: 'THE OFFENSIVE WAR ROOM',
    category: 'CYBERSECURITY CTF',
    caption: 'White-hat security teams decompiling kernel binaries and exploiting memory leaks.',
    src: '/assets/gallery/cyber.jpg',
    iso: 'NIKON Z9 // 85MM F/1.8'
  }
];

export function GallerySection() {
  const { playClick, playHover } = useSoundFx();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (photo: GalleryPhoto) => {
    playClick();
    setSelectedPhoto(photo);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currIdx = GALLERY_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const prevIdx = (currIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setSelectedPhoto(GALLERY_PHOTOS[prevIdx]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currIdx = GALLERY_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const nextIdx = (currIdx + 1) % GALLERY_PHOTOS.length;
    setSelectedPhoto(GALLERY_PHOTOS[nextIdx]);
  };

  return (
    <section id="gallery" className="relative py-32 px-6 sm:px-8 lg:px-14 bg-[#050608] border-b border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/8 pb-6 gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#E50914] mb-4 tracking-widest">
              <span>ACT 04</span>
              <span className="text-zinc-700">//</span>
              <span>VISUAL ARCHIVE</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white uppercase tracking-tight font-editorial-heading">
              PHOTO EXHIBITION
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-sm text-left md:text-right leading-[1.8]">
            Curated captures from the crucible of NIRVAN. Click any frame to inspect high-resolution archives.
          </p>
        </div>

        {/* Asymmetric Digital Exhibition Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Item 1: Giant Featured Monolith (Span 8) */}
          <div
            onClick={() => openLightbox(GALLERY_PHOTOS[0])}
            onMouseEnter={playHover}
            data-cursor="OPEN"
            className="md:col-span-8 group relative aspect-[16/10] bg-[#0d0e16] border-2 border-white/15 hover:border-[#E50914] overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={GALLERY_PHOTOS[0].src}
              alt={GALLERY_PHOTOS[0].title}
              fill
              className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-xs">
              <div>
                <span className="stamp-badge mb-2">{GALLERY_PHOTOS[0].category}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial-serif">{GALLERY_PHOTOS[0].title}</h3>
                <p className="text-zinc-400 text-xs hidden sm:block mt-1">{GALLERY_PHOTOS[0].caption}</p>
              </div>
              <div className="p-2 bg-black/60 border border-white/20 text-white group-hover:bg-[#E50914] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 2: Vertical Portrait (Span 4) */}
          <div
            onClick={() => openLightbox(GALLERY_PHOTOS[1])}
            onMouseEnter={playHover}
            data-cursor="OPEN"
            className="md:col-span-4 group relative aspect-[3/4] bg-[#0d0e16] border-2 border-white/15 hover:border-[#E50914] overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={GALLERY_PHOTOS[1].src}
              alt={GALLERY_PHOTOS[1].title}
              fill
              className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-xs">
              <div>
                <span className="stamp-badge mb-2">{GALLERY_PHOTOS[1].category}</span>
                <h3 className="text-lg font-bold text-white font-editorial-serif">{GALLERY_PHOTOS[1].title}</h3>
              </div>
              <div className="p-2 bg-black/60 border border-white/20 text-white group-hover:bg-[#E50914] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 3 (Span 4) */}
          <div
            onClick={() => openLightbox(GALLERY_PHOTOS[2])}
            onMouseEnter={playHover}
            data-cursor="OPEN"
            className="md:col-span-4 group relative aspect-[4/3] bg-[#0d0e16] border-2 border-white/15 hover:border-[#E50914] overflow-hidden cursor-pointer transition-all duration-300"
          >
            <Image
              src={GALLERY_PHOTOS[2].src}
              alt={GALLERY_PHOTOS[2].title}
              fill
              className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-xs">
              <div>
                <span className="stamp-badge-white text-[10px] mb-1">{GALLERY_PHOTOS[2].category}</span>
                <h3 className="text-base font-bold text-white font-editorial-serif">{GALLERY_PHOTOS[2].title}</h3>
              </div>
              <div className="p-2 bg-black/60 border border-white/20 text-white group-hover:bg-[#E50914] transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Item 4 (Span 4) */}
          <div
            onClick={() => openLightbox(GALLERY_PHOTOS[3])}
            onMouseEnter={playHover}
            data-cursor="OPEN"
            className="md:col-span-4 group relative aspect-[4/3] bg-[#0d0e16] border-2 border-white/15 hover:border-[#E50914] overflow-hidden cursor-pointer transition-all duration-300"
          >
            <Image
              src={GALLERY_PHOTOS[3].src}
              alt={GALLERY_PHOTOS[3].title}
              fill
              className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-xs">
              <div>
                <span className="stamp-badge-white text-[10px] mb-1">{GALLERY_PHOTOS[3].category}</span>
                <h3 className="text-base font-bold text-white font-editorial-serif">{GALLERY_PHOTOS[3].title}</h3>
              </div>
              <div className="p-2 bg-black/60 border border-white/20 text-white group-hover:bg-[#E50914] transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Item 5 (Span 4) */}
          <div
            onClick={() => openLightbox(GALLERY_PHOTOS[4])}
            onMouseEnter={playHover}
            data-cursor="OPEN"
            className="md:col-span-4 group relative aspect-[4/3] bg-[#0d0e16] border-2 border-white/15 hover:border-[#E50914] overflow-hidden cursor-pointer transition-all duration-300"
          >
            <Image
              src={GALLERY_PHOTOS[4].src}
              alt={GALLERY_PHOTOS[4].title}
              fill
              className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-xs">
              <div>
                <span className="stamp-badge-white text-[10px] mb-1">{GALLERY_PHOTOS[4].category}</span>
                <h3 className="text-base font-bold text-white font-editorial-serif">{GALLERY_PHOTOS[4].title}</h3>
              </div>
              <div className="p-2 bg-black/60 border border-white/20 text-white group-hover:bg-[#E50914] transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Item 6: Full Panoramic (Span 12) */}
          <div
            onClick={() => openLightbox(GALLERY_PHOTOS[5])}
            onMouseEnter={playHover}
            data-cursor="OPEN"
            className="md:col-span-12 group relative aspect-[21/9] bg-[#0d0e16] border-2 border-white/15 hover:border-[#E50914] overflow-hidden cursor-pointer transition-all duration-300"
          >
            <Image
              src={GALLERY_PHOTOS[5].src}
              alt={GALLERY_PHOTOS[5].title}
              fill
              className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-xs">
              <div>
                <span className="stamp-badge mb-2">{GALLERY_PHOTOS[5].category}</span>
                <h3 className="text-xl sm:text-3xl font-black text-white font-editorial-serif">{GALLERY_PHOTOS[5].title}</h3>
                <p className="text-zinc-400 text-xs hidden sm:block mt-1">{GALLERY_PHOTOS[5].caption}</p>
              </div>
              <div className="p-2 bg-black/60 border border-white/20 text-white group-hover:bg-[#E50914] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photo={selectedPhoto}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
