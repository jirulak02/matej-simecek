"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="my-8">
          <Image
            src="/fairlife-logo.png"
            width={300}
            height={110}
            alt="Fair Life logo"
            className="mx-auto"
          />
        </div>
        <p className="text-center text-xs">
          Investiční produkty zprostředkovávám jako vázaný zástupce zapsaný v registru ČNB pod IČO:
          10674209 a zároveň registrovaný pod investičním zprostředkovatelem Broker Trust, a.s. IČO:
          26439719. Pojistné produkty zprostředkovávám jako podřízený pojišťovací zprostředkovatel
          zapsaný v registru ČNB pod č. PPZ a zároveň registrovaný pod pojišťovacím agentem Broker
          Trust, a.s. 26439719. Spotřebitelské úvěry zprostředkovávám jako vázaný zástupce zapsaný v
          registru ČNB pod IČO: 1067420 a zároveň registrovaný pod samostatným zprostředkovatelem
          spotřebitelských úvěrů Broker Trust, a.s. IČO: 26439719
        </p>
        <div className="my-8 flex flex-row items-center gap-8 text-base">
          <Link href="http://www.fair-life.cz/" target="_blank" className="whitespace-nowrap">
            o Fair Life
          </Link>
          <Link href="/" className="whitespace-nowrap">
            ochrana osobních údajů
          </Link>
          <Link href="/" className="whitespace-nowrap">
            cookies
          </Link>
          <hr className="mt-auto w-full border-t-2 pb-3" />
          <Link
            href="https://www.linkedin.com/in/mat%C4%9Bj-%C5%A1ime%C4%8Dek-71aba6215"
            target="_blank"
          >
            <LinkedInIcon style={{ color: "rgb(var(--primary-dark))" }} />
          </Link>
        </div>
        <p className="pb-8 text-center text-sm">Fair Life © 2023. Všechna práva vyhrazena.</p>
      </Container>
    </footer>
  );
}
