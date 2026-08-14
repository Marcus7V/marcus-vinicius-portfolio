import { Terminal } from '../../ui/Terminal/Terminal';
import { useLanguage } from '../../../i18n/useLanguage';
import './Hero.css';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section scroll-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title">Marcus Vinicius</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a className="hero-cta primary" href="#projects">
              {t.hero.projects}
            </a>
            <a className="hero-cta secondary" href="#contact">
              {t.hero.contact}
            </a>
            <a className="hero-cta secondary" href="/files/CV_Marcus_Vinicius.pdf" download>
              {t.hero.downloadCv}
            </a>
          </div>

          <div className="hero-highlights" aria-label={t.hero.techLabel}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Git/GitHub</span>
          </div>
        </div>

        <div className="hero-terminal">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
