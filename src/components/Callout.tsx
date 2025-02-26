import { CalloutBlock } from "../types/callout.types";
import { RichText } from "./RichText";

export const Callout = ({ block }: { block: CalloutBlock }) => (
  <div className="bg-gray-100 p-4 rounded-md flex items-center my-5">
    {block.callout.icon?.type === "emoji" && (
      <span className="mr-2">{block.callout.icon.emoji}</span>
    )}
    {block.callout.icon?.type === "external" && (
      <img
        src={block.callout.icon.external!.url}
        alt="icon"
        className="w-6 h-6 mr-2"
      />
    )}
    <RichText richText={block.callout.rich_text} />
  </div>
);
