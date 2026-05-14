'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { IntroLoader } from '@/components/IntroLoader';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

const DURATION_MS = 1800;

function getStatus(progress: number) {
  if (progress < 25) return 'Iniciando sistema...';
  if (progress < 55) return 'Cargando recursos...';
  if (progress < 85) return 'Preparando interfaz...';
  return 'Acceso concedido';
}

export function PortfolioExperience() {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const update = (now: number) => {
      const elapsed = now - start;
      const nextProgress = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(nextProgress);

      if (elapsed < DURATION_MS) {
        frame = requestAnimationFrame(update);
      } else {
        const timeout = window.setTimeout(() => setShowLoader(false), 150);
        frame = requestAnimationFrame(() => {});
        return () => window.clearTimeout(timeout);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const status = useMemo(() => getStatus(progress), [progress]);

  return (
    <>
      <AnimatePresence>{showLoader ? <IntroLoader progress={progress} status={status} /> : null}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: showLoader ? 0 : 1, y: showLoader ? 8 : 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="min-h-screen bg-night-950 text-white"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
