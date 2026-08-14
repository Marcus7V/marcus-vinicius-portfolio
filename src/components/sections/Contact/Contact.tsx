import { useLanguage } from '../../../i18n/useLanguage';
import './Contact.css';

export function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      label: 'Email',
      value: 'marcusvini751663@gmail.com',
      href: 'mailto:marcusvini751663@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'https://github.com/Marcus7V',
      href: 'https://github.com/Marcus7V',
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/marcus-vinicius-0b8668351/',
      href: 'https://www.linkedin.com/in/marcus-vinicius-0b8668351/',
    },
    {
      label: 'CV',
      value: t.contact.download,
      href: '/files/CV_Marcus_Vinicius.pdf',
      download: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-header">
          <span className="contact-label">{t.contact.label}</span>
          <div className="contact-heading">
            <span className="contact-index">04</span>
            <h2>{t.contact.title}</h2>
          </div>
          <p className="contact-context">{t.contact.context}</p>
        </div>

        <div className="contact-divider" />

        <div className="contact-links" aria-label="Links de contato">
          {contactLinks.map(({ label, value, href, download: shouldDownload }) => (
            <a
              key={label}
              href={href}
              target={shouldDownload ? undefined : '_blank'}
              rel={shouldDownload ? undefined : 'noreferrer'}
              className="contact-link"
              download={shouldDownload ? 'CV_Marcus_Vinicius.pdf' : undefined}
            >
              <span className="contact-link-label">{label}</span>
              <span className="contact-link-value">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
