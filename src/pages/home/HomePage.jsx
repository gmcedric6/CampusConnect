import Hero from "./Hero";
import AProposSection from "./AProposSection";
import ChiffresSection from "./ChiffresSection";
import AvantagesSection from "./AvantagesSection";
import TemoignagesSection from "./TemoignagesSection";
import FAQSection from "./FAQSection";
import ActualitesSection from "./ActualitesSection";
import PourQui from "./PourQui";
import PaiementSection from "./PaiementSection";
import PartenairesSection from "./PartenairesSection";
import ContactSupportSection from "./ContactSupportSection";
import CallToActionSection from "./CallToActionSection";
import ChatbotWidget from "../../components/ChatbotWidget";
function HomePage() {
  return (
    <>
      <Hero />
      <AProposSection />
      <ChiffresSection />
      <AvantagesSection />
      <TemoignagesSection />
      <FAQSection />
      <ActualitesSection />
      <PourQui />
      <PaiementSection />
      <PartenairesSection />
      <ContactSupportSection />
      <CallToActionSection />
      <ChatbotWidget />
    </>
  );
}
export default HomePage;
