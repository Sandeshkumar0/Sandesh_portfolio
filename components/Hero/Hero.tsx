// components/Hero/Hero.tsx — Bulletproof wake-up animation
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  sleepingImageUrl?: string;
  awakeImageUrl?: string;
}

// ─── Floating Zs ─────────────────────────────────────────────────────────────
const ZFloat: React.FC<{ size: number; x: number; y: number; delay: number }> = ({ size, x, y, delay }) => (
  <motion.span
    className="absolute font-black text-blue-300 select-none pointer-events-none"
    style={{ fontSize: size, right: x, top: y }}
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: [0, 0.8, 0], y: -40 }}
    transition={{ duration: 2.2, delay, repeat: Infinity, repeatDelay: 0.8 }}
  >
    Z
  </motion.span>
);

// ─── Speech Bubble ────────────────────────────────────────────────────────────
const SpeechBubble: React.FC<{ show: boolean; showSubtitle: boolean }> = ({ show, showSubtitle }) => {
  const [typed, setTyped] = useState('');
  const [showSub, setShowSub] = useState(false);
  const [prevShow, setPrevShow] = useState(show);
  const msg = "Hello! I'm Sandesh Kumar 👋";

  if (show !== prevShow) {
    setPrevShow(show);
    setTyped('');
    setShowSub(false);
  }

  useEffect(() => {
    if (!show) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(msg.slice(0, i));
      if (i >= msg.length) {
        clearInterval(iv);
        setTimeout(() => setShowSub(true), 400);
      }
    }, 50);
    return () => clearInterval(iv);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute z-30"
          style={{ top: '8%', left: '55%' }}
          initial={{ scale: 0, opacity: 0, transformOrigin: 'bottom left' }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        >
          <div
            className="relative rounded-2xl px-5 py-4 shadow-2xl border-2 border-cyan-500/40 backdrop-blur-md"
            style={{ background: 'rgba(13, 17, 23, 0.92)', minWidth: 220, maxWidth: 280 }}
          >
            <p className="text-white font-bold text-sm leading-snug">
              {typed}
              <span
                className="inline-block w-0.5 h-4 bg-cyan-400 ml-0.5 align-middle"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            </p>
            
            <AnimatePresence mode="wait">
              {showSubtitle ? (
                <motion.p
                  key="meet"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-yellow-400 text-xs font-bold mt-1.5 leading-snug tracking-wider"
                >
                  Nice to meet you! 🤝
                </motion.p>
              ) : (
                showSub && (
                  <motion.p
                    key="title"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-cyan-400 text-xs font-semibold mt-1 leading-snug"
                  >
                    CS Student · Backend Dev · NLP & OpenCV
                  </motion.p>
                )
              )}
            </AnimatePresence>

            {/* Tail pointing down-left */}
            <div
              style={{
                position: 'absolute',
                bottom: -13,
                left: 18,
                width: 0,
                height: 0,
                borderLeft: '9px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '14px solid rgba(13, 17, 23, 0.92)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: -16,
                left: 16,
                width: 0,
                height: 0,
                borderLeft: '11px solid transparent',
                borderRight: '7px solid transparent',
                borderTop: '16px solid rgba(0, 217, 255, 0.4)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Terminal Panel ───────────────────────────────────────────────────────────
const Terminal: React.FC<{ show: boolean }> = ({ show }) => {
  const lines = [
    { type: 'cmd',  text: 'whoami',                                          delay: 0.1 },
    { type: 'out',  text: 'Sandesh Kumar — Backend Dev & ML Engineer',       delay: 0.3 },
    { type: 'cmd',  text: 'cat skills.txt',                                  delay: 0.6 },
    { type: 'out',  text: 'Django · Node.js · React · TF · OpenCV',         delay: 0.8 },
    { type: 'cmd',  text: 'cat education.txt',                               delay: 1.1 },
    { type: 'out',  text: 'B.Tech CS @ KIIT  •  CGPA: 8.99',               delay: 1.3 },
    { type: 'cmd',  text: 'ls projects/',                                    delay: 1.6 },
    { type: 'out',  text: 'abacus/ eudyaan/ smart-health/ facial-cnn/',     delay: 1.8 },
    { type: 'cur',  text: '',                                                 delay: 2.2 },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* Window chrome */}
          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(0,217,255,0.18)', background: '#0d1117' }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs font-mono" style={{ color: '#6b7280' }}>~/portfolio — bash</span>
            </div>

            {/* Body */}
            <div className="px-5 py-4 font-mono text-sm" style={{ minHeight: 260 }}>
              {lines.map((ln, i) => (
                <motion.div
                  key={i}
                  className="mb-1"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: ln.delay, duration: 0.25 }}
                >
                  {ln.type === 'cmd' && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span style={{ color: '#3fb950' }}>~/portfolio</span>
                      <span style={{ color: '#6b7280' }}>$</span>
                      <span style={{ color: '#e6edf3' }}>{ln.text}</span>
                    </div>
                  )}
                  {ln.type === 'out' && (
                    <div className="pl-3" style={{ color: '#79c0ff' }}>{ln.text}</div>
                  )}
                  {ln.type === 'cur' && (
                    <div className="flex items-center gap-1.5">
                      <span style={{ color: '#3fb950' }}>~/portfolio</span>
                      <span style={{ color: '#6b7280' }}>$</span>
                      <motion.span
                        className="inline-block w-2.5 h-4 ml-0.5"
                        style={{ background: '#00d9ff' }}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.9, repeat: Infinity }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-5 flex-wrap">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #00d9ff, #0088ff)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 18px rgba(0,217,255,0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.transform = 'scale(1)'; }}
            >
              Explore My Work ↓
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '10px 24px',
                background: 'transparent',
                color: '#94a3b8',
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 10,
                border: '1.5px solid rgba(0,217,255,0.3)',
                cursor: 'pointer',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.color = '#00d9ff'; (e.target as HTMLButtonElement).style.borderColor = '#00d9ff'; }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.color = '#94a3b8'; (e.target as HTMLButtonElement).style.borderColor = 'rgba(0,217,255,0.3)'; }}
            >
              View Projects
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Scroll hint ──────────────────────────────────────────────────────────────
const ScrollHint: React.FC = () => (
  <motion.div
    className="flex flex-col items-center gap-2"
    style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 4 }}
  >
    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#4b5563' }}>
      Scroll to explore
    </span>
    <motion.div
      style={{
        width: 22,
        height: 34,
        borderRadius: 11,
        border: '1.5px solid #374151',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 5,
      }}
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        style={{ width: 4, height: 8, borderRadius: 2, background: '#00d9ff' }}
        animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  </motion.div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero: React.FC<HeroProps> = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const videoRef      = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const prevTimeRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Start fully visible — no initial opacity:0 trick
    const tl = gsap.timeline();

    // 0 → slide in from lower-left
    tl.fromTo(el,
      { x: -100, y: 50, opacity: 0, rotation: -8 },
      { x: 0, y: 0, opacity: 1, rotation: 0, duration: 0.7, ease: 'power3.out' }
    );

    // Hold sleeping
    tl.to({}, { duration: 0.9 });

    // Wake-up jitter
    tl.to(el, { rotation: 6,  y: -8, duration: 0.1, ease: 'power1.inOut' });
    tl.to(el, { rotation: -4, y:  4, duration: 0.1 });
    tl.to(el, { rotation: 3,  y: -5, duration: 0.1 });
    tl.to(el, { rotation: 0,  y:  0, duration: 0.15, ease: 'power2.out' });

    // Stretch yawn
    tl.to(el, { scaleY: 1.07, duration: 0.22, ease: 'sine.out' });
    tl.to(el, { scaleY: 1.0,  duration: 0.18, ease: 'back.out(2)' });

    // Float loop
    tl.add(() => {
      gsap.to(el, {
        y: -16, duration: 2.6, ease: 'sine.inOut', repeat: -1, yoyo: true,
      });
    }, '+=0.3');

    return () => { tl.kill(); };
  }, []);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const time = video.currentTime;

    // Detect loop/reset
    if (time < prevTimeRef.current - 1) {
      setShowBubble(false);
      setShowTerminal(false);
      setShowSubtitle(false);
    }
    prevTimeRef.current = time;
    setCurrentTime(time);

    // Sync speech bubble and terminal to wake up moment at 2.0s
    if (time >= 2.0 && !showBubble) {
      setShowBubble(true);
      setShowTerminal(true);
    }

    // Subtitle displays in the final 3.5 seconds of the video
    const videoDuration = video.duration || duration;
    if (videoDuration > 0 && time >= videoDuration - 3.5) {
      setShowSubtitle(true);
    } else {
      setShowSubtitle(false);
    }
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
  };

  const sleeping = currentTime < 1.7;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #06091a 0%, #0a0f1a 40%, #080d1f 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          backgroundImage:
            'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(0,217,255,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow blobs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,136,255,0.08), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)', pointerEvents: 'none' }} />

      {/* ─── Main content row ─── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
          padding: '100px 40px 80px',
          display: 'flex',
          alignItems: 'center',
          gap: 80,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >

        {/* ─── LEFT: Cartoon character ─── */}
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            width: 360,
            height: 400,
          }}
        >
          {/* GSAP animation wrapper */}
          <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <video
              ref={videoRef}
              src="/Hey_with_the_help_of_two_image.mp4"
              autoPlay
              loop
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              }}
            />

            {/* Floating Zs while sleeping */}
            {sleeping && (
              <>
                <ZFloat size={28} x={150} y={150} delay={0}   />
                <ZFloat size={20} x={170} y={170} delay={0.5} />
                <ZFloat size={14} x={190} y={190} delay={1.0} />
              </>
            )}
          </div>

          {/* Speech bubble — positioned relative to character wrapper */}
          <SpeechBubble show={showBubble} showSubtitle={showSubtitle} />
        </div>

        {/* ─── RIGHT: Terminal ─── */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 520 }}>
          {showTerminal ? (
            <Terminal show={showTerminal} />
          ) : (
            <motion.div
              style={{ color: '#374151', fontFamily: 'monospace', fontSize: 14 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span style={{ color: '#1e3a4a' }}>{"// "}</span>booting portfolio...
            </motion.div>
          )}
        </div>
      </div>

      <ScrollHint />

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
};

export default Hero;
