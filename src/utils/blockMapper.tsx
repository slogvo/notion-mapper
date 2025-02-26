import { NotionBlock } from "../types";
import { JSX } from "react";
import {
  Paragraph,
  Heading,
  Divider,
  Image,
  Code,
  Quote,
  BulletedListItem,
  NumberedListItem,
  ToDo,
  Table,
  TableRow,
  Callout,
  Embed,
  Bookmark,
  File,
  Video,
  Audio,
  PDF,
  Equation,
  ChildPage,
  ChildDatabase,
  LinkPreview,
  Column,
  ColumnList,
  SyncedBlock,
  Breadcrumb,
  TableOfContents,
  LinkToPage,
} from "@/components";

export const blockMapper = (block: NotionBlock): JSX.Element | null => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph key={block.id} block={block} />;
    case "heading_1":
    case "heading_2":
    case "heading_3":
      return <Heading key={block.id} block={block} />;
    case "divider":
      return <Divider key={block.id} />;
    case "image":
      return <Image key={block.id} block={block} />;
    case "code":
      return <Code key={block.id} block={block} />;
    case "quote":
      return <Quote key={block.id} block={block} />;
    case "bulleted_list_item":
      return <BulletedListItem key={block.id} block={block} />;
    case "numbered_list_item":
      return <NumberedListItem key={block.id} block={block} />;
    case "to_do":
      return <ToDo key={block.id} block={block} />;
    case "table":
      return <Table key={block.id} />;
    case "table_row":
      return <TableRow key={block.id} block={block} />;
    case "callout":
      return <Callout key={block.id} block={block} />;
    case "embed":
      return <Embed key={block.id} block={block} />;
    case "bookmark":
      return <Bookmark key={block.id} block={block} />;
    case "file":
      return <File key={block.id} block={block} />;
    case "video":
      return <Video key={block.id} block={block} />;
    case "audio":
      return <Audio key={block.id} block={block} />;
    case "pdf":
      return <PDF key={block.id} block={block} />;
    case "equation":
      return <Equation key={block.id} block={block} />;
    case "child_page":
      return <ChildPage key={block.id} block={block} />;
    case "child_database":
      return <ChildDatabase key={block.id} block={block} />;
    case "link_preview":
      return <LinkPreview key={block.id} block={block} />;
    case "column":
      return <Column key={block.id} />;
    case "column_list":
      return <ColumnList key={block.id} />;
    case "synced_block":
      return <SyncedBlock key={block.id} />;
    case "breadcrumb":
      return <Breadcrumb key={block.id} />;
    case "table_of_contents":
      return <TableOfContents key={block.id} />;
    case "link_to_page":
      return <LinkToPage key={block.id} block={block} />;
    default:
      console.warn(`Unsupported block type: ${(block as NotionBlock).type}`);
      return null;
  }
};
