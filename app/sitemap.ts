
import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://simo.studio';
  const routes = ['', '/work','/services','/process','/about','/journal','/contact'].map(r=>({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: r==='' ? 1 : 0.8 }));
  const work = projects.map(p=>({ url: `${base}/work/${p.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }));
  return [...routes, ...work];
}
