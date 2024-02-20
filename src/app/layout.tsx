'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
