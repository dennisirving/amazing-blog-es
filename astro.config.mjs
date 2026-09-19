import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts';

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 项目站（https://<user>.github.io/<repo>/）时，
  // 需要额外设置 base: '/<repo>/'，Vercel 则无需设置。
  site: SITE.url,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
