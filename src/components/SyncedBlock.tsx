import { SyncedBlock as SyncedBlockType } from "../types";

export const SyncedBlock = ({ block }: { block: SyncedBlockType }) => (
  <div className="p-2 bg-gray-50 border border-dashed border-gray-300 my-5">
    {/* Nội dung đồng bộ sẽ được render trong blockMapper */}
  </div>
);
