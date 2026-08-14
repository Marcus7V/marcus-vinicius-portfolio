import { useLanguage } from '../../../i18n/useLanguage';
import './Education.css';

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="education-section">
      <div className="education-shell">
        <div className="education-header">
          <span className="education-label">{t.education.label}</span>
          <h2>{t.education.title}</h2>
        </div>

        <div className="section-divider" />

        <div className="education-grid">
          <article className="education-item">
            <div className="education-meta">
              <span className="education-period">{t.education.period}</span>
            </div>

            <div className="education-body">
              <h3>{t.education.degree}</h3>
              <p>{t.education.school}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
