import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Gradient from "../ui/Gradient";

export default function HeroSection() {
  return (
    <Section className="relative h-[500px] overflow-hidden">
      <Gradient className="z-10 opacity-75" />
      <Image src="/hero.jpeg" fill className="z-0 select-none object-cover" alt="" />
      <Container className="relative z-40 h-full">
        <div className="flex h-full flex-row gap-10">
          <div className="flex basis-1/2 flex-col justify-center">
            <h1 className="font-light text-white">Matěj</h1>
            <h1 className="font-bold text-white">ŠIMEČEK</h1>
            <p className="mt-4 text-white">Specialista na investice a správu majetku</p>
          </div>
          <div className="relative basis-1/2">
            <Image src="/1.jpg" fill className="object-contain" alt="" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
