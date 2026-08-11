import { Terminal } from '../../ui/Terminal/Terminal';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero-section scroll-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">Desenvolvedor Full Stack Júnior</p>
          <h1 id="hero-title">Marcus Vinicius</h1>
          <p className="hero-subtitle">Estudante de ADS</p>
          <p className="hero-description">
            Focado em construir soluções web eficientes, limpas e de alto desempenho.
          </p>

          <div className="hero-actions">
            <a className="hero-cta primary" href="#projects">
              Projetos
            </a>
            <a className="hero-cta secondary" href="#contact">
              Contato
            </a>
          </div>

          <div className="hero-highlights" aria-label="Tecnologias principais">
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
