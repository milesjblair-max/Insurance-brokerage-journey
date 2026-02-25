import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurelius Global Industries | Agentic Insurance Storyboard",
  description: "Executive storytelling journey demonstrating how agentic AI transforms global insurance broking with governed human oversight.",
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
