import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/blog">Блог</Link></li>
              <li><Link href="/about">О нас</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 Мой сайт</footer>
      </body>
    </html>
  );
}
