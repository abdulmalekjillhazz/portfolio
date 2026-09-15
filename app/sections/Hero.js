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
        className="absolute -left-40 top-0 size-[600px] rounded-full bg-[var(--accent)] opacity-25 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-10 size-[350px] rounded-full bg-[var(--accent)] opacity-10 blur-[120px]"
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
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex size-full rounded-full bg-[var(--accent)] opacity-75"
              />
              <span className="relative inline-flex h-2 w-10 rounded-full bg-[var(--accent)]" />
            </span>
            Available for freelance work
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent)] md:text-base"
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
            className="max-w-2xl text-2xl font-semibold leading-snug text-[var(--text-muted)] md:text-3xl"
          >
            I build fast, accessible web apps with the{' '}
            <span className="text-[var(--accent)]">MERN stack</span>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
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
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              <Sparkles size={16} />
              See my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="group relative rounded-full border-2 border-[var(--border)] px-8 py-4 font-semibold text-[var(--text)] transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]"
            >
              <span className="relative z-10">Get in touch</span>
              <span
                className="absolute bottom-3 left-8 right-8 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-8 text-sm text-[var(--text-muted)] md:gap-12"
          >
            <div>
              <span className="mb-1 block text-3xl font-bold text-[var(--text)]">10+</span>
              Projects Built
            </div>
            <div className="h-12 w-px bg-[var(--border)]" />
            <div>
              <span className="mb-1 block text-3xl font-bold text-[var(--text)]">MERN</span>
              Core Stack
            </div>
            <div className="h-12 w-px bg-[var(--border)]" />
            <div>
              <span className="mb-1 block text-3xl font-bold text-[var(--text)]">100%</span>
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
            className="flex h-80 w-64 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-secondary),transparent)] backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex size-20 items-center justify-center rounded-2xl bg-[var(--accent)] opacity-15"
            >
              <Code2 size={36} className="text-[var(--accent)]" />
            </motion.div>
            <p className="px-6 text-center text-sm font-medium text-[var(--text-muted)]">
              Building premium digital products since day one
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
