import { useLanguage } from '../../../i18n/useLanguage';
import './About.css';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-copy">
          <span className="about-label">{t.about.label}</span>
          <h2>{t.about.title}</h2>

          <div className="about-text">
            {t.about.paragraphs.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-panel-wrapper">
          <div className="about-panel" aria-label={t.about.panelLabel}>
            <div className="about-panel-header">
              <div className="window-controls">
                <span className="control-dot close"></span>
                <span className="control-dot minimize"></span>
                <span className="control-dot maximize"></span>
              </div>
              <span className="panel-title">developer-config.json</span>
            </div>

            <div className="about-panel-body">
              <pre className="about-code">
                <code>{`{
  "name": "Marcus Vinicius",
  "role": "Full Stack Jr.",
  "education": "SENAI",
  "focus": [
    "Web Development",
    "Backend",
    "Cloud",
    "DevOps"
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
