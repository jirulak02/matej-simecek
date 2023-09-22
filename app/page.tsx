import { Metadata } from "next";

import ContactSection from "@/components/pages/ContactSection";
import HeroSection from "@/components/pages/HeroSection";
import ServicesSection from "@/components/pages/ServicesSection";
import InfoSection from "@/components/pages/InfoSection";
import ReferenceSection from "@/components/pages/ReferenceSection";

export const metadata: Metadata = {
  title: "Matěj Šimeček - Váš finanční specialista | Fair Life",
  description: "Specialista na investice a správu majetku",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ServicesSection />
      <InfoSection />
      <ReferenceSection />
      <ContactSection />
    </main>
  );
}
