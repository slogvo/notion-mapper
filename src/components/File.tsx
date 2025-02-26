// src/modules/notion-blocks/components/File.tsx
import { FileBlock } from "../types/file.types";
import { RichText } from "./RichText";

export const File = ({ block }: { block: FileBlock }) => (
  <div className="my-5">
    <a
      href={
        block.file.type === "external"
          ? block.file.external!.url
          : block.file.file!.url
      }
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {block.file.caption.length > 0 ? (
        <RichText richText={block.file.caption} />
      ) : (
        "Download File"
      )}
    </a>
  </div>
);
