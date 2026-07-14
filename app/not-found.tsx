
import Link from 'next/link';
import Navbar from '@/components/Navbar';
export default function NotFound(){
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-32 text-center">
        <div className="font-mono text-xs tracking-widest uppercase text-fg-dim">404 — Not Found</div>
        <h1 className="mt-6 text-[56px] md:text-[96px] leading-[0.9] tracking-tighter font-medium">This page<br/>does not exist.</h1>
        <p className="mt-6 text-fg-muted max-w-[40ch] mx-auto">The link may be broken or the project was moved. Let’s get you back to work that converts.</p>
        <Link href="/" className="mt-10 inline-flex h-12 px-8 rounded-full bg-white text-black font-medium items-center">Back to home</Link>
      </div>
    </main>
  )
}
