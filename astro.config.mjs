import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind(), netlify()],
  site: 'https://chadhatala.netlify.app'
});
