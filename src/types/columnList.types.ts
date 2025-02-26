import { BaseBlock } from "./base.types";

export interface ColumnListBlock extends BaseBlock {
  type: "column_list";
  column_list: Record<string, never>;
}
