import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Note: four earlier placeholder entries (Obsidian Pulse, Fluid UI Sandbox,
// Auth Microservice, AetherFlow AI) were removed — no linkable repo/demo
// existed for them, and their performance claims weren't backed by evidence.
const projects = [
  {
    id: 1,
    num: '02',
    category: 'AI / NLP',
    title: 'Easy-Ben Explanator Pro',
    desc: 'Fine-tuned LLMs (Llama 3.1 8B, Gemma-2 9B) to explain Bengali idioms, proverbs, and literary terms. Built a full pipeline: Unsloth training, FastAPI backend, Next.js frontend with voice input.',
    tags: ['Python', 'Unsloth', 'FastAPI', 'Next.js', 'LoRA'],
    accent: 'acid',
    href: 'https://huggingface.co/RaihanGG2026',
    linkLabel: 'View on Hugging Face',
    status: 'Research',
  },
];

// FlyRank internship capstone — featured above the regular grid.
// Figures come from the verified research write-up / source of truth.
const flyrankCaseStudy = {
  category: 'Machine Learning Internship Capstone · FlyRank · 2026',
  title: 'Content Opportunity Scoring with Search Performance Signals',
  tagline: 'A practical ranking approach for deciding which content pages deserve human review first.',
  problem:
    'Content teams have more pages to review than they can manually inspect. I built a scoring approach to prioritize pages using historical search-performance signals.',
  whatIDid:
    'I aggregated the March 2026 FlyRank warehouse at the client/content-page level and trained a Logistic Regression model using impressions, CTR, and average search position. Validation used an 80/20 client-grouped split to keep test clients separate from training clients.',
  resultsIntro:
    'On held-out clients, the model achieved 0.9993 precision, 0.9863 recall, and 0.9927 F1 against the chosen click-volume proxy target.',
  results: [
    { method: 'Logistic Regression', precision: '0.9993', recall: '0.9863', f1: '0.9927' },
    { method: 'Rule-based baseline', precision: '0.0000', recall: '0.0000', f1: '0.0000' },
  ],
  limitation:
    'The target is a proxy based on observed click volume. The result does not show that refreshing content causes better future traffic, and the model is not predicting Google\'s ranking algorithm.',
  limitations: [
    'The target is a click-volume proxy, not a direct refresh-opportunity label.',
    'The data is historical and observational; there is no causal proof that refreshing content improves performance.',
    'Held-out clients improve validation, but the evaluation is still historical.',
    'The baseline is one simple rule, not every possible rule.',
    'Only three search-performance features were used.',
    'Scores are used for ordering, not calibrated probabilities.',
  ],
  queue: [
    { label: 'CTR opportunity', value: '1,074' },
    { label: 'High impressions', value: '11,492' },
    { label: 'Low CTR', value: '19,727' },
    { label: 'Monitor', value: '6,135' },
  ],
  links: [
    { label: 'GitHub repository', href: 'https://github.com/RaihahMahmud/FlyRank-AI--starter-ML-Internship-' },
    { label: 'Research write-up', href: 'https://raihahmahmud.github.io/FlyRank-AI--starter-ML-Internship-/' },
    { label: 'FlyRank', href: 'https://flyrank.com/' },
  ],
};

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
        <div className={`glass rounded-sm p-6 border ${ac.border} transition-all duration-400`}
          style={{ borderColor: hovered ? undefined : 'rgba(242,237,230,0.05)' }}
        >
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className={`font-mono text-xs ${ac.text} opacity-60`}>{project.num}</span>
              <span className="tag">{project.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${ac.dot}`} aria-hidden="true" />
              <span className="font-mono text-[10px] text-dim">{project.status}</span>
            </div>
          </div>

          <h3
            className={`font-display font-bold text-paper mb-3 transition-colors duration-300 group-hover:text-acid`}
            style={{ fontSize: 'clamp(20px, 2.2vw, 26px)' }}
          >
            {project.title}
          </h3>

          <p className="font-body text-dim text-sm leading-relaxed mb-5">{project.desc}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>

          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className={`mt-5 flex items-center gap-2 font-mono text-xs ${ac.text}`}
          >
            {project.linkLabel} →
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

function FeaturedCaseStudy({ data, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="glass rounded-sm p-6 md:p-10 border border-acid/20 mb-8"
    >
      <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-acid opacity-60">01</span>
          <span className="tag">{data.category}</span>
        </div>
        <span className="font-mono text-[10px] text-dim">Featured</span>
      </div>

      <h3 className="font-display font-bold text-paper mb-2" style={{ fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
        {data.title}
      </h3>
      <p className="font-mono text-[12px] text-acid mb-6 opacity-80">{data.tagline}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <p className="section-label mb-2">Problem</p>
            <p className="font-body text-dim text-sm leading-relaxed">{data.problem}</p>
          </div>
          <div>
            <p className="section-label mb-2">What I did</p>
            <p className="font-body text-dim text-sm leading-relaxed">{data.whatIDid}</p>
          </div>
          <div>
            <p className="section-label mb-2">Held-out review queue</p>
            <div className="grid grid-cols-2 gap-3">
              {data.queue.map((item) => (
                <div key={item.label} className="glass rounded-sm p-3 border border-paper/5">
                  <p className="font-mono text-lg text-paper leading-none mb-1">{item.value}</p>
                  <p className="font-mono text-[10px] text-dim uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[11px] text-dim mt-2">38,428 held-out pages total · starting point for human review, not automatic publishing</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="section-label mb-2">Results</p>
            <p className="font-body text-dim text-sm leading-relaxed mb-3">{data.resultsIntro}</p>
            <div className="glass rounded-sm p-4 border border-paper/5 overflow-x-auto">
              <div className="grid grid-cols-4 gap-2 font-mono text-[11px] text-dim mb-2 uppercase tracking-wide min-w-[280px]">
                <span>Method</span>
                <span>Precision</span>
                <span>Recall</span>
                <span>F1</span>
              </div>
              {data.results.map((r) => (
                <div key={r.method} className="grid grid-cols-4 gap-2 font-mono text-[12px] py-1 border-t border-paper/5 min-w-[280px]">
                  <span className="text-paper/80">{r.method}</span>
                  <span className="text-acid">{r.precision}</span>
                  <span className="text-acid">{r.recall}</span>
                  <span className="text-acid">{r.f1}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-2">Limitations</p>
            <p className="font-body text-dim text-sm leading-relaxed mb-3">{data.limitation}</p>
            <ul className="space-y-1">
              {data.limitations.map((line, i) => (
                <li key={i} className="font-body text-dim text-xs leading-relaxed flex gap-2">
                  <span className="text-rust" aria-hidden="true">·</span>{line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 mt-8 pt-6 border-t border-paper/5">
        {data.links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-acid hover:text-paper transition-colors hover-underline"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute left-0 bottom-20 overflow-hidden pointer-events-none" aria-hidden="true">
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

        <FeaturedCaseStudy data={flyrankCaseStudy} inView={inView} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} inView={inView} delay={0.1 + i * 0.08} />
          ))}
        </div>

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
