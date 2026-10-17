import { motion, useReducedMotion } from 'framer-motion';

// Content is based on the approved source review, not inferred deployment claims.
const projects = [
  {
    id: 'talentflow', number: '01', type: 'featured', category: 'Full-stack / Applied AI', title: 'TalentFlow',
    desc: 'A recruitment application that brings candidate profiles, job requirements, and AI-assisted matching into one workflow. The code connects Gemini scoring with a Qwen LoRA service and stores results for recruiter review.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini', 'Qwen LoRA'],
    links: [
      { label: 'Application source', href: 'https://github.com/RaihahMahmud/TalentFlow_synapse_AI_B2B' },
      { label: 'Qwen LoRA model', href: 'https://huggingface.co/RaihanGG2026/talentflow-qwen-lora' },
    ],
  },
  {
    id: 'flyrank', number: '02', type: 'featured', category: 'AI internship / Search intelligence', title: 'FlyRank',
    desc: 'An internship capstone exploring how historical search signals can help prioritize content review. It combines a simple baseline, logistic regression, client-grouped validation, and a ranked queue—with clear limits on what the scores mean.',
    tags: ['Python', 'DuckDB', 'pandas', 'scikit-learn', 'Logistic Regression'],
    links: [
      { label: 'Capstone source', href: 'https://github.com/RaihahMahmud/FlyRank-AI--starter-ML-Internship-' },
      { label: 'Research write-up', href: 'https://raihahmahmud.github.io/FlyRank-AI--starter-ML-Internship-/' },
      { label: 'FlyRank', href: 'https://flyrank.com/' },
    ],
  },
  {
    id: 'techwheels', number: '03', type: 'compact', category: 'Databases / Application development', title: 'TechWheels',
    desc: 'A vehicle-sharing management application built around a relational database. Flask and SQLite support member records, fleet operations, reservations, and reporting.',
    tags: ['Python', 'Flask', 'SQLite', 'SQL', 'JavaScript'],
    note: 'Implementation includes relational constraints, dashboard queries, and requirement-test code.',
    links: [{ label: 'Application & SQL source', href: 'https://github.com/RaihahMahmud/TechWheels_DB_SQL_project_CUNY' }],
  },
  {
    id: 'easyben', number: '04', type: 'compact', category: 'NLP / Bengali language', title: 'EasyBEN',
    desc: 'A Bengali-language NLP project exploring fine-tuned language models and a conversational interface. Published model weights accompany a frontend with model selection, Bengali voice input, and saved chat history.',
    tags: ['Gemma 2', 'Unsloth', 'Transformers', 'React'],
    note: 'Related model variants are grouped here. The published 9B checkpoint is not confirmed as the frontend’s active model.',
    links: [
      { label: 'Gemma 2 · 9B model', href: 'https://huggingface.co/RaihanGG2026/gemma2-9b-easyBEN-merged' },
      { label: 'Chatbot source', href: 'https://github.com/RaihahMahmud/Bangla_grammar_Chatbot_299project' },
    ],
  },
  {
    id: 'drone', number: '05', type: 'compact', category: 'Computer vision / Pattern recognition', title: 'Drone Footage Object Detection',
    desc: 'A computer-vision project exploring object detection in drone footage. Published model weights and frame-level outputs document detected players, bounding boxes, confidence scores, and object IDs.',
    tags: ['Object detection', 'Model weights', 'Frame-level CSV'],
    note: 'Published artifacts; no measured accuracy, inference speed, or model-size claim.',
    links: [{ label: 'Model & detection outputs', href: 'https://huggingface.co/RaihanGG2026/yolov8-drone-footage' }],
  },
];

const flyrankCaseStudy = {
  resultsIntro:
    'On held-out clients, the model achieved 0.9993 precision, 0.9863 recall, and 0.9927 F1 against the chosen click-volume proxy target.',
  results: [
    { method: 'Logistic Regression', precision: '0.9993', recall: '0.9863', f1: '0.9927' },
    { method: 'Rule-based baseline', precision: '0.0000', recall: '0.0000', f1: '0.0000' },
  ],
  limitations: [
    'The target is a click-volume proxy, not a direct refresh-opportunity label.',
    'The data is historical and observational; there is no causal proof that refreshing content improves performance.',
    'Held-out clients improve validation, but the evaluation is still historical.',
    'The baseline is one simple rule, not every possible rule.',
    'Only three search-performance features were used.',
    'Scores are used for ordering, not calibrated probabilities.',
  ],
};

function ProjectLinks({ project }) {
  return <div className="flex flex-wrap gap-x-6 gap-y-1 mt-6">
    {project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
      aria-label={`${project.title}: ${link.label} (opens in a new tab)`} className="field-link !text-acid">
      {link.label}<span aria-hidden="true">↗</span>
    </a>)}
  </div>;
}

