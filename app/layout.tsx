import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Matěj Šimeček - Váš finanční specialista | Fair Life",
  description: "Specialista na investice a správu majetku",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Link href="https://www.jiri-simecek.com/" target="_blank" className="h-0 w-0" />
      </body>
    </html>
  );
}
