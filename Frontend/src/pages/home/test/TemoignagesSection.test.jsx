import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import TemoignagesSection from "../TemoignagesSection";

// Mock du hook useCarousel pour éviter les effets de bord
vi.mock("../../hooks/useCarousel", () => ({
  useCarousel: () => ({
    currentIdx: 0,
    setCurrentIdx: vi.fn(),
    next: vi.fn(),
    prev: vi.fn(),
  }),
}));

// Mock de l'API d'envoi
vi.mock("../../api/temoignage", () => ({
  sendTestimonial: vi.fn().mockResolvedValue(undefined),
}));

describe("TemoignagesSection", () => {
  it("affiche le titre de la section", () => {
    render(<TemoignagesSection />);
    expect(
      screen.getByRole("heading", { name: /ils nous font confiance/i })
    ).toBeInTheDocument();
  });

  it("affiche au moins un témoignage (carte)", () => {
    render(<TemoignagesSection />);
    expect(
      screen.getAllByText(/étudiant|parent|professeur/i)[0]
    ).toBeInTheDocument();
  });

  it("affiche les boutons de navigation (précédent, suivant)", () => {
    render(<TemoignagesSection />);
    expect(
      screen.getAllByRole("button", { name: /précédent/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /suivant/i })[0]
    ).toBeInTheDocument();
  });

  it("affiche le formulaire de témoignage et valide les champs", async () => {
    render(<TemoignagesSection />);
    const nom = screen.getAllByLabelText(/nom/i)[0];
    const role = screen.getAllByLabelText(/rôle/i)[0];
    const quote = screen.getAllByLabelText(/témoignage/i)[0];
    const bouton = screen.getAllByRole("button", { name: /envoyer/i })[0];
    // Soumission vide
    fireEvent.change(nom, { target: { value: "" } });
    fireEvent.change(role, { target: { value: "" } });
    fireEvent.change(quote, { target: { value: "" } });
    fireEvent.click(bouton);
    // Attendre l'apparition du message d'erreur
    const errorDiv = await screen.findByText(
      /tous les champs sont obligatoires/i
    );
    expect(errorDiv).toBeInTheDocument();
    // Succès
    fireEvent.change(nom, { target: { value: "Test" } });
    fireEvent.change(role, { target: { value: "Étudiant" } });
    fireEvent.change(quote, { target: { value: "Super expérience !" } });
    fireEvent.click(bouton);
    expect(
      await screen.findByText(/merci pour votre témoignage/i)
    ).toBeInTheDocument();
  });

  it("vérifie l’accessibilité des boutons (aria-label, focus)", () => {
    render(<TemoignagesSection />);
    const prev = screen.getAllByRole("button", { name: /précédent/i })[0];
    const next = screen.getAllByRole("button", { name: /suivant/i })[0];
    prev.focus();
    expect(prev).toHaveFocus();
    next.focus();
    expect(next).toHaveFocus();
  });
});
