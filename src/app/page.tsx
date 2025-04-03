import { ContactSection } from "./_components/contactSection";
import { Header } from "./_components/header";
import { HeroSection } from "./_components/heroSection";
import { ModalitiesCard } from "./_components/modalidades";

export default function Home() {
  return <main>
    <Header />
    <HeroSection />
    <ModalitiesCard />
    <ContactSection />
  </main>
}
