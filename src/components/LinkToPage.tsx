import { LinkToPageBlock } from "../types/linkToPage.types";

export const LinkToPage = ({ block }: { block: LinkToPageBlock }) => (
  <a
    href={`/${
      block.link_to_page.type === "page_id"
        ? block.link_to_page.page_id
        : block.link_to_page.database_id
    }`}
    className="text-blue-500 hover:underline my-5"
  >
    Link to {block.link_to_page.type === "page_id" ? "Page" : "Database"}
  </a>
);
