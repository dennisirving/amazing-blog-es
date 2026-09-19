// 站点全局配置：改这里即可。
export const SITE = {
  title: '我的博客',
  description: '一个关于技术、生活与思考的个人博客',
  author: '你的名字',
  // 网站正式地址（GitHub Pages 项目站，含子路径）
  url: 'https://dennisirving.github.io/amazing-blog-es/',
  lang: 'zh-CN',
  // 社交链接，展示在「关于」页
  github: 'https://github.com/dennisirving',
  email: 'you@example.com',
};

/**
 * 给站内绝对路径拼上 Astro 的 base 前缀。
 * GitHub Pages 项目站（base = '/amazing-blog-es/'）必需；
 * 部署在根路径（如 Vercel，base = '/'）时原样返回。
 * 用法：<a href={withBase('/blog/')}>文章</a>
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // '' 或 '/amazing-blog-es'
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
