'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  label?: string;
  caption?: string;
}

interface SimplePhotoGalleryProps {
  images: GalleryImage[];
  title?: string;
  accentColor?: string;
}

export function SimplePhotoGallery({ images, title = 'EVENT GALLERY', accentColor = '#E50914' }: SimplePhotoGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => i === null ? null : (i - 1 + images.length) % images.length);
  const next = () => setLightboxIdx((i) => i === null ? null : (i + 1) % images.length);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-px" style={{ background: accentColor }} />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: accentColor }}>
          {title}
        </span>
      </div>

      {/* Photo Grid */}
      <div className={`grid gap-3 ${images.length === 2 ? 'grid-cols-2' : images.length === 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] overflow-hidden cursor-pointer border border-white/8 hover:border-white/20 transition-all duration-300"
          >
            <Image
              src={img.src}
              alt={img.label || `Photo ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            {/* Label */}
            {img.label && (
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-mono text-[9px] text-zinc-300 tracking-widest truncate">{img.label}</p>
              </div>
            )}
            {/* Index */}
            <div className="absolute top-2 right-2 font-mono text-[9px] text-zinc-500 bg-black/60 px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              {String(idx + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 border border-white/15 text-zinc-400 hover:text-white hover:border-white/40 transition-all z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] max-w-4xl h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIdx].src}
                alt={images[lightboxIdx].label || ''}
                fill
                className="object-contain"
                sizes="90vw"
              />
              {images[lightboxIdx].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-xs text-zinc-300 text-center">{images[lightboxIdx].caption}</p>
                </div>
              )}
            </motion.div>

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 border border-white/15 text-zinc-400 hover:text-white hover:border-white/40 transition-all z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-zinc-600">
              {lightboxIdx + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
