import { useLanguage } from '../../../i18n/useLanguage';
import './Skills.css';

const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Bootstrap'],
  },
  {
    key: 'backend',
    title: 'Backend',
    technologies: ['Python', 'FastAPI', 'Node.js', 'C#', 'APIs REST'],
  },
  {
    key: 'database',
    title: 'Database',
    technologies: ['SQL', 'MySQL', 'SQLAlchemy'],
  },
  {
    key: 'tools',
    title: 'Tools / DevOps',
    technologies: ['Git', 'GitHub', 'Linux', 'npm'],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <span className="skills-label">{t.skills.label}</span>
        <h2>{t.skills.title}</h2>
      </div>

      <div className="section-divider" />

      <div className="skills-grid" aria-label="Categorias de habilidades e tecnologias">
        {skillCategories.map(({ key, title, technologies }) => (
          <article key={key} className="skill-row">
            <div className="skill-meta">
              <span className="skill-kicker">{key}</span>
              <h3>{title}</h3>
            </div>

            <div className="skill-tag-list" aria-label={`${title} tecnologias`}>
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className={`skill-tag ${technology === 'Python' || technology === 'React' ? 'is-highlighted' : ''}`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
