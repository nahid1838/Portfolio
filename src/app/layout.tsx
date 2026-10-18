import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadiul Islam Nahid | Full Stack Developer",
  description:
    "Portfolio of Nadiul Islam Nahid (Nahid) — a Full Stack Developer from Dhaka, Bangladesh building fast, responsive and user-friendly web applications with Next.js, TypeScript, Node.js and MongoDB.",
  keywords: [
    "Nadiul Islam Nahid",
    "Nahid",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Dhaka",
    "Bangladesh",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // data-scroll-behavior keeps Next.js navigation compatible with smooth scrolling (Next.js 16)
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
