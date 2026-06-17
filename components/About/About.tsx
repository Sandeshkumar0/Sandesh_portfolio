// components/About/About.tsx
// SECTION 2: About Me with Backend Ecosystem Theme

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
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
  };
}

const BackgroundEcosystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 2;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, #00d9ff, #0088ff);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${size * 3}px rgba(0, 217, 255, 0.8);
        opacity: 0.6;
        pointer-events: none;
      `;
      containerRef.current.appendChild(particle);

      gsap.to(particle, {
        duration: Math.random() * 10 + 10,
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        opacity: 0,
        repeat: -1,
        ease: 'sine.inOut',
        delay: Math.random() * 3,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#1e293b]">
      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="aboutGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="cyan" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aboutGrid)" />
      </svg>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="rgba(0,217,255,0.15)" strokeWidth="1.5" />
        <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="rgba(0,217,255,0.15)" strokeWidth="1.5" />
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(0,136,255,0.1)" strokeWidth="1" />
      </svg>
    </div>
  );
};

const QuickLinks: React.FC<{ resume: AboutProps['resume'] }> = ({ resume }) => {
  const links = [
    { icon: FiGithub,   label: 'GitHub',   url: resume.personal.github,           hoverColor: '#00d9ff' },
    { icon: FiLinkedin, label: 'LinkedIn', url: resume.personal.linkedin,          hoverColor: '#0088ff' },
    { icon: FiMail,     label: 'Email',    url: `mailto:${resume.personal.email}`, hoverColor: '#ff6b6b' },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {links.map(({ icon: Icon, label, url, hoverColor }, i) => (
        <motion.a
          key={i}
          href={url}
          target={url.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="group relative p-4 rounded-xl bg-slate-700/50 backdrop-blur-md border border-gray-600 hover:border-cyan-500 transition-all duration-300"
          title={label}
          whileHover={{ scale: 1.2, y: -8, boxShadow: `0 0 25px ${hoverColor}60` }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-300 transition-colors" />
          <motion.span
            className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0a0f1a] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            {label}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
};

export const About: React.FC<AboutProps> = ({ resume }) => {
  const { personal, education } = resume;

  const highlights = [
    { title: '🎓 Education', content: `${education.school}\n${education.degree} (${education.period})` },
    { title: '💻 Specialization', content: 'Backend Systems · Full-Stack Development · ML/AI Integration' },
    { title: '🚀 Focus Areas',   content: 'Django · Node.js · React · TensorFlow · OpenCV · System Design' },
    { title: '🎯 Goal',         content: 'Build scalable, impactful products that solve real-world problems' },
  ];

  return (
    <section className="relative w-full py-24 px-6 bg-[#1e293b] overflow-hidden" id="about">
      <BackgroundEcosystem />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Card */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-lg h-full flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,217,255,0.2), transparent)' }}
            />

            <div>
              <h2 className="text-4xl font-bold text-white mb-1">{personal.name}</h2>
              <p className="text-xl text-cyan-400 font-semibold mb-6">{personal.title}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { label: 'CGPA', value: education.cgpa.toFixed(2) },
                  { label: 'Projects', value: '4+' },
                  { label: 'Experience', value: '2 Internships' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-700/50 rounded-xl p-3 border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-300 text-base leading-loose">
                  I&apos;m a passionate backend developer and ML engineer pursuing B.Tech in Computer Science at KIIT. I love building scalable, production-grade systems with Django and Node.js, and integrating cutting-edge AI/ML solutions using TensorFlow and OpenCV.
                </p>
                <p className="text-gray-300 text-base leading-loose">
                  My experience spans full-stack development (Emesys Consultancy), AI/ML engineering (Tata Steel), and building impactful platforms like educational management systems and mental health support platforms.
                </p>
              </div>
            </div>

            <div>
              {/* Contact info */}
              <div className="space-y-3 mb-6 text-sm text-gray-400 border-t border-cyan-500/10 pt-6">
                <div className="flex items-center gap-2.5">
                  <FiMail className="text-cyan-400 flex-shrink-0" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiPhone className="text-cyan-400 flex-shrink-0" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiMapPin className="text-cyan-400 flex-shrink-0" />
                  <span>{personal.location}</span>
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-cyan-500/20">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">Connect with me</p>
                <QuickLinks resume={resume} />
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#111827]/50 border border-cyan-500/20 rounded-xl p-7 hover:border-cyan-500/60 transition-all backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: 'rgba(0,217,255,0.7)', boxShadow: '0 0 20px rgba(0,217,255,0.2)' }}
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">{item.content}</p>
              </motion.div>
            ))}

            {/* Experience Timeline */}
            <motion.div
              className="bg-[#111827]/50 border border-cyan-500/20 rounded-xl p-7 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">🏢 Experience</h3>
              <div className="space-y-6">
                {[
                  { company: 'Emesys Consultancy', role: 'Full Stack Developer Intern', period: 'Feb 2026 – Apr 2026', tech: 'React · Node.js · MongoDB' },
                  { company: 'Tata Steel', role: 'AI/ML Developer Intern', period: 'May 2025 – Jul 2025', tech: 'TensorFlow · OpenCV · Python' },
                ].map((exp, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                      {i === 0 && <div className="w-px flex-1 bg-cyan-500/30 mt-1.5" />}
                    </div>
                    <div>
                      <div className="text-white text-base font-semibold">{exp.company}</div>
                      <div className="text-cyan-400 text-sm">{exp.role}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{exp.period}</div>
                      <div className="text-gray-400 text-xs mt-1 font-medium">{exp.tech}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
