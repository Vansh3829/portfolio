import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vansh Singh – Data Analyst & AI/ML Engineer",
  description:
    "Portfolio of Vansh Singh — Data Analyst, Data Engineer Aspirant, and AI & ML Student. Expert in Python, SQL, Machine Learning, Flask, and scalable data pipelines.",
  keywords: [
    "Vansh Singh",
    "Data Analyst",
    "Data Engineer",
    "AI ML Student",
    "Python Developer",
    "Flask",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Vansh Singh" }],
  creator: "Vansh Singh",
  openGraph: {
    title: "Vansh Singh – Data Analyst & AI/ML Engineer",
    description: "Transforming data into insights and building scalable backend solutions.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Singh – Data Analyst & AI/ML Engineer",
    description: "Transforming data into insights and building scalable backend solutions.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} ${jetbrains.variable} font-sans bg-[#0a0e1a] text-[#e8edf8] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
