
'use client';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import Link from 'next/link';
const projects = [
  { id:'myogi', title:'MYOGI', cat:'Restaurant Branding', year:'2025', img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200' },
  { id:'z-secrets', title:'Z SECRETS', cat:'Beauty — Identity', year:'2025', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200' },
  { id:'plantina', title:'PLANTINA', cat:'Packaging', year:'2024', img:'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1200' },
  { id:'titrit', title:'TITRIT', cat:'Hospitality', year:'2024', img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200' },
];
export default function FeaturedWork(){
  const { t } = useI18n();
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline justify-between mb-12"><h2 className="text-[40px] md:text-[56px] tracking-tighter font-medium">{t.featured}</h2><Link href="/work" className="font-mono text-xs uppercase tracking-widest text-fg-dim hover:text-fg">View all — 6 projects</Link></div>
        <div className="grid md:grid-cols-2 gap-[1px] bg-line border border-line">
          {projects.map(p=>(
            <motion.div key={p.id} whileHover={{}}>
              <Link href={`/work/${p.id}`} className="group relative block bg-bg aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05] opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full flex justify-between items-end">
                  <div><div className="font-mono text-[11px] tracking-widest uppercase text-white/60">{p.cat} — {p.year}</div><div className="text-2xl mt-1">{p.title}</div></div>
                  <div className="w-9 h-9 rounded-full border border-white/20 grid place-items-center group-hover:bg-white group-hover:text-black transition">↗</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
