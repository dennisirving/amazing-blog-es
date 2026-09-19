import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章集合：Markdown 文件放在 src/content/blog/ 下即可自动收录。
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), // 设为 true 的文章不会出现在列表与 RSS 中
    author: z.string().optional(),
  }),
});

export const collections = { blog };
