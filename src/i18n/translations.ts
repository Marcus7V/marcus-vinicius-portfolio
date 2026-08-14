export type Language = 'pt-BR' | 'en';

export type TranslationContent = {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  skills: {
    label: string;
    title: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    description: string;
    availability: string;
    projects: string;
    contact: string;
    downloadCv: string;
    techLabel: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    panelLabel: string;
  };
  projects: {
    label: string;
    title: string;
    caseStudy: string;
    featuredTitle: string;
    body: string;
    comingSoon: string;
    upcomingTitle: string;
    github: string;
    demo: string;
  };
  education: {
    label: string;
    title: string;
    period: string;
    degree: string;
    school: string;
  };
  certifications: {
    label: string;
    title: string;
    credly: string;
  };
  contact: {
    label: string;
    title: string;
    context: string;
    phoneLabel: string;
    download: string;
  };
  footer: {
    rights: string;
    downloadCv: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  'pt-BR': {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    skills: {
      label: 'Habilidades.md',
      title: 'Habilidades',
    },
    hero: {
      eyebrow: 'Desenvolvedor Full Stack Júnior',
      subtitle: 'Técnico em Desenvolvimento de Sistemas',
      description: 'Focado em construir soluções web eficientes, limpas e de alto desempenho.',
      availability: 'Disponível para projetos, oportunidades profissionais e novos desafios.',
      projects: 'Projetos',
      contact: 'Contato',
      downloadCv: 'Baixar currículo',
      techLabel: 'Tecnologias principais',
    },
    about: {
      label: 'ABOUT.MD',
      title: 'Sobre Mim',
      paragraphs: [
        'Meu nome é Marcus Vinicius, tenho 19 anos e sou técnico em Desenvolvimento de Sistemas pelo SENAI São Paulo. A formação me deu uma base sólida em programação, desenvolvimento web e resolução de problemas.',
        'Atualmente estou me desenvolvendo como Full Stack Júnior, com foco em aplicações web e backend. Trabalho com React, TypeScript, JavaScript, Node.js, Python, SQL, Git/GitHub, Linux e C# em projetos práticos e em evolução constante.',
        'Meu interesse está em construir soluções funcionais, bem organizadas e fáceis de manter, com atenção à qualidade do código e ao desempenho. Estou buscando crescer profissionalmente na área de tecnologia com foco em desenvolvimento e aprendizado contínuo.',
        'Atualmente, estou disponível para novos projetos, oportunidades profissionais e desafios na área de desenvolvimento de software, com interesse em atuar principalmente como Desenvolvedor Full Stack Júnior.',
      ],
      panelLabel: 'Informações técnicas do desenvolvedor',
    },
    projects: {
      label: 'PROJECTS.MD',
      title: 'Projetos',
      caseStudy: 'Case Study',
      featuredTitle: 'Projeto 4 Linhas',
      body: 'E-commerce de roupas e artigos esportivos desenvolvido com backend em Python/FastAPI, frontend server-rendered e banco de dados MySQL.',
      comingSoon: 'Em breve',
      upcomingTitle: 'Projeto em estado de desenvolvimento',
      github: 'GitHub',
      demo: 'Demo',
    },
    education: {
      label: 'EDUCATION.MD',
      title: 'Formação',
      period: '2024 — 2026',
      degree: 'Técnico em Desenvolvimento de Sistemas',
      school: 'SENAI São Paulo',
    },
    certifications: {
      label: 'CERTIFICATIONS.MD',
      title: 'Certificações',
      credly: 'Confira minhas certificações no Credly',
    },
    contact: {
      label: 'CONTACT.MD',
      title: 'Contato',
      context: 'Disponível para projetos, colaborações e oportunidades.',
      phoneLabel: 'Telefone',
      download: 'Baixar currículo',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      downloadCv: 'Baixar currículo',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    skills: {
      label: 'Skills.md',
      title: 'Skills',
    },
    hero: {
      eyebrow: 'Junior Full Stack Developer',
      subtitle: 'Systems Development Technician',
      description: 'Focused on building efficient, clean, and high-performance web solutions.',
      availability: 'Available for projects, professional opportunities and new challenges.',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
      techLabel: 'Main technologies',
    },
    about: {
      label: 'ABOUT.MD',
      title: 'About Me',
      paragraphs: [
        'My name is Marcus Vinicius, I am 19 years old, and I studied Systems Development at SENAI São Paulo. That training gave me a solid base in programming, web development, and problem solving.',
        'I am currently developing as a Junior Full Stack Developer, with a focus on web and backend applications. I work with React, TypeScript, JavaScript, Node.js, Python, SQL, Git/GitHub, Linux, and C# in practical projects that are constantly evolving.',
        'My interest is in building functional, well-organized, and maintainable solutions, with attention to code quality and performance. I am looking to keep growing professionally in technology through continuous learning and hands-on development.',
        'Currently, I am available for new projects, professional opportunities, and challenges in the software development field, with interest in working primarily as a Junior Full Stack Developer.',
      ],
      panelLabel: 'Developer technical information',
    },
    projects: {
      label: 'PROJECTS.MD',
      title: 'Projects',
      caseStudy: 'Case Study',
      featuredTitle: 'Projeto 4 Linhas',
      body: 'Sportswear and sporting goods e-commerce developed with a Python/FastAPI backend, server-rendered frontend, and MySQL database.',
      comingSoon: 'Coming soon',
      upcomingTitle: 'Project in active development',
      github: 'GitHub',
      demo: 'Demo',
    },
    education: {
      label: 'EDUCATION.MD',
      title: 'Education',
      period: '2024 — 2026',
      degree: 'Systems Development Technician',
      school: 'SENAI São Paulo',
    },
    certifications: {
      label: 'CERTIFICATIONS.MD',
      title: 'Certifications',
      credly: 'View my certifications on Credly',
    },
    contact: {
      label: 'CONTACT.MD',
      title: 'Contact',
      context: 'Available for projects, collaborations, and opportunities.',
      phoneLabel: 'Phone',
      download: 'Download CV',
    },
    footer: {
      rights: 'All rights reserved.',
      downloadCv: 'Download CV',
    },
  },
};
