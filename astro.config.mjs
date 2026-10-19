import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tcplot.com',
  output: 'static',
  redirects: {
    '/blind-data': '/one-dataset',
    '/perception-lab': '/opposing-data-stories',
  },
  integrations: [tailwind()],
});
