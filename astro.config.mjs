import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://shrish.io',
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static',
  vite: {
    build: {
      cssMinify: true,
    },
  },
});


