import type { Metadata } from "next";
import { Cabin, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Footer } from "@/components/footer";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "māpāfööd — From Seed to Supper",
  description: "100% pure, chemical-free, and preservative-free foods. Traditional wood-pressed oils and hand-ground spices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cabin.variable} ${sourceSans3.variable} antialiased font-sans`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
