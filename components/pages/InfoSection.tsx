import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function InfoSection() {
  return (
    <Section className="py-10">
      <Container>
        <div className="flex flex-row gap-6">
          <Image src="" className="basis-2/5" alt="" />
          <div className="basis-3/5 space-y-3">
            <h2>O mně</h2>
            <hr className="w-20 border-t-2" />
            <p>
              Už od střední školy se zajímám o investice a finanční trh jako celek. Nevěděl jsem,
              jak bych naučil s financemi fungovat i ostatní, ale pak se mi naskytla tato možnost
              práce s klienty. Nebylo tedy o čem přemýšlet a začal jsem spolupracovat s firmou
              Broker Trust nejdříve v oblasti investic a pojištění, následně i v úvěrech.
            </p>
            <p>
              Už od malička jsem veden k pomáhání lidem, několik let jsem totiž chodil do skauta.
              Aktuálně studuji vysokou školu, baví mě objevovat cizí kultury, sportovat a rozvíjet
              se v ostatních dovednostech. Už přes deset let hraju ragby a několikrát jsem se stal
              mistrem republiky. Když se tedy řekne, že něco nejde, tak to pro mě neznamená konec
              snažení, ale vždycky nějakou cestu k úspěchu najdu. To se projevuje i v mém přístupu k
              řešení klientských problémů s bankami či pojišťovnami.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-row gap-6">
          <div className="basis-3/5 space-y-3">
            <h2>Jak pracuji</h2>
            <hr className="w-20 border-t-2" />
            <p>TODO</p>
          </div>
          <Image src="" className="basis-2/5" alt="" />
        </div>
      </Container>
    </Section>
  );
}
