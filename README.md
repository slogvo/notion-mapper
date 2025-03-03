# react-notion-blocks: A Library to Map Notion Blocks to React Components

**[Tiếng Việt](#)** *(Click here for Vietnamese version: [README.vi.md](README.vi.md))*

Hello! **react-notion-blocks** is a handy library designed to help you **map Notion blocks to React components** quickly and effortlessly. If you're looking to build a **blog**, **portfolio**, or any project related to writing in the spirit of **"build in public"**, while integrating content from the **Notion API** into your React app, this tool is for you! From paragraphs, headings, images, tables, to code blocks, everything is supported out of the box!

---

## 🌟 Why Use react-notion-blocks?

When embarking on a **build in public** journey—a popular trend in the developer community where you publicly share your project-building process—creating a blog to document your progress is a fantastic idea. A blog not only helps you connect with the community but also serves as a space to store your experiences, knowledge, and stories. To do that, you'll need a suitable **CMS (Content Management System)**. Let's explore why **Notion** stands out as a great choice and how **react-notion-blocks** simplifies integrating Notion into your blog.

### 1. Popular CMS Options for Blogging
There are several CMS platforms you can choose to manage content for your blog. Here are some popular options along with their key characteristics:

- **WordPress**: The most widely used CMS globally, powering over 43% of websites (according to W3Techs, 2023). WordPress is highly flexible, offering thousands of plugins and themes, making it suitable for both personal blogs and enterprise websites. It requires managing hosting, security, and updates, which might demand more effort if you're just starting out.
- **Ghost**: A lightweight CMS focused on blogging, known for its speed and simplicity in content management. Ghost offers strong SEO support and an API for integrating content into apps. You’ll need to manage a server for the self-hosted version, or opt for the hosted version.
- **Strapi**: An open-source headless CMS, ideal for developers who want full control over API and UI customization. Strapi delivers content in JSON format, but setting it up and maintaining it requires technical expertise.
- **Contentful**: A powerful headless CMS focused on delivering content via API. Contentful is great for complex projects, though its pricing (starting at $300/month for the basic plan) might be a consideration for smaller projects.

Each CMS has its own strengths, depending on your needs and technical skills. For instance, WordPress is excellent if you're looking for a robust system with a large community, while Ghost might be preferable for a lightweight, SEO-optimized solution.

### 2. Why Choose Notion as a CMS for Your Blog?
**Notion** has become a popular choice across diverse communities, including students, professionals, and businesses using it for project management. Here’s why Notion can be a compelling CMS choice for your blog:

- **User-Friendly and Free for Individuals**: Notion offers an intuitive drag-and-drop interface, allowing you to create content without coding knowledge. The free plan is robust for personal projects, with a 5MB upload limit per file (as per Notion’s policy, 2023).
- **All-in-One Platform**: With Notion, you can manage your blog content, notes, schedules, and even databases in one place. For example, you can create a database to store all your blog posts and retrieve them via API for display.
- **Serverless**: Notion hosts your data in the cloud, so you don’t need to worry about hosting, security, or software updates—tasks often required by CMS platforms like WordPress or self-hosted Ghost.
- **Powerful API**: The **Notion API** lets you retrieve content in JSON format, making it easy to integrate into any application. For instance, when used with server-side rendering frameworks like Next.js or Nuxt, the structured data can be rendered into SEO-friendly HTML, ensuring better visibility on search engines.

### 3. How Does the Notion API Return Data?
When you call the **Notion API** to retrieve content (e.g., the content of a page), the data is returned as a list of **blocks**—individual content units like paragraphs, headings, images, or tables. Here’s an example of a response from the API:

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

- **Data Structure**: Each block has a `type` (block type) and corresponding data (e.g., `rich_text` for text, `url` for images). While this structure is flexible, it can be complex since you need to handle each block type individually to render it into UI components.
- **Challenge**: Rendering this data in React manually requires parsing each block’s type and converting it into components (e.g., `<h1>`, `<p>`, `<img>`), which can be time-consuming, especially with many block types.

### 4. The Role of react-notion-blocks
This is where **react-notion-blocks** comes in handy:

- **Automated Mapping**: The library handles the entire process of parsing and mapping Notion blocks to React components, saving you time and effort.
- **Comprehensive Support**: It supports most common Notion block types, from paragraphs, headings, lists, images to tables and code blocks.
- **Simplified Integration**: With the `blockMapper` function, you can render all your content from Notion in just one line of code, without writing separate logic for each block type.

For example, instead of manually writing logic like this:

```typescript
if (block.type === "paragraph") {
  return <p>{block.paragraph.rich_text[0].text.content}</p>;
} else if (block.type === "heading_1") {
  return <h1>{block.heading_1.rich_text[0].text.content}</h1>;
} // ... and other block types
```

You can simply use:

```typescript
{blocks.map((block) => blockMapper(block))}
```

---

## 🚀 Key Features

- **Automatic Mapping**: Convert **Notion blocks** to **React components** with a single line of code.
- **Broad Support**: Covers most Notion block types.
- **Seamless Integration**: Works well in any React project.
- **Flexible Customization**: Use default components or customize as needed.
- **TypeScript Support**: Includes full type definitions for safer and cleaner code.

---

## 📦 Installation

Install the library via NPM with this command:

```bash
npm install react-notion-blocks
```

Or if you use Yarn:

```bash
yarn add react-notion-blocks
```

---

## 🛠️ Usage

### 1. Quick Mapping with `blockMapper`

The `blockMapper` function helps you render an entire list of Notion blocks:

```typescript
import { blockMapper } from "react-notion-blocks";
import { NotionBlock } from "react-notion-blocks/types";

const MyPage = ({ blocks }: { blocks: NotionBlock[] }) => {
  return (
    <div>
      {blocks.map((block) => blockMapper(block))}
    </div>
  );
};
```

### 2. Customizing with Individual Components

If you want to customize, you can import specific components:

```typescript
import { Paragraph, Heading } from "react-notion-blocks";
import { NotionBlock } from "react-notion-blocks/types";

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

## 📚 Real-World Example

Here’s how to fetch data from Notion and display it in React:

```typescript
import { useEffect, useState } from "react";
import { blockMapper } from "react-notion-blocks";
import { NotionBlock } from "react-notion-blocks/types";

const BlogPage = () => {
  const [blocks, setBlocks] = useState<NotionBlock[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlocks("your-notion-page-id"); // Mock function to fetch data from Notion API
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

## 🔧 Customization

You can add your own styling by wrapping components:

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

## 🤝 Contributing

We’d love to have your support! To contribute:

1. Fork the repository on GitHub.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add XYZ feature"`).
4. Submit a pull request to the `main` branch.
