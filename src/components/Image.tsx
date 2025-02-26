// src/modules/notion-blocks/components/Image.tsx
import { ImageBlock } from "../types/image.types";
import { RichText } from "./RichText";

export const Image = ({ block }: { block: ImageBlock }) => (
  <figure className="my-5">
    <img
      src={
        block.image.type === "external"
          ? block.image.external!.url
          : block.image.file!.url
      }
      alt={block.image.caption.map((t) => t.plain_text).join("") || "Image"}
      className="max-w-full h-auto"
    />
    {block.image.caption.length > 0 && (
      <figcaption className="text-sm text-gray-600 mt-2">
        <RichText richText={block.image.caption} />
      </figcaption>
    )}
  </figure>
);
