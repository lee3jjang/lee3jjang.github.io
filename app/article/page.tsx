import Link from "next/link";
import { TArticle } from "@/types/article";

export default async function ArticleListPage() {
  const response = await fetch("http://localhost:3001/api/article");
  const articles = (await response.json()) as TArticle[];

  return (
    <main className="m-4">
      {/* page header */}
      <div className="flex justify-between mb-4">
        <h2 className="font-bold">글 목록</h2>
        <div>
          <Link className="font-medium" href="/article/create">
            생성
          </Link>
        </div>
      </div>

      {/* page body */}
      <section>
        {articles.map(({ id, title }) => (
          <Link
            key={id}
            className="flex bg-gray-50 rounded-md hover:text-blue-600 hover:bg-sky-100 gap-2 justify-start text-sm p-3 items-center grow h-[48px]"
            href={`article/${id}`}
          >
            <p>{title}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
