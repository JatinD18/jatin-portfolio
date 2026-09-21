import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jatin Dolas | Data Analyst & Electrical Engineer",
  description:
    "Portfolio of Jatin Dolas — Data Analyst specializing in Python, SQL, Power BI, and end-to-end data pipelines. Based in Nagpur, Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <Navbar />
        {children}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Jatin Dolas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}