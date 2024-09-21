import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://SaeYoshizaki.github.io/',
  outDir: './docs',
  base: '/wincblog_wordpress',
  integrations: [react()]
});

