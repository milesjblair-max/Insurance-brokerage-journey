import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Global Enterprise | Agentic Insurance Storyboard",
  description: "Executive storytelling journey demonstrating how agentic AI transforms global insurance broking for multinational enterprises.",
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
