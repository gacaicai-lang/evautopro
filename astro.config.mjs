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
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ar', 'es'],
    routing: { prefixDefaultLocale: false },
    fallback: { ru: 'en', ar: 'en', es: 'en' },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', ru: 'ru-RU', ar: 'ar-AE', es: 'es-MX' },
      },
    }),
  ],
});
