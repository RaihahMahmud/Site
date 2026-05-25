import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const roles = [
  'Full-Stack Developer',
  'AI/ML Enthusiast',
  'Bengali NLP Researcher',
  'LLM Fine-tuner',
];

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1400);
      return () => clearTimeout(t);
    }

    const target = roles[index];
    const speed = deleting ? 40 : 70;

    const t = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < target.length) {
          setDisplayed(target.slice(0, displayed.length + 1));
        } else {
          setPaused(true);
          setDeleting(true);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, paused, index]);

  return (
    <span className="text-acid font-mono font-light">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(242,237,230,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242,237,230,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(200,241,53,0.3) 0%, transparent 70%)' }}
      />

      {/* Scrolling BG typography */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-0 left-0 right-0 flex overflow-hidden pointer-events-none select-none"
      >
        <div className="animate-marquee flex gap-16 pr-16">
          {['RAIHAN', 'DEV', 'ML', 'NLP', 'RAIHAN', 'DEV', 'ML', 'NLP'].map((w, i) => (
            <span key={i} className="bg-marquee-text">{w}</span>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
          <span className="flex items-center gap-2 font-mono text-xs text-dim border border-paper/10 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            Open to opportunities · Dhaka, BD
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold leading-[0.92] tracking-tight mb-4"
          style={{ fontSize: 'clamp(52px, 9vw, 130px)' }}
        >
          <span className="block text-paper">Raihan</span>
          <span className="block text-paper">Mahmud</span>
        </motion.h1>

        {/* Role typewriter */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="font-display font-light" style={{ fontSize: 'clamp(20px, 3vw, 40px)' }}>
            <TypewriterRole />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="font-body text-dim max-w-xl leading-relaxed mb-12"
          style={{ fontSize: 'clamp(15px, 1.5vw, 17px)' }}
        >
          Software Developer, Gamer , CS/ML Researcher.I build full-stack products,
          fine-tune LLMs on low-resource languages, and dig deep into NLP and deep learning.
          Clean code, real impact.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-acid text-ink font-mono text-sm font-medium px-6 py-3 rounded-sm hover:bg-paper transition-colors glow-acid"
          >
            View Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-paper/20 text-paper font-mono text-sm px-6 py-3 rounded-sm hover:border-acid hover:text-acid transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/RaihahMahmud' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/raihan-mahmud-90ab2634a' },
            { label: 'HuggingFace', href: 'https://huggingface.co/RaihanGG2026' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-dim hover:text-acid transition-colors hover-underline"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-dim/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-dim/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
