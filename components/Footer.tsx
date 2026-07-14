
'use client';
import { useI18n } from '@/lib/i18n';
export default function Footer(){
  const { t } = useI18n();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div><div className="font-mono tracking-widest">SIMO — STUDIO NOIR</div><div className="mt-3 text-sm text-fg-muted max-w-[32ch]">Minimal brand and restaurant identity studio based in Morocco, working worldwide. Strategy first, craft always.</div></div>
          <div className="text-sm text-fg-muted space-y-2"><div className="text-fg">Navigation</div><div>Work</div><div>Services</div><div>Process</div><div>Contact</div></div>
          <div className="text-sm text-fg-muted space-y-2"><div className="text-fg">Local SEO</div><div>Brand Designer Casablanca</div><div>Restaurant Branding Marrakech</div><div>Packaging Designer Morocco</div></div>
        </div>
        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row justify-between text-xs font-mono text-fg-dim"><span>{t.footer_rights}</span><span className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Sitemap</a></span></div>
      </div>
    </footer>
  )
}
