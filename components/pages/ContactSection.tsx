import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

import ContactForm from "../ContactForm";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Gradient from "../ui/Gradient";

export default function ContactSection() {
  return (
    <Section className="relative -mt-44 pb-12 pt-52" id="contact">
      <Gradient className="z-0" />
      <Container className="relative z-10">
        <div className="flex flex-row gap-8">
          <div className="basis-2/3 border-r border-white pr-8 text-white">
            <h2 className="mb-6 text-white">MÁM ZÁJEM O KONZULTACI</h2>
            <ContactForm />
          </div>
          <div className="flex basis-1/3 flex-col justify-center gap-2 font-light text-white">
            <div>
              <PhoneEnabledIcon />
              <span className="ml-4">+420 773 697 212</span>
            </div>
            <div>
              <EmailIcon />
              <span className="ml-4">m.simecek@fair-life.cz</span>
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
