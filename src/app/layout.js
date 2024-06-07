import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Game Tracker",
  description: "A tracker for every game you own and the platform its on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
          <Link href="">My Games</Link>
          <Link href="">Want List</Link>
          </nav>
        </header>
        {children}
        <footer>&copy; Jeremie Agee 2024</footer>
        </body>
    </html>
  );
}
