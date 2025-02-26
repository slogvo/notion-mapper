import { RichText as RichTextType } from "../types";

interface RichTextProps {
  richText: RichTextType[];
}

export const RichText = ({ richText }: RichTextProps) => (
  <>
    {richText.map((text, index) => (
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
        {text.text.link ? (
          <a
            href={text.text.link.url}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.text.content}
          </a>
        ) : (
          text.text.content
        )}
      </span>
    ))}
  </>
);
