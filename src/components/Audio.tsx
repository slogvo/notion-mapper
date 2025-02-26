import { AudioBlock } from "../types/audio.types";
import { RichText } from "./RichText";

export const Audio = ({ block }: { block: AudioBlock }) => (
  <div className="my-5">
    <audio controls className="w-full">
      <source
        src={
          block.audio.type === "external"
            ? block.audio.external!.url
            : block.audio.file!.url
        }
      />
    </audio>
    {block.audio.caption.length > 0 && (
      <div className="text-sm text-gray-600 mt-2">
        <RichText richText={block.audio.caption} />
      </div>
    )}
  </div>
);
