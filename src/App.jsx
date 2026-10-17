import { MotionConfig } from 'framer-motion';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="noise bg-ink min-h-screen">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Cursor />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          {/* Static technology divider: no continuous motion while reading. */}
          <div className="overflow-hidden border-y border-paper/5 py-3 bg-slate/40" aria-hidden="true">
            <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3">
              {['React', 'Python', 'LLM Fine-tuning', 'Next.js', 'Bengali NLP', 'FastAPI', 'Framer Motion', 'PostgreSQL'].map((item, i) => (
                <span key={i} className="font-mono text-[11px] text-dim uppercase tracking-widest">
                  {item} <span className="text-acid mx-4">·</span>
                </span>
              ))}
            </div>
          </div>
          <About />
          <div className="divider mx-6" />
          <Skills />
          <div className="divider mx-6" />
          <Projects />
          <div className="divider mx-6" />
          <Timeline />
          <div className="divider mx-6" />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
