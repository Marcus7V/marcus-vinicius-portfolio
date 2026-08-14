import { useLanguage } from '../../../i18n/useLanguage';
import './Projects.css';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="projects-label">{t.projects.label}</span>
        <h2>{t.projects.title}</h2>
      </div>

      <div className="section-divider" />

      <div className="projects-grid">
        <article className="project-story project-story-featured" aria-label={t.projects.featuredTitle}>
          <div className="project-story-header">
            <div className="project-heading-group">
              <span className="project-kicker">{t.projects.caseStudy}</span>
              <h3>{t.projects.featuredTitle}</h3>
            </div>
          </div>

          <div className="project-story-content">
            <div className="project-preview project-preview-code">
              <div className="project-terminal" aria-label="Detalhe técnico do projeto">
                <div className="project-terminal-header">
                  <span className="control-dot close"></span>
                  <span className="control-dot minimize"></span>
                  <span className="control-dot maximize"></span>
                </div>
                <div className="project-terminal-body">
                  <span className="terminal-prompt">$</span>
                  <span>ecommerce.py</span>
                </div>
                <div className="project-terminal-lines">
                  <span>catalogo</span>
                  <span>login</span>
                  <span>checkout</span>
                </div>
              </div>
            </div>

            <div className="project-body">
              <p>{t.projects.body}</p>

              <div className="project-tags" aria-label="Tecnologias do projeto">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Jinja2</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>SQLAlchemy</span>
                <span>MySQL</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/404-Code-Busters/Projeto-4Linhas"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary"
                >
                  {t.projects.github}
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="project-story" aria-label={t.projects.upcomingTitle}>
          <div className="project-story-header">
            <div className="project-heading-group">
              <span className="project-kicker">{t.projects.comingSoon}</span>
              <h3>{t.projects.upcomingTitle}</h3>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
