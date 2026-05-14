'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineCode } from 'react-icons/hi';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <motion.section
      id="proyectos"
      className="section-spacing"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-shell">
        <span className="section-kicker">Mis proyectos</span>
        <h2 className="section-title">Proyectos donde aplico desarrollo, diseño y experiencia de usuario.</h2>
        <p className="section-copy">
          Algunos proyectos donde aplico desarrollo frontend, consumo de APIs, diseño responsive y tecnologías full stack.
        </p>

        <motion.div
          className="projects-grid mx-auto mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {projects.map((project) => {
            const hasDemo = project.demoLink !== 'PENDING';
            const hasCode = Boolean(project.githubLink);

            return (
              <motion.article
                key={project.title}
                className="surface-card project-card mx-auto w-full overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <div className="project-cover">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={760}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-3.5 sm:p-4">
                  <h3 className="font-display text-base font-semibold text-white sm:text-[1.05rem]">{project.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-slate-300 sm:text-sm sm:leading-6">{project.description}</p>
                  {hasDemo || hasCode ? (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {hasDemo ? (
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="button-primary px-4 py-2.5 text-[13px]">
                          Ver proyecto
                          <HiOutlineArrowNarrowRight size={15} />
                        </a>
                      ) : null}
                      {hasCode ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="button-code"
                        >
                          Código
                          <HiOutlineCode size={14} />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
