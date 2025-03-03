# React Notion Block: Thư viện ánh xạ Notion Blocks thành React Components

**[English](#)** *(Click here for English version: [README.md](README.md))*

**React Notion Block** là một thư viện tiện lợi giúp bạn **chuyển đổi các block từ Notion thành React components** một cách nhanh chóng và dễ dàng. Nếu bạn đang muốn xây dựng một **blog**, **portfolio**, hoặc bất kỳ dự án nào liên quan đến viết lách trong tinh thần **"build in public"**, đồng thời tích hợp nội dung từ **Notion API** vào ứng dụng React, thì đây chính là công cụ dành cho bạn! Từ đoạn văn, tiêu đề, hình ảnh, bảng đến mã nguồn, tất cả đều được hỗ trợ sẵn!

---

## 🌟 Vì sao bạn nên dùng React Notion Block?

Khi bạn bắt đầu hành trình **build in public** – một xu hướng phổ biến trong cộng đồng nhà phát triển, nơi bạn chia sẻ quá trình phát triển dự án của mình công khai – việc xây dựng một blog để ghi lại tiến trình là một ý tưởng tuyệt vời. Blog không chỉ giúp bạn kết nối với cộng đồng mà còn là nơi lưu giữ kinh nghiệm, kiến thức và câu chuyện của bạn. Để làm được điều đó, bạn cần một **CMS (Content Management System)** phù hợp. Dưới đây, mình sẽ giải thích lý do tại sao **Notion** là một lựa chọn đáng cân nhắc, và cách **React Notion Block** giúp bạn tích hợp Notion vào blog của mình dễ dàng hơn.

### 1. Các lựa chọn CMS phổ biến cho blog
Có nhiều nền tảng CMS mà bạn có thể sử dụng để quản lý nội dung cho blog của mình. Dưới đây là một số lựa chọn phổ biến, cùng với những đặc điểm chính để bạn cân nhắc:

- **WordPress**: Là CMS phổ biến nhất thế giới, hiện cung cấp nền tảng cho hơn 43% các trang web (theo thống kê từ W3Techs, 2023). WordPress linh hoạt, có hàng nghìn plugin và theme, phù hợp cho cả blog cá nhân lẫn trang web doanh nghiệp. Tuy nhiên, nó thường yêu cầu bạn quản lý hosting, bảo mật và cập nhật plugin/theme, điều này có thể tốn thời gian nếu bạn mới bắt đầu.
- **Ghost**: Một CMS tập trung vào blog, nhẹ và nhanh, với giao diện quản lý nội dung đơn giản. Ghost hỗ trợ tốt cho SEO và có API để tích hợp nội dung vào ứng dụng. Tuy nhiên, bạn cần tự quản lý server nếu dùng phiên bản tự host, hoặc trả phí cho phiên bản hosted.
- **Strapi**: Một headless CMS mã nguồn mở, lý tưởng cho các nhà phát triển muốn tự do tùy chỉnh API và giao diện. Strapi cho phép bạn xây dựng nội dung dưới dạng JSON, nhưng đòi hỏi kỹ năng kỹ thuật để thiết lập và duy trì.
- **Contentful**: Một headless CMS mạnh mẽ, tập trung vào việc cung cấp nội dung qua API. Contentful phù hợp với các dự án phức tạp, nhưng chi phí có thể cao (gói cơ bản bắt đầu từ $300/tháng) và không lý tưởng cho các dự án nhỏ.

Mỗi CMS trên đều có điểm mạnh riêng, tùy thuộc vào nhu cầu và kỹ năng của bạn. Nếu bạn cần một hệ thống mạnh mẽ với cộng đồng lớn, WordPress là lựa chọn tốt. Nếu bạn muốn một giải pháp nhẹ và tối ưu cho SEO, Ghost đáng để thử. Nhưng nếu bạn đang tìm kiếm một cách tiếp cận đơn giản, linh hoạt và không cần quản lý server, thì **Notion** có thể là một lựa chọn đáng cân nhắc.

### 2. Tại sao chọn Notion làm CMS cho blog?
**Notion** đã trở thành một công cụ được ưa chuộng trong nhiều cộng đồng, từ học sinh, sinh viên, người đi làm đến các doanh nghiệp sử dụng để quản lý dự án. Dưới đây là những lý do thuyết phục để chọn Notion làm CMS cho blog của bạn:

- **Dễ sử dụng, miễn phí cho cá nhân**: Notion cung cấp giao diện kéo-thả trực quan, giúp bạn dễ dàng tạo nội dung mà không cần biết code. Gói miễn phí của Notion đủ mạnh cho các dự án cá nhân, với giới hạn 5MB cho mỗi file upload (theo chính sách của Notion, 2023).
- **Tất cả trong một**: Notion cho phép bạn quản lý nội dung blog, ghi chú, lịch trình, và thậm chí là cơ sở dữ liệu (database) trong cùng một nền tảng. Ví dụ, bạn có thể tạo một database để lưu trữ tất cả bài viết, sau đó truy xuất qua API để hiển thị trên blog.
- **Không cần server**: Notion lưu trữ dữ liệu trên đám mây, giúp bạn không phải lo về hosting, bảo mật hay cập nhật phần mềm – điều mà các CMS như WordPress hoặc Ghost (self-hosted) thường yêu cầu.
- **API mạnh mẽ và linh hoạt**: **Notion API** cho phép bạn truy xuất nội dung dưới dạng JSON, rất phù hợp để tích hợp vào bất kỳ ứng dụng nào. Ví dụ khi kết hợp với các framework render phía server như Next.js hoặc Nuxt, dữ liệu được tổ chức rõ ràng có thể được hiển thị thành HTML thân thiện với SEO, giúp tăng khả năng hiển thị trên công cụ tìm kiếm.

### 3. Notion API trả về dữ liệu như thế nào?
Khi bạn gọi **Notion API** để lấy nội dung (ví dụ: nội dung của một trang), dữ liệu sẽ được trả về dưới dạng một danh sách các **block** (khối nội dung). Mỗi block đại diện cho một phần tử nội dung, như đoạn văn, tiêu đề, hình ảnh, hoặc bảng. Dưới đây là một ví dụ về phản hồi từ API khi bạn lấy nội dung một trang:

```json
[
  {
    "object": "block",
    "id": "c02fc1d3-db8b-45c5-a222-27595b15aea7",
    "parent": {
      "type": "page_id",
      "page_id": "59833787-2cf9-4fdf-8782-e53db20768a5"
    },
    "created_time": "2022-03-01T19:05:00.000Z",
    "last_edited_time": "2022-07-06T19:41:00.000Z",
    "created_by": {
      "object": "user",
      "id": "ee5f0f84-409a-440f-983a-a5315961c6e4"
    },
    "last_edited_by": {
      "object": "user",
      "id": "ee5f0f84-409a-440f-983a-a5315961c6e4"
    },
    "has_children": false,
    "archived": false,
    "in_trash": false,
    "type": "heading_2",
    "heading_2": {
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "Lacinato kale",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "Lacinato kale",
          "href": null
        }
      ],
      "color": "default",
      "is_toggleable": false
    }
  }
]
```

- **Phân tích dữ liệu**: Mỗi block có một `type` (loại block) và dữ liệu tương ứng (như `rich_text` cho văn bản, `url` cho hình ảnh). Cấu trúc này rất linh hoạt nhưng cũng khá phức tạp, vì bạn cần xử lý từng loại block riêng để render thành giao diện.
- **Thách thức**: Nếu làm thủ công, bạn phải viết code để kiểm tra `type` của mỗi block và chuyển đổi nó thành các thành phần giao diện (như `<h1>`, `<p>`, `<img>`). Điều này có thể mất nhiều thời gian, đặc biệt khi bạn làm việc với nhiều loại block khác nhau.

### 4. Vai trò của React Notion Block
Đây chính là lúc **React Notion Block** trở nên hữu ích:

- **Tự động ánh xạ**: Thư viện này xử lý toàn bộ quá trình phân tích và ánh xạ các block từ Notion thành React components, giúp bạn tiết kiệm thời gian và công sức.
- **Hỗ trợ đa dạng**: Từ đoạn văn, tiêu đề, danh sách, hình ảnh đến bảng và mã nguồn, thư viện hỗ trợ hầu hết các loại block phổ biến của Notion.
- **Đơn giản hóa tích hợp**: Với hàm `blockMapper`, bạn có thể render toàn bộ nội dung từ Notion chỉ trong một dòng code, thay vì phải viết logic riêng cho từng loại block.

Ví dụ, thay vì phải viết logic thủ công như sau:

```typescript
if (block.type === "paragraph") {
  return <p>{block.paragraph.rich_text[0].text.content}</p>;
} else if (block.type === "heading_1") {
  return <h1>{block.heading_1.rich_text[0].text.content}</h1>;
} // ... và nhiều loại block khác
```

Bạn chỉ cần gọi:

```typescript
{blocks.map((block) => blockMapper(block))}
```

---

## 🚀 Tính năng chính

- **Ánh xạ tự động**: Chuyển đổi **Notion blocks** thành **React components** chỉ với một dòng code.
- **Hỗ trợ toàn diện**: Đáp ứng hầu hết các loại block của Notion.
- **Tích hợp dễ dàng**: Hoạt động tốt trong mọi dự án React.
- **Tùy chỉnh linh hoạt**: Dùng component mặc định hoặc tự điều chỉnh theo ý thích.
- **Hỗ trợ TypeScript**: Đi kèm định nghĩa kiểu đầy đủ, giúp code sạch sẽ và dễ bảo trì.

---

## 📦 Cài đặt

Bạn có thể cài đặt thư viện qua NPM bằng lệnh:

```bash
npm install React notion Block
```

Hoặc dùng Yarn:

```bash
yarn add React notion Block
```

---

## 🛠️ Cách sử dụng

### 1. Ánh xạ nhanh với `blockMapper`

Hàm `blockMapper` sẽ giúp bạn render toàn bộ danh sách block từ Notion:

```typescript
import { blockMapper } from "React notion Block";
import { NotionBlock } from "React notion Block/types";

const MyPage = ({ blocks }: { blocks: NotionBlock[] }) => {
  return (
    <div>
      {blocks.map((block) => blockMapper(block))}
    </div>
  );
};
```

### 2. Tùy chỉnh với component riêng lẻ

Nếu muốn cá nhân hóa, bạn có thể import từng component cụ thể:

```typescript
import { Paragraph, Heading } from "React notion Block";
import { NotionBlock } from "React notion Block/types";

const CustomBlock = ({ block }: { block: NotionBlock }) => {
  if (block.type === "paragraph") {
    return <Paragraph block={block} />;
  } else if (block.type.startsWith("heading")) {
    return <Heading block={block} />;
  }
  return null;
};
```

---

## 📚 Ví dụ thực tế

Dưới đây là cách lấy dữ liệu từ Notion và hiển thị trong React:

```typescript
import { useEffect, useState } from "react";
import { blockMapper } from "react-notion-blocks";
import { NotionBlock } from "react-notion-blocks/types";

const BlogPage = () => {
  const [blocks, setBlocks] = useState<NotionBlock[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlocks("your-notion-page-id"); // Giả định hàm lấy dữ liệu từ Notion API
      setBlocks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {blocks.map((block) => blockMapper(block))}
    </div>
  );
};
```

---

## 🔧 Tùy chỉnh giao diện

Bạn có thể thêm phong cách riêng bằng cách bao bọc component:

```typescript
import { Paragraph } from "react-notion-blocks";

const CustomParagraph = ({ block }: { block: NotionBlock }) => {
  return (
    <div className="custom-paragraph">
      <Paragraph block={block} />
    </div>
  );
};
```

---

## 🤝 Đóng góp

Mình rất mong nhận được sự hỗ trợ từ bạn! Để đóng góp:

1. Fork repository trên GitHub.
2. Tạo branch mới (`git checkout -b feature/your-feature`).
3. Commit thay đổi của bạn (`git commit -m "your-new-feature"`).
4. Gửi pull request về branch `main`.

