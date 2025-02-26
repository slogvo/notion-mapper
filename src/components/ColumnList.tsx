import { ColumnListBlock } from "../types/columnList.types";

export const ColumnList = ({ block }: { block: ColumnListBlock }) => (
  <div className="flex gap-5 my-5">{block}</div>
);
