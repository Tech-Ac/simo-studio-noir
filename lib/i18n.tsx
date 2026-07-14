
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Lang } from './translations';

type Ctx = { lang: Lang; setLang: (l:Lang)=>void; t: typeof translations['en']; dir: 'ltr'|'rtl' };
const I18nContext = createContext<Ctx>(null as any);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  useEffect(()=>{ const s = localStorage.getItem('simo-lang') as Lang | null; if(s) setLang(s); },[]);
  useEffect(()=>{ localStorage.setItem('simo-lang', lang); document.documentElement.lang = lang; document.documentElement.dir = lang==='ar'?'rtl':'ltr'; },[lang]);
  const t = translations[lang] as any;
  return <I18nContext.Provider value={{ lang, setLang, t, dir: lang==='ar'?'rtl':'ltr' }}>{children}</I18nContext.Provider>
}
export const useI18n = () => useContext(I18nContext);
