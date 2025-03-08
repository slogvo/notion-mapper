// src/App.tsx
import { useEffect, useState, Fragment } from "react";
import { NotionBlock } from "./types";
import { blockMapper } from "./utils/blockMapper";

interface PageData {
  id: string;
  title: string;
  content: NotionBlock[];
}

function App() {
  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  const [page, setPage] = useState<PageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/posts/jsx-la-gi-va-tai-sao-chung-ta-lai-su-dung-jsx-trong-react`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: PageData = await response.json();
        setPage(data);
      } catch (err) {
        setError((err as Error).message);
        console.error("Fetch error:", err);
      }
    };

    fetchPost();
  }, [apiUrl]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!page) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <h1 className="text-3xl font-bold mb-5">{page.title}</h1>
      <div className="content">
        {page.content.map((block) => (
          <Fragment key={block.id}>
            {blockMapper(block)}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;