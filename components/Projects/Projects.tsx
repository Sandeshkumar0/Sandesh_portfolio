// components/Projects/Projects.tsx
// KNOWN HIDEOUTS — Prominent project showcase with danger levels

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  date: string;
  link: string;
  dangerLevel: number;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'eUdyaan',
    tagline: 'Mental Health & Peer Support Platform',
    description: 'AI chatbot + peer support addressing youth depression for J&K Government. Features real-time crisis detection and LLM-powered conversations.',
    tech: ['Node.js', 'LLM APIs', 'MongoDB', 'Redis'],
    date: '2025 - PRESENT',
    link: 'https://github.com/sandesh07/eudyaan',
    dangerLevel: 5,
  },
  {
    id: 2,
    name: 'AeroDrive',
    tagline: 'Full-Stack Car Rental Platform',
    description: 'Advanced booking system featuring JWT auth, face recognition login, and real-time drowsiness detection for driver safety.',
    tech: ['Next.js', 'Node.js', 'TensorFlow', 'OpenCV'],
    date: '2024 - PRESENT',
    link: 'https://github.com/sandesh07/aerodrive',
    dangerLevel: 4,
  },
  {
    id: 3,
    name: 'CampusCred',
    tagline: 'Peer-to-Peer Micro-Lending Platform',
    description: 'Skill-based interest rates, XGBoost trust scoring, emergency loans for students — fintech for campus ecosystems.',
    tech: ['Django', 'React', 'XGBoost', 'Random Forest'],
    date: '2024',
    link: 'https://github.com/sandesh07/campuscred',
    dangerLevel: 4,
  },
  {
    id: 4,
    name: 'Print-on-Demand',
    tagline: 'Vistaprint-style Platform for Indian SMBs',
    description: 'Seller dashboard with dynamic product customization, Fabric.js canvas editing, and Razorpay payment integration.',
    tech: ['React', 'Node.js', 'Fabric.js', 'Cloudinary'],
    date: '2024',
    link: 'https://github.com/sandesh07/print-on-demand',
    dangerLevel: 3,
  },
];

const DangerBadge: React.FC<{ level: number }> = ({ level }) => {
  const labels = ['', 'LOW', 'MODERATE', 'HIGH', 'EXTREME', 'CRITICAL'];
  const colors: Record<number, { bg: string; border: string; text: string }> = {
    1: { bg: 'rgba(34,197,94,0.12)',  border: 'rgba(34,197,94,0.4)',  text: '#4ade80' },
    2: { bg: 'rgba(234,179,8,0.12)',  border: 'rgba(234,179,8,0.4)',  text: '#facc15' },
    3: { bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.4)', text: '#fb923c' },
    4: { bg: 'rgba(239,68,68,0.12)',  border: 'rgba(239,68,68,0.4)',  text: '#f87171' },
    5: { bg: 'rgba(239,68,68,0.18)',  border: 'rgba(239,68,68,0.7)',  text: '#FF6B6B' },
  };
  const c = colors[level] ?? colors[3];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '3px 10px',
        borderRadius: 3,
        fontFamily: 'Georgia, serif',
      }}
    >
      {'▲'.repeat(level)} {labels[level]}
    </span>
  );
};

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #050200 100%)', paddingBlock: 'clamp(4rem, 10vw, 8rem)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%),
            repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(212,175,55,0.02) 80px, rgba(212,175,55,0.02) 81px)
          `,
        }}
      />

      {/* Top gold rule */}
      <motion.div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #D4AF37 30%, #D4AF37 70%, transparent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: 'rgba(212,175,55,0.65)', fontFamily: 'Georgia, serif' }}
          >
            ✦ MARINE INTELLIGENCE BUREAU ✦
          </p>
          <h2
            className="font-black leading-none mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              color: '#D4AF37',
              textShadow: '0 0 60px rgba(212,175,55,0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            KNOWN HIDEOUTS
          </h2>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Dangerous Projects — Handle with Caution
          </p>
          <div
            className="mx-auto mt-6"
            style={{
              width: 120,
              height: 2,
              background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
            }}
          />
        </motion.div>

        {/* Project Grid — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative flex flex-col"
              style={{
                background: 'rgba(10,8,0,0.6)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: 2,
                overflow: 'hidden',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.55)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 50px rgba(212,175,55,0.15), 0 4px 30px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.2)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
              }}
            >
              {/* Card top bar */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                  borderBottom: '1px solid rgba(212,175,55,0.15)',
                  background: 'rgba(212,175,55,0.04)',
                }}
              >
                <p
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(212,175,55,0.5)', fontFamily: 'Georgia, serif' }}
                >
                  CASE #{String(project.id).padStart(3, '0')}
                </p>
                <DangerBadge level={project.dangerLevel} />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Title */}
                <div>
                  <h3
                    className="font-black leading-tight mb-1"
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.85rem',
                      color: '#D4AF37',
                      fontStyle: 'italic',
                    }}
                  >
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'Georgia, serif',
                        color: 'rgba(212,175,55,0.8)',
                        background: 'rgba(212,175,55,0.07)',
                        border: '1px solid rgba(212,175,55,0.2)',
                        padding: '3px 10px',
                        borderRadius: 2,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4 mt-2"
                  style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}
                >
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Georgia, serif' }}
                  >
                    {project.date}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold group/link"
                    style={{
                      color: '#D4AF37',
                      fontFamily: 'Georgia, serif',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                  >
                    <FiGithub className="w-4 h-4" />
                    View Project
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
