'use client';

import { motion } from 'framer-motion';

const highlights = [
  { label: 'Frontend', value: 'Interfaces modernas' },
  { label: 'Full Stack', value: 'En crecimiento' },
  { label: 'Diseño UI', value: 'Cuidado visual' },
  { label: 'Experiencia de usuario', value: 'Claridad y orden' },
];

export function About() {
  return (
    <motion.section
      id="sobre-mi"
      className="section-spacing"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <div className="space-y-4">
          <span className="section-kicker">Sobre mí</span>
          <div className="relative ml-3 hidden min-h-[13rem] lg:block">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-lilac-400 via-lilac-500 to-transparent" />
            {[
              { title: 'Frontend', copy: 'Interfaces modernas y responsivas.' },
              { title: 'UI Design', copy: 'Diseño limpio y cuidado visual.' },
              { title: 'Web Apps', copy: 'Aplicaciones funcionales y escalables.' },
            ].map((item, index) => (
              <div key={item.title} className="relative pl-7" style={{ marginTop: index === 0 ? 0 : '2rem' }}>
                <span className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full bg-lilac-400 shadow-[0_0_18px_rgba(164,139,255,0.55)]" />
                <div className="surface-card p-3.5">
                  <p className="font-display text-base text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-400">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="section-copy mt-0 whitespace-pre-line">
            Soy graduada en Análisis y Desarrollo de Sistemas, con enfoque en el desarrollo frontend y la creación de interfaces web modernas, responsivas y funcionales.

            Me gusta transformar ideas en experiencias digitales claras, cuidando tanto el diseño visual como la usabilidad. Actualmente sigo fortaleciendo mis habilidades para crear proyectos cada vez más completos, profesionales y bien estructurados.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.article
                key={item.label}
                className="surface-card p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lilac-300">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg text-white">{item.value}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
