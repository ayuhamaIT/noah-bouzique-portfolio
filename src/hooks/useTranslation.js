import { useContext } from 'react';
import { LanguageContext } from '../i18n/LanguageProvider';

export const useTranslation = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within a LanguageProvider');
  return ctx;
};

export default useTranslation;
