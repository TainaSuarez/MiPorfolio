'use client';

import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night-950/85 backdrop-blur-xl">
      <nav className="container-shell grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-[3rem_1fr_3rem]">
        <a
          href="#inicio"
          className="font-nav flex h-11 w-11 items-center justify-center rounded-full border border-lilac-400/35 bg-white/[0.04] text-sm font-semibold tracking-[0.22em] text-white"
        >
          PS
        </a>

        <div className="flex items-center justify-center">
          <ul className="font-nav hidden items-center justify-center gap-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-slate-300 md:flex lg:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-lilac-300" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
          <div className="hidden h-11 w-11 md:block" aria-hidden="true" />
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-night-900 md:hidden">
          <ul className="container-shell font-nav flex flex-col gap-1 py-4 text-[0.78rem] uppercase tracking-[0.14em]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/[0.05] hover:text-lilac-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
