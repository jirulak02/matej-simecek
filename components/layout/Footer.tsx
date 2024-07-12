"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="my-6 md:my-8">
          <Image
            src="/logos/fairlife-logo.png"
            width={300}
            height={110}
            quality={100}
            alt="Fair Life logo"
            className="mx-auto w-[180px] md:w-[300px]"
          />
        </div>
        <p className="text-center text-xs">
          Vázaný zástupce (IČO: 10674209) jednající jménem společnosti Broker Trust, a.s., která je
          v registru ČNB vedena jako Samostatný a Investiční zprostředkovatel pod IČO: 26439719.
          Zprostředkovává tedy pojištění, úvěry a investice. Bližší informace získáte na{" "}
          <Link
            href="https://www.brokertrust.cz/proklienty"
            target="_blank"
            className="whitespace-nowrap text-xs"
          >
            https://www.brokertrust.cz/proklienty
          </Link>
          .
        </p>
        <div className="my-6 flex flex-col items-center gap-6 text-base sm:flex-row sm:gap-8 md:my-8">
          <Link href="https://www.fair-life.cz/" target="_blank" className="whitespace-nowrap">
            o Fair Life
          </Link>
          <Link
            href="https://www.brokertrust.cz/zasady-ochrany-soukromi/"
            target="_blank"
            className="whitespace-nowrap"
          >
            zásady ochrany soukromí
          </Link>
          <hr className="mt-auto hidden w-full border-t-2 pb-3 sm:block" />
          <Link
            href="https://www.linkedin.com/in/mat%C4%9Bj-%C5%A1ime%C4%8Dek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ color: "rgb(var(--primary-dark))" }} />
          </Link>
        </div>
        <p className="mb-6 text-center text-sm md:pb-8">
          Fair Life © 2023-{new Date().getFullYear()}. Všechna práva vyhrazena.
        </p>
      </Container>
    </footer>
  );
}
