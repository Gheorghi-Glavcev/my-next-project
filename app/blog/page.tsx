async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Блог (SSR)</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
