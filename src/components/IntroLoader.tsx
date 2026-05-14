'use client';

import { motion } from 'framer-motion';

type IntroLoaderProps = {
  progress: number;
  status: string;
};

export function IntroLoader({ progress, status }: IntroLoaderProps) {
  return (
    <motion.div
      className="loader-shell"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
    >
      <div className="loader-panel">
        <p className="loader-label">Paula Suárez</p>
        <h1 className="loader-title">Iniciando sistema</h1>
        <p className="loader-status">{status}</p>
        <div className="loader-bar" aria-hidden="true">
          <motion.div
            className="loader-progress"
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.18 }}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loader-meta">
          <span>Interfaz premium</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
