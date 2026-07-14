
'use client';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Navbar(){
  const { lang, setLang, t } = useI18n();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-mono text-[16px] tracking-[0.2em]">SIMO — STUDIO</Link>
        <nav className="hidden md:flex gap-8 text-sm text-fg-muted">
          <a href="#work" className="hover:text-fg transition">{t.nav_work}</a>
          <a href="#services" className="hover:text-fg transition">{t.nav_services}</a>
          <a href="#about" className="hover:text-fg transition">{t.nav_about}</a>
          <a href="#contact" className="hover:text-fg transition">{t.nav_contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex border border-line rounded-full p-1">
            {(['en','fr','ar'] as const).map(l=>(
              <button key={l} onClick={()=>setLang(l)} className={`px-3 py-1 rounded-full text-xs uppercase transition ${lang===l?'bg-white text-black':'text-fg-muted hover:text-fg'}`}>{l}</button>
            ))}
          </div>
          <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#contact" className="bg-white text-black px-5 h-9 inline-flex items-center rounded-full text-sm font-medium">{t.cta}</motion.a>
        </div>
      </div>
      <div className="md:hidden flex justify-center gap-2 pb-3">
        {(['en','fr','ar'] as const).map(l=>(
          <button key={l} onClick={()=>setLang(l)} className={`px-3 py-1 rounded-full text-xs border ${lang===l?'bg-white text-black border-white':'border-line text-fg-muted'}`}>{l}</button>
        ))}
      </div>
    </header>
  )
}
