import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 项目站：https://dennisirving.github.io/amazing-blog-es/
  // site 填源站；base 填仓库名子路径。改用 Vercel 时删掉 base 即可。
  site: 'https://dennisirving.github.io',
  base: '/amazing-blog-es/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
