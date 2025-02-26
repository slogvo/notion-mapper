// src/modules/notion-blocks/components/Heading.tsx
import { RichText } from "./RichText";
import { HeadingBlock } from "../types/heading.types";
import { JSX } from "react";

export const Heading = ({ block }: { block: HeadingBlock }) => {
  const level =
    block.type === "heading_1" ? 1 : block.type === "heading_2" ? 2 : 3;
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const className =
    level === 1
      ? "text-3xl font-bold my-8"
      : level === 2
      ? "text-2xl font-semibold my-6"
      : "text-xl font-medium my-4";
  return (
    <Tag className={className}>
      <RichText richText={block[block.type]?.rich_text || []} />
    </Tag>
  );
};
