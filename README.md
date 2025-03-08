# React Notion Blocks

**[English](#)** *(See [README.md](README.md) for English version)*

**React Notion Blocks** helps you quickly convert **Notion blocks** into **React components**. Perfect for **blogs**, **portfolios**, or **build-in-public** projects integrated with the **Notion API**. Supports everything from paragraphs, headings, and images to tables and code blocks.

---

## 🚀 Quickstart

### Installation
```bash
pnpm add react-notion-blocks
```

### Tailwind CSS Configuration
Add the following line to your `tailwind.config.ts` file to integrate styles from the library:

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

**Next.js Note**: Add `"use client"` since the library runs on the client side.

### Real-World Example
```typescript
"use client";

import { useEffect, useState } from "react";
import { blockMapper, type NotionBlock } from 'react-notion-blocks';

const BlogPage = () => {
  const [blocks, setBlocks] = useState<NotionBlock[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchBlocks("your-notion-page-id"); // Function to call Notion API
      setBlocks(data);
    }
    fetchData();
  }, []);
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default BlogPage;
```

---

## 🌟 Why Choose This Library?

- **Automatic Mapping**: Convert Notion blocks to React components with just one line of code.
- **Wide Support**: Nearly all Notion block types (paragraphs, headings, images, etc.).
- **Easy Integration**: Fits seamlessly into any React project, with TypeScript support.

### Why Use Notion as a CMS?
- **Free and User-Friendly**: Free personal plan with a drag-and-drop interface.
- **No Server Needed**: Cloud-hosted storage.
- **Flexible API**: Retrieve content as JSON for easy integration.

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

1. Fork the repo on GitHub.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "your-feature"`.
4. Submit a pull request to the `main` branch.
```
