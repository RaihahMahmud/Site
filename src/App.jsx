import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Page-load screen wipe
function LoadScreen() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: 'top' }}
      className="fixed inset-0 z-[9999] bg-acid flex items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="font-mono text-ink text-sm tracking-widest uppercase"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="noise bg-ink min-h-screen">
      <LoadScreen />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        {/* Marquee divider */}
        <div className="overflow-hidden border-y border-paper/5 py-3 bg-slate/40">
          <div className="animate-marquee flex gap-12 whitespace-nowrap">
            {Array(8).fill(['React', 'Python', 'LLM Fine-tuning', 'Next.js', 'Bengali NLP', 'FastAPI', 'Framer Motion', 'PostgreSQL']).flat().map((item, i) => (
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
  );
}
