import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function About() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="field-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="section-label">01 — About</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left: text */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <h2
              className="font-display font-bold text-paper leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Building at the
              <br />
              <span className="text-acid">intersection</span>
              <br />
              of code & AI.
            </h2>
            <div className="space-y-4 text-dim font-body font-normal leading-relaxed" style={{ fontSize: '16px' }}>
              <p>
                I'm a Computer Science undergraduate at North South University in Dhaka.
                I build practical software and machine-learning systems — from full-stack
                web products to applied NLP for low-resource languages.
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
            <div className="mt-8 pl-5 border-l-2 border-acid">
              <p className="font-mono text-[11px] text-acid mb-2 tracking-widest uppercase">Currently</p>
              <p className="font-body text-sm text-dim">
                Writing my 498R Directed Research final report — evaluating five fine-tuned
                LLMs on Bengali idiom explanation using ROUGE, BLEU, BERTScore & LLM-as-a-Judge.
              </p>
            </div>
          </motion.div>

          <aside className="lg:pt-3" aria-label="Selected areas of work">
            <p className="section-label mb-6">Practice / Selected evidence</p>
            {[
              { title: 'Language & meaning', desc: 'Bengali NLP and fine-tuned language models.', label: 'Explore EasyBEN', href: 'https://huggingface.co/RaihanGG2026/gemma2-9b-easyBEN-merged' },
              { title: 'Models in applications', desc: 'Candidate profiles, job requirements, and AI-assisted matching.', label: 'Explore TalentFlow', href: 'https://github.com/RaihahMahmud/TalentFlow_synapse_AI_B2B' },
              { title: 'Data & systems', desc: 'Relational data, application workflows, and reporting.', label: 'Explore TechWheels', href: 'https://github.com/RaihahMahmud/TechWheels_DB_SQL_project_CUNY' },
            ].map((item, i) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="field-evidence group">
                <span className="font-mono text-xs text-acid" aria-hidden="true">0{i + 1}</span>
                <div><h3 className="font-display text-xl font-semibold mb-2 group-hover:text-acid transition-colors">{item.title}</h3>
                  <p className="text-dim leading-relaxed mb-3">{item.desc}</p>
                  <span className="font-mono text-xs text-acid">{item.label} <span aria-hidden="true">↗</span></span>
                </div>
              </a>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
