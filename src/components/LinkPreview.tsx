import { LinkPreviewBlock } from "../types/linkPreview.types";

export const LinkPreview = ({ block }: { block: LinkPreviewBlock }) => (
  <a
    href={block.link_preview.url}
    className="text-blue-500 hover:underline my-5"
    target="_blank"
    rel="noopener noreferrer"
  >
    {block.link_preview.url}
  </a>
);
