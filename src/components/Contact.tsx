'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const links = [
  {
    label: 'Email',
    href: 'mailto:devsuareztaina@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/paula-suarez-3455a72b3/',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/TainaSuarez',
    icon: FaGithub,
  },
];

export function Contact() {
  return (
    <motion.section
      id="contacto"
      className="section-spacing"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-shell">
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(164,139,255,0.18),transparent_38%)]" />
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker justify-center before:w-10">Contacto</span>
            <p className="section-copy mx-auto mt-2 max-w-2xl">
              Estoy abierta a nuevas oportunidades, colaboraciones y proyectos donde pueda aportar desde el desarrollo frontend, el diseño de interfaces y la creación de experiencias digitales claras y funcionales.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:mx-auto sm:max-w-2xl sm:grid-cols-3">
            {links.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="contact-link"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <div className="contact-link-icon">
                    <Icon size={16} />
                  </div>
                  <span>{item.label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
