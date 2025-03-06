// src/modules/notion-blocks/components/Paragraph.tsx
import { ParagraphBlock } from "../types/paragraph.types";
import { Children } from "./Children";
import { RichText } from "./RichText";

export const Paragraph = ({ block }: { block: ParagraphBlock }) => {
  if (!block || block.type !== "paragraph" || !block.paragraph || !Array.isArray(block.paragraph.rich_text)) {
    console.error("Invalid paragraph block:", block);
    return null;
  }

  return (
    <div>
      <p className="text-base leading-relaxed mb-4">
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.has_children && block.children && (<Children className="ml-4" children={block.children}/>)}
    </div>
  );
};