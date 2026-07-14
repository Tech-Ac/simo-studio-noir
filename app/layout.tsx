
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { I18nProvider } from '@/lib/i18n';

export const metadata = {
  title: 'SIMO — Brand & Restaurant Identity Designer | Morocco',
  description: 'I design brands people remember. Brand Identity, Restaurant Branding and Packaging for ambitious businesses in Morocco and beyond.',
  metadataBase: new URL('https://simo.studio'),
  openGraph: { title: 'SIMO Studio', description: 'Premium brand identity studio', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`} suppressHydrationWarning>
      <body className="bg-bg text-fg font-sans antialiased selection:bg-white selection:text-black">
        <I18nProvider>{children}</I18nProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org","@type":"Person","name":"Simo","jobTitle":"Graphic Designer","address":{"@type":"PostalAddress","addressLocality":"Bouskoura","addressCountry":"MA"},"url":"https://simo.studio","sameAs":["https://instagram.com/","https://linkedin.com/"]
        })}} />
      </body>
    </html>
  )
}
