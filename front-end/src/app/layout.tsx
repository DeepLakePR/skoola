"use client"

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500)

    return () => clearTimeout(timer);

  }, [pathname]);

  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>
        <Loading show={loading} />

        <Suspense fallback={<Loading show={loading} />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
