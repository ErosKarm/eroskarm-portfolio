import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";

import localFont from "next/font/local";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

const Helvetica = localFont({
  src: [
    {
      path: "/fonts/HelveticaNeue.woff2",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Eros Karm",
  description: "Eros Karm Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-[#F0EFEC]", Helvetica.className)}>
        <NextTopLoader
          color="#000000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          showAtBottom={false}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
