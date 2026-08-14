import { Terminal } from '../../ui/Terminal/Terminal';
import { useLanguage } from '../../../i18n/useLanguage';
import './Hero.css';

export function Hero() {
  const { t } = useLanguage();

  const professionalLinks = [
    { label: t.hero.linkedin, href: 'https://www.linkedin.com/in/marcus-vinicius-0b8668351/' },
    { label: t.hero.github, href: 'https://github.com/Marcus7V' },
    { label: t.hero.email, href: 'mailto:marcusvini751663@gmail.com' },
    { label: t.hero.credly, href: 'https://www.credly.com/users/marcus-vinicius.e37dde10' },
  ];

  return (
    <section id="hero" className="hero-section scroll-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title">Marcus Vinicius</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-description">{t.hero.description}</p>

          <div
            className="hero-availability-block"
            aria-label={`${t.hero.availabilityModes} · ${t.hero.location}`}
          >
            <p className="hero-availability">
              {`${t.hero.availabilityModes} · ${t.hero.location}`}
            </p>
          </div>

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

          <div className="hero-links" aria-label={t.hero.techLabel}>
            {professionalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hero-link"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-terminal">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