function ProjectCard({ project, children }) {
  const reduceMotion = useReducedMotion();
  const featured = project.type === 'featured';
  return (
    <motion.article aria-labelledby={`${project.id}-title`} initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduceMotion ? 0 : 0.4 }}
      className={featured ? 'project-entry py-10 md:py-14 border-t border-border' : 'project-entry py-8 border-t border-border grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-5 md:gap-12'}>
      <div className={featured ? 'mb-8 flex flex-wrap items-center justify-between gap-3' : ''}>
        <p className="font-mono text-xs text-dim leading-relaxed"><span className="text-acid mr-3">{project.number}</span>{project.category}</p>
        {featured ? <span className="section-label">Featured case study</span> : <h3 id={`${project.id}-title`} className="font-display font-semibold text-2xl leading-tight mt-3">{project.title}</h3>}
      </div>
      {featured ? children : <div className="min-w-0">
        <p className="text-dim font-normal leading-relaxed max-w-2xl">{project.desc}</p>
        {project.id === 'drone' && <figure className="my-5 border-l-2 border-acid pl-4">
          <figcaption className="font-mono text-xs text-acid mb-2">Published output fields</figcaption>
          <p className="font-mono text-xs text-dim leading-loose">Frame / Timestamp / Object ID / Class / Confidence / Bounding box</p>
        </figure>}
        <ul className="flex flex-wrap gap-2 mt-5" aria-label={`${project.title} technologies and artifacts`}>{project.tags.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul>
        <p className="text-sm text-dim leading-relaxed mt-4">{project.note}</p>
        <ProjectLinks project={project} />
      </div>}
    </motion.article>
  );
}

function FeaturedCaseStudy({ project }) {
  const talentflow = project.id === 'talentflow';
  return <ProjectCard project={project}>
    <div className={talentflow ? 'grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16' : 'grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 lg:gap-16'}>
      <div className="min-w-0">
        <h3 id={`${project.id}-title`} className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">{project.title}<span className="text-acid">.</span></h3>
        {!talentflow && <p className="font-display text-xl mb-5">Content opportunity scoring with search performance signals</p>}
        <p className="text-dim font-normal text-base sm:text-lg leading-relaxed max-w-2xl">{project.desc}</p>
        <ul className="flex flex-wrap gap-2 mt-6" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul>
        <ProjectLinks project={project} />
      </div>
      {talentflow ? <figure className="bg-surface border border-border p-5 sm:p-8 self-start">
        <figcaption className="section-label mb-6">Scoring workflow / from source</figcaption>
        <div className="font-mono text-sm leading-relaxed">
          <p className="pb-4 border-b border-border">Candidate profile + Job requirements</p>
          <p className="text-acid py-2" aria-hidden="true">↓</p>
          <div className="grid grid-cols-2 gap-4"><p className="border-l-2 border-acid pl-3">Gemini<br /><span className="text-xs text-dim">Primary score</span></p><p className="border-l border-border pl-3">Qwen LoRA<br /><span className="text-xs text-dim">Parallel score</span></p></div>
          <p className="text-acid py-2" aria-hidden="true">↓</p>
          <p className="pt-4 border-t border-border">Stored results → Recruiter review</p>
        </div>
        <p className="text-sm text-dim leading-relaxed mt-6">The trained-model score can serve as a fallback when Gemini fails. Model output parsing and endpoint availability remain practical constraints.</p>
      </figure> : <aside className="border-l-2 border-acid pl-5 sm:pl-7 self-start" aria-label="FlyRank evaluation design">
        <p className="section-label mb-5">Evaluation notes</p>
        <dl className="space-y-5 text-sm leading-relaxed">
          <div><dt className="font-mono text-acid mb-1">Signals</dt><dd className="text-dim">Impressions, CTR, average search position</dd></div>
          <div><dt className="font-mono text-acid mb-1">Validation</dt><dd className="text-dim">80/20 client-grouped split; thresholds learned from training data</dd></div>
          <div><dt className="font-mono text-acid mb-1">Interpretation</dt><dd className="text-dim">Historical click-volume proxy, not evidence that refreshing content improves traffic</dd></div>
        </dl>
      </aside>}
    </div>
    {!talentflow && <details className="mt-8 border-t border-border pt-4">
      <summary className="font-mono text-sm text-acid cursor-pointer py-3">Read reported results & limitations</summary>
      <div className="grid lg:grid-cols-2 gap-8 pt-5">
        <div className="min-w-0">
          <p className="text-sm text-dim leading-relaxed mb-4">{flyrankCaseStudy.resultsIntro}</p>
          <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Capstone results table">
            <table className="w-full text-sm text-left">
              <caption className="sr-only">Reported capstone metrics on held-out clients</caption>
              <thead><tr>{['Method', 'Precision', 'Recall', 'F1'].map(label => <th key={label} scope="col" className="py-3 pr-4 font-mono text-xs font-normal text-dim border-b border-border">{label}</th>)}</tr></thead>
              <tbody>{flyrankCaseStudy.results.map(row => <tr key={row.method}><th scope="row" className="py-3 pr-4 font-normal">{row.method}</th>{[row.precision, row.recall, row.f1].map((value, i) => <td key={i} className="py-3 pr-4 font-mono text-xs text-acid">{value}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="text-sm text-dim leading-relaxed mt-4">CTR is derived from clicks and impressions, so the inputs are closely related to the click-volume target. These scores should not be read as future-traffic forecasting performance.</p>
        </div>
        <ul className="space-y-2 text-sm text-dim leading-relaxed list-disc pl-5">{flyrankCaseStudy.limitations.map(line => <li key={line}>{line}</li>)}</ul>
      </div>
    </details>}
  </ProjectCard>;
}

export default function Projects() {
  return (
    <section id="projects" className="field-section" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-8">03 — Projects</p>
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <h2 id="projects-heading" className="field-heading">Selected work.</h2>
          <p className="text-dim text-sm max-w-xs leading-relaxed">Applications, experiments, and the engineering decisions behind them.</p>
        </div>
        {projects.map(project => project.type === 'featured' ? <FeaturedCaseStudy key={project.id} project={project} /> : <ProjectCard key={project.id} project={project} />)}
        <div className="border-t border-border pt-5"><a href="https://github.com/RaihahMahmud" target="_blank" rel="noopener noreferrer" className="field-link">All projects on GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>
      </div>
    </section>
  );
}
