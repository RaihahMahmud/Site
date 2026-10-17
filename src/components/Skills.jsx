import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const bentoItems = [
  {
    id: 'frontend',
    col: 'col-span-12 md:col-span-5',
    label: 'Frontend',
    title: 'Interfaces & interaction',
    tags: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    project: { label: 'TalentFlow / application interface', href: 'https://github.com/RaihahMahmud/TalentFlow_synapse_AI_B2B' },
    desc: 'From component architecture to scroll-linked animations and real-time state.',
  },
  {
    id: 'backend',
    col: 'col-span-12 md:col-span-7',
    label: 'Backend',
    title: 'Application logic & data',
    tags: ['Python', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'SQLite'],
    project: { label: 'TechWheels / Flask & SQLite', href: 'https://github.com/RaihahMahmud/TechWheels_DB_SQL_project_CUNY' },
    desc: 'REST and WebSocket APIs, auth systems, database design, and ML serving.',
  },
  {
    id: 'ml',
    col: 'col-span-12 md:col-span-7',
    label: 'Machine Learning',
    title: 'Language models & evaluation',
    tags: ['PyTorch', 'HuggingFace', 'Unsloth', 'LoRA', 'QLoRA', 'RLHF'],
    project: { label: 'EasyBEN / Gemma model', href: 'https://huggingface.co/RaihanGG2026/gemma2-9b-easyBEN-merged' },
    desc: 'Training and evaluating LLMs. ROUGE, BLEU, BERTScore, LLM-as-a-Judge. Specializing in Bengali NLP with Llama 3.1 and Gemma-2.',
  },
  {
    id: 'tools',
    col: 'col-span-12 md:col-span-5',
    label: 'Tools & Infra',
    title: 'Dev toolkit',
    tags: ['Git', 'Docker', 'Kaggle', 'Colab', 'Vercel', 'Cloudflare'],

    desc: 'Deployment, tunneling, experimentation, version control.',
  },
  {
    id: 'langs',
    col: 'col-span-12',
    label: 'Languages',
    title: null,
    tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
    desc: null,
    isWide: true,
  },
];

function BentoCard({ item }) {
  const reduceMotion = useReducedMotion();

  if (item.isWide) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }}
        className={`${item.col} border-t border-border py-6 flex items-center justify-between flex-wrap gap-4`}
      >
        <span className="section-label">Languages</span>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.4 }}

      className={`${item.col} ${item.id === 'ml' ? 'bg-surface border-l-2 border-acid' : 'border-t border-border'} p-6 sm:p-8 flex flex-col gap-4`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="section-label">{item.label}</span>

      </div>

      {/* Title */}
      {item.title && (
        <h3 className="font-display font-semibold text-paper text-2xl leading-snug">
          {item.title}
        </h3>
      )}

      {/* Desc */}
      {item.desc && (
        <p className="font-body text-dim text-base leading-relaxed">{item.desc}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      {item.project && <a href={item.project.href} target="_blank" rel="noopener noreferrer" className="field-link self-start">{item.project.label} <span aria-hidden="true">↗</span></a>}
    </motion.div>
  );
}

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="field-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="section-label">02 — Skills</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="font-display font-bold text-paper mb-12"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Across the stack,<br />
          <span className="text-dim font-light">and deep into models.</span>
        </motion.h2>

        {/* Bento grid */}
        <div className="bento-grid">
          {bentoItems.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
