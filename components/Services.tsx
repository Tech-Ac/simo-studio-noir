
'use client';
import { useI18n } from '@/lib/i18n';
export default function Services(){
  const { t } = useI18n();
  return (
    <section id="services" className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32">
        <h2 className="text-[40px] md:text-[56px] tracking-tighter font-medium">{t.services}</h2>
        <div className="mt-12 border-t border-line">
          {t.services_list.map((s:string,i:number)=>(
            <div key={s} className="group grid grid-cols-12 items-center py-8 border-b border-line hover:bg-white/[0.02] transition px-2">
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-fg-dim">0{i+1}</span>
              <span className="col-span-8 md:col-span-8 text-[28px] md:text-[36px] tracking-tight">{s}</span>
              <span className="col-span-2 text-right font-mono text-fg-dim group-hover:text-fg transition">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
