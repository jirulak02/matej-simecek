import Image from "next/image";
import Container from "./layout/Container";
import Section from "./layout/Section";
import Gradient from "./ui/Gradient";

export default function Hero() {
  return (
    <Section className="static overflow-hidden">
      <Gradient className="opacity-50 z-10" />
      <Image src="./hero.png" fill className="select-none object-cover z-0" alt="" />
      <Container className="z-40">
        <div></div>
      </Container>
    </Section>
  );
}
