"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <Image src="/1.jpg" width={30} height={30} alt="" className="mx-auto" />
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
        <div className="flex flex-row items-center gap-3">
          <Link href="/">o FairLife</Link>
          <Link href="/">ochrana osobních údajů</Link>
          <Link href="/">cookies</Link>
          <hr className="mt-auto w-full border-t-2 pb-4" />
          <Link href="/">
            <LinkedInIcon />
          </Link>
        </div>
        <p>FairLife © 2023. Všechna práva vyhrazena.</p>
      </Container>
    </footer>
  );
}
