import { ToDoBlock } from "../types/toDo.types";
import { RichText } from "./RichText";

export const ToDo = ({ block }: { block: ToDoBlock }) => (
  <div className="flex items-center my-2">
    <input
      type="checkbox"
      checked={block.to_do.checked}
      disabled
      className="mr-2"
    />
    <RichText richText={block.to_do.rich_text} />
  </div>
);
