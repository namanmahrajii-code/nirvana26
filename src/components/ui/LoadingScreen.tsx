'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 6;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#060608] flex flex-col items-center justify-center p-6 text-white bg-halftone font-mono"
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#E50914] font-bold tracking-[0.25em]">NIRVAN &apos;26</span>
              <span className="text-zinc-500">INIT // GEHU</span>
            </div>

            <div className="w-full h-1 bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-[#E50914] shadow-[0_0_15px_#E50914]"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-500">
              <span>LOADING 3D ENGINE & SHADERS</span>
              <span className="font-bold text-white">{Math.min(100, progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
