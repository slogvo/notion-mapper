import { BulletedListItemBlock } from "../types/bulletedListItem.types";
import { RichText } from "./RichText";

export const BulletedListItem = ({
  block,
}: {
  block: BulletedListItemBlock;
}) => (
  <li className="list-disc list-inside my-2">
    <RichText richText={block.bulleted_list_item.rich_text} />
  </li>
);
