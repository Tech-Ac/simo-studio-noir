
'use client';
import { Reveal } from '@/components/ui/Reveal';
export default function PageHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }){
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-20 md:pt-28 pb-12 border-b border-line">
      {eyebrow && <div className="font-mono text-[11px] tracking-widest uppercase text-fg-dim mb-6">{eyebrow}</div>}
      <Reveal><h1 className="text-[48px] md:text-[84px] leading-[0.9] tracking-tighter font-medium max-w-[12ch]">{title}</h1></Reveal>
      {sub && <Reveal delay={0.15}><p className="mt-6 text-[18px] leading-7 text-fg-muted max-w-[48ch]">{sub}</p></Reveal>}
    </div>
  )
}
