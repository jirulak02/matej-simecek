import Image from "next/image";

import Container from "../layout/Container";
import Section from "../layout/Section";
import Card from "../ui/Card";
import { StyledButtonPrimary } from "../ui/Styles";

export default function IconSection() {
  return (
    <Section className="relative z-50 -mt-32 py-8 md:py-12">
      <Container>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-primary-light m-2 flex flex-col space-y-1 rounded-3xl border p-6 shadow-md md:m-3 md:space-y-3 md:p-8">
              <Image
                src="/icons/investment.png"
                height={50}
                width={50}
                quality={100}
                alt=""
                className="select-none"
              />
              <h3 className="text-primary-dark font-semibold">Investice</h3>
              <p>
                Vhodným mixem investičních a spořících produktů vytvoříme{" "}
                <strong>strategii k dosažení vytyčených cílů</strong>.
              </p>
            </div>
            <div className="border-primary-light m-2 flex flex-col space-y-1 rounded-3xl border p-6 shadow-md md:m-3 md:space-y-3 md:p-8">
              <Image
                src="/icons/mortgage.png"
                height={50}
                width={50}
                quality={100}
                alt=""
                className="select-none"
              />
              <h3 className="text-primary-dark font-semibold">Hypoteční úvěry</h3>
              <p>
                Neexistuje jiný finanční produkt, který by budil tolik emocí. Vždyť{" "}
                <strong>jde o základní životní jistotu - vlastní bydlení.</strong>
              </p>
            </div>
            <div className="border-primary-light m-2 flex flex-col space-y-1 rounded-3xl border p-6 shadow-md md:m-3 md:space-y-3 md:p-8">
              <Image
                src="/icons/insurance.png"
                height={50}
                width={50}
                quality={100}
                alt=""
                className="select-none"
              />
              <h3 className="text-primary-dark font-semibold">Pojištění</h3>
              <p>
                Pojištění auta, bytu či dovolené je pro mnoho klientů automatické, tak{" "}
                <strong>proč si nepojistit také své zdraví a budoucnost?</strong>
              </p>
            </div>
            <div className="border-primary-light m-2 flex flex-col space-y-1 rounded-3xl border p-6 shadow-md md:m-3 md:space-y-3 md:p-8">
              <Image
                src="/icons/loan.png"
                height={50}
                width={50}
                quality={100}
                alt=""
                className="select-none"
              />
              <h3 className="text-primary-dark font-semibold">Úvěry a půjčky</h3>
              <p>
                Často není obtížné získat úvěr,{" "}
                <strong>
                  větší výzvou je konsolidace úvěrů za účelem zlepšení cash flow či bonity klienta
                </strong>
                .
              </p>
            </div>
            <div className="border-primary-light m-2 flex flex-col space-y-1 rounded-3xl border p-6 shadow-md md:m-3 md:space-y-3 md:p-8">
              <Image
                src="/icons/sport.png"
                height={50}
                width={50}
                quality={100}
                alt=""
                className="select-none"
              />
              <h3 className="text-primary-dark font-semibold">Péče o sportovce</h3>
              <p>
                Plný potenciál služeb pro profesionální sportovce{" "}
                <strong>od zabezpečení po správu portfolia a budování renty</strong>.
              </p>
            </div>
            <div className="border-primary-light m-2 flex flex-col space-y-1 rounded-3xl border p-6 shadow-md md:m-3 md:space-y-3 md:p-8">
              <Image
                src="/icons/finance.png"
                height={50}
                width={50}
                quality={100}
                alt=""
                className="select-none"
              />
              <h3 className="text-primary-dark font-semibold">Firemní finance</h3>
              <p>
                Finanční produkty, které pomáhají zaměstnavatelům{" "}
                <strong>ocenit a udržet si své klíčové zaměstnance</strong>.
              </p>
            </div>
          </div>
          <div className="mb-1 mt-2 flex justify-center md:mt-3">
            <StyledButtonPrimary href="#contact" variant="contained">
              MÁM ZÁJEM O SPOLUPRÁCI
            </StyledButtonPrimary>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
