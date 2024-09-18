import { TArticle } from "@/app/types/article";

type Props = {
  params: {
    articleId: string;
  };
};

export default async function ArticlePage({ params: { articleId } }: Props) {
  const response = await fetch(
    `http://localhost:3000/api/article/${articleId}`
  );
  const article = (await response.json()) as TArticle;

  return (
    <article>
      <h1>
        <b>{article.title}</b>
      </h1>
      <hr />
      <p>{article.content}</p>
    </article>
  );
}
