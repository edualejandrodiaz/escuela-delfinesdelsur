import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://delfinesdelsur.cl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
