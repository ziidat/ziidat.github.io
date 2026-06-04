import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ziidat.github.io',
  integrations: [sitemap()],
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});