
'use client';
import { useI18n } from '@/lib/i18n';
export default function Testimonials(){
  const { t } = useI18n();
  return (
    <section className="border-y border-line bg-bg-soft">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8"><blockquote className="font-serif text-[28px] md:text-[40px] leading-[1.15] tracking-tight">{t.testimonial}</blockquote><div className="mt-6 flex items-center gap-3"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200" className="w-10 h-10 rounded-full object-cover" alt=""/><div className="text-sm"><div>Karim El Amrani</div><div className="text-fg-muted text-xs">Founder, La Table Noir — Casablanca</div></div></div></div>
          <div className="md:col-span-4 grid grid-cols-2 gap-[1px] bg-line border border-line text-center">
            <div className="bg-bg py-10"><div className="text-3xl font-mono">127+</div><div className="text-xs text-fg-muted mt-1 uppercase tracking-widest">{t.stats.projects}</div></div>
            <div className="bg-bg py-10"><div className="text-3xl font-mono">9</div><div className="text-xs text-fg-muted mt-1 uppercase tracking-widest">{t.stats.years}</div></div>
            <div className="bg-bg py-10"><div className="text-3xl font-mono">14</div><div className="text-xs text-fg-muted mt-1 uppercase tracking-widest">{t.stats.countries}</div></div>
            <div className="bg-bg py-10"><div className="text-3xl font-mono">100%</div><div className="text-xs text-fg-muted mt-1 uppercase tracking-widest">{t.stats.referral}</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
