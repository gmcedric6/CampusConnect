import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ChiffresSection from "../ChiffresSection";

describe("ChiffresSection", () => {
  it("affiche le titre 'Notre impact en chiffres'", () => {
    render(<ChiffresSection />);
    expect(
      screen.getByRole("heading", { name: /notre impact en chiffres/i })
    ).toBeInTheDocument();
  });

  it("affiche toutes les cartes de chiffres (étudiants, établissements, satisfaction)", () => {
    render(<ChiffresSection />);
    expect(screen.getByText(/étudiants/i)).toBeInTheDocument();
    expect(screen.getByText(/établissements partenaires/i)).toBeInTheDocument();
    expect(screen.getByText(/satisfaction/i)).toBeInTheDocument();
  });

  it("affiche les images/gifs associés à chaque carte", () => {
    render(<ChiffresSection />);
    expect(screen.getByAltText(/étudiant campusconnect/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/établissements campusconnect/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/contenu campusconnect/i)).toBeInTheDocument();
  });

  it("anime les compteurs avec CountUp", () => {
    render(<ChiffresSection />);
    // Vérifie la présence d'un composant CountUp (span avec chiffre animé)
    const values = screen.getAllByText((content, el) =>
      el && typeof el.className === "string"
        ? el.className.includes("chiffrevalue")
        : false
    );
    expect(values.length).toBeGreaterThanOrEqual(3);
  });

  it("vérifie l’accessibilité : aria-label sur chaque carte et navigation clavier", () => {
    render(<ChiffresSection />);
    const cards = screen.getAllByRole("group");
    // Les cartes sont des divs avec tabIndex=0 et aria-label
    cards.forEach((card) => {
      expect(card).toHaveAttribute("aria-label");
      expect(card).toHaveAttribute("tabindex", "0");
    });
  });
});
