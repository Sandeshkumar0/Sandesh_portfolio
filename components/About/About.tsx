// components/About/About.tsx
// BOUNTY CARD — Wanted Poster profile with arrest record

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

interface AboutProps {
  resume: {
    personal: {
      name: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      github: string;
      linkedin: string;
    };
    education: {
      school: string;
      degree: string;
      cgpa: number;
      period: string;
    };
    experience: {
      company: string;
      position: string;
      period: string;
      description: string;
      tech: string[];
    }[];
  };
}

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div
    style={{
      background: 'rgba(212,175,55,0.06)',
      border: '1px solid rgba(212,175,55,0.25)',
      padding: '14px 18px',
      textAlign: 'center',
    }}
  >
    <p
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.6rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: 'rgba(212,175,55,0.6)',
        marginBottom: 6,
      }}
    >
      {label}
    </p>
    <p
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1rem',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '0.02em',
      }}
    >
      {value}
    </p>
  </div>
);

export const About: React.FC<AboutProps> = ({ resume }) => {
  const { personal, education, experience } = resume;

  const charges = [
    { label: '🎓 Academy', content: `${education.school}\n${education.degree}` },
    { label: '💻 Specialization', content: 'Backend Systems · Full-Stack · ML/AI' },
    { label: '🚀 Arsenal', content: 'Django · Node.js · React · TensorFlow · OpenCV' },
    { label: '🎯 Mission', content: 'Build scalable, impactful products solving real-world problems' },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #070400 60%, #000000 100%)',
        paddingBlock: 'clamp(4rem, 10vw, 8rem)',
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
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

        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: 'rgba(212,175,55,0.6)', fontFamily: 'Georgia, serif' }}
          >
            ✦ MARINE WORLD GOVERNMENT ✦
          </p>
          <h2
            className="font-black leading-none mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              color: '#D4AF37',
              textShadow: '0 0 50px rgba(212,175,55,0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            WANTED POSTER
          </h2>
          <div
            className="mx-auto"
            style={{ width: 100, height: 2, background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Bounty Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Main wanted card */}
            <div
              style={{
                background: '#FEFEF0',
                border: '3px solid #000',
                boxShadow: '6px 6px 0 #000, 0 0 60px rgba(212,175,55,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accents */}
              {[
                { top: -1, left: -1, borderWidth: '4px 0 0 4px' },
                { top: -1, right: -1, borderWidth: '4px 4px 0 0' },
                { bottom: -1, left: -1, borderWidth: '0 0 4px 4px' },
                { bottom: -1, right: -1, borderWidth: '0 4px 4px 0' },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    borderStyle: 'solid',
                    borderColor: '#D4AF37',
                    borderWidth: s.borderWidth,
                    top: s.top,
                    left: (s as typeof s & { left?: number }).left,
                    right: (s as typeof s & { right?: number }).right,
                    bottom: (s as typeof s & { bottom?: number }).bottom,
                    zIndex: 2,
                  }}
                />
              ))}

              {/* Poster header strip */}
              <div
                style={{
                  background: '#000',
                  padding: '12px 24px',
                  textAlign: 'center',
                  borderBottom: '2px solid #D4AF37',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.55em',
                    textTransform: 'uppercase',
                    color: '#D4AF37',
                    fontWeight: 700,
                  }}
                >
                  WORLD GOVERNMENT · BOUNTY NOTICE
                </p>
              </div>

              {/* Poster body */}
              <div style={{ padding: '24px 28px' }}>
                {/* WANTED title */}
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '2.4rem',
                      fontWeight: 900,
                      color: '#1a1206',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    WANTED
                  </p>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.75rem',
                      color: '#5a4a2a',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      marginTop: 4,
                    }}
                  >
                    — DEAD OR ALIVE —
                  </p>
                </div>

                {/* Name */}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    borderTop: '2px solid #000',
                    borderBottom: '2px solid #000',
                    marginBottom: 16,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                      fontWeight: 900,
                      color: '#1a1206',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {personal.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.8rem',
                      color: '#5a4a2a',
                      marginTop: 4,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {personal.title}
                  </p>
                </div>

                {/* Stats grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 16 }}>
                  {[
                    { label: 'CGPA', value: education.cgpa.toFixed(2) },
                    { label: 'Projects', value: '4+' },
                    { label: 'Internships', value: '2' },
                    { label: 'Status', value: '⚠ ACTIVE' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        border: '1px solid #555',
                        padding: '8px 12px',
                        textAlign: 'center',
                        background: 'rgba(0,0,0,0.04)',
                      }}
                    >
                      <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.58rem', color: '#5a4a2a', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 4 }}>
                        {stat.label}
                      </p>
                      <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: '#1a1206', fontSize: '0.9rem' }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bounty amount */}
                <div
                  style={{
                    background: '#000',
                    padding: '14px 20px',
                    textAlign: 'center',
                    borderRadius: 2,
                    marginBottom: 16,
                  }}
                >
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.6rem', color: 'rgba(212,175,55,0.7)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 5 }}>
                    BOUNTY
                  </p>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                      fontWeight: 900,
                      color: '#D4AF37',
                      letterSpacing: '0.05em',
                      textShadow: '0 0 20px rgba(212,175,55,0.4)',
                    }}
                  >
                    ₹ 500,000,000
                  </p>
                </div>

                {/* Education */}
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.6rem', color: '#5a4a2a', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 6 }}>
                    LAST KNOWN ACADEMY
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: '#1a1206', fontSize: '0.9rem', lineHeight: 1.4 }}>
                    {education.school}
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif', color: '#5a4a2a', fontSize: '0.8rem', marginTop: 2 }}>
                    {education.degree} · {education.period}
                  </p>
                </div>

                {/* Contact */}
                <div style={{ borderTop: '1px solid #ccc', paddingTop: 14 }}>
                  {[
                    { Icon: FiMail, text: personal.email },
                    { Icon: FiPhone, text: personal.phone },
                    { Icon: FiMapPin, text: personal.location },
                  ].map(({ Icon, text }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <Icon style={{ color: '#5a4a2a', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.8rem', color: '#3a2a0a' }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div style={{ display: 'flex', gap: 10, marginTop: 14, paddingTop: 14, borderTop: '1px solid #ccc' }}>
                  {[
                    { Icon: FiGithub, label: 'GitHub', url: personal.github },
                    { Icon: FiLinkedin, label: 'LinkedIn', url: personal.linkedin },
                  ].map(({ Icon, label, url }, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        background: '#000',
                        color: '#D4AF37',
                        border: '1px solid #D4AF37',
                        padding: '6px 14px',
                        fontFamily: 'Georgia, serif',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textDecoration: 'none',
                        borderRadius: 2,
                        transition: 'background 0.2s, color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = '#D4AF37';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = '#000';
                        (e.currentTarget as HTMLAnchorElement).style.color = '#D4AF37';
                      }}
                    >
                      <Icon />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Charges + Arrest Record */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* CHARGES label */}
            <div>
              <p
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.5em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,175,55,0.6)',
                  marginBottom: 12,
                }}
              >
                ✦ CHARGES
              </p>
              <div className="grid grid-cols-1 gap-3">
                {charges.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    style={{
                      background: 'rgba(10,8,0,0.6)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      padding: '16px 20px',
                      borderRadius: 2,
                      transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.2)';
                    }}
                  >
                    <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: '#D4AF37', fontSize: '0.9rem', marginBottom: 4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ARREST RECORD */}
            <div
              style={{
                marginTop: 8,
                background: 'rgba(10,8,0,0.6)',
                border: '1px solid rgba(212,175,55,0.2)',
                padding: '20px',
                borderRadius: 2,
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.5em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,175,55,0.6)',
                  marginBottom: 16,
                }}
              >
                ✦ ARREST RECORD
              </p>
              <div className="flex flex-col gap-6">
                {experience.map((exp, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14 }}>
                    {/* Timeline dot */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#D4AF37', boxShadow: '0 0 8px rgba(212,175,55,0.5)', marginTop: 4 }} />
                      {i < experience.length - 1 && (
                        <div style={{ width: 1, flex: 1, background: 'rgba(212,175,55,0.2)', marginTop: 6 }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < experience.length - 1 ? 16 : 0 }}>
                      <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                        {exp.company}
                      </p>
                      <p style={{ fontFamily: 'Georgia, serif', color: '#D4AF37', fontSize: '0.8rem', marginTop: 2 }}>
                        {exp.position}
                      </p>
                      <p style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', marginTop: 2, letterSpacing: '0.05em' }}>
                        {exp.period}
                      </p>
                      <p style={{ fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: 6, lineHeight: 1.55 }}>
                        {exp.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '0.68rem',
                              color: 'rgba(212,175,55,0.7)',
                              background: 'rgba(212,175,55,0.06)',
                              border: '1px solid rgba(212,175,55,0.15)',
                              padding: '2px 8px',
                              borderRadius: 2,
                              fontFamily: 'Georgia, serif',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
