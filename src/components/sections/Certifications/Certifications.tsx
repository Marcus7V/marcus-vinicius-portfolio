import { useLanguage } from '../../../i18n/useLanguage';
import './Certifications.css';

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-shell">
        <div className="certifications-header">
          <span className="certifications-label">{t.certifications.label}</span>
          <h2>{t.certifications.title}</h2>
        </div>

        <div className="section-divider" />

        <div className="certifications-empty" aria-live="polite">
          <a
            href="https://www.credly.com/users/marcus-vinicius.e37dde10"
            target="_blank"
            rel="noopener noreferrer"
            className="certifications-link"
          >
            {t.certifications.credly}
          </a>
        </div>
      </div>
    </section>
  );
}
