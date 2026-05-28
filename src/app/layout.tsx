import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Garg — Software Developer & Full-Stack Developer",
  description:
    "Portfolio of Mayank Garg — Software Developer, Full-Stack Developer, and AWS Certified Developer. B.Tech (Hons.) Computer Science Engineering, UPES 2025.",
  keywords: [
    "Mayank Garg",
    "Software Developer",
    "Full-Stack Developer",
    "AWS Certified",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Mayank Garg" }],
  openGraph: {
    title: "Mayank Garg — Software Developer & Full-Stack Developer",
    description:
      "Portfolio of Mayank Garg — Software Developer, Full-Stack Developer, and AWS Certified Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
