import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Navigation } from "@/shared/Navigation";
import { Footer } from "@/shared/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dbogh.com"),
  title: "Chin Kai Xiang — DBOGH",
  description:
    "Personal site of Chin Kai Xiang (Kai). Software developer who crafts with intent — pixel-perfect interfaces, scalable backends, creative problem solving.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Chin Kai Xiang — DBOGH",
    description:
      "Personal site of Chin Kai Xiang (Kai). Software developer who crafts with intent — pixel-perfect interfaces, scalable backends, creative problem solving.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
