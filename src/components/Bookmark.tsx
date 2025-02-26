// src/modules/notion-blocks/components/Bookmark.tsx
import { BookmarkBlock } from "../types/bookmark.types";
import { RichText } from "./RichText";

export const Bookmark = ({ block }: { block: BookmarkBlock }) => (
  <a
    href={block.bookmark.url}
    className="block p-2 bg-gray-100 rounded-md text-blue-500 hover:underline my-5"
    target="_blank"
    rel="noopener noreferrer"
  >
    {block.bookmark.caption.length > 0 ? (
      <RichText richText={block.bookmark.caption} />
    ) : (
      block.bookmark.url
    )}
  </a>
);
