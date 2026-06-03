// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://<user>.github.io/<repo>/
// User/org site (username.github.io): set base to '/'
const base = process.env.ASTRO_BASE ?? '/portfolio/';

export default defineConfig({
  site: process.env.ASTRO_SITE ?? 'https://ziidat.github.io',
  base,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
