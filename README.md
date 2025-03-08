# React Notion Blocks

**[Tiếng_Việt](#)** *(Xem tại [README.vi.md](README.vi.md) cho bản Tiếng Việt)*


**React Notion Blocks** helps you quickly convert **Notion blocks** into **React components**. Perfect for **blogs**, **portfolios**, or **build-in-public** projects integrated with **Notion API**. Supports everything from paragraphs, headings, and images to tables and code blocks.

---

## 🚀 Quickstart

### Installation
```bash
pnpm add react-notion-blocks
```

### Tailwind CSS Configuration
Add the following line to your `tailwind.config.ts` file to ensure Tailwind styles used in this library are not removed by PurgeCSS:

```typescript
content: [
  ...
  './node_modules/react-notion-blocks/**/*.{js,ts,jsx,tsx,css}',
],
```

### Basic Usage
```typescript
"use client"; // Add this if using Next.js

import { blockMapper, type NotionBlock } from 'react-notion-blocks';

const MyPage = ({ blocks }: { blocks: NotionBlock[] }) => {
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default MyPage;
```

**Note for Next.js users**: Add `"use client"` because this library runs on the client side.

### Real-world Example
```typescript
"use client";

import { useEffect, useState } from "react";
import { blockMapper, type NotionBlock } from 'react-notion-blocks';

const BlogPage = () => {
  const [blocks, setBlocks] = useState<NotionBlock[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchBlocks("your-api-return-blocks");
      setBlocks(data);
    }
    fetchData();
  }, []);
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default BlogPage;
```

---

## 📦 Dependencies

This library includes the following dependencies:

- **better-react-mathjax** (`^2.1.0`) - Supports rendering mathematical formulas using MathJax.
- **prismjs** (`^1.29.0`) - Used for syntax highlighting in code blocks.

---

## 🌟 Why Choose This Library?

- **Automatic Mapping**: Converts Notion blocks into React components with just one line of code.
- **Wide Support**: Supports almost all Notion block types (paragraphs, headings, images, etc.).
- **Easy Integration**: Suitable for any React project, with TypeScript support.

### Why Use Notion as a CMS?
- **Free & User-Friendly**: Free personal plan with an intuitive drag-and-drop interface.
- **No Server Required**: Cloud-based storage.
- **Flexible API**: Fetches content in JSON format, easy to integrate.

---

## 🛠️ Customization

### Using Custom Components
```typescript
"use client";

import { Paragraph, type NotionBlock } from 'react-notion-blocks';

const CustomParagraph = ({ block }: { block: NotionBlock }) => (
  <div className="custom-paragraph">
    <Paragraph block={block} />
  </div>
);

export default CustomParagraph;
```

---

## 🤝 Contributing

1. Fork the repository on GitHub.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "your-feature"`.
4. Submit a pull request to the `main` branch.

