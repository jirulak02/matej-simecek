"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Container from "./Container";

export default function Header() {
  return (
    <header>
      <Container className="flex h-12 flex-row items-center gap-3">
        <Link href="/" className="flex flex-row items-center gap-3">
          <Image src="/logo.png" width={30} height={30} alt="" />
          <div className="whitespace-nowrap">
            Matěj <span className="font-semibold text-blue-500">ŠIMEČEK</span>
          </div>
        </Link>
        <hr className="mt-auto w-full border-t-2 pb-4" />
        <div>
          <Link href="https://www.linkedin.com/in/mat%C4%9Bj-%C5%A1ime%C4%8Dek-71aba6215">
            <LinkedInIcon />
          </Link>
        </div>
      </Container>
    </header>
  );
}
