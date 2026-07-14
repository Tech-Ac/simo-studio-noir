
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { projects } from '@/lib/projects';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

export const metadata = { title: 'Work — SIMO Studio', description: 'Selected brand identity and restaurant branding work by Simo, Morocco.' };

export default function WorkPage(){
  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="Portfolio 2023—2026" title="Selected Work" sub="Brand identities crafted to sell, not just to look good. Strategy, system, and craft for ambitious businesses." />
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-[1px] bg-line border border-line">
          {projects.map((p,i)=>(
            <Reveal key={p.slug} delay={i*0.05}>
              <Link href={`/work/${p.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-bg">
                <img src={p.cover} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-[1.04] opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between font-mono text-[11px] uppercase tracking-widest text-white/60"><span>{p.category}</span><span>{p.year}</span></div>
                <div className="absolute bottom-0 p-8 w-full flex justify-between items-end"><div><div className="text-[28px] tracking-tight">{p.title}</div><div className="text-sm text-white/60 mt-1">{p.location}</div></div><div className="w-10 h-10 rounded-full border border-white/20 grid place-items-center group-hover:bg-white group-hover:text-black transition">↗</div></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
