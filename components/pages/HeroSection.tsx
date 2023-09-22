import Image from "next/image";

import Container from "../layout/Container";
import Section from "../layout/Section";
import Gradient from "../ui/Gradient";

export default function HeroSection() {
  return (
    <Section className="relative h-[560px] overflow-hidden">
      <Gradient className="z-10 opacity-80" />
      <Image
        src="/hero.jpeg"
        fill
        quality={100}
        priority
        className="z-0 select-none object-cover"
        alt="Flora office building in Prague"
      />
      <Container className="relative z-40 h-full">
        <div className="flex h-full flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex basis-1/3 flex-col justify-center pt-4 md:basis-1/2">
            <h1 className="flex flex-col gap-2 font-extralight text-white md:gap-3">
              Matěj
              <strong className="font-bold">ŠIMEČEK</strong>
            </h1>
            <h2 className="mt-3 text-xl text-white md:mt-6">
              Specialista na investice a správu majetku
            </h2>
          </div>
          <div className="relative basis-2/3 md:basis-1/2">
            <Image
              src="/profile.png"
              fill
              quality={100}
              priority
              className="object-contain md:object-right md:pt-8"
              alt="Matěj Šimeček in a beatiful blue suit"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
