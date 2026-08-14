import { createContext } from 'react';
import { type Language, type TranslationContent } from './translations';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationContent;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
