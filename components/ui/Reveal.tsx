
'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export function Reveal({ children, delay=0, y=20 }: { children: ReactNode; delay?: number; y?: number }){
  const shouldReduce = useReducedMotion();
  if(shouldReduce) return <>{children}</>;
  return <motion.div initial={{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-10%'}} transition={{duration:0.7, delay, ease:[0.22,1,0.36,1] as any}}>{children}</motion.div>
}

export function TextReveal({ text, className='' }: { text: string; className?: string }){
  const words = text.split(' ');
  return <span className={className}>{words.map((w,i)=><motion.span key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04, duration:0.5}} className="inline-block mr-[0.25em]">{w}</motion.span>)}</span>
}
