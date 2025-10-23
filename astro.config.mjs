// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
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
  output: 'server',
  adapter: vercel(),
  
});
