
'use client';
import { useI18n } from '@/lib/i18n';
export default function Process(){
  const { t } = useI18n();
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4"><h2 className="text-[40px] leading-none tracking-tighter font-medium">{t.process}</h2><p className="mt-4 text-fg-muted max-w-[28ch]">No chaos. A clear system that protects quality and your investment.</p></div>
          <div className="md:col-span-8 grid md:grid-cols-2 gap-[1px] bg-line border border-line">
            {t.process_steps.map((st:any)=>(
              <div key={st.n} className="bg-bg p-8"><div className="font-mono text-xs text-fg-dim mb-6">{st.n}</div><div className="text-xl mb-2">{st.t}</div><div className="text-sm text-fg-muted leading-6">{st.d}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
