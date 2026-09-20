import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const bentoItems = [
  {
    id: 'frontend',
    col: 'col-span-12 md:col-span-5',
    accent: 'acid',
    label: 'Frontend',
    title: 'Interfaces that feel alive',
    tags: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    icon: '⬡',
    desc: 'From component architecture to scroll-linked animations and real-time state.',
  },
  {
    id: 'backend',
    col: 'col-span-12 md:col-span-7',
    accent: 'rust',
    label: 'Backend',
    title: 'APIs that scale',
    tags: ['Python', 'FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'WebSockets'],
    icon: '◈',
    desc: 'REST and WebSocket APIs, auth systems, database design, and ML serving.',
  },
  {
    id: 'ml',
    col: 'col-span-12 md:col-span-7',
    accent: 'acid',
    label: 'Machine Learning',
    title: 'Fine-tuning on the edge of language',
    tags: ['PyTorch', 'HuggingFace', 'Unsloth', 'LoRA', 'QLoRA', 'RLHF'],
    icon: '◎',
    desc: 'Training and evaluating LLMs. ROUGE, BLEU, BERTScore, LLM-as-a-Judge. Specializing in Bengali NLP with Llama 3.1 and Gemma-2.',
  },
  {
    id: 'tools',
    col: 'col-span-12 md:col-span-5',
    accent: 'paper',
    label: 'Tools & Infra',
    title: 'Dev toolkit',
    tags: ['Git', 'Docker', 'Kaggle', 'Colab', 'Vercel', 'Cloudflare'],
    icon: '◇',
    desc: 'Deployment, tunneling, experimentation, version control.',
  },
  {
    id: 'langs',
    col: 'col-span-12',
    accent: 'dim',
    label: 'Languages',
    title: null,
    tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
    icon: null,
    desc: null,
    isWide: true,
  },
];

function BentoCard({ item, inView, delay }) {
  const accentColors = {
    acid: { text: 'text-acid', border: 'border-acid/20', bg: 'bg-acid/5' },
    rust: { text: 'text-rust', border: 'border-rust/20', bg: 'bg-rust/5' },
    paper: { text: 'text-paper', border: 'border-paper/20', bg: 'bg-paper/5' },
    dim: { text: 'text-dim', border: 'border-paper/10', bg: 'bg-paper/3' },
  };
  const ac = accentColors[item.accent];

  if (item.isWide) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className={`${item.col} glass rounded-sm p-5 flex items-center justify-between flex-wrap gap-4`}
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`${item.col} glass rounded-sm p-6 flex flex-col gap-4 group ${ac.border} border hover:border-opacity-40 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="section-label">{item.label}</span>
        {item.icon && (
          <span className={`font-mono text-2xl ${ac.text} opacity-40 group-hover:opacity-100 transition-opacity`}>
            {item.icon}
          </span>
        )}
      </div>

      {/* Title */}
      {item.title && (
        <h3 className="font-display font-semibold text-paper text-xl leading-snug">
          {item.title}
        </h3>
      )}

      {/* Desc */}
      {item.desc && (
        <p className="font-body text-dim text-sm leading-relaxed">{item.desc}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      {/* Big bg label */}
      <div className="absolute right-0 top-16 overflow-hidden pointer-events-none">
        <p
          className="font-display font-extrabold opacity-[0.03] leading-none"
          style={{ fontSize: 'clamp(80px, 14vw, 180px)', color: '#f2ede6' }}
        >
          SKILLS
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">02 — Skills</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-paper mb-12"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Across the stack,<br />
          <span className="text-dim font-light">and deep into models.</span>
        </motion.h2>

        {/* Bento grid */}
        <div className="bento-grid">
          {bentoItems.map((item, i) => (
            <BentoCard key={item.id} item={item} inView={inView} delay={0.15 + i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
