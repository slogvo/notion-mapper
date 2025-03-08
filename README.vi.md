# React Notion Blocks

**[English](#)** *(See [README.md](README.md) for English version)*

**React Notion Blocks** giúp bạn nhanh chóng chuyển đổi **Notion blocks** thành **React components**. Hoàn hảo cho **blog**, **portfolio**, hoặc dự án **build in public** tích hợp với **Notion API**. Hỗ trợ từ đoạn văn, tiêu đề, hình ảnh đến bảng và mã nguồn.

---

## 🚀 Quickstart

### Cài đặt
```bash
pnpm add react-notion-blocks
```

### Cấu hình Tailwind CSS
Thêm dòng sau vào file `tailwind.config.ts` để không bị mất các style Tailwind được dùng trong thư viện này, khi mà ứng dụng của bạn có thể chưa dùng đến các lớp Class đó khi nào (do cơ chế Purge)

```typescript
content: [
  ...
  './node_modules/react-notion-blocks/**/*.{js,ts,jsx,tsx,css}',
],
```

### Sử dụng cơ bản
```typescript
"use client"; // Thêm nếu dùng Next.js

import { blockMapper, type NotionBlock } from 'react-notion-blocks';

const MyPage = ({ blocks }: { blocks: NotionBlock[] }) => {
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default MyPage;
```

**Lưu ý Next.js**: Thêm `"use client"` vì thư viện chạy phía client.

### Ví dụ thực tế
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

## 🌟 Tại sao chọn thư viện này?

- **Tự động ánh xạ**: Chuyển Notion blocks thành React components chỉ với 1 dòng code.
- **Hỗ trợ đa dạng**: Gần như tất cả loại block của Notion (đoạn văn, tiêu đề, hình ảnh, v.v.).
- **Dễ tích hợp**: Phù hợp mọi dự án React, có hỗ trợ TypeScript.

### Tại sao dùng Notion làm CMS?
- **Miễn phí, dễ dùng**: Gói cá nhân miễn phí, giao diện kéo-thả.
- **Không cần server**: Lưu trữ trên đám mây.
- **API linh hoạt**: Truy xuất nội dung dạng JSON, tích hợp dễ dàng.

---

## 🛠️ Tùy chỉnh

### Dùng component riêng
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

## 📦 Dependencies

Thư viện tích hợp sẵn các dependencies sau:

- **better-react-mathjax** (`^2.1.0`) - Hỗ trợ hiển thị công thức toán học với MathJax.
- **prismjs** (`^1.29.0`) - Dùng để highlight code trong các block code.
---

## 🤝 Đóng góp

1. Fork repo trên GitHub.
2. Tạo branch: `git checkout -b feature/your-feature`.
3. Commit: `git commit -m "your-feature"`.
4. Gửi pull request về branch `main`.

