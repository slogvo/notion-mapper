// src/modules/notion-blocks/components/Code.tsx
import { useEffect, useRef } from "react";
import { CodeBlock } from "../types/code.types";
import { RichText } from "./RichText";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

export const Code = ({ block }: { block: CodeBlock }) => {
  const codeRef = useRef<HTMLElement>(null);

  // Highlight code sau khi render
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [block.code.rich_text]);

  // Lấy nội dung code từ rich_text
  const codeContent = block.code.rich_text
    .map((text) => text.text.content)
    .join("");

  // Chuẩn hóa ngôn ngữ cho Prism
  const language = block.code.language.toLowerCase() || "plaintext";

  return (
    <div className="my-5 bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <span className="text-sm text-gray-300">{language}</span>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code
          ref={codeRef}
          className={`language-${language} font-mono text-sm text-white`}
        >
          {codeContent}
        </code>
      </pre>
      {block.code.caption.length > 0 && (
        <div className="px-4 py-2 bg-gray-800 text-sm text-gray-400">
          <RichText richText={block.code.caption} />
        </div>
      )}
    </div>
  );
};
