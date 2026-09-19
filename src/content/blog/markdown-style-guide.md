---
title: Markdown 写作样式指南
description: 一篇展示本博客支持的 Markdown 语法与排版效果的示例文章。
pubDate: 2026-09-05
tags: [教程, Markdown]
---

这篇文章演示了本博客支持的常见 Markdown 语法，方便你作为写作参考。

## 二级标题

正文段落直接书写即可，段落之间用空行分隔。

### 三级标题

#### 列表

无序列表：

- 第一项
- 第二项
  - 嵌套项
- 第三项

有序列表：

1. 第一步
2. 第二步
3. 第三步

#### 引用

> 学而不思则罔，思而不学则殆。
>
> —— 《论语》

#### 行内代码与代码块

行内代码：`const x = 42`。

带语言高亮的代码块：

```ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

```python
def fib(n: int) -> int:
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

#### 链接与图片

这是一个[链接](https://astro.build)。

![示例图片说明](https://placehold.co/800x400/4f46e5/ffffff?text=Blog+Image)

#### 表格

| 语法 | 说明 |
| ---- | ---- |
| `#` | 一级标题 |
| `**粗体**` | 加粗 |
| `> 引用` | 引用块 |

#### 分隔线

---

以上就是本博客支持的常用语法。写作时把 Markdown 文件放到 `src/content/blog/` 目录即可自动发布。
