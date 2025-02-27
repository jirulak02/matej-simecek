import Image from "next/image";

import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";

export default function ReferenceSection() {
  return (
    <Section className="relative z-10 py-8 md:py-12">
      <Container>
        <h2 className="text-primary-dark text-center font-semibold">Reference</h2>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:gap-12">
          <Card className="flex flex-row gap-4 p-6">
            <div className="basis-1/4">
              <Image
                src="/karnik.png"
                quality={100}
                className="rounded-xs"
                width={200}
                height={200}
                alt="Jan Kárník in a shirt with see behind him"
              />
            </div>
            <div className="basis-3/4">
              <h3 className="mb-3">Jan Kárník</h3>
              <p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 409.294 409.294"
                  fill="currentColor"
                  className="float-left mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"></path>
                </svg>
                Cením si, že můžu za panem Šimečkem přijít s jakoukoliv otázkou, a jakožto laikovi,
                se mi dostane vysvětlení, které i mně, dává smysl. Díky tomu můžu posléze rozhodovat
                o své investiční strategii s větším nadhledem a informovaností.
              </p>
            </div>
          </Card>
          <Card className="flex flex-row gap-4 p-6">
            <div className="basis-1/4">
              <Image
                src="/avatar.png"
                quality={100}
                className="rounded-xs"
                width={200}
                height={200}
                alt="Profile avatar placeholder"
              />
            </div>
            <div className="basis-3/4">
              <h3 className="mb-3">Pavla Mašková</h3>
              <p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 409.294 409.294"
                  fill="currentColor"
                  className="float-left mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"></path>
                </svg>
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
