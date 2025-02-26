// src/modules/notion-blocks/components/ChildDatabase.tsx

import { ChildDatabaseBlock } from "../types/childDatabase.types";

export const ChildDatabase = ({ block }: { block: ChildDatabaseBlock }) => (
  <div className="p-2 bg-gray-100 rounded-md my-5">
    {block.child_database.title}
  </div>
);
