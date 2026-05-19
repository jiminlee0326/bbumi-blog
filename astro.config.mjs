import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO before deploying: replace with the public URL where this site is served.
  //  - For a user/org site (https://USERNAME.github.io), use that URL and leave `base` unset.
  //  - For a project site (https://USERNAME.github.io/REPO/), use the same URL and set `base: '/REPO/'`.
  site: 'https://jiminlee0326.github.io',
  base: '/bbumi-blog/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
