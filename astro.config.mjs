import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://krill-dev.github.io',
  output: 'static',
  integrations: [react()],
});
