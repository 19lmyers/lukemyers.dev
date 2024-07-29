import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./theme.css";
import "./globals.css";
import React from "react";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Myers"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
