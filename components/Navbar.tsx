
'use client';
import { useI18n } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href:'/', labelKey:'nav_home' },
  { href:'/work', labelKey:'nav_work' },
  { href:'/services', labelKey:'nav_services' },
  { href:'/process', labelKey:'nav_process' },
  { href:'/about', labelKey:'nav_about' },
  { href:'/journal', labelKey:'nav_journal' },
  { href:'/contact', labelKey:'nav_contact' },
];

export default function Navbar(){
  const { lang, setLang, t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-mono text-[15px] tracking-[0.2em]">SIMO — STUDIO</Link>
        <nav className="hidden lg:flex gap-8 text-[13px] tracking-wide text-fg-muted">
          {links.map(l=>{
            const active = pathname===l.href || (l.href!=='/' && pathname?.startsWith(l.href));
            return <Link key={l.href} href={l.href} className={`hover:text-fg transition ${active?'text-fg':''}`}>{(t as any)[l.labelKey]}</Link>
          })}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex border border-line rounded-full p-1">
            {(['en','fr','ar'] as const).map(l=>(
              <button key={l} onClick={()=>setLang(l)} className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-widest transition ${lang===l?'bg-white text-black':'text-fg-muted hover:text-fg'}`}>{l}</button>
            ))}
          </div>
          <Link href="/contact" className="hidden md:inline-flex bg-white text-black px-5 h-9 items-center rounded-full text-sm font-medium">Start a Project</Link>
          <button onClick={()=>setOpen(v=>!v)} className="lg:hidden w-9 h-9 rounded-full border border-line grid place-items-center">{open?'✕':'☰'}</button>
        </div>
      </div>
    </header>

    <AnimatePresence>
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-bg lg:hidden flex flex-col">
          <div className="h-[72px] px-6 flex items-center justify-between border-b border-line"><span className="font-mono tracking-widest text-sm">MENU</span><button onClick={()=>setOpen(false)} className="w-9 h-9 rounded-full border border-line grid place-items-center">✕</button></div>
          <div className="flex-1 px-6 py-10 flex flex-col gap-6">
            {links.map((l,i)=>(
              <motion.div key={l.href} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}}>
                <Link onClick={()=>setOpen(false)} href={l.href} className="text-[40px] leading-none tracking-tighter hover:text-fg-muted transition">{(t as any)[l.labelKey]}</Link>
              </motion.div>
            ))}
            <div className="mt-auto flex gap-2">
              {(['en','fr','ar'] as const).map(l=>(
                <button key={l} onClick={()=>setLang(l)} className={`flex-1 h-11 rounded-full border text-sm ${lang===l?'bg-white text-black border-white':'border-line text-fg-muted'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
            <Link onClick={()=>setOpen(false)} href="/contact" className="h-12 rounded-full bg-white text-black grid place-items-center font-medium">Start a Project</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
