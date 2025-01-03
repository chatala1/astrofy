import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://your-site.netlify.app',
  output: 'hybrid', // or 'server'
  integrations: [mdx(), sitemap(), tailwind(), netlify()]
});
