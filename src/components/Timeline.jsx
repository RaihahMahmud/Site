import { motion, useReducedMotion } from 'framer-motion';

const timeline = [
  {
    year: '2026',
    period: 'Mar',
    title: 'Machine Learning / AI Intern',
    subtitle: 'FlyRank',
    desc: 'Worked on a machine-learning capstone focused on ranking content pages for human review using historical search-performance signals.',
    tags: ['Logistic Regression', 'Search Data', 'Client-Grouped Validation'],
  },
  {
    year: '2022',
    period: '– 2027',
    title: 'BSc in Computer Science & Engineering',
    subtitle: 'North South University, Dhaka',
    desc: 'Undergraduate Computer Science & Engineering program.',
    tags: ['C', 'Java', 'Data Structures'],
  },
];

export default function Timeline() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="timeline" className="field-section">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-8">04 — Timeline</p>
        <h2 className="field-heading mb-10">The path so far.</h2>
        <ol className="border-t border-border">
          {timeline.map(item => (
            <motion.li key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.4 }}
              className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12 py-8 md:py-10 border-b border-border">
              <p className="font-mono text-sm text-acid md:pt-1">{item.period.startsWith('–') ? `${item.year} ${item.period}` : `${item.period} ${item.year}`}</p>
              <div className="max-w-2xl">
                <p className="font-mono text-xs text-dim mb-3">{item.subtitle}</p>
                <h3 className="font-display font-semibold text-xl sm:text-2xl mb-3">{item.title}</h3>
                <p className="text-dim leading-relaxed mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
