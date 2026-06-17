// pages/index.tsx — Main Portfolio Page
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Head from 'next/head';
import { FiMenu, FiX } from 'react-icons/fi';
import { Hero }     from '@/components/Hero';
import { About }    from '@/components/About';
import { Skills }   from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact }  from '@/components/Contact';
import { RESUME_DATA } from '@/utils/data';
import { MovingAtoms } from '@/components/Background/MovingAtoms';

gsap.registerPlugin(ScrollToPlugin);

// ── Navbar ──────────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Home',     href: '#hero',     id: 'hero' },
  { label: 'About',    href: '#about',    id: 'about' },
  { label: 'Skills',   href: '#skills',   id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact',  href: '#contact',  id: 'contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    let sectionElements: { id: string; top: number; height: number }[] = [];

    const calculateOffsets = () => {
      sectionElements = navItems.map(item => {
        const el = document.getElementById(item.id);
        return {
          id: item.id,
          top: el ? el.offsetTop : 0,
          height: el ? el.offsetHeight : 0,
        };
      });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of sectionElements) {
        if (scrollPos >= section.top && scrollPos < section.top + section.height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    calculateOffsets();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateOffsets);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffsets);
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      id="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled || menuOpen ? 'rgba(10,15,26,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(0,217,255,0.15)' : 'none',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          style={{
            fontSize: 22,
            fontWeight: 900,
            background: 'linear-gradient(135deg, #00d9ff, #0088ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          SK.
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={i}
                onClick={() => scrollTo(item.href)}
                style={{
                  color: isActive ? '#00d9ff' : '#94a3b8',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    style={{
                      position: 'absolute',
                      bottom: -6,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(90deg, #00d9ff, #0088ff)',
                      borderRadius: 10,
                      boxShadow: '0 0 8px #00d9ff',
                    }}
                  />
                )}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              padding: '8px 20px',
              background: 'linear-gradient(135deg, #00d9ff, #0088ff)',
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 14px rgba(0,217,255,0.3)',
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-cyan-400 p-2 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#0a0f1a]/95 border-b border-cyan-500/15 overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-8 py-6">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={i}
                    onClick={() => scrollTo(item.href)}
                    className="text-left py-2 font-bold text-sm tracking-widest uppercase transition-colors"
                    style={{ color: isActive ? '#00d9ff' : '#94a3b8' }}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full mt-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl text-center shadow-lg shadow-cyan-500/20"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ── Footer ───────────────────────────────────────────────────────────────────
const Footer: React.FC = () => (
  <footer
    style={{
      width: '100%',
      background: '#06091a',
      borderTop: '1px solid rgba(0,217,255,0.12)',
      padding: '48px 40px',
    }}
  >
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginBottom: 32 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 900, background: 'linear-gradient(135deg, #00d9ff, #0088ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8 }}>
            Sandesh Kumar
          </h3>
          <p style={{ color: '#4b5563', fontSize: 13, lineHeight: 1.6 }}>
            Building scalable backend systems and intelligent AI solutions.
          </p>
        </div>
        <div>
          <h4 style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['#projects', '#skills', '#about', '#contact'].map(href => (
              <a key={href} href={href} style={{ color: '#4b5563', fontSize: 13, textDecoration: 'none', textTransform: 'capitalize' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#00d9ff'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#4b5563'; }}>
                {href.replace('#', '')}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Connect</h4>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { href: RESUME_DATA.personal.github, label: 'GitHub' },
              { href: RESUME_DATA.personal.linkedin, label: 'LinkedIn' },
              { href: `mailto:${RESUME_DATA.personal.email}`, label: 'Email' },
            ].map(({ href, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ padding: '6px 14px', background: '#111827', border: '1px solid rgba(0,217,255,0.25)', color: '#00d9ff', fontSize: 12, fontWeight: 600, borderRadius: 8, textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(0,217,255,0.08)', paddingTop: 24, textAlign: 'center' }}>
        <p style={{ color: '#374151', fontSize: 13 }}>
          © {new Date().getFullYear()} Sandesh Kumar. Built with ❤️ using Next.js, Framer Motion & GSAP.
        </p>
      </div>
    </div>
  </footer>
);

// ── Scroll-to-top button ──────────────────────────────────────────────────────
const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d9ff, #0088ff)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0,217,255,0.4)',
            zIndex: 40,
            color: '#fff',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// ── ScrollSpy Side Navigation Indicator ──────────────────────────────────────
const ScrollSpy: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('hero');

  React.useEffect(() => {
    let sectionElements: { id: string; top: number; height: number }[] = [];

    const calculateOffsets = () => {
      sectionElements = sections.map(section => {
        const el = document.getElementById(section.id);
        return {
          id: section.id,
          top: el ? el.offsetTop : 0,
          height: el ? el.offsetHeight : 0,
        };
      });
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sectionElements) {
        if (scrollPos >= section.top && scrollPos < section.top + section.height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    calculateOffsets();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateOffsets);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffsets);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
      className="hidden md:flex"
    >
      {sections.map(section => {
        const isActive = activeSection === section.id;
        return (
          <div
            key={section.id}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              cursor: 'pointer',
            }}
            onClick={() => scrollTo(section.id)}
            className="group"
          >
            {/* Tooltip Tag */}
            <span
              style={{
                position: 'absolute',
                right: 28,
                backgroundColor: 'rgba(10, 15, 26, 0.95)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                boxShadow: '0 0 15px rgba(0, 217, 255, 0.15)',
                color: '#00d9ff',
                fontSize: 10,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 8,
                pointerEvents: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                transform: 'translateX(10px)',
                opacity: 0,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
              className="group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap backdrop-blur-sm"
            >
              {section.label}
            </span>

            {/* Bullet Dot */}
            <div
              style={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                borderRadius: '50%',
                backgroundColor: isActive ? '#00d9ff' : 'rgba(148, 163, 184, 0.4)',
                boxShadow: isActive ? '0 0 12px rgba(0, 217, 255, 0.8)' : 'none',
                border: isActive ? '2px solid #0a0f1a' : '1px solid transparent',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              className="hover:scale-130 hover:bg-[#00d9ff] hover:shadow-[0_0_10px_#00d9ff]"
            />
          </div>
        );
      })}
    </div>
  );
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Head>
        <title>Sandesh Kumar – Backend Developer & ML Engineer</title>
        <meta name="description" content="Portfolio of Sandesh Kumar – Backend Developer, ML Engineer and Full Stack Developer. KIIT CSE student building scalable systems and AI solutions." />
        <meta name="keywords" content="backend developer, ML engineer, django, nodejs, react, tensorflow, opencv, python, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sandesh Kumar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          width: '100%',
          overflowX: 'hidden',
          background: '#0a0f1a',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <MovingAtoms />
        <ScrollSpy />
        <Navigation />
        <Hero />
        <About resume={RESUME_DATA} />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
