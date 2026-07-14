
'use client';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
export default function Hero(){
  const { t, dir } = useI18n();
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-10 pt-24 md:pt-36 pb-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.22,1,0.36,1]}} className={`font-sans font-[500] tracking-tighter leading-[0.9] text-[clamp(3rem,10vw,8.5rem)] ${dir==='rtl'?'font-serif':''}`}>
            {t.hero_line1}<br/><span className="text-fg-muted">{t.hero_line2}</span>
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.6}} className="mt-8 max-w-[48ch] text-[18px] leading-7 text-fg-muted">{t.hero_sub}</motion.p>
          <div className="mt-10 flex gap-4">
            <a href="#work" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-black font-medium">{t.hero_primary}</a>
            <a href="#contact" className="h-12 px-8 inline-flex items-center rounded-full border border-line hover:border-white/30 transition">{t.hero_secondary}</a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:border-l border-line lg:pl-10 flex flex-col justify-end">
          <div className="text-sm font-mono text-fg-dim space-y-2">
            <div className="flex justify-between border-b border-line py-3"><span>Location</span><span className="text-fg">Bouskoura, MA</span></div>
            <div className="flex justify-between border-b border-line py-3"><span>Availability</span><span className="text-fg">2 spots — June</span></div>
            <div className="flex justify-between py-3"><span>Response</span><span className="text-fg">&lt; 6 hours</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
