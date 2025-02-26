import { QuoteBlock } from "../types/quote.types";
import { RichText } from "./RichText";

export const Quote = ({ block }: { block: QuoteBlock }) => (
  <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-600 my-5">
    <RichText richText={block.quote.rich_text} />
  </blockquote>
);
