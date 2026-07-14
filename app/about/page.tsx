
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';

const tools = ['Figma','Illustrator','InDesign','After Effects','Blender','Webflow','Framer','Notion'];
const values = [
  { t:'Clarity over decoration', d:'If it does not help sell, it is noise.' },
  { t:'Strategy before style', d:'We solve business problems, not just make pretty things.' },
  { t:'Timeless over trendy', d:'Your brand should still work in 10 years.' },
  { t:'Craft is respect', d:'Details signal how you treat customers.' },
];
const faq = [
  { q:'Do you work internationally?', a:'Yes. 60% of clients are France, UAE, US. Communication in EN/FR/AR. Remote workflow with Loom and Figma.' },
  { q:'What is your availability?', a:'I take 2 projects per month to protect quality. Next slots June 2026.' },
  { q:'Do you do development?', a:'I design Webflow/Framer sites and collaborate with devs for Next.js. No cheap templates.' },
];

export const metadata = { title:'About — SIMO Studio' };

export default function AboutPage(){
  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="Studio Noir" title="Designer, strategist, craftsman" sub="I help ambitious restaurants and luxury brands look like they belong at the top. Based in Bouskoura, Morocco. Working worldwide." />
      
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10 border-b border-line">
        <div className="md:col-span-5"><div className="aspect-[4/5] bg-bg-soft border border-line overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" alt="Simo" className="w-full h-full object-cover grayscale" /></div></div>
        <div className="md:col-span-7">
          <Reveal><h2 className="text-[28px] md:text-[36px] leading-[1.1] tracking-tight">I grew up between souks and Swiss design books. That tension is my style: Moroccan warmth, Swiss rigor.</h2></Reveal>
          <div className="mt-8 space-y-6 text-[16px] leading-8 text-fg-muted max-w-[60ch]">
            <p>9 years ago I started with a cracked copy of Photoshop designing menus for cafes in Casablanca. Today I work with founders who need to charge €30 for a dish and make it feel obvious.</p>
            <p>My job is not to make things beautiful. It is to make you memorable and expensive. Beauty is a byproduct of clarity and obsession.</p>
            <p>When I am not designing, I photograph restaurant signage and collect packaging from Japanese drugstores.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-[1px] bg-line border border-line text-center">
            <div className="bg-bg py-6"><div className="font-mono text-2xl">127+</div><div className="text-xs uppercase tracking-widest text-fg-dim mt-1">Projects shipped</div></div>
            <div className="bg-bg py-6"><div className="font-mono text-2xl">9</div><div className="text-xs uppercase tracking-widest text-fg-dim mt-1">Years practice</div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h3 className="font-mono text-xs uppercase tracking-widest text-fg-dim">Design Philosophy</h3></div>
        <div className="md:col-span-8 grid md:grid-cols-2 gap-[1px] bg-line border border-line">
          {values.map(v=><div key={v.t} className="bg-bg p-8"><div className="text-lg tracking-tight">{v.t}</div><div className="mt-2 text-sm leading-6 text-fg-muted">{v.d}</div></div>)}
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft"><div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-fg-dim">Tools & Craft</div>
        <div className="md:col-span-8"><div className="flex flex-wrap gap-2">{tools.map(t=><span key={t} className="px-4 h-9 inline-flex items-center rounded-full border border-line bg-bg text-sm">{t}</span>)}</div><div className="mt-8 text-sm text-fg-muted">Selected clients: La Table Noir, Atelier Ciel, Dune Estate, MIRA, Maison K, Noir Café, Plantina, Titrit, Orchid Island, Z Secrets.</div></div>
      </div></section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16"><h3 className="font-mono text-xs uppercase tracking-widest text-fg-dim mb-8">FAQ</h3><div className="grid gap-[1px] bg-line border border-line max-w-[800px]">{faq.map(f=><div key={f.q} className="bg-bg p-6"><div className="font-medium">{f.q}</div><div className="mt-2 text-sm leading-6 text-fg-muted">{f.a}</div></div>)}</div></section>

      <Footer />
    </main>
  )
}
