import React from "react";
beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = function () {};
});
beforeAll(() => {
  window.IntersectionObserver = class {
    constructor() {
      this.root = null;
      this.rootMargin = "";
      this.thresholds = [];
    }
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
});
import { describe, it, expect, beforeEach, afterEach, beforeAll } from "vitest";
import { vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../HomePage";

// Mock des sous-composants pour isoler HomePage
vi.mock("./AProposSection", () => ({
  default: () => <div data-testid="apropos" />,
}));
vi.mock("./ChiffresSection", () => ({
  default: () => <div data-testid="chiffres" />,
}));
vi.mock("./AvantagesSection", () => ({
  default: () => <div data-testid="avantages" />,
}));
vi.mock("./ActualitesSection", () => ({
  default: () => <div data-testid="actualites" />,
}));
vi.mock("./PourQui", () => ({ default: () => <div data-testid="pourqui" /> }));
vi.mock("./PaiementSection", () => ({
  default: () => <div data-testid="paiement" />,
}));
vi.mock("./PartenairesSection", () => ({
  default: () => <div data-testid="partenaires" />,
}));
vi.mock("./ContactSupportSection", () => ({
  default: () => <div data-testid="contact-support" />,
}));
vi.mock("./CallToActionSection", () => ({
  default: () => <div data-testid="cta" />,
}));

describe("HomePage", () => {
  it("le carousel des témoignages fonctionne et le formulaire est toujours visible", async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    // Témoignages attendus (ordre)
    const temoignages = [
      "CampusConnect a simplifié ma vie d’étudiant. Je gère tout en ligne, c’est top !",
      "Je peux suivre la scolarité de mon fils et payer sans me déplacer. Très rassurant !",
      "Correction des notes, communication avec les familles… tout est plus simple !",
    ];

    // Vérifie le témoignage initial dans le carousel affiché
    const getCurrentTestimonial = () => {
      const card = document.querySelector(".temoignagescard-motion");
      return card ? card.textContent : "";
    };
    expect(getCurrentTestimonial()).toContain(temoignages[0]);

    // Clique sur "Suivant" et vérifie le témoignage suivant
    const nextBtn = screen.getAllByRole("button", { name: /suivant/i })[0];
    fireEvent.click(nextBtn);
    await waitFor(() => {
      expect(getCurrentTestimonial()).toContain(temoignages[1]);
    });

    // Clique sur "Précédent" et vérifie le témoignage précédent
    const prevBtn = screen.getAllByRole("button", { name: /précédent/i })[0];
    fireEvent.click(prevBtn);
    await waitFor(() => {
      expect(getCurrentTestimonial()).toContain(temoignages[0]);
    });

    // Clique plusieurs fois sur "Suivant" pour vérifier le cycle
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    await waitFor(() => {
      expect(getCurrentTestimonial()).toContain(temoignages[2]);
    });
    fireEvent.click(nextBtn);
    await waitFor(() => {
      expect(getCurrentTestimonial()).toContain(temoignages[0]);
    });

    // Vérifie que le formulaire de témoignage est toujours visible (au moins un champ "Votre nom complet")
    const nameInputs = await screen.findAllByPlaceholderText(
      /Votre nom complet/i
    );
    expect(nameInputs.length).toBeGreaterThan(0);
    const roleInputs = screen.getAllByPlaceholderText(
      /Étudiant, Parent, Professeur/i
    );
    expect(roleInputs.length).toBeGreaterThan(0);
    // Vérifie la présence d'un textarea dans le formulaire de témoignage
    const textarea = document.querySelector("form.temoignage-form textarea");
    expect(textarea).toBeInTheDocument();
  });
  afterEach(() => {
    cleanup();
  });
  it("affiche les textes et images importants de la page d'accueil", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    // Titre principal
    const campusConnectTitles = screen.getAllByText(/CampusConnect/i);
    expect(campusConnectTitles.length).toBeGreaterThan(0);
    // Slogan
    const slogans = screen.getAllByText(
      /La solution digitale pour gérer votre université/i
    );
    expect(slogans.length).toBeGreaterThan(0);
    // Badge certifié
    const badges = screen.getAllByText(/Plateforme certifiée/i);
    expect(badges.length).toBeGreaterThan(0);
    // Bouton principal
    const links = screen.getAllByRole("link", {
      name: /Accéder à la plateforme/i,
    });
    expect(links.length).toBeGreaterThan(0);
    // Image principale
    const images = screen.getAllByAltText(
      /Étudiants connectés sur CampusConnect/i
    );
    expect(images.length).toBeGreaterThan(0);
    // Vérifie la présence du bouton d'ouverture du chatbot
    const chatbotBtns = screen.getAllByRole("button", {
      name: /Ouvrir le chat d'assistance/i,
    });
    expect(chatbotBtns.length).toBeGreaterThan(0);
  });
  it("redirige vers la page de connexion au clic sur le bouton 'Accéder à la plateforme'", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const ctaBtns = screen.getAllByRole("link", {
      name: /Accéder à la plateforme/i,
    });
    const ctaBtn = ctaBtns[0];
    expect(ctaBtn).toHaveAttribute("href", expect.stringContaining("/login"));
    fireEvent.click(ctaBtn);
    // On ne peut pas vérifier la navigation réelle sans router complet, mais on vérifie que le lien existe et est cliquable
  });

  it("ouvre la fenêtre du chatbot au clic sur le bouton", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const chatbotBtns = screen.getAllByRole("button", {
      name: /Ouvrir le chat d'assistance/i,
    });
    const chatbotBtn = chatbotBtns[0];
    fireEvent.click(chatbotBtn);
    // Vérifie qu'une fenêtre de chat apparaît
    const chatbotHeaders = screen.getAllByText(/Assistant CampusConnect/i);
    expect(chatbotHeaders.length).toBeGreaterThan(0);
    // Vérifie la fermeture du chatbot
    const closeBtn = screen.getByRole("button", { name: /Fermer le chat/i });
    fireEvent.click(closeBtn);
    // Vérifie que la fenêtre du chatbot est masquée
    const chatbotWindow = document.querySelector(".chatbot-window");
    expect(chatbotWindow).not.toBeNull();
    if (chatbotWindow) {
      expect(
        chatbotWindow instanceof HTMLElement && chatbotWindow.style.opacity
      ).toBe("0");
    }
  });
  it("contient les rôles ARIA et les labels d'accessibilité", () => {
    // Vérifie le titre principal (h1.heroTitle)
    const headings = screen.getAllByRole("heading", { name: /CampusConnect/i });
    const heroHeading = headings.find((h) => h.className.includes("herotitle"));
    expect(heroHeading).toBeInTheDocument();

    // Vérifie le bouton du chatbot avec aria-label
    const chatbotBtn = screen.getByRole("button", {
      name: /Ouvrir le chat d'assistance/i,
    });
    expect(chatbotBtn).toHaveAttribute(
      "aria-label",
      "Ouvrir le chat d'assistance"
    );

    // Vérifie le bouton/lien principal avec un label
    const ctaBtn = screen.getByRole("link", {
      name: /Accéder à la plateforme/i,
    });
    expect(ctaBtn).toHaveAttribute("href", expect.stringContaining("/login"));

    // Vérifie la présence d'une image avec un alt
    const heroImg = screen.getByAltText(
      /Étudiants connectés sur CampusConnect/i
    );
    expect(heroImg).toBeInTheDocument();
  });
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });

  it("affiche le titre et le bouton du Hero", () => {
    const headings = screen.getAllByRole("heading", { name: /CampusConnect/i });
    const heroHeading = headings.find((h) => h.className.includes("herotitle"));
    expect(heroHeading).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Accéder à la plateforme/i })
    ).toBeInTheDocument();
  });

  it("affiche le bouton du chatbot", () => {
    expect(
      screen.getByRole("button", { name: /Ouvrir le chat d'assistance/i })
    ).toBeInTheDocument();
  });
  it("filtre la FAQ selon la saisie dans la barre de recherche", async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    // Saisir un mot-clé dans la barre de recherche FAQ
    const faqSearchInputs = screen.getAllByPlaceholderText(
      "Rechercher une question..."
    );
    expect(faqSearchInputs.length).toBeGreaterThan(0);
    await fireEvent.change(faqSearchInputs[0], {
      target: { value: "paiement" },
    });

    // Attendre la mise à jour du DOM après le filtrage et vérifier dans la section FAQ courante
    await waitFor(() => {
      const faqSection = document.getElementById("faq");
      expect(faqSection).not.toBeNull();
      if (faqSection) {
        const faqButtons = Array.from(
          faqSection.querySelectorAll("button.faqquestion")
        );
        expect(faqButtons.length).toBeGreaterThan(0);
        faqButtons.forEach((btn) => {
          const txt = (btn.textContent ?? "").toLowerCase();
          expect(txt).toContain("paiement");
        });
      }
    });
  });
});
