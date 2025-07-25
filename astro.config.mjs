// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/*.{jsx,tsx}'],
      experimentalReactChildren: true,
    })
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      }
    },
    esbuild: {
      charset: 'utf8'
    }
  }
});