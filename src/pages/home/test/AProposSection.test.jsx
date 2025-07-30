import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AProposSection from "../AProposSection";

describe("AProposSection", () => {
  it("affiche le titre principal 'À propos'", () => {
    render(<AProposSection />);
    expect(
      screen.getByRole("heading", { name: /à propos/i })
    ).toBeInTheDocument();
  });

  it("affiche le texte d’introduction et la mission", () => {
    render(<AProposSection />);
    expect(
      screen.getByText(/faciliter l’accès à l’éducation supérieure/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/notre mission/i)).toBeInTheDocument();
    expect(screen.getByText(/notre histoire/i)).toBeInTheDocument();
  });

  it("affiche l’illustration principale avec un alt explicite", () => {
    render(<AProposSection />);
    const img = screen.getByAltText(
      /illustration institutionnelle campusconnect/i
    );
    expect(img).toBeInTheDocument();
  });

  it("vérifie l’accessibilité : aria-labelledby sur la section et aria-hidden sur les icônes", () => {
    render(<AProposSection />);
    const section = screen.getByRole("region", { name: /à propos/i });
    expect(section).toHaveAttribute("aria-labelledby");
    // Les icônes svg doivent avoir aria-hidden ou un titre
    const icons = screen.getAllByTitle(/icône (cible|livre)/i);
    expect(icons.length).toBeGreaterThanOrEqual(2);
  });
});
