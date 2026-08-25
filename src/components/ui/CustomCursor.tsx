'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const hoverData = target?.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (hoverData) {
        setCursorText(hoverData);
        setCursorVariant('hover');
      } else if (target?.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorText('');
        setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#E50914] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: cursorVariant === 'hover' && cursorText ? 0 : 8,
          height: cursorVariant === 'hover' && cursorText ? 0 : 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Outer Tactical Ring / Label Container */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center font-mono text-[10px] tracking-widest uppercase font-bold text-white border border-[#E50914]"
        animate={{
          x: mousePosition.x - (cursorText ? 44 : 18),
          y: mousePosition.y - (cursorText ? 44 : 18),
          width: cursorText ? 88 : 36,
          height: cursorText ? 88 : 36,
          borderRadius: '50%',
          backgroundColor: cursorText ? 'rgba(229, 9, 20, 0.95)' : 'rgba(229, 9, 20, 0.05)',
          scale: cursorVariant === 'hover' ? (cursorText ? 1 : 1.4) : 1,
          borderColor: cursorText ? '#ffffff' : 'rgba(229, 9, 20, 0.5)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-black font-extrabold select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
