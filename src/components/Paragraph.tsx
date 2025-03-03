// src/modules/notion-blocks/components/Paragraph.tsx
import { ParagraphBlock } from "../types/paragraph.types";
import { RichText } from "./RichText";

export const Paragraph = ({ block }: { block: ParagraphBlock }) => {
  if (!block || block.type !== "paragraph" || !block.paragraph || !Array.isArray(block.paragraph.rich_text)) {
    console.error("Invalid paragraph block:", block);
    return null;
  }

  return (
    <p className="text-base leading-relaxed mb-4">
      <RichText richText={block.paragraph.rich_text} />
    </p>
  );
};