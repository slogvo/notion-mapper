import { BaseBlock } from "@/types";
import { Paragraph } from "./Paragraph";
import { ParagraphBlock } from "@/types/paragraph.types";

interface ChildrenProps {
  children: BaseBlock[];
  className?: string
}

export const Children = ({ children, className }: ChildrenProps) => {
  if (!Array.isArray(children) || children.length === 0) {
    return null;
  }

  return (
    <div className={`ml-4 ${className}`}>
      {children.map((child) => {
        switch (child.type) {
          case "paragraph":
            return <Paragraph key={child.id} block={child as ParagraphBlock} />;
          default:
            return null;
        }
      })}
    </div>
  );
};