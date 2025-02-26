import { PDFBlock } from "../types/pdf.types";
import { RichText } from "./RichText";

export const PDF = ({ block }: { block: PDFBlock }) => (
  <div className="my-5">
    <embed
      src={
        block.pdf.type === "external"
          ? block.pdf.external!.url
          : block.pdf.file!.url
      }
      type="application/pdf"
      className="w-full h-96"
    />
    {block.pdf.caption.length > 0 && (
      <div className="text-sm text-gray-600 mt-2">
        <RichText richText={block.pdf.caption} />
      </div>
    )}
  </div>
);
