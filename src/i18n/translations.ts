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
    upcomingBody: string;
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
    empty: string;
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
      subtitle: 'Técnico em Desenvolvimento de Sistemas — SENAI São Paulo',
      description: 'Focado em construir soluções web eficientes, limpas e de alto desempenho.',
      projects: 'Projetos',
      contact: 'Contato',
      downloadCv: 'Baixar currículo',
      techLabel: 'Tecnologias principais',
    },
    about: {
      label: 'ABOUT.MD',
      title: 'Sobre Mim',
      paragraphs: [
        'Sou Marcus Vinicius, Desenvolvedor Full Stack Júnior e técnico em Desenvolvimento de Sistemas pelo SENAI São Paulo. Essa formação me deu uma base sólida em programação, desenvolvimento web, bancos de dados e engenharia de software.',
        'Gosto de transformar ideias em aplicações funcionais, buscando escrever código limpo, organizar bem meus projetos e criar interfaces que sejam bonitas e fáceis de usar.',
        'Atualmente trabalho principalmente com React, TypeScript, JavaScript, Python, Node.js, SQL e Git/GitHub. Também venho explorando conceitos de Cloud, DevOps, observabilidade e segurança de aplicações para entender cada vez mais o ciclo completo de desenvolvimento.',
        'Meus projetos são uma parte importante desse aprendizado. É através deles que coloco em prática o que estudo, experimento novas tecnologias e evoluo como desenvolvedor.',
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
      upcomingTitle: 'Projeto em desenvolvimento',
      upcomingBody: 'Descrição do projeto será adicionada aqui na etapa de conteúdo do portfólio.',
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
      empty: 'As certificações serão adicionadas em breve.',
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
      subtitle: 'Systems Development Technician — SENAI São Paulo',
      description: 'Focused on building efficient, clean, and high-performance web solutions.',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
      techLabel: 'Main technologies',
    },
    about: {
      label: 'ABOUT.MD',
      title: 'About Me',
      paragraphs: [
        'I am Marcus Vinicius, a Junior Full Stack Developer and Systems Development technician from SENAI São Paulo. That training gave me a solid foundation in programming, web development, databases, and software engineering.',
        'I enjoy turning ideas into functional applications, writing clean code, organizing my projects well, and creating interfaces that are both attractive and easy to use.',
        'I currently work mainly with React, TypeScript, JavaScript, Python, Node.js, SQL, and Git/GitHub. I am also exploring Cloud, DevOps, observability, and application security concepts to better understand the full development cycle.',
        'My projects are an important part of this learning process. Through them, I put theory into practice, experiment with new technologies, and evolve as a developer.',
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
      upcomingTitle: 'Project in development',
      upcomingBody: 'Project description will be added here in the portfolio content stage.',
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
      empty: 'Certifications will be added soon.',
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
