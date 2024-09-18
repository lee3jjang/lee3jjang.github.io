import { redirect } from "next/navigation";

async function createArticleAction(formData: FormData) {
  "use server";

  const title = formData.get("title");
  const content = formData.get("content");
  const data = { title, content };

  const res = await fetch(`http://localhost:3000/api/article`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.ok) {
    redirect("/article");
  }
}

export default function ArticleCreatePage() {
  return (
    <main className="m-4">
      <div className="font-bold mb-2">글 생성</div>
      <form action={createArticleAction}>
        <div className="flex flex-col gap-4">
          <div>
            <label className="pr-2" htmlFor="title">
              제목
            </label>
            <input
              className="border rounded"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div>
            <label className="pr-2" htmlFor="content">
              내용
            </label>
            <input
              className="border rounded"
              type="text"
              id="content"
              name="content"
            />
          </div>
          <div>
            <button className="border rounded px-2" type="submit">
              확인
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
