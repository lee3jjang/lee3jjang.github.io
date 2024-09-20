import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

async function createArticleAction(formData: FormData) {
  "use server";

  const title = formData.get("title");
  const content = formData.get("content");
  const data = { title, content };

  const res = await fetch(`http://localhost:3001/api/article`, {
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
      <Card>
        <CardHeader>
          <CardTitle>글 생성</CardTitle>
          <CardDescription>글을 생성해주세요.</CardDescription>
        </CardHeader>
        <form action={createArticleAction}>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div>
                <Label className="pr-2" htmlFor="title">
                  제목
                </Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="오늘의 일기"
                />
              </div>
              <div>
                <Label className="pr-2" htmlFor="content">
                  내용
                </Label>
                <Input
                  type="text"
                  id="content"
                  name="content"
                  placeholder="이번 역은 부천입니다."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">확인</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
