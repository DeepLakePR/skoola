import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Skeleton } from "antd";

export const metadata: Metadata = {
  title: "Skoola",
  description: "Projeto Skoola - TCC",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>
        <Loading />

        <Suspense fallback={<Skeleton active={true}/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
