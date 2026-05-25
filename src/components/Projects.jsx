import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    category: 'AI / NLP',
    title: 'Easy-Ben Explanator Pro',
    desc: 'Fine-tuned LLMs (Llama 3.1 8B, Gemma-2 9B) to explain Bengali idioms, proverbs, and literary terms. Built a full pipeline: Unsloth training, FastAPI backend, Next.js frontend with voice input.',
    tags: ['Python', 'Unsloth', 'FastAPI', 'Next.js', 'LoRA'],
    metric: 'ROUGE-1 0.44 · BERTScore F1 0.76',
    accent: 'acid',
    href: 'https://huggingface.co/RaihanGG2026',
    status: 'Research',
  },
  {
    id: 2,
    num: '02',
    category: 'Full-Stack',
    title: 'Obsidian Pulse',
    desc: 'Real-time cryptocurrency dashboard with live WebSocket price feeds, interactive charts, and a dark glassmorphic UI. Built for performance at scale.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'WebSockets', 'TailwindCSS'],
    metric: 'Real-time · < 50ms latency',
    accent: 'rust',
    href: '#',
    status: 'Live',
  },
  {
    id: 3,
    num: '03',
    category: 'Frontend',
    title: 'Fluid UI Sandbox',
    desc: 'A playground for testing edge-case UI states and complex spring physics. Explores scroll-linked animations, gesture detection, and fluid layout transitions.',
    tags: ['React', 'Framer Motion', 'TailwindCSS'],
    metric: '60fps · Spring physics',
    accent: 'acid',
    href: '#',
    status: 'Open Source',
  },
  {
    id: 4,
    num: '04',
    category: 'Backend',
    title: 'Auth Microservice',
    desc: 'Production-grade JWT authentication microservice. Handles refresh token rotation, rate limiting, role-based access control, and email verification.',
    tags: ['Express', 'PostgreSQL', 'Node.js', 'JWT', 'Redis'],
    metric: 'RBAC · Token rotation',
    accent: 'paper',
    href: '#',
    status: 'Production',
  },
  {
    id: 5,
    num: '05',
    category: 'AI / Automation',
    title: 'AetherFlow AI',
    desc: 'Advanced AI workflow architecture for chaining LLM calls, tool use, and structured outputs. Enables complex multi-step reasoning pipelines with observable state.',
    tags: ['Python', 'React', 'LangChain', 'FastAPI'],
    metric: 'Multi-agent · Tool use',
    accent: 'rust',
    href: '#',
    status: 'In Progress',
  },
];

const accentMap = {
  acid: { dot: 'bg-acid', text: 'text-acid', border: 'border-acid/20' },
  rust: { dot: 'bg-rust', text: 'text-rust', border: 'border-rust/20' },
  paper: { dot: 'bg-paper/40', text: 'text-paper/70', border: 'border-paper/10' },
};

function ProjectCard({ project, inView, delay }) {
  const [hovered, setHovered] = useState(false);
  const ac = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
        <div className={`glass rounded-sm p-6 border ${ac.border} transition-all duration-400 ${hovered ? 'border-opacity-60' : ''}`}
          style={{ borderColor: hovered ? undefined : 'rgba(242,237,230,0.05)' }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className={`font-mono text-xs ${ac.text} opacity-60`}>{project.num}</span>
              <span className="tag">{project.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${ac.dot}`} />
              <span className="font-mono text-[10px] text-dim">{project.status}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`font-display font-bold text-paper mb-3 transition-colors duration-300 group-hover:${ac.text.replace('text-', 'text-')}`}
            style={{ fontSize: 'clamp(20px, 2.2vw, 26px)' }}
          >
            {project.title}
          </h3>

          {/* Desc */}
          <p className="font-body text-dim text-sm leading-relaxed mb-5">{project.desc}</p>

          {/* Metric bar */}
          <div className={`font-mono text-[11px] ${ac.text} mb-4 opacity-80`}>
            ◆ {project.metric}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className={`mt-5 flex items-center gap-2 font-mono text-xs ${ac.text} opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            View project →
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      {/* BG text */}
      <div className="absolute left-0 bottom-20 overflow-hidden pointer-events-none">
        <p
          className="font-display font-extrabold opacity-[0.03] leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(80px, 14vw, 180px)', color: '#f2ede6' }}
        >
          PROJECTS
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">03 — Projects</span>
          <div className="flex-1 divider max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-paper mb-12"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Selected work.
        </motion.h2>

        {/* Grid: 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} inView={inView} delay={0.1 + i * 0.08} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/RaihahMahmud"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-dim hover:text-acid transition-colors hover-underline"
          >
            All projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
