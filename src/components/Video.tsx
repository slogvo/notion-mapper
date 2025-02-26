import { VideoBlock } from "../types/video.types";
import { RichText } from "./RichText";

export const Video = ({ block }: { block: VideoBlock }) => (
  <div className="my-5">
    <video controls className="w-full">
      <source
        src={
          block.video.type === "external"
            ? block.video.external!.url
            : block.video.file!.url
        }
      />
    </video>
    {block.video.caption.length > 0 && (
      <div className="text-sm text-gray-600 mt-2">
        <RichText richText={block.video.caption} />
      </div>
    )}
  </div>
);
