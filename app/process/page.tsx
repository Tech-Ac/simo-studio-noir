
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  { n:'01', t:'Discovery', d:'60-min deep dive into business, audience, competitors, and goals. I ask hard questions before any design.', out:'Project brief, objectives, success metrics' },
  { n:'02', t:'Research', d:'Market, cultural, and visual audit. For restaurants: menu engineering and neighborhood mapping.', out:'Moodboard + strategic insights deck' },
  { n:'03', t:'Strategy', d:'Positioning, naming direction, voice, and creative pillars. We align before pixels.', out:'Strategy one-pager + creative direction' },
  { n:'04', t:'Concept', d:'2-3 distinct creative routes. Each with logic, not just aesthetics. You see thinking, not decoration.', out:'Concepts presentation' },
  { n:'05', t:'Design', d:'Chosen route refined across all touchpoints. Identity, packaging, menu, signage, social.', out:'Full identity system' },
  { n:'06', t:'Refinement', d:'Two rounds of focused feedback. We polish until it feels inevitable.', out:'Final files v1' },
  { n:'07', t:'Delivery', d:'Production-ready files, guidelines, and handover call. Suppliers contacted if needed.', out:'Guidelines + assets + fonts' },
  { n:'08', t:'Support', d:'14 days post-launch support. I stay to ensure flawless rollout.', out:'Launch support' },
];

export const metadata = { title:'Process — SIMO Studio' };

export default function ProcessPage(){
  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="How I work" title="A clear process that protects quality" sub="No chaos. No surprises. Every step has a purpose and a deliverable. You always know what happens next." />
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 sticky top-[88px] self-start hidden md:block"><div className="border border-line p-6 bg-bg-soft"><div className="font-mono text-xs uppercase tracking-widest text-fg-dim">Timeline</div><div className="mt-2 text-2xl tracking-tight">3 — 6 weeks</div><div className="mt-4 text-sm text-fg-muted leading-6">Average project. Rush available for +30%. 50% upfront, 50% on delivery. Revisions included.</div></div></div>
          <div className="md:col-span-8 grid gap-[1px] bg-line border border-line">
            {steps.map((s,i)=><Reveal key={s.n} delay={i*0.04}><div className="bg-bg p-8 md:p-10 grid md:grid-cols-12 gap-6"><div className="md:col-span-2 font-mono text-xs text-fg-dim">{s.n}</div><div className="md:col-span-6"><div className="text-[24px] tracking-tight">{s.t}</div><div className="mt-3 text-[15px] leading-7 text-fg-muted">{s.d}</div></div><div className="md:col-span-4"><div className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Deliverable</div><div className="mt-2 text-sm text-fg">{s.out}</div></div></div></Reveal>)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
