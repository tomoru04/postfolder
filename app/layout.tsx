import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "あろっとのフォルダー",
  description: "The best arrangement tool for your X bookmarks. Organize and manage your favorite posts with ease.",
  openGraph: {
    title: "あろっとのお気に入り",
    description: "The best arrangement tool for your X bookmarks. Organize and manage your favorite posts with ease.",
    images: ["/logo_postfolder_squared.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "あろっとのお気に入りポスト",
    description: "The best arrangement tool for your X bookmarks. Organize and manage your favorite posts with ease.",
    images: ["/logo_postfolder_squared.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </head>
      <body
        className={`${notoSansJP.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
