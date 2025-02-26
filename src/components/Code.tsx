// src/modules/notion-blocks/components/Code.tsx
import { CodeBlock } from "../types/code.types";
import { RichText } from "./RichText";

export const Code = ({ block }: { block: CodeBlock }) => (
  <pre className="bg-gray-100 p-4 rounded-md font-mono my-5">
    <code className={block.code.language}>
      <RichText richText={block.code.rich_text} />
    </code>
    {block.code.caption.length > 0 && (
      <div className="text-sm text-gray-600 mt-2">
        <RichText richText={block.code.caption} />
      </div>
    )}
  </pre>
);
