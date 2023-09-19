import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

import ContactForm from "../ContactForm";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Gradient from "../ui/Gradient";

export default function ContactSection() {
  return (
    <Section className="relative -mt-44 pb-12 pt-52">
      <Gradient className="z-0" />
      <Container className="relative z-10">
        <div className="flex flex-row gap-8">
          <div className="basis-2/3 border-r pr-8 text-white">
            <h2 className="mb-6">MÁM ZÁJEM O KONZULTACI</h2>
            <ContactForm />
          </div>
          <div className="flex basis-1/3 flex-col justify-center gap-2 text-white">
            <div>
              <PhoneEnabledIcon />
              <span className="ml-6">+420 773 697 212</span>
            </div>
            <div>
              <EmailIcon />
              <span className="ml-6">m.simecek@fair-life.cz</span>
            </div>
            <h4 className="mt-6">Sídlo</h4>
            <div>
              <p>Vinohradská 2828/151</p>
              <p>130 00 Praha 3</p>
            </div>
            <div>
              <p>
                <span className="font-semibold">IČ:</span> 10674209
              </p>
              <p>
                <span className="font-semibold">DIČ:</span> CZ000906....
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
