
'use client';
import { useI18n } from '@/lib/i18n';
import { useState } from 'react';
export default function Contact(){
  const { t } = useI18n();
  const [sent,setSent]=useState(false);
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5"><h2 className="text-[48px] tracking-tighter leading-none font-medium">{t.contact_title}</h2><p className="mt-4 text-fg-muted">{t.contact_sub}</p><div className="mt-8 text-sm space-y-2 font-mono text-fg-dim"><div>Email — hello@simo.studio</div><div>WhatsApp — +212 6 00 00 00 00</div><div>Instagram — @simo.studio</div><div className="pt-4">Bouskoura, Grand Casablanca, MA</div></div></div>
        <div className="md:col-span-7">
          {!sent ? (
          <form onSubmit={e=>{e.preventDefault(); setSent(true)}} className="grid grid-cols-2 gap-4">
            <div className="col-span-1"><label className="text-xs uppercase tracking-widest text-fg-muted">{t.form_name}</label><input required className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none focus:border-white/40" placeholder="Your name" /></div>
            <div className="col-span-1"><label className="text-xs uppercase tracking-widest text-fg-muted">{t.form_email}</label><input required type="email" className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none focus:border-white/40" placeholder="you@company.com" /></div>
            <div className="col-span-1"><label className="text-xs uppercase tracking-widest text-fg-muted">{t.form_company}</label><input className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none" placeholder="Company" /></div>
            <div className="col-span-1"><label className="text-xs uppercase tracking-widest text-fg-muted">{t.form_budget}</label><select className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none"><option>€2.5k - €5k</option><option>€5k - €10k</option><option>€10k+</option></select></div>
            <div className="col-span-2"><label className="text-xs uppercase tracking-widest text-fg-muted">{t.form_message}</label><textarea required rows={5} className="mt-2 w-full bg-bg-soft border border-line p-4 outline-none focus:border-white/40" placeholder="Tell me about your project, goals, timeline..." /></div>
            <button className="col-span-2 h-12 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition">{t.form_send}</button>
          </form>
          ):(
            <div className="border border-line p-10 bg-bg-soft"><div className="text-2xl">Message received.</div><p className="mt-2 text-fg-muted">Merci — I will reply within 6 hours. Check your email.</p><div className="mt-6"><a href="https://wa.me/212600000000" className="inline-flex h-10 px-6 border border-line items-center rounded-full">Or chat on WhatsApp →</a></div></div>
          )}
        </div>
      </div>
    </section>
  )
}
