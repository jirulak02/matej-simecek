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
        <div className="flex h-full flex-row gap-10">
          <div className="flex basis-1/2 flex-col justify-center">
            <h1 className="flex flex-col gap-3 font-extralight text-white">
              Matěj
              <strong className="font-bold">ŠIMEČEK</strong>
            </h1>
            <h2 className="mt-6 text-xl text-white">Specialista na investice a správu majetku</h2>
          </div>
          <div className="relative basis-1/2">
            <Image
              src="/profile.png"
              fill
              quality={100}
              priority
              className="object-contain object-right pt-8"
              alt="Matěj Šimeček in a beatiful blue suit"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
