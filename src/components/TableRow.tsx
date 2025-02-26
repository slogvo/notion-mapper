import { TableRowBlock } from "../types/tableRow.types";
import { RichText } from "./RichText";

export const TableRow = ({ block }: { block: TableRowBlock }) => (
  <tr>
    {block.table_row.cells.map((cell, index) => (
      <td key={index} className="border border-gray-200 p-2">
        <RichText richText={cell} />
      </td>
    ))}
  </tr>
);
