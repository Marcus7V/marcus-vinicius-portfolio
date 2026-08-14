import { useState, useEffect, useMemo, useRef } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../i18n/useLanguage';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const skipInitialObserverRef = useRef(true);

  const navItems = useMemo<NavItem[]>(() => [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ], [t]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const currentHash = window.location.hash;
    if (currentHash && currentHash !== '#hero') {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    const timer = window.setTimeout(() => {
      skipInitialObserverRef.current = false;
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  // Shadow on scroll and constant height behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to highlight active section automatically
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.href.replace('#', '')));
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // triggers when section is in the center of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (skipInitialObserverRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  const mobileLanguageLabel = language === 'pt-BR' ? 'Idioma' : 'Language';
  const mobileThemeLabel = theme === 'light'
    ? (language === 'pt-BR' ? 'Tema escuro' : 'Dark theme')
    : (language === 'pt-BR' ? 'Tema claro' : 'Light theme');
  const mobileDownloadLabel = language === 'pt-BR' ? 'Baixar currículo' : 'Download CV';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      
      // Fallback for setting active section
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
          marcus<span>.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`navbar-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Group (desktop only) */}
        <div className="navbar-actions">
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as 'pt-BR' | 'en')}
            className="language-select"
            aria-label={language === 'pt-BR' ? 'Selecionar idioma' : 'Select language'}
            title={language === 'pt-BR' ? 'Selecionar idioma' : 'Select language'}
          >
            <option value="pt-BR">PT-BR</option>
            <option value="en">EN</option>
          </select>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
            type="button"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <a
            href="/files/CV_Marcus_Vinicius.pdf"
            className="download-link"
            aria-label="Baixar currículo"
            download
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12"></path>
              <path d="M7 20l5 5 5-5"></path>
              <path d="M3 21h18"></path>
            </svg>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            aria-label="Abrir menu de navegação"
            type="button"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-drawer-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}

          <div className="mobile-drawer-actions">
            <label className="mobile-action-row">
              <span className="mobile-action-label">{mobileLanguageLabel}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as 'pt-BR' | 'en')}
                className="mobile-language-select"
                aria-label={language === 'pt-BR' ? 'Selecionar idioma' : 'Select language'}
                title={language === 'pt-BR' ? 'Selecionar idioma' : 'Select language'}
              >
                <option value="pt-BR">PT-BR</option>
                <option value="en">EN</option>
              </select>
            </label>

            <button
              onClick={toggleTheme}
              className="mobile-theme-toggle"
              aria-label={theme === 'light' ? (language === 'pt-BR' ? 'Mudar para tema escuro' : 'Switch to dark theme') : (language === 'pt-BR' ? 'Mudar para tema claro' : 'Switch to light theme')}
              type="button"
            >
              <span className="mobile-action-label">{mobileThemeLabel}</span>
            </button>

            <a
              href="/files/CV_Marcus_Vinicius.pdf"
              className="mobile-download-link"
              aria-label={mobileDownloadLabel}
              download
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-action-label">{mobileDownloadLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
