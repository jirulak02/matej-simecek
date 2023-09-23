import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

import ContactForm from "../ContactForm";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Gradient from "../ui/Gradient";

export default function ContactSection() {
  return (
    <Section className="relative -mt-32 pb-8 pt-36 md:-mt-44 md:pb-12 md:pt-52" id="contact">
      <Gradient className="z-0" />
      <Container className="relative z-10">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-2/3 text-white md:border-r md:border-white md:pr-8">
            <h2 className="mb-6 text-white">MÁM ZÁJEM O KONZULTACI</h2>
            <ContactForm />
          </div>
          <div className="flex basis-1/3 flex-col justify-center gap-2 font-light text-white">
            <div>
              <PhoneEnabledIcon />
              <a href="tel:+420773697212" target="_blank" className="ml-4">
                +420 773 697 212
              </a>
            </div>
            <div>
              <EmailIcon />
              <a href="mailto:m.simecek@fair-life.cz" target="_blank" className="ml-4">
                m.simecek@fair-life.cz
              </a>
            </div>
            <h4 className="mt-6 font-medium text-white">Sídlo</h4>
            <div>
              <p>Scott & Weber</p>
              <p>Vinohradská 2828/151</p>
              <p>vchod C, 7. patro</p>
              <p>130 00 Praha 3 - Žižkov</p>
            </div>
            <div className="mt-6">
              <p>
                <span className="font-medium">IČ:</span> 10674209
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
