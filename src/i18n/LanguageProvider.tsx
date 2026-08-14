import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { type Language, translations } from './translations';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('portfolio-language') : null;

    if (savedLanguage === 'pt-BR' || savedLanguage === 'en') {
      return savedLanguage;
    }

    return 'pt-BR';
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
