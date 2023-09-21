import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}
