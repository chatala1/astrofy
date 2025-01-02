import { defineConfig } from 'astro/config'; import mdx from '@astrojs/mdx'; import sitemap from '@astrojs/sitemap'; import tailwind from '@astrojs/tailwind'; import netlify from '@astrojs/netlify'; export default defineConfig({ site: 'https://cosmosis.netlify.app', output: 'hybrid', // or 'server' integrations: [mdx(), sitemap(), tailwind(), netlify()] });
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // or true
  };
}

