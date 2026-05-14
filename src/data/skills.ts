export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Tecnologías que utilizo para construir interfaces modernas, claras y responsivas.',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Herramientas y conceptos que acompañan mi crecimiento hacia un perfil full stack.',
    items: ['Node.js', 'APIs REST', 'NextAuth'],
  },
  {
    title: 'Database',
    description: 'Bases y servicios que utilizo para modelar y conectar datos en aplicaciones web.',
    items: ['PostgreSQL', 'Supabase', 'SQL'],
  },
  {
    title: 'Tools',
    description: 'Recursos que uso para diseñar, desarrollar, desplegar y colaborar.',
    items: ['Git', 'GitHub', 'Vercel', 'Figma'],
  },
  {
    title: 'Soft skills',
    description: 'Cualidades que sostienen mi forma de trabajar y la calidad de cada interfaz.',
    items: ['Responsive design', 'Accesibilidad', 'Atención al detalle', 'Aprendizaje continuo', 'Organización'],
  },
];
