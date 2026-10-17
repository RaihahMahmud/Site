import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" aria-labelledby="hero-heading" className="field-hero max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap justify-between gap-3 border-b border-border pb-5 mb-10 md:mb-14">
        <span className="section-label">Computational field notes</span>
        <span className="font-mono text-xs text-dim">Dhaka, Bangladesh · Open to opportunities</span>
      </div>
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }} className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
        <div>
          <h1 id="hero-heading" className="field-name font-display font-extrabold text-paper">
            <span className="block">Raihan</span><span className="block">Mahmud<span className="text-acid">.</span></span>
          </h1>
        </div>
        <div className="lg:pb-2">
          <p className="font-mono text-xs text-acid tracking-wide leading-loose mb-5">AI Engineer / ML Enthusiast / Full-Stack Developer</p>
          <p className="font-display text-2xl sm:text-3xl leading-snug max-w-md mb-5">Working with language, data, and the interfaces that connect them.</p>
          <p className="font-body text-base text-dim leading-relaxed max-w-md">I build web applications and explore machine learning, with a particular interest in Bengali NLP.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
            <a href="#projects" className="inline-flex items-center gap-4 bg-acid text-ink font-mono text-sm font-medium px-5 py-3 hover:bg-paper transition-colors">View work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="field-link">Get in touch</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="field-link">View CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-12 md:mt-16 border-t border-border pt-5">
          {[
            { label: 'GitHub', href: 'https://github.com/RaihahMahmud' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/raihan-mahmud-90ab2634a' },
            { label: 'Hugging Face', href: 'https://huggingface.co/RaihanGG2026' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="field-link"
            >
              {link.label}
            </a>
          ))}
      </div>
    </section>
  );
}
