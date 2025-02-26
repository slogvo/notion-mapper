import { ChildPageBlock } from "../types/childPage.types";

export const ChildPage = ({ block }: { block: ChildPageBlock }) => (
  <div className="p-2 bg-gray-100 rounded-md my-5">
    {block.child_page.title}
  </div>
);
