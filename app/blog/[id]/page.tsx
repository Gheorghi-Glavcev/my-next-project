async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

interface BlogPostProps {
  params: { id: string };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <a href="/blog">← Назад к блогу</a>
    </div>
  );
}
