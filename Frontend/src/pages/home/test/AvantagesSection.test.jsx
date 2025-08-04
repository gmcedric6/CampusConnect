import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import AvantagesSection from "../AvantagesSection";

describe("AvantagesSection", () => {
  it("affiche le titre 'Pourquoi choisir CampusConnect ?'", () => {
    render(<AvantagesSection />);
    expect(
      screen.getByRole("heading", { name: /pourquoi choisir campusconnect/i })
    ).toBeInTheDocument();
  });

  it("affiche au moins un avantage (carte)", () => {
    render(<AvantagesSection />);
    expect(screen.getByText(/simplicité/i)).toBeInTheDocument();
    expect(screen.getByText(/disponibilité/i)).toBeInTheDocument();
    expect(screen.getByText(/sécurité/i)).toBeInTheDocument();
  });

  it("affiche les icônes/images d’avantage", () => {
    const { container } = render(<AvantagesSection />);
    const icons = container.querySelectorAll(".advantage-cardicon");
    expect(icons.length).toBeGreaterThanOrEqual(3);
  });

  it("vérifie l’accessibilité des cartes : tabIndex et aria-label", () => {
    render(<AvantagesSection />);
    const cards = screen.getAllByLabelText(
      /simplicité|disponibilité|sécurité/i
    );
    cards.forEach((card) => {
      expect(card).toHaveAttribute("tabindex", "0");
    });
  });
});
