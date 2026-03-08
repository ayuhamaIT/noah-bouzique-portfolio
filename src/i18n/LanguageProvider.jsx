import React, { createContext, useMemo, useState } from 'react';
import { translations } from '../constants/translations';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (keyPath) => {
      if (!keyPath) return '';
      const parts = keyPath.split('.');
      let cur = translations[lang];
      for (const p of parts) {
        if (cur == null) return '';
        if (Array.isArray(cur) && /^\d+$/.test(p)) {
          cur = cur[Number(p)];
        } else {
          cur = cur[p];
        }
      }
      return cur ?? '';
    },
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
