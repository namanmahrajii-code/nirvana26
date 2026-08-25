'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useSoundFx } from '@/hooks/useSoundFx';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  caption: string;
  src: string;
  iso: string;
}

interface LightboxProps {
  photo: GalleryPhoto | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ photo, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  const { playClick, playHover } = useSoundFx();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl">
      {/* Top HUD Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 font-mono text-xs text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="stamp-badge">EXHIBITION ARCHIVE</span>
          <span className="text-white font-bold">{photo.title}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-zinc-500">{photo.iso}</span>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-2 text-zinc-400 hover:text-white border border-white/20 hover:border-[#E50914] bg-[#0c0d12] transition-colors"
            data-cursor="CLOSE"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={() => {
          playClick();
          onPrev();
        }}
        onMouseEnter={playHover}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 border border-white/20 text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all"
        data-cursor="PREV"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => {
          playClick();
          onNext();
        }}
        onMouseEnter={playHover}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 border border-white/20 text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all"
        data-cursor="NEXT"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <motion.div
        key={photo.id}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-5xl w-full max-h-[75vh] aspect-[16/9] border-2 border-white/20 shadow-[0_0_50px_rgba(229,9,20,0.35)] overflow-hidden"
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-contain bg-black"
          priority
        />
      </motion.div>

      {/* Bottom Caption HUD */}
      <div className="absolute bottom-6 left-6 right-6 text-center font-mono text-xs text-zinc-400">
        <div className="max-w-xl mx-auto bg-black/75 border border-white/10 px-4 py-2 backdrop-blur-md">
          <span className="text-[#E50914] font-bold mr-2">[{photo.category}]</span>
          <span>{photo.caption}</span>
        </div>
      </div>
    </div>
  );
}
