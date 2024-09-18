import Link from "next/link";

import { sql } from "@vercel/postgres";

export default async function ArticleList() {
  const { rows: articles } = await sql`SELECT * from article`;

  console.log(articles);

  return (
    <ol>
      {articles.map(({ id, title }) => (
        <Link
          key={id}
          className="flex bg-gray-50 rounded-md hover:text-blue-600 hover:bg-sky-100 gap-2 justify-center text-sm p-3 items-center grow h-[48px]"
          href={`article/${id}`}
        >
          <p>{title}</p>
        </Link>
      ))}
    </ol>
  );
}
