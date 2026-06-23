// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://suyihung.pages.dev',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
