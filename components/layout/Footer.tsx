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
          <Image src="/fairlife-logo.png" width={300} height={180} alt="" className="mx-auto" />
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
          <Link href="/" className="whitespace-nowrap">
            o FairLife
          </Link>
          <Link href="/" className="whitespace-nowrap">
            ochrana osobních údajů
          </Link>
          <Link href="/" className="whitespace-nowrap">
            cookies
          </Link>
          <hr className="mt-auto w-full border-t-2 pb-3" />
          <Link href="/" className="whitespace-nowrap">
            <LinkedInIcon />
          </Link>
        </div>
        <p className="pb-8 text-center text-sm">FairLife © 2023. Všechna práva vyhrazena.</p>
      </Container>
    </footer>
  );
}
