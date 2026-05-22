// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// EV Auto Pro — China NEV B2B Export Site
// Stack: Astro + Tailwind v4 + Decap CMS + CF Pages
export default defineConfig({
  site: 'https://evautopro.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ar', 'es'],
    routing: {
      prefixDefaultLocale: false, // /  (en)   /ru/  /ar/  /es/
    },
    fallback: { ru: 'en', ar: 'en', es: 'en' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', ru: 'ru-RU', ar: 'ar-AE', es: 'es-MX' },
      },
    }),
  ],
});
