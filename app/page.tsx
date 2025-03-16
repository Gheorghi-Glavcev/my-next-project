import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">Перейти на страницу "О нас"</Link>
      <h1>Привет, Next.js!</h1>
    </div>
  );
}
