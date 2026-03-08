import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();

  return (
    <div className="language-switcher" style={{ display: 'flex', gap: 8 }}>
      <button onClick={() => setLang('fr')} disabled={lang === 'fr'}>
        FR
      </button>
      <button onClick={() => setLang('en')} disabled={lang === 'en'}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
