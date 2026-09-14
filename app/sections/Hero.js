'use client'
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-10 md:px-10 max-w-7xl relative overflow-hidden py-20 mx-auto"
    >
      <motion.div
        className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        style={{ background: 'var(--accent)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-[350px] h-[350px] rounded-full blur-[120px] opacity-10"
        style={{ background: 'var(--accent)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="w-full grid md:grid-cols-[1fr_auto] gap-32 items-center relative z-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
      >
        <div className="flex flex-col gap-8 md:pr-8">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border text-xs font-medium"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: 'var(--accent)' }}
              />
              <span className="relative inline-flex rounded-full h-2 w-10" style={{ background: 'var(--accent)' }} />
            </span>
            Available for freelance work
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm md:text-base font-mono tracking-[0.3em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-6xl md:text-[7.5rem] font-bold leading-[0.85] tracking-tighter"
          >
            Abdul
            <br />
            Malek
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl md:text-3xl font-semibold leading-snug max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            I build fast, accessible web apps with the{' '}
            <span style={{ color: 'var(--accent)' }}>MERN stack</span>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Full-stack developer focused on crafting performant, pixel-perfect
            interfaces and robust APIs — turning complex problems into intuitive
            digital experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 px-8 py-4 rounded-full font-semibold overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <Sparkles size={16} />
              See my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <span className="relative z-10">Get in touch</span>
              <span
                className="absolute left-8 right-8 bottom-3 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: 'var(--accent)' }}
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-8 md:gap-12 mt-8 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <div>
              <span className="block text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>10+</span>
              Projects Built
            </div>
            <div className="w-px h-12" style={{ background: 'var(--border)' }} />
            <div>
              <span className="block text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>MERN</span>
              Core Stack
            </div>
            <div className="w-px h-12" style={{ background: 'var(--border)' }} />
            <div>
              <span className="block text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>100%</span>
              Client Focused
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hidden md:flex flex-col gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.4 }}
            className="w-64 h-80 rounded-3xl border-2 flex flex-col items-center justify-center gap-4 backdrop-blur-sm"
            style={{
              borderColor: 'var(--border)',
              background: 'linear-gradient(160deg, var(--bg-secondary), transparent)',
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: 'var(--accent)', opacity: 0.15 }}
            >
              <Code2 size={36} style={{ color: 'var(--accent)' }} />
            </motion.div>
            <p className="text-sm font-medium text-center px-6" style={{ color: 'var(--text-secondary)' }}>
              Building premium digital products since day one
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}