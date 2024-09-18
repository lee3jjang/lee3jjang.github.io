import Link from "next/link";
import { TArticle } from "@/app/types/article";

export default async function ArticleListPage() {
  const response = await fetch("http://localhost:3000/api/article");
  const articles = (await response.json()) as TArticle[];

  return (
    <ol>
      {articles.map(({ id, title }) => (
        <Link
          key={id}
          className="flex bg-gray-50 rounded-md hover:text-blue-600 hover:bg-sky-100 gap-2 justify-start text-sm p-3 items-center grow h-[48px]"
          href={`article/${id}`}
        >
          <p>{title}</p>
        </Link>
      ))}
    </ol>
  );
}
