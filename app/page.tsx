
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page(){
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="border-y border-line bg-white/[0.02]"><div className="mx-auto max-w-[1440px] px-6 md:px-10 h-14 flex items-center gap-8 overflow-hidden text-xs tracking-widest uppercase text-fg-dim"><span>La Table Noir</span><span>•</span><span>Atelier Ciel</span><span>•</span><span>Dune Estate</span><span>•</span><span>MIRA</span><span>•</span><span>Maison K</span><span>•</span><span>Noir Café</span></div></div>
      <FeaturedWork />
      <Services />
      <Process />
      <Testimonials />
      <section className="py-24 md:py-36 text-center border-t border-line"><h2 className="text-[56px] md:text-[96px] tracking-tighter leading-[0.9] font-medium">Have an idea?<br/><span className="text-fg-muted">Let’s make it memorable.</span></h2><a href="#contact" className="mt-10 inline-flex h-12 px-8 bg-white text-black rounded-full font-medium">Start your project — 2 spots left</a></section>
      <Contact />
      <Footer />
    </main>
  )
}
