// components/Skills/Skills.tsx
// SECTION 3: Skills with Animated Blob Morphing

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiPython, SiJavascript, SiCplusplus,
  SiDjango, SiNodedotjs, SiExpress, SiReact,
  SiMongodb, SiRedis, SiPostgresql,
  SiTensorflow, SiOpencv,
  SiGit, SiDocker,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { FiSearch, FiX } from 'react-icons/fi';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  proficiency: number;
  category: 'languages' | 'backend' | 'frontend' | 'ml' | 'tools';
  description: string;
  color: string;
}

const SKILLS: Skill[] = [
  { name: 'Python',      icon: SiPython,     proficiency: 95, category: 'languages', description: 'Primary language for backend & ML', color: '#3776ab' },
  { name: 'JavaScript',  icon: SiJavascript, proficiency: 90, category: 'languages', description: 'Full-stack development',           color: '#f7df1e' },
  { name: 'Java',        icon: FaJava,       proficiency: 75, category: 'languages', description: 'OOP & enterprise applications',     color: '#f89820' },
  { name: 'C++',         icon: SiCplusplus,  proficiency: 70, category: 'languages', description: 'DSA & competitive programming',     color: '#00599c' },
  { name: 'Django',      icon: SiDjango,     proficiency: 90, category: 'backend',   description: 'Scalable backend systems',          color: '#092e20' },
  { name: 'Node.js',     icon: SiNodedotjs,  proficiency: 88, category: 'backend',   description: 'Real-time applications',            color: '#339933' },
  { name: 'Express.js',  icon: SiExpress,    proficiency: 88, category: 'backend',   description: 'REST API development',              color: '#888888' },
  { name: 'MongoDB',     icon: SiMongodb,    proficiency: 85, category: 'backend',   description: 'NoSQL database design',             color: '#47a248' },
  { name: 'PostgreSQL',  icon: SiPostgresql, proficiency: 80, category: 'backend',   description: 'Relational databases',              color: '#336791' },
  { name: 'Redis',       icon: SiRedis,      proficiency: 78, category: 'backend',   description: 'Caching & real-time features',      color: '#dc382d' },
  { name: 'React.js',    icon: SiReact,      proficiency: 85, category: 'frontend',  description: 'Modern UI development',             color: '#61dafb' },
  { name: 'TensorFlow',  icon: SiTensorflow, proficiency: 82, category: 'ml',        description: 'Deep learning models',              color: '#ff6f00' },
  { name: 'OpenCV',      icon: SiOpencv,     proficiency: 85, category: 'ml',        description: 'Computer vision tasks',             color: '#5c3ee8' },
  { name: 'AWS',         icon: FaAws,        proficiency: 70, category: 'tools',     description: 'Cloud deployment',                  color: '#ff9900' },
  { name: 'Git',         icon: SiGit,        proficiency: 90, category: 'tools',     description: 'Version control',                   color: '#f05032' },
  { name: 'Docker',      icon: SiDocker,     proficiency: 75, category: 'tools',     description: 'Containerization',                  color: '#2496ed' },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.06, type: 'spring', stiffness: 120 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <motion.div
        className="relative h-52 rounded-2xl overflow-hidden border border-cyan-500/20 p-5 flex flex-col items-center justify-center cursor-pointer bg-[#111827]/50 backdrop-blur-sm"
        whileHover={{ borderColor: 'rgba(0,217,255,0.8)', boxShadow: '0 0 30px rgba(0,217,255,0.25)', y: -6 }}
        transition={{ duration: 0.25 }}
      >
        {/* Radial glow behind icon */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: `radial-gradient(circle at 50% 40%, ${skill.color}25, transparent 70%)` }}
        />

        {/* Icon */}
        <motion.div
          className="text-5xl mb-3 relative z-10"
          animate={{ scale: hovered ? 1.25 : 1, y: hovered ? -6 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: hovered ? skill.color : '#94a3b8' }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>

        {/* Name */}
        <h3 className="text-base font-bold text-white text-center z-10">{skill.name}</h3>

        {/* Description */}
        <motion.p
          className="text-xs text-gray-300 text-center mt-1 px-2 z-10 font-medium leading-relaxed"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.25 }}
        >
          {skill.description}
        </motion.p>

        {/* Proficiency bar */}
        <div className="w-full mt-3 bg-slate-700/60 rounded-full h-1.5 overflow-hidden z-10">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`, width: `${skill.proficiency}%`, originX: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: 'easeOut' }}
          />
        </div>

        <p className="text-xs text-cyan-400 mt-1.5 font-semibold z-10">{skill.proficiency}%</p>
      </motion.div>
    </motion.div>
  );
};

const CATEGORIES = ['all', 'languages', 'backend', 'frontend', 'ml', 'tools'];

export const Skills: React.FC = () => {
  const [active, setActive] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = SKILLS.filter(s => {
    const matchesCategory = active === 'all' || s.category === active;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className="relative w-full py-24 px-6 bg-[#0f172a] overflow-hidden"
      id="skills"
    >
      {/* BG orbs */}
      <motion.div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies mastered through hands-on project experience</p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category filter */}
        <motion.div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-[20px]"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              onClick={() => { setActive(cat); }}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm capitalize tracking-wide transition-all border ${
                active === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/90 hover:bg-slate-700/90 text-gray-300 border-cyan-500/25 hover:border-cyan-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Search input */}
        <motion.div
          className="max-w-md mx-auto mt-[20px] mb-[30px] relative group"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-cyan-400/60 group-focus-within:text-cyan-400 transition-colors">
            <FiSearch className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search skills (e.g. Python, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 bg-slate-800/60 border border-cyan-500/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm backdrop-blur-sm shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          )}
        </motion.div>

        {/* Skills grid / Empty state */}
        {filtered.length === 0 ? (
          <motion.div
            className="text-center py-16 px-4 bg-[#111827]/40 border border-cyan-500/10 rounded-2xl max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-base mb-4">No skills found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setActive('all'); }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full text-xs shadow-lg shadow-cyan-500/25 transition-all"
            >
              Clear Search & Filter
            </button>
          </motion.div>
        ) : (
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          {[
            { label: 'Skills Mastered',     value: SKILLS.length },
            { label: 'Programming Languages', value: SKILLS.filter(s => s.category === 'languages').length },
            { label: 'Years of Experience',  value: '2+' },
          ].map((stat, i) => (
            <motion.div key={i}
              className="text-center p-6 rounded-xl bg-[#111827]/60 border border-cyan-500/20 hover:border-cyan-500/60 transition-colors"
              whileHover={{ boxShadow: '0 0 20px rgba(0,217,255,0.25)' }}>
              <motion.div className="text-4xl font-bold text-cyan-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }} viewport={{ once: true }}>
                {stat.value}
              </motion.div>
              <p className="text-gray-400 uppercase text-sm tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
