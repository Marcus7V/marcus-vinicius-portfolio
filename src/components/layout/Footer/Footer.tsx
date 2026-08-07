import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Copyright */}
        <p className="footer-copyright">
          © {currentYear} Marcus Vinicius. Todos os direitos reservados.
        </p>

        {/* Right: Social Links */}
        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <svg className="social-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            {/* Inline LinkedIn SVG for consistency and accessibility */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon inline-icon" role="presentation" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a
            href="https://bsky.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="BlueSky"
          >
            <svg className="social-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Discord"
          >
            <svg className="social-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
