import type { Metadata } from "next";
import { Roboto_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jaya Surya J — MERN Stack Web Developer",
  description:
    "Portfolio of Jaya Surya J, a MERN Stack Web Developer specializing in Next.js, React, Node.js and scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
