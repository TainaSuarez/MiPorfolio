'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineSparkles,
} from 'react-icons/hi';
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { skills } from '@/data/skills';

const iconMap: Record<string, { icon: React.ComponentType<{ className?: string; size?: number }>; className: string }> = {
  React: { icon: SiReact, className: 'text-sky-400' },
  TypeScript: { icon: SiTypescript, className: 'text-blue-400' },
  'Next.js': { icon: SiNextdotjs, className: 'text-white' },
  'Tailwind CSS': { icon: SiTailwindcss, className: 'text-cyan-400' },
  'Node.js': { icon: SiNodedotjs, className: 'text-emerald-400' },
  'APIs REST': { icon: HiOutlineGlobeAlt, className: 'text-violet-300' },
  NextAuth: { icon: HiOutlineAcademicCap, className: 'text-fuchsia-300' },
  PostgreSQL: { icon: SiPostgresql, className: 'text-indigo-300' },
  Supabase: { icon: SiSupabase, className: 'text-emerald-300' },
  SQL: { icon: HiOutlineDatabase, className: 'text-cyan-300' },
  Git: { icon: SiGit, className: 'text-orange-400' },
  GitHub: { icon: SiGithub, className: 'text-slate-200' },
  Vercel: { icon: SiVercel, className: 'text-white' },
  Figma: { icon: SiFigma, className: 'text-pink-400' },
  'Responsive design': { icon: HiOutlineSparkles, className: 'text-violet-300' },
  Accesibilidad: { icon: HiOutlineLightBulb, className: 'text-amber-300' },
  'Atención al detalle': { icon: HiOutlineChip, className: 'text-sky-300' },
  'Aprendizaje continuo': { icon: HiOutlineAcademicCap, className: 'text-emerald-300' },
  Organización: { icon: HiOutlineCode, className: 'text-rose-300' },
};

export function Skills() {
  return (
    <motion.section
      id="habilidades"
      className="section-spacing"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-shell">
        <span className="section-kicker">Mis habilidades</span>

        <motion.div
          className="mt-6 grid gap-x-8 gap-y-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {skills.map((category) => (
            <motion.article
              key={category.title}
              className="skill-block"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.22 }}
            >
              <h3 className="skill-title">{category.title}</h3>
              <p className="skill-copy">{category.description}</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {category.items.map((item) => {
                  const config = iconMap[item];
                  const Icon = config?.icon ?? HiOutlineChip;

                  return (
                    <span key={item} className="tech-chip">
                      <Icon size={15} className={config?.className ?? 'text-lilac-300'} />
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
