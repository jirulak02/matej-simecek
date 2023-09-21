"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Container from "./Container";

export default function Header() {
  return (
    <header>
      <Container className="flex h-20 flex-row items-center gap-3">
        <Link href="/" className="flex min-w-fit flex-row items-center gap-3">
          <Image src="/fairlife-head.png" width={30} height={30} alt="Fair Life lion head logo" />
          <div className="whitespace-nowrap">
            Matěj <span className="text-primary-light font-bold">ŠIMEČEK</span>
          </div>
        </Link>
        <hr className="mt-auto w-full border-t-2 pb-8" />
        <div>
          <Link
            href="https://www.linkedin.com/in/mat%C4%9Bj-%C5%A1ime%C4%8Dek-71aba6215"
            target="_blank"
          >
            <LinkedInIcon style={{ color: "rgb(var(--primary-dark))" }} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
