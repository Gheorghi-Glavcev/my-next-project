import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const posts = [
  { id: "1", title: "Первая статья" },
  { id: "2", title: "Вторая статья" },
  { id: "3", title: "Третья статья" },
];

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Блог</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
