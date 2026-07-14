
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, getProject, getNextProject } from '@/lib/projects';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams(){ return projects.map(p=>({ slug: p.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }){
  const p = getProject(params.slug);
  if(!p) return {};
  return { title: `${p.title} — SIMO Studio`, description: p.overview, openGraph:{ images:[p.hero] } };
}

export default function ProjectPage({ params }: { params: { slug: string } }){
  const project = getProject(params.slug);
  if(!project) return notFound();
  const next = getNextProject(params.slug);

  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden border-b border-line">
        <img src={project.hero} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col justify-end pb-16">
          <Reveal><div className="font-mono text-[11px] tracking-widest uppercase text-white/60">{project.category} — {project.year} — {project.location}</div></Reveal>
          <Reveal delay={0.1}><h1 className="mt-4 text-[56px] md:text-[112px] leading-[0.85] tracking-tighter font-medium">{project.title}</h1></Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 border-b border-line">
        <div className="md:col-span-4"><div className="font-mono text-xs uppercase tracking-widest text-fg-dim">Overview</div></div>
        <div className="md:col-span-8"><p className="text-[22px] md:text-[28px] leading-[1.25] tracking-tight">{project.overview}</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-8 text-sm">
            <div><div className="text-fg-dim text-xs uppercase tracking-widest">Challenge</div><div className="mt-2 text-fg-muted leading-6">{project.challenge.slice(0,90)}...</div></div>
            <div><div className="text-fg-dim text-xs uppercase tracking-widest">Strategy</div><div className="mt-2 text-fg-muted leading-6">{project.strategy.slice(0,90)}...</div></div>
            <div><div className="text-fg-dim text-xs uppercase tracking-widest">Scope</div><div className="mt-2">Identity, Packaging, Menu, Signage, Guidelines</div></div>
            <div><div className="text-fg-dim text-xs uppercase tracking-widest">Result</div><div className="mt-2">{project.results[0]}</div></div>
          </div>
        </div>
      </section>

      {/* Story blocks */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12">
        {[
          { k:'Challenge', v: project.challenge },
          { k:'Strategy', v: project.strategy },
          { k:'Identity', v: project.identity },
        ].map(block=>(
          <div key={block.k} className="grid md:grid-cols-12 gap-6 py-16 border-b border-line">
            <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-fg-dim">{block.k}</div>
            <div className="md:col-span-9 text-[18px] leading-8 text-fg-muted max-w-[65ch]">{block.v}</div>
          </div>
        ))}
      </section>

      {/* Palette & Typography */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 grid md:grid-cols-2 gap-[1px] bg-line border border-line">
        <div className="bg-bg p-10"><div className="font-mono text-xs uppercase tracking-widest text-fg-dim mb-8">Color Palette</div><div className="flex gap-3">{project.palette.map(c=><div key={c} className="flex-1"><div className="h-28 rounded-sm border border-line" style={{background:c}} /><div className="mt-3 font-mono text-xs text-fg-muted">{c}</div></div>)}</div></div>
        <div className="bg-bg p-10"><div className="font-mono text-xs uppercase tracking-widest text-fg-dim mb-8">Typography</div><div className="text-3xl font-serif">{project.typography.primary}</div><div className="mt-2 font-mono text-sm text-fg-muted">{project.typography.secondary} — Body & UI</div><div className="mt-8 h-[1px] bg-line" /><div className="mt-8 text-fg-muted text-sm leading-6">System uses 2 weights, tight tracking (-0.03em) for headlines, mono for metadata.</div></div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12">
        <div className="grid gap-[1px] bg-line border border-line">
          <div className="aspect-[16/9] bg-bg overflow-hidden"><img src={project.gallery[0]} alt="" className="w-full h-full object-cover" /></div>
          <div className="grid md:grid-cols-2 gap-[1px] bg-line"><div className="aspect-[4/3] bg-bg overflow-hidden"><img src={project.gallery[1]} alt="" className="w-full h-full object-cover" /></div><div className="aspect-[4/3] bg-bg overflow-hidden"><img src={project.gallery[2]} alt="" className="w-full h-full object-cover" /></div></div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-line bg-bg-soft"><div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-8"><div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-fg-dim">Outcome</div><div className="md:col-span-8 grid md:grid-cols-3 gap-6">{project.results.map(r=><div key={r} className="border border-line bg-bg p-6 text-sm leading-6">{r}</div>)}</div></div></section>

      {/* Next */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16"><div className="flex justify-between items-center mb-6"><span className="font-mono text-xs uppercase tracking-widest text-fg-dim">Next Project</span><Link href="/work" className="text-sm text-fg-muted hover:text-fg">All work →</Link></div><Link href={`/work/${next.slug}`} className="group block border border-line overflow-hidden"><div className="grid md:grid-cols-12"><div className="md:col-span-8 aspect-[16/9] overflow-hidden"><img src={next.cover} alt={next.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" /></div><div className="md:col-span-4 p-10 flex flex-col justify-center"><div className="font-mono text-xs uppercase tracking-widest text-fg-dim">{next.category}</div><div className="mt-2 text-3xl tracking-tight">{next.title}</div><div className="mt-4 inline-flex w-10 h-10 rounded-full border border-line group-hover:bg-white group-hover:text-black grid place-items-center transition">↗</div></div></div></Link></section>

      <Footer />
    </main>
  )
}
