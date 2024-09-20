import db from "@/lib/db/db.json";

export async function GET(
  request: Request,
  { params: { articleId } }: { params: { articleId: string } }
) {
  return Response.json(db.article.filter((value) => value.id === articleId)[0]);
}
