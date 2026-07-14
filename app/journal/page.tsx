
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

const posts = [
  { slug:'why-minimal-branding-wins', title:'Why minimal branding wins for restaurants', date:'May 12, 2026', read:'5 min', excerpt:'Your food is maximal. Your brand should be minimal. Here is why silence sells.' },
  { slug:'menu-psychology', title:'Menu design psychology that increases ticket by 23%', date:'Apr 28, 2026', read:'7 min', excerpt:'Price anchoring, eye tracking, and why boxes around dishes kill sales.' },
  { slug:'packaging-morocco', title:'Packaging in Morocco: from souk to shelf', date:'Apr 10, 2026', read:'6 min', excerpt:'How to feel local and luxury at the same time without using zellige patterns.' },
];

export const metadata = { title:'Journal — SIMO Studio' };

export default function JournalPage(){
  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="Insights" title="Journal" sub="Thoughts on branding, restaurants, and building taste-driven businesses. New essays monthly. No fluff." />
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-24">
        <div className="grid gap-[1px] bg-line border border-line max-w-[900px]">
          {posts.map((p,i)=>(
            <Reveal key={p.slug} delay={i*0.05}>
              <Link href={`/journal`} className="group bg-bg p-8 md:p-10 block hover:bg-white/[0.02] transition">
                <div className="flex gap-4 font-mono text-[11px] uppercase tracking-widest text-fg-dim"><span>{p.date}</span><span>•</span><span>{p.read}</span></div>
                <h2 className="mt-3 text-[24px] md:text-[28px] tracking-tight leading-[1.1] group-hover:text-fg-muted transition">{p.title}</h2>
                <p className="mt-3 text-sm leading-6 text-fg-muted max-w-[60ch]">{p.excerpt}</p>
                <div className="mt-4 text-sm underline decoration-white/20 underline-offset-4 group-hover:decoration-white/50">Read article →</div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 max-w-[900px] border border-dashed border-line p-6 text-sm text-fg-muted">CMS ready: Connect to Sanity, Contentful or Notion. Data structure in <code className="bg-bg-soft px-2 py-1 rounded">lib/journal.ts</code>. Search, tags, and reading time already styled.</div>
      </section>
      <Footer />
    </main>
  )
}
