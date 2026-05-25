import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timeline = [
  {
    year: '2026',
    period: 'Mar – Present',
    title: 'Directed Research (498R)',
    subtitle: 'North South University',
    desc: 'Leading NLP research on Bengali idiom explanation. Fine-tuned Llama 3.1 8B, Gemma-2 9B, Qwen 2.5, and smaller variants. Evaluating with ROUGE, BLEU, BERTScore, and LLM-as-a-Judge benchmarks.',
    tags: ['LLM', 'LoRA', 'Bengali NLP', 'Evaluation'],
    accent: 'acid',
  },
  {
    year: '2025',
    period: 'Aug – Dec',
    title: 'Junior Design Project (CSE299)',
    subtitle: 'North South University',
    desc: 'Built Easy-Ben Explanator: a Bengali idiom chatbot from scratch. Designed dataset (2000 idioms), trained models via Unsloth, deployed with FastAPI + Next.js frontend.',
    tags: ['Python', 'React', 'FastAPI', 'HuggingFace'],
    accent: 'rust',
  },
  {
    year: '2024',
    period: 'Ongoing',
    title: 'Full-Stack Development',
    subtitle: 'Freelance / Self-Directed',
    desc: 'Built production projects including real-time dashboards, authentication microservices, and interactive UI sandboxes. Developed a strong foundation in system design and performance.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    accent: 'acid',
  },
  {
    year: '2023',
    period: 'Jan',
    title: 'Started CS Degree',
    subtitle: 'North South University, Dhaka',
    desc: 'Enrolled in Computer Science. First code, first algorithms, first late nights debugging. The beginning of everything.',
    tags: ['C', 'Java', 'Data Structures'],
    accent: 'paper',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const accentMap = {
    acid: { dot: 'bg-acid', line: 'border-acid/30', text: 'text-acid' },
    rust: { dot: 'bg-rust', line: 'border-rust/30', text: 'text-rust' },
    paper: { dot: 'bg-paper/40', line: 'border-paper/20', text: 'text-paper/60' },
  };

  return (
    <section id="timeline" ref={ref} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">04 — Timeline</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-paper mb-16"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          The path so far.
        </motion.h2>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[9px] md:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-paper/5" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const ac = accentMap[item.accent];
              const isRight = i % 2 !== 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                  className={`relative flex gap-8 md:gap-0 ${
                    isRight ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-3 -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${ac.dot} opacity-80 ring-4 ring-ink`} />
                  </div>

                  {/* Spacer on mobile */}
                  <div className="w-8 md:w-0 flex-shrink-0" />

                  {/* Year */}
                  <div className={`hidden md:flex w-1/2 ${isRight ? 'justify-start pl-12' : 'justify-end pr-12'} items-start pt-1`}>
                    <div className="text-right">
                      <p className={`font-mono text-2xl font-light ${ac.text} opacity-40`}>{item.year}</p>
                      <p className="font-mono text-[11px] text-dim">{item.period}</p>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 md:w-1/2 ${isRight ? 'md:pr-12' : 'md:pl-12'}`}>
                    {/* Mobile year */}
                    <p className={`md:hidden font-mono text-xs ${ac.text} mb-1`}>{item.year} · {item.period}</p>

                    <div className="glass rounded-sm p-5 hover:border-paper/10 transition-colors border border-paper/5">
                      <h3 className="font-display font-semibold text-paper text-lg mb-0.5">{item.title}</h3>
                      <p className={`font-mono text-[11px] ${ac.text} mb-3 tracking-wide`}>{item.subtitle}</p>
                      <p className="font-body text-dim text-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
