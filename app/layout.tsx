import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "500" })


export const metadata: Metadata = {
  title: "4amDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}
      <Analytics />
      </body>
    </html>
  );
}