// components/Projects/Projects.tsx
// SECTION 4: Projects & Work Section (Stacked Layout)

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface TechCategory {
  category: string;
  list: string;
}

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  techCategories: TechCategory[];
  date: string;
  link: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'eUdyaan',
    tagline: 'Mental Health & Peer Support Platform',
    description: 'AI chatbot + peer support addressing youth depression for J&K Government',
    techCategories: [
      { category: 'Backend', list: 'Node.js, Express.js, MongoDB' },
      { category: 'AI/ML', list: 'LLM APIs, Chatbot Logic' },
      { category: 'Database', list: 'MongoDB, Redis' }
    ],
    date: '2025 - PRESENT',
    link: 'https://github.com/sandesh07/eudyaan',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 2,
    name: 'AeroDrive',
    tagline: 'Full-Stack Car Rental Platform',
    description: 'Advanced booking system with JWT auth, face recognition, drowsiness detection',
    techCategories: [
      { category: 'Frontend', list: 'Next.js, React, Tailwind' },
      { category: 'Backend', list: 'Node.js, Express, PostgreSQL' },
      { category: 'ML', list: 'TensorFlow, OpenCV' }
    ],
    date: '2024 - PRESENT',
    link: 'https://github.com/sandesh07/aerodrive',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 3,
    name: 'CampusCred',
    tagline: 'Peer-to-Peer Micro-Lending Platform',
    description: 'Skill-based interest, XGBoost trust scoring, emergency loans for students',
    techCategories: [
      { category: 'Backend', list: 'Django, Node.js' },
      { category: 'Frontend', list: 'React' },
      { category: 'ML', list: 'XGBoost, Random Forest' }
    ],
    date: '2024',
    link: 'https://github.com/sandesh07/campuscred',
    gradient: 'from-green-500/10 to-teal-500/10',
  },
  {
    id: 4,
    name: 'Print-on-Demand Platform',
    tagline: 'Vistaprint-style Platform for Indian SMBs',
    description: 'Seller dashboard, dynamic customization, Razorpay integration',
    techCategories: [
      { category: 'Frontend', list: 'React' },
      { category: 'Backend', list: 'Node.js, Express' },
      { category: 'Database', list: 'MongoDB' },
      { category: 'Tools', list: 'Fabric.js, Cloudinary' }
    ],
    date: '2024',
    link: 'https://github.com/sandesh07/print-on-demand',
    gradient: 'from-orange-500/10 to-red-500/10',
  }
];

export const Projects: React.FC = () => {
  return (
    <section
      className="relative w-full py-24 px-6 bg-[#1e293b] overflow-hidden"
      id="projects"
    >
      {/* Background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Projects & Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my journey through backend, ML/AI, and full-stack projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Stacked Project Cards */}
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-br ${project.gradient} bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-10 backdrop-blur-sm`}
            >
              {/* Card Header */}
              <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                  <p className="text-cyan-400 font-semibold mt-1 text-lg">{project.tagline}</p>
                </div>
                <div className="text-slate-400 text-sm font-semibold whitespace-nowrap bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
                  {project.date}
                </div>
              </div>

              {/* Two Column Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* LEFT: Description & Tech */}
                <div className="flex flex-col justify-between">
                  <p className="text-slate-300 leading-relaxed text-base mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Cards (Staggered) */}
                  <div className="space-y-4">
                    {project.techCategories.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3"
                      >
                        <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                          {tech.category}
                        </div>
                        <div className="text-sm text-slate-200">
                          {tech.list}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: View Project Button */}
                <div className="flex items-end justify-center lg:justify-end mt-6 lg:mt-0">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 217, 255, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project <FiExternalLink className="w-5 h-5" />
                  </motion.a>
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
