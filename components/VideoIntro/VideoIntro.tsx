// components/VideoIntro/VideoIntro.tsx
// STEP 1: Full-screen video landing with One Piece pirate intro

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleExit = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  useEffect(() => {
    // Show skip/explore button after 2 seconds
    const btnTimer = setTimeout(() => setShowButton(true), 2000);
    // Auto-complete after 6 seconds
    const autoTimer = setTimeout(() => handleExit(), 6500);
    return () => {
      clearTimeout(btnTimer);
      clearTimeout(autoTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="video-intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            src="/Hey_with_the_help_of_two_image.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={false}
            onEnded={handleExit}
          />

          {/* Dark overlay with vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Gold border frame overlay */}
          <div
            className="absolute inset-4 pointer-events-none"
            style={{
              border: '2px solid rgba(212,175,55,0.4)',
              boxShadow: 'inset 0 0 60px rgba(212,175,55,0.08)',
            }}
          />

          {/* Corner ornaments */}
          {[
            'top-4 left-4 border-t-2 border-l-2',
            'top-4 right-4 border-t-2 border-r-2',
            'bottom-4 left-4 border-b-2 border-l-2',
            'bottom-4 right-4 border-b-2 border-r-2',
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-8 h-8 pointer-events-none ${cls}`}
              style={{ borderColor: 'rgba(212,175,55,0.8)' }}
            />
          ))}

          {/* Welcome label */}
          <motion.div
            className="relative z-10 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p
              className="text-xs tracking-[0.5em] uppercase mb-3"
              style={{ color: 'rgba(212,175,55,0.7)', fontFamily: 'Georgia, serif' }}
            >
              ✦ Welcome from Sandesh ✦
            </p>
            <div
              className="w-16 h-px mx-auto"
              style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
            />
          </motion.div>

          {/* Skull flag emoji as pirate logo */}
          <motion.div
            className="relative z-10 text-7xl mb-6 select-none"
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
          >
            🏴‍☠️
          </motion.div>

          {/* CTA Buttons — appear after 2s */}
          <AnimatePresence>
            {showButton && (
              <motion.div
                className="relative z-10 flex gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={handleExit}
                  className="group relative px-8 py-3 font-bold text-sm tracking-widest uppercase overflow-hidden"
                  style={{
                    border: '2px solid #D4AF37',
                    color: '#D4AF37',
                    fontFamily: 'Georgia, serif',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#D4AF37';
                    (e.currentTarget as HTMLButtonElement).style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color = '#D4AF37';
                  }}
                >
                  ⚓ Explore the Crew
                </button>
                <button
                  onClick={handleExit}
                  className="px-5 py-3 text-xs tracking-widest uppercase"
                  style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontFamily: 'Georgia, serif',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)';
                  }}
                >
                  Skip →
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: 'linear-gradient(to right, #D4AF37, #f0cc5a)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 6.5, ease: 'linear' }}
          />
        </motion.div>
      ) : (
        // Fade-out: "WANTED" text slam
        <motion.div
          key="exit-flash"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h1
            className="font-serif text-8xl md:text-[10rem] font-black tracking-tight select-none"
            style={{
              fontFamily: 'Georgia, serif',
              color: '#D4AF37',
              textShadow: '0 0 80px rgba(212,175,55,0.6)',
            }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            WANTED
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;
