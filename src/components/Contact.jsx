import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const links = [
  { label: 'Email', value: 'raihankhmahmud@gmail.com', href: 'mailto:raihankhmahmud@gmail.com' },
  { label: 'GitHub', value: 'github.com/RaihahMahmud', href: 'https://github.com/RaihahMahmud' },
  { label: 'LinkedIn', value: 'linkedin.com/in/raihan-mahmud-90ab2634a', href: 'https://linkedin.com/in/raihan-mahmud-90ab2634a' },
  { label: 'HuggingFace', value: 'huggingface.co/RaihanGG2026', href: 'https://huggingface.co/RaihanGG2026' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, rgba(200,241,53,0.4) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">05 — Contact</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h2
            className="font-display font-extrabold text-paper leading-tight"
            style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
          >
            Let's build<br />
            <span className="text-acid">something</span><br />
            <span className="text-dim font-light">together.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-body text-dim leading-relaxed mb-8" style={{ fontSize: '16px' }}>
              I'm open to internships, research collaborations, and freelance projects.
              Whether it's a production web app, a fine-tuned model, or a complex
              NLP pipeline — reach out.
            </p>
            <a
              href="mailto:raihankhmahmud@gmail.com"
              className="inline-flex items-center gap-3 bg-acid text-ink font-mono text-sm font-medium px-8 py-4 rounded-sm hover:bg-paper transition-colors glow-acid"
            >
              Send me an email
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right: links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-1"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="flex items-center justify-between p-4 border border-paper/5 hover:border-acid/30 rounded-sm transition-all group"
              >
                <span className="font-mono text-[11px] text-acid uppercase tracking-widest">{link.label}</span>
                <div className="flex items-center gap-3">
                  <span className="font-body text-dim text-sm group-hover:text-paper transition-colors truncate max-w-[180px]">
                    {link.value}
                  </span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="text-dim group-hover:text-acid transition-colors flex-shrink-0"
                  >
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
