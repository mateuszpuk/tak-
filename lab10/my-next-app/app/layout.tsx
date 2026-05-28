import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
  title: "Next.js CRUD App",
  description: "Customer management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-8`}>
        <div className="flex items-center gap-4">
          <Image
            src="/fruit.jpg"
            alt="Favourite fruit"
            width={100}
            height={100}
            className="rounded"
          />
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Next.js CRUD App
          </h1>
        </div>
        <hr />
        <p>&nbsp;</p>
        {children}
        <p>&nbsp;</p>
        <hr />
        <p className="text-sm text-gray-500 mt-2">Created by Mateusz Puk</p>
      </body>
    </html>
  );
}
