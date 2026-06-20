import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://portfolio-bice-chi-43.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Glorant | AIで、あなたのビジネスをもっと軽くする。",
  description:
    "AI業務自動化・HP作成で中小企業・個人事業主をサポート。繰り返し作業をAIに任せて本業に集中できる環境をつくります。まずは無料相談から。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Glorant",
    title: "Glorant | AIで、あなたのビジネスをもっと軽くする。",
    description:
      "AI業務自動化・HP作成で中小企業・個人事業主をサポート。繰り返し作業をAIに任せて本業に集中できる環境をつくります。",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Glorant - AI × Business Efficiency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tsugu_aicreate",
    creator: "@tsugu_aicreate",
    title: "Glorant | AIで、あなたのビジネスをもっと軽くする。",
    description:
      "AI業務自動化・HP作成で中小企業・個人事業主をサポート。まずは無料相談から。",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
