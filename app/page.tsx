import ContactSection from "@/components/pages/ContactSection";
import HeroSection from "@/components/pages/HeroSection";
import IconSection from "@/components/pages/IconSection";
import InfoSection from "@/components/pages/InfoSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
        <h1 className="text-4xl text-white">Tato stránka se aktuálně připravuje!</h1>
        <h2 className="text-2xl text-white">Vraťte se v druhé půlce září, díky.</h2>
      </div>

      {/* <HeroSection />
      <IconSection />
      <InfoSection />
      <ContactSection /> */}
    </main>
  );
}
