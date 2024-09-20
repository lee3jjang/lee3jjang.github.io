import db from "@/lib/db/db.json";

// Note: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export async function GET() {
  return Response.json(db.article);
}

export async function POST() {
  console.log("article POST is called");
  return new Response(null, { status: 200 });
}
