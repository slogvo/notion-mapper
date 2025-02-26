// src/modules/notion-blocks/components/Paragraph.tsx
import { ParagraphBlock } from "../types/paragraph.types";
import { RichText } from "./RichText";

export const Paragraph = ({ block }: { block: ParagraphBlock }) => (
  <p className="text-base leading-relaxed mb-4">
    <RichText richText={block.paragraph.rich_text} />
  </p>
);
