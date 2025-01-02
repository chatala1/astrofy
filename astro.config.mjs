import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmosis.netlify.app',
  output: "hybrid",
  integrations: [mdx(), sitemap(), tailwind()]
});

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // or true
  };
}

