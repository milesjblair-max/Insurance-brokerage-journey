import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agentic AI Storyboard | Howden Broking Group",
  description: "Experience the future of insurance broking where autonomous agents orchestrate complex placements with precision, speed, and complete human oversight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
