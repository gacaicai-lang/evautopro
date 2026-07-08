// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// EV Auto Pro — China NEV B2B Export Site
// Stack: Astro 6 + Tailwind v3 + Decap CMS + CF Pages
export default defineConfig({
  site: 'https://evautopro.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
