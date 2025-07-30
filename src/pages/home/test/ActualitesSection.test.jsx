import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ActualitesSection from "../ActualitesSection";

describe("ActualitesSection", () => {
  it("affiche le titre 'La vie du campus'", () => {
    render(<ActualitesSection />);
    expect(
      screen.getByRole("heading", { name: /la vie du campus/i })
    ).toBeInTheDocument();
  });

  it("affiche au moins une actualité (carte)", () => {
    render(<ActualitesSection />);
    // On vérifie la présence d'au moins une carte avec un titre connu
    expect(screen.getByText(/100 utilisateurs/i)).toBeInTheDocument();
    expect(
      screen.getByText(/conseils pour réussir sa rentrée/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/nouveaux outils/i)).toBeInTheDocument();
  });

  it("vérifie la présence d’un lien ou bouton d’actualité (accessibilité)", () => {
    render(<ActualitesSection />);
    // Les cartes sont focusables (tabIndex=0)
    const cards = screen.getAllByRole("region", { hidden: true });
    expect(cards.length).toBeGreaterThanOrEqual(3);
    cards.forEach((card) => {
      expect(card).toHaveAttribute("tabindex", "0");
    });
  });

  it("vérifie l’accessibilité des images d’actualité (alt)", () => {
    render(<ActualitesSection />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});
