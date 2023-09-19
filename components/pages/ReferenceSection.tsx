import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";

export default function ReferenceSection() {
  return (
    <Section className="relative z-10 py-12">
      <Container>
        <h2 className="text-center">Reference</h2>
        <div className="mt-6 flex flex-row gap-8">
          <Card className="flex flex-row gap-4 p-6">
            <div className="basis-1/4">
              <Image src="/1.jpg" width={100} height={100} alt="" />
            </div>
            <div className="basis-3/4">
              <h3 className="mb-3">Jan Kárník</h3>
              <p>
                Cením si, že můžu za panem Šimečkem přijít s jakoukoliv otázkou, a jakožto laikovi,
                se mi dostane vysvětlení, které i mně, dává smysl. Díky tomu můžu posléze rozhodovat
                o své investiční strategii s větším nadhledem a informovaností.
              </p>
            </div>
          </Card>
          <Card className="flex flex-row gap-4 p-6">
            <div className="basis-1/4">
              <Image src="/1.jpg" width={100} height={100} alt="" />
            </div>
            <div className="basis-3/4">
              <h3 className="mb-3">Pavla Mašková</h3>
              <p>
                Pro mě jako nezkušeného člověka, který chce začít investovat a trochu se do toho
                ponořit, jsou služby poskytované skrze pana Šimečka ideální. Jednání bylo vždy
                rychlé, snadné a vím, že jsem svoji důvěru svěřila do správných rukou. Mohu jen
                doporučit.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
