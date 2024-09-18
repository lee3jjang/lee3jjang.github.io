import { article } from "@/app/lib/db/db.json";

export async function GET(
  request: Request,
  { params: { articleId } }: { params: { articleId: string } }
) {
  return Response.json(article.filter((value) => value.id === articleId)[0]);
}
