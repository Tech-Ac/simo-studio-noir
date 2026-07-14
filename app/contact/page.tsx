
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';

export const metadata = { title:'Contact — SIMO Studio' };

export default function ContactPage(){
  return (
    <main>
      <Navbar />
      <PageHeader eyebrow="Let’s work" title="Start something memorable" sub="Tell me about your vision, budget, and timeline. I reply within 6 hours, even on weekends." />
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="space-y-8">
            <Reveal><div><div className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Email</div><div className="mt-2 text-xl">hello@simo.studio</div><div className="text-sm text-fg-muted">Best way to reach me</div></div></Reveal>
            <Reveal delay={0.05}><div className="grid grid-cols-2 gap-6 text-sm"><div><div className="text-fg-dim text-xs uppercase tracking-widest">Instagram</div><div className="mt-1">@simo.studio</div></div><div><div className="text-fg-dim text-xs uppercase tracking-widest">Behance</div><div className="mt-1">behance.net/simo</div></div><div><div className="text-fg-dim text-xs uppercase tracking-widest">LinkedIn</div><div className="mt-1">linkedin.com/in/simo</div></div><div><div className="text-fg-dim text-xs uppercase tracking-widest">Location</div><div className="mt-1">Bouskoura, MA — Remote worldwide</div></div></div></Reveal>
            <div className="border border-line bg-bg-soft p-6"><div className="font-mono text-xs uppercase tracking-widest text-fg-dim">Availability</div><div className="mt-2 text-lg">2 spots left for June</div><div className="mt-2 text-sm text-fg-muted leading-6">I take limited projects to protect quality. If you are reading this, I am likely available.</div><a href="https://wa.me/212600000000?text=Salam%20Simo%2C%20I%20saw%20your%20work" className="mt-4 inline-flex h-10 px-5 rounded-full bg-white text-black text-sm font-medium items-center">Chat on WhatsApp →</a></div>
          </div>
        </div>
        <div className="md:col-span-7">
          <form onSubmit={e=>e.preventDefault()} className="grid grid-cols-2 gap-4">
            <div className="col-span-1"><label className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Name *</label><input required className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none focus:border-white/30" placeholder="Your name" /></div>
            <div className="col-span-1"><label className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Email *</label><input required type="email" className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none focus:border-white/30" placeholder="you@company.com" /></div>
            <div className="col-span-1"><label className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Company</label><input className="mt-2 w-full h-12 bg-bg-soft border border-line px-4 outline-none" placeholder="Company / Restaurant" /></div>
            <div className="col-span-1"><label className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Budget</label><select className="mt-2 w-full h-12 bg-bg-soft border border-line px-4"><option>€2.5k - €5k</option><option>€5k - €10k</option><option>€10k+</option></select></div>
            <div className="col-span-2"><label className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Timeline</label><select className="mt-2 w-full h-12 bg-bg-soft border border-line px-4"><option>ASAP</option><option>1 month</option><option>2-3 months</option></select></div>
            <div className="col-span-2"><label className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">Project details *</label><textarea required rows={6} className="mt-2 w-full bg-bg-soft border border-line p-4 outline-none focus:border-white/30" placeholder="What are you building? What problem are you solving? What does success look like?" /></div>
            <button className="col-span-2 h-12 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition">Send inquiry — reply in 6h</button>
            <div className="col-span-2 text-[11px] text-fg-dim font-mono leading-5">By sending, you agree to be contacted. No spam. NDA available on request.</div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
