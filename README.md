# 个人博客（Astro）

一个基于 [Astro](https://astro.build) 的轻量个人博客，默认输出纯静态页面，零后端、零成本部署。

## 功能特性

- 🖋 Markdown 写作，内容存放在 `src/content/blog/`
- 🏷 标签分类与标签聚合页
- 📡 RSS 订阅（`/rss.xml`）与自动站点地图
- 🔍 SEO 友好（Open Graph / canonical / sitemap）
- 🌗 明暗主题切换（跟随系统 + 手动切换，本地记忆）
- 💻 代码语法高亮（Shiki）
- 📱 响应式设计

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:4321）
npm run dev

# 构建生产版本（输出到 dist/）
npm run build

# 本地预览构建结果
npm run preview
```

## 写文章

在 `src/content/blog/` 下新建 `.md` 文件，填写前置字段：

```yaml
---
title: 文章标题
description: 一句话摘要（用于列表和 SEO）
pubDate: 2026-09-10          # 必填
updatedDate: 2026-09-12      # 可选
tags: [标签1, 标签2]          # 可选，[] 表示无标签
draft: false                 # true 则不发布（不进列表/RSS）
---
```

正文使用标准 Markdown。文件名（不含扩展名）即 URL 路径，例如 `hello-world.md` → `/blog/hello-world/`。

## 个性化

改站点信息主要看 `src/consts.ts`：

```ts
export const SITE = {
  title: '我的博客',
  description: '...',
  author: '你的名字',
  url: 'https://yourname.vercel.app', // 上线前改成你的域名
  github: 'https://github.com/yourname',
  email: 'you@example.com',
};
```

图标在 `public/favicon.svg`，配色与主题变量在 `src/styles/global.css`。

## 部署

### 方式一：Vercel（推荐，最简单）

1. 把代码推送到 GitHub 仓库。
2. 打开 [vercel.com](https://vercel.com) → **Add New → Project**，导入该仓库。
3. Vercel 会自动识别为 Astro 项目（框架预设 Astro，构建命令 `npm run build`，输出目录 `dist`），直接 **Deploy**。
4. 部署完成后会得到一个 `https://xxx.vercel.app` 地址。

> 上线后把 `src/consts.ts` 的 `url` 改成你的 Vercel 域名，再重新部署。

### 方式二：GitHub Pages

项目已内置 `.github/workflows/deploy.yml` 工作流（基于官方 `withastro/action`）。

1. 在仓库 **Settings → Pages** 中，把 Source 设为 **GitHub Actions**。
2. 在 `astro.config.mjs` 中设置 `base`（项目站必需）：

   ```js
   export default defineConfig({
     site: 'https://<你的用户名>.github.io',
     base: '/<仓库名>',
     // ...
   });
   ```

3. 推送 `main` 分支，Actions 会自动构建并发布到 `https://<用户名>.github.io/<仓库名>/`。

## 可选增强

- 评论：Giscus（GitHub 驱动）或 Waline
- 统计：Umami、Google Analytics、百度统计
- 自定义域名：在 Vercel/Pages 绑定后，记得改 `site` 并配置 DNS

## 目录结构

```
blog/
├── astro.config.mjs
├── public/                 # 静态资源（favicon、robots.txt）
├── src/
│   ├── consts.ts           # 站点全局信息
│   ├── content.config.ts   # 文章集合 schema
│   ├── content/blog/       # Markdown 文章
│   ├── layouts/            # Layout / BlogPost 布局
│   ├── components/         # PostCard 等组件
│   ├── pages/              # 路由页面
│   └── styles/global.css   # 全局样式
└── .github/workflows/deploy.yml
```
