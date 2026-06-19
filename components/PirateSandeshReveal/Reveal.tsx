// components/PirateSandeshReveal/Reveal.tsx
// STEP 3: One Piece theme reveal — "WANTED: DEVELOPER" transition

'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PirateSandeshReveal: React.FC = () => {
  const charges = [
    'Crafting scalable backend systems',
    'AI/ML model development',
    'Full-stack platform engineering',
    'Deploying production-grade APIs',
  ];

  return (
    <section
      id="reveal"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #000000 0%, #0a0400 50%, #000000 100%)',
      }}
    >
      {/* Animated radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Horizontal scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(212,175,55,0.02) 3px, rgba(212,175,55,0.02) 4px)',
        }}
      />

      {/* Gold divider — top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, #D4AF37 20%, #D4AF37 80%, transparent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Gold divider — bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, #D4AF37 20%, #D4AF37 80%, transparent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-24">
        {/* WANTED stamp */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span
            className="inline-block px-8 py-2 text-xs tracking-[0.6em] uppercase font-bold"
            style={{
              border: '2px solid rgba(212,175,55,0.5)',
              color: 'rgba(212,175,55,0.7)',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.6em',
            }}
          >
            ✦ Marine Intelligence ✦
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 40, skewY: 3 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <h1
            className="leading-none font-black"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              color: '#D4AF37',
              textShadow: '0 0 80px rgba(212,175,55,0.4), 4px 4px 0 rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em',
            }}
          >
            WANTED
          </h1>
        </motion.div>

        {/* Developer subtitle */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
              color: '#ffffff',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            DEVELOPER
          </p>
        </motion.div>

        {/* Gold bar divider */}
        <motion.div
          className="my-10 mx-auto"
          style={{
            width: 200,
            height: 3,
            background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
        />

        {/* Charges list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-10"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-5"
            style={{ color: 'rgba(212,175,55,0.6)', fontFamily: 'Georgia, serif' }}
          >
            CHARGES
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {charges.map((charge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 + i * 0.08 }}
                className="inline-block px-4 py-2 text-sm"
                style={{
                  border: '1px solid rgba(212,175,55,0.3)',
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Georgia, serif',
                  background: 'rgba(212,175,55,0.05)',
                  borderRadius: 2,
                }}
              >
                {charge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bounty amount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9, type: 'spring', stiffness: 150, damping: 12 }}
        >
          <div
            className="inline-block px-10 py-5"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '2px solid rgba(212,175,55,0.5)',
              boxShadow: '0 0 40px rgba(212,175,55,0.15)',
            }}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-1" style={{ color: 'rgba(212,175,55,0.6)', fontFamily: 'Georgia, serif' }}>
              BOUNTY
            </p>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 900,
                color: '#D4AF37',
                letterSpacing: '0.05em',
                textShadow: '0 0 30px rgba(212,175,55,0.5)',
              }}
            >
              ₹ 500,000,000
            </p>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          animate={{ y: [0, 8, 0] }}
        >
          <p className="text-xs tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Georgia, serif' }}>
            Scroll to discover
          </p>
          <div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.5), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PirateSandeshReveal;
