import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function InfoSection() {
  return (
    <Section className="py-12">
      <Container>
        <div className="flex flex-row gap-12">
          <div className="relative basis-2/5">
            <Image
              src="/about.png"
              fill
              quality={100}
              className="rounded-sm object-cover shadow-md"
              alt="A group of people working in a busy office with Mr. Šimeček in the middle"
            />
          </div>
          <div className="basis-3/5 space-y-4">
            <h2 className="text-primary-dark font-semibold">O mně</h2>
            <hr className="w-40 border-t-2" />
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
        <div className="mt-16 flex flex-row gap-12">
          <div className="basis-3/5 space-y-4">
            <h2 className="text-primary-dark font-semibold">Jak pracuji</h2>
            <hr className="w-40 border-t-2" />
            <p>
              Finanční trh se vývoji rychlostí světla a je čím dále více těžké se na něm
              zorientovat. Proto se vzdělávám ještě rychleji a snažím se tak být o krok napřed, jako
              to dělá tajemná částice neutrina.
            </p>
            <p>
              Svým klientům hledám vždy to nejlepší řešení, jaké bych volil i sobě a rád jim ho
              polopatě vysvětlím. Jen tak mi mohou klienti naplno důvěřovat a být nadšení z naší
              celoživotní spolupráce.
            </p>
          </div>
          <div className="relative basis-2/5">
            <Image
              src="/work.png"
              fill
              quality={100}
              className="rounded-sm object-cover shadow-md"
              alt="Mr. Šimeček in a suit talking to a client on the phone"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
