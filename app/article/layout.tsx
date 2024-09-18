import Link from "next/link";

export default function ArticleListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>개발 블로그</h1>
      </header>
      {children}
    </div>
  );
}
