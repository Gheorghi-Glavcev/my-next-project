import { notFound } from "next/navigation";

interface BlogPostProps {
  params: { id: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { id } = params;

  // Проверка, если id не число, показываем 404
  if (isNaN(Number(id))) {
    notFound();
  }

  return (
    <div>
      <h1>Статья #{id}</h1>
      <p>Это контент для статьи с ID {id}.</p>
    </div>
  );
}
