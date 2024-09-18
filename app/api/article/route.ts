import { article } from "@/app/lib/db/db.json";

// Note: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export async function GET() {
  return Response.json(article);
}
