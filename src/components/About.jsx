import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '5+', label: 'LLMs Fine-tuned' },
  { value: '1600+', label: 'Training Samples' },
  { value: '3yrs', label: 'Development Exp.' },
  { value: '10+', label: 'Projects Built' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">01 — About</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2
              className="font-display font-bold text-paper leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Building at the
              <br />
              <span className="text-gradient-acid">intersection</span>
              <br />
              of code & AI.
            </h2>
            <div className="space-y-4 text-dim font-body leading-relaxed" style={{ fontSize: '16px' }}>
              <p>
                I'm a Computer Science student at North South University, Dhaka —
                a full-stack developer and machine learning researcher with a specific
                obsession: making AI work for low-resource languages.
              </p>
              <p>
                My research centers on Bengali NLP — fine-tuning LLMs like Llama 3.1 8B
                and Gemma-2 9B to understand idioms, proverbs, and literary nuance.
                Getting a model to truly understand <em className="text-paper/70 font-light italic">meaning</em> in Bengali
                is a different kind of hard problem.
              </p>
              <p>
                On the web side, I work across the full stack: from React frontends
                with complex animation systems to FastAPI backends with ML inference pipelines.
              </p>
            </div>

            {/* Currently */}
            <div className="mt-8 glass rounded-sm p-4 border-l-2 border-acid">
              <p className="font-mono text-[11px] text-acid mb-2 tracking-widest uppercase">Currently</p>
              <p className="font-body text-sm text-dim">
                Writing my 498R Directed Research final report — evaluating five fine-tuned
                LLMs on Bengali idiom explanation using ROUGE, BLEU, BERTScore & LLM-as-a-Judge.
              </p>
            </div>
          </motion.div>

          {/* Right: stats + image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Avatar area */}
            <div className="relative">
              <div
                className="w-full aspect-[4/3] glass rounded-sm overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
                }}
              >
                {/* Decorative terminal */}
                <div className="w-full max-w-xs">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-rust/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-acid/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                  </div>
                  <div className="font-mono text-xs text-dim space-y-1">
                    <p><span className="text-acid">$</span> whoami</p>
                    <p className="text-paper">raihan_mahmud</p>
                    <p className="mt-2"><span className="text-acid">$</span> cat skills.txt</p>
                    <p>React, Next.js, Python</p>
                    <p>FastAPI, Node.js, PostgreSQL</p>
                    <p>PyTorch, Unsloth, HuggingFace</p>
                    <p>Bengali NLP, LLM fine-tuning</p>
                    <p className="mt-2"><span className="text-acid">$</span> <span className="animate-blink">_</span></p>
                  </div>
                </div>
              </div>
              {/* Accent border */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-acid/20 rounded-sm -z-10" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="glass rounded-sm p-4"
                >
                  <p
                    className="font-display font-bold text-acid leading-none mb-1"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-mono text-[11px] text-dim uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
