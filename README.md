# React Notion Blocks

**[Vietnamese](#)** *(See [README.vn.md](README.vn.md) for Vietnamese version)*

**React Notion Blocks** lets you quickly convert **Notion blocks** into **React components**. Perfect for **blogs**, **portfolios**, or **build in public** projects integrating with the **Notion API**. Supports paragraphs, headings, images, tables, code, and more.

---

## 🚀 Quickstart

### Installation
```bash
pnpm add react-notion-blocks
```

### Basic Usage
```typescript
"use client"; // Add this if using Next.js

import { blockMapper } from "react-notion-blocks";
import "react-notion-blocks/styles.css"; // Import CSS for Tailwind
import { NotionBlock } from "react-notion-blocks/types";

const MyPage = ({ blocks }: { blocks: NotionBlock[] }) => {
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default MyPage;
```

**Next.js Note**: Add `"use client"` since the library runs client-side.

### Real-World Example
```typescript
"use client";

import { useEffect, useState } from "react";
import { blockMapper } from "react-notion-blocks";
import "react-notion-blocks/styles.css";
import { NotionBlock } from "react-notion-blocks/types";

const BlogPage = () => {
  const [blocks, setBlocks] = useState<NotionBlock[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchBlocks("your-notion-page-id"); // Replace with your Notion API call
      setBlocks(data);
    }
    fetchData();
  }, []);
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default BlogPage;
```

---

## 🌟 Why Use This Library?

- **Auto-Mapping**: Turns Notion blocks into React components in one line.
- **Broad Support**: Covers nearly all Notion block types (paragraphs, headings, images, etc.).
- **Easy Integration**: Works with any React project, includes TypeScript support.

### Why Notion as a CMS?
- **Free & Simple**: Free personal plan with a drag-and-drop interface.
- **Serverless**: Hosted in the cloud.
- **Flexible API**: Fetch content as JSON for seamless integration.

---

## 🛠️ Customization

### Using Individual Components
```typescript
"use client";

import { Paragraph } from "react-notion-blocks";
import "react-notion-blocks/styles.css";
import { NotionBlock } from "react-notion-blocks/types";

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
3. Commit changes: `git commit -m "Add your-feature"`.
4. Submit a pull request to the `main` branch.