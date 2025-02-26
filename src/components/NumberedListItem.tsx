// src/modules/notion-blocks/components/NumberedListItem.tsx
import { NumberedListItemBlock } from "../types/numberedListItem.types";
import { RichText } from "./RichText";

export const NumberedListItem = ({
  block,
}: {
  block: NumberedListItemBlock;
}) => (
  <li className="list-decimal list-inside my-2">
    <RichText richText={block.numbered_list_item.rich_text} />
  </li>
);
