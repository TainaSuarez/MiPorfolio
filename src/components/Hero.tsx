'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'APIs REST',
  'Git',
  'GitHub',
  'Vercel',
  'Figma',
];

export function Hero() {
  const marqueeItems = [...stack, ...stack];

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-lilac-400/35 to-transparent" />
      <motion.div
        className="absolute left-[12%] top-28 hidden h-28 w-28 rounded-full bg-lilac-500/8 blur-3xl lg:block"
        animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-20 hidden h-36 w-36 rounded-full bg-lilac-400/10 blur-3xl lg:block"
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-shell section-spacing pb-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div>
              <span className="section-kicker">Taina</span>
              <h1 className="section-title max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
                Hola, soy Paula Suárez
              </h1>
              <h2 className="mt-4 max-w-2xl font-display text-xl font-semibold text-lilac-300 sm:text-2xl">
                Desarrolladora Frontend
              </h2>
              <p className="section-copy mt-4 max-w-2xl">
                Construyo interfaces web modernas, responsivas y fáciles de usar. Me interesa
                combinar diseño, código y experiencia de usuario para crear productos digitales
                claros y funcionales.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/PaulaSuarezCV.pdf" download className="button-secondary">
                Ver currículum
                <HiOutlineDownload size={18} />
              </a>
              <a
                href="https://github.com/TainaSuarez"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                GitHub
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/paula-suarez-3455a72b3/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                LinkedIn
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto flex w-full max-w-lg items-center justify-center"
          >
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[17rem] w-[17rem] rounded-full border border-lilac-400/20 bg-radialGlow shadow-lilac sm:h-[19rem] sm:w-[19rem]" />
            </div>
            <div className="absolute left-10 top-16 hidden h-12 w-12 rounded-full border border-lilac-400/15 lg:block" />
            <div className="absolute bottom-16 right-10 hidden h-0 w-0 border-b-[18px] border-l-[14px] border-r-[14px] border-b-lilac-400/15 border-l-transparent border-r-transparent lg:block" />
            <div className="profile-avatar">
              <Image
                src="/img/paula-profile.jpg"
                alt="Retrato de Paula Suárez Costa"
                width={900}
                height={1100}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-y border-white/8 bg-white/[0.02]">
        <div className="overflow-hidden py-4">
          <div className="marquee-track">
            <div className="marquee-row">
              {marqueeItems.map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
