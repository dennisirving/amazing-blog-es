---
title: 用 Astro 搭建并免费部署个人博客
description: 记录这个博客的技术选型、目录结构与部署流程。
pubDate: 2026-09-10
updatedDate: 2026-09-12
tags: [教程, Astro, 部署]
---

这篇文章记录了这个博客是怎么搭起来的，方便日后回顾，也希望能帮到有同样需求的人。

## 技术选型

- **[Astro](https://astro.build)**：默认输出纯静态页面，性能极佳，且支持在页面里混用 React/Vue 组件。
- **内容集合（Content Collections）**：文章以 Markdown 存放，带类型安全的前置字段校验。
- **免费托管**：Vercel 或 GitHub Pages，零成本、免备案、自带 HTTPS 与 CDN。

## 目录结构

```
blog/
├── astro.config.mjs        # 站点与集成配置
├── src/
│   ├── consts.ts           # 站点全局信息（标题/作者/域名）
│   ├── content.config.ts   # 文章集合 schema
│   ├── content/blog/       # 所有 Markdown 文章
│   ├── layouts/            # 基础布局与文章布局
│   ├── components/         # 文章卡片等组件
│   ├── pages/              # 路由页面
│   └── styles/global.css   # 全局样式与主题变量
└── public/                 # 静态资源（图标、robots.txt）
```

## 如何写文章

1. 在 `src/content/blog/` 新建一个 `.md` 文件，例如 `my-post.md`。
2. 填写前置字段：

```yaml
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-09-10
tags: [标签1, 标签2]
---
```

3. 保存后，本地 `npm run dev` 即可预览；推送到远程仓库后自动部署。

`draft: true` 的文章不会出现在列表和 RSS 中，适合存草稿。

## 部署

详细步骤见项目 `README.md`。核心就两步：

1. 把代码推到 GitHub 仓库。
2. 在 Vercel 或 GitHub Pages 里导入该仓库，等待自动构建完成。

上线后记得把 `src/consts.ts` 里的 `url` 换成你自己的域名。

## 下一步可以加的功能

- 评论系统（Giscus / Waline）
- 访客统计（Umami / Google Analytics）
- 搜索、分页、目录（TOC）
- 自定义域名 + 备案

这是一个可以长期迭代的起点。祝你写作愉快 ✍️
