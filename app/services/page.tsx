
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { services } from '@/lib/services';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

export const metadata = { title: 'Services — SIMO Studio' };

export default function ServicesPage(){
  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="Capabilities" title="Services designed to make you look expensive" sub="One studio, complete vision. From strategy to shelf, from naming to launch. Premium positioning, not decoration." />
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-24">
        <div className="grid gap-[1px] bg-line border border-line">
          {services.map((s,i)=>(
            <Reveal key={s.slug} delay={i*0.03}>
              <div className="bg-bg p-8 md:p-12 grid md:grid-cols-12 gap-8 hover:bg-white/[0.015] transition">
                <div className="md:col-span-4"><div className="font-mono text-xs text-fg-dim">0{i+1} — {s.slug}</div><h2 className="mt-3 text-[28px] md:text-[36px] tracking-tight leading-none">{s.title}</h2><div className="mt-4 text-sm text-fg-muted">{s.desc}</div><Link href="/contact" className="mt-6 inline-flex h-9 px-5 rounded-full border border-line text-sm hover:bg-white hover:text-black transition">Start this →</Link></div>
                <div className="md:col-span-8 grid md:grid-cols-3 gap-8 text-sm">
                  <div><div className="font-mono text-[11px] uppercase tracking-widest text-fg-dim mb-3">Deliverables</div><ul className="space-y-2 text-fg-muted">{s.deliverables.map(d=><li key={d}>— {d}</li>)}</ul></div>
                  <div><div className="font-mono text-[11px] uppercase tracking-widest text-fg-dim mb-3">Timeline</div><div className="text-fg">{s.timeline}</div><div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-fg-dim">Ideal For</div><div className="mt-2 text-fg-muted leading-6">{s.ideal}</div></div>
                  <div className="border border-line p-4 bg-bg-soft"><div className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Starting at</div><div className="mt-1 text-xl">€2,500 — €8,500</div><div className="mt-2 text-xs text-fg-muted leading-5">Final quote after discovery call. Retainer available for ongoing direction.</div></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
