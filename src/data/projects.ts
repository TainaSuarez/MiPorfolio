export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
};

export const projects: Project[] = [
  {
    title: 'Sumar+',
    description: 'Plataforma web de crowdfunding y donaciones desarrollada para conectar donantes y personas en necesidad a través de campañas online, priorizando transparencia, experiencia de usuario y accesibilidad.',
    image: '/img/sumar-cover.svg',
    tech: ['Next.js', 'React.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'NextAuth', 'Stripe', 'AWS S3'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/Sumar-tcc',
  },
  {
    title: 'BandFM - Sistema Web de Radio',
    description: 'Portal y panel administrativo para una radio online.',
    image: '/img/bandfm-cover.svg',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth', 'Supabase', 'Vercel'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/BandFm',
  },
  {
    title: 'Página Web Luis Suárez',
    description: 'Sitio visual dedicado a Luis Suárez con enfoque editorial.',
    image: '/img/luis-suarez-cover.svg',
    tech: ['HTML', 'CSS'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/LuisSuarezWeb',
  },
  {
    title: 'IFNews',
    description: 'Portal de noticias con foco institucional, deportivo y visual.',
    image: '/img/ifnews-cover.svg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/TrabalhoWeb-IFNews',
  },
  {
    title: 'Marvel Web',
    description: 'Página temática con identidad visual fuerte e inspiración editorial.',
    image: '/img/marvel-cover.svg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/PaginaWebMarvel',
  },
  {
    title: 'Web Counter Strike',
    description: 'Proyecto web sobre Counter Strike orientado a torneos y novedades.',
    image: '/img/counter-strike-cover.svg',
    tech: ['HTML', 'CSS'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/CounterWeb',
  },
  {
    title: 'Pokémon API Flutter',
    description: 'App mobile para explorar Pokémon y consultar detalles.',
    image: '/img/pokemon-cover.svg',
    tech: ['Flutter', 'Dart', 'PokéAPI', 'Provider', 'HTTP', 'SQLite'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/FinalMobileProjeto1',
  },
  {
    title: 'Filmes e Personagens',
    description: 'Aplicación en React para crear y gestionar publicaciones.',
    image: '/img/filmes-personagens-cover.svg',
    tech: ['React', 'CSS'],
    demoLink: 'PENDING',
    githubLink: 'https://github.com/TainaSuarez/AppPostReact?tab=readme-ov-file',
  },
];
