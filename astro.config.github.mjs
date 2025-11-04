// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://seanvizm.github.io',
  base: '/astro-mycv',
  vite: {
    server: {
      allowedHosts: ['piosbox.tplinkdns.com','piosbox.local','mbp-m2.local', 'localhost', '127.0.0.1'], // Add your allowed hosts here
    },
  },
  integrations: [
    tailwind(),
    mdx(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ['*'],
        'simple-icons': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,  
      },
    })
  ],
  // Changed to static for GitHub Pages
  output: 'static',
});
