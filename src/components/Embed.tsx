// src/modules/notion-blocks/components/Embed.tsx
import { EmbedBlock } from "../types";
import { RichText } from "./RichText";

export const Embed = ({ block }: { block: EmbedBlock }) => (
  <div className="my-5">
    <iframe
      src={block.embed.url}
      title="Embed content"
      className="w-full h-96"
    />
    {block.embed.caption.length > 0 && (
      <div className="text-sm text-gray-600 mt-2">
        <RichText richText={block.embed.caption} />
      </div>
    )}
  </div>
);
