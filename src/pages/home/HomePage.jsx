import React, { useEffect } from "react";
import Hero from "./Hero";
import EquipeSection from "./EquipeSection";
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
import NewsletterSection from "./NewsletterSection";
import ChatbotWidget from "../../components/ChatbotWidget";
import ScrollToTopButton from "../../components/ScrollToTopButton";
function HomePage() {
  useEffect(() => {
    document.title = "CampusConnect | Plateforme pour étudiants";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "CampusConnect est la plateforme digitale qui facilite la gestion universitaire, les paiements et la communication entre étudiants, parents, professeurs et administration."
      );
    }
  }, []);
  return (
    <>
      <Hero />
      <EquipeSection />
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
      <NewsletterSection />
      <CallToActionSection />
      <ChatbotWidget />
      <ScrollToTopButton />
    </>
  );
}
export default HomePage;
