// src/modules/notion-blocks/components/RichText.tsx
import { RichText as RichTextType } from "../types";

interface RichTextProps {
  richText: RichTextType[] | undefined | null;
}

export const RichText = ({ richText }: RichTextProps) => {
  if (!Array.isArray(richText) || richText.length === 0) {
    return null;
  }

  return (
    <>
      {richText.map((text, index) => {
        if (!text || !text.annotations || !text.text) {
          console.error("Invalid rich text item:", text);
          return null;
        }

        return (
          <span
            key={index}
            className={[
              text.annotations.bold ? "font-bold" : "",
              text.annotations.italic ? "italic" : "",
              text.annotations.strikethrough ? "line-through" : "",
              text.annotations.underline ? "underline" : "",
              text.annotations.code ? "font-mono bg-gray-100 px-1 rounded" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              color:
                text.annotations.color !== "default"
                  ? text.annotations.color
                  : undefined,
            }}
          >
            {text.text.link && text.text.link.url ? (
              <a
                href={text.text.link.url}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.text.content || ""}
              </a>
            ) : (
              text.text.content || ""
            )}
          </span>
        );
      })}
    </>
  );
};