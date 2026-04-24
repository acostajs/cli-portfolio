import type { Portfolio } from './types.js';

export const portfolio: Portfolio = {
  name: 'Juan Acosta',
  title: 'Full Stack Developer',

  about: {
    bio: 'I am a Full-stack developer who loves turning ideas into clean, fast, and maintainable products — from the terminal to the cloud.',
    highlights: [
      'Full-stack across React, Node.js, TypeScript, Python, Django, FastAPI & Flask',
      'Obsessed with clean code, good tooling, and smooth developer experiences',
      'CI/CD pipelines, cloud deployments, and automation that just works',
      'Lifelong learner',
    ],
  },

  skills: {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'Django', 'FastAPI', 'Flask'],
    DevOps: ['Docker', 'GitHub Actions', 'Husky'],
    Languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },

  projects: [
    {
      name: 'CLI Portfolio',
      description: 'Interactive CLI portfolio built with TypeScript and Node.js',
      url: 'https://github.com/acostajs/cli-portfolio',
      tech: ['TypeScript', 'Node.js', 'Chalk', 'Commander'],
    },
  ],

  experience: [
    {
      title: 'Full Stack Developer - Internship',
      company: 'Loriginal.org - Artur.art',
      period: 'Feb 2026 – Apr 2026 - 3 mos',
      description: [
        'Developed a Node.js script to detect and remove duplicate images across the media library, reducing storage overhead',
        'Improved the zoom interaction on the paintings gallery section, refining the user experience for high-detail artwork browsing',
        'Built the artist registration form end-to-end — from React UI and validation logic to Prisma ORM integration and MariaDB persistence',
        'Implemented an image optimization pipeline using Next.js and Node.js to improve load performance across the platform',
      ],
    },
  ],

  contact: {
    email: 'acosta.juan@icloud.com',
    portfolio: 'https://acostajs.github.io/',
    linkedin: 'https://www.linkedin.com/in/juan-acosta-pinilla/',
    github: 'https://github.com/acostajs',
  },
};
