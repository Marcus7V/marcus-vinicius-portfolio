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
    availabilityModes: string;
    location: string;
    linkedin: string;
    github: string;
    email: string;
    credly: string;
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
    developmentStatus: string;
    erpTitle: string;
    erpBody: string;
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
      availability: 'Disponível para projetos e oportunidades',
      availabilityModes: 'Freelance · Presencial · Híbrido · Remoto',
      location: 'Suzano, SP',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      credly: 'Credly',
      projects: 'Projetos',
      contact: 'Contato',
      downloadCv: 'Baixar currículo',
      techLabel: 'Links profissionais',
    },
    about: {
      label: 'ABOUT.MD',
      title: 'Sobre Mim',
      paragraphs: [
        'Meu nome é Marcus Vinicius, tenho 19 anos e sou técnico em Desenvolvimento de Sistemas pelo SENAI São Paulo. A formação me deu uma base sólida em programação, desenvolvimento web e resolução de problemas.',
        'Atualmente atuo como Desenvolvedor de Software na Lumiar Tecnologia, empresa de desenvolvimento de software. Atuo com PHP, Next.js, React, APIs REST, MySQL, Docker, Git/GitHub e Google Cloud Platform (GCP).',
        'Atuo no desenvolvimento e na manutenção de aplicações web, com foco em integração de APIs REST e utilização de serviços em nuvem da Google Cloud Platform.',
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
      developmentStatus: 'Em desenvolvimento',
      erpTitle: '404 ERP',
      erpBody: 'Sistema ERP web modular desenvolvido para pequenas e médias empresas.',
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
      availability: 'Available for projects and opportunities',
      availabilityModes: 'Freelance · On-site · Hybrid · Remote',
      location: 'Suzano, SP',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      credly: 'Credly',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
      techLabel: 'Professional links',
    },
    about: {
      label: 'ABOUT.MD',
      title: 'About Me',
      paragraphs: [
        'My name is Marcus Vinicius, I am 19 years old, and I studied Systems Development at SENAI São Paulo. That training gave me a solid base in programming, web development, and problem solving.',
        'I currently work as a Software Developer at Lumiar Tecnologia, a software development company. I work with PHP, Next.js, React, REST APIs, MySQL, Docker, Git/GitHub, and Google Cloud Platform (GCP).',
        'I develop and maintain web applications, with a focus on REST API integration and the use of Google Cloud Platform cloud services.',
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
      developmentStatus: 'In development',
      erpTitle: '404 ERP',
      erpBody: 'Modular web ERP system developed for small and medium-sized businesses.',
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
