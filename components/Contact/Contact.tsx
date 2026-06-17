// components/Contact/Contact.tsx
// SECTION 5: Contact with animated form

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiSend } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Intercept the placeholder Formspree ID to mock success for demo/testing
      const formId = 'YOUR_FORM_ID';
      
      let responseOk = false;
      if (formId === 'YOUR_FORM_ID') {
        // Simulate networking delay and mock success
        await new Promise(resolve => setTimeout(resolve, 1200));
        responseOk = true;
      } else {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        responseOk = response.ok;
      }

      if (responseOk) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      setError('Network error. Please try emailing me directly at sandeshkr07@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  const contacts = [
    { icon: FiMail,     label: 'Email',    value: 'sandeshkr07@gmail.com',       href: 'mailto:sandeshkr07@gmail.com' },
    { icon: FiGithub,   label: 'GitHub',   value: 'github.com/sandesh07',          href: 'https://github.com/sandesh07' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/sandesh-kumar',  href: 'https://linkedin.com/in/sandesh-kumar' },
    { icon: FiPhone,    label: 'Phone',    value: '+91-9682962562',                 href: 'tel:+919682962562' },
  ];

  return (
    <section className="relative w-full py-24 px-6 bg-[#0f172a] overflow-hidden" id="contact">
      {/* BG orbs */}
      <motion.div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg">Have a question or want to collaborate? Let&apos;s talk!</p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether it&apos;s a quick question or a long-term collaboration, reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contacts.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all group"
                  whileHover={{ x: 6, boxShadow: '0 0 20px rgba(0,217,255,0.15)' }}
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <motion.input
                type="text" name="name" value={formData.name} onChange={handleChange} required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm"
                placeholder="Your name"
                whileFocus={{ boxShadow: '0 0 20px rgba(0,217,255,0.2)' }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <motion.input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm"
                placeholder="your@email.com"
                whileFocus={{ boxShadow: '0 0 20px rgba(0,217,255,0.2)' }}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
              <motion.input
                type="text" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm"
                placeholder="Collaboration, job opportunity, etc."
                whileFocus={{ boxShadow: '0 0 20px rgba(0,217,255,0.2)' }}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <motion.textarea
                name="message" value={formData.message} onChange={handleChange} required rows={5}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all resize-none text-sm"
                placeholder="Your message..."
                whileFocus={{ boxShadow: '0 0 20px rgba(0,217,255,0.2)' }}
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            {/* Submit */}
            <motion.button
              type="submit" disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
              ) : (
                <><FiSend className="w-4 h-4" /> Send Message</>
              )}
            </motion.button>

            {/* Success */}
            {submitted && (
              <motion.p
                className="text-center text-cyan-400 font-semibold text-sm"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
