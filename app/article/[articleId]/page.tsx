import { Separator } from "@/components/ui/separator";
import { TArticle } from "@/types/article";

type Props = {
  params: {
    articleId: string;
  };
};

export default async function ArticlePage({ params: { articleId } }: Props) {
  const response = await fetch(
    `http://localhost:3001/api/article/${articleId}`
  );
  const article = (await response.json()) as TArticle;

  return (
    <div>
      <h1>
        <b>{article.title}</b>
      </h1>
      <Separator />
      <p>{article.content}</p>
    </div>
  );
}
