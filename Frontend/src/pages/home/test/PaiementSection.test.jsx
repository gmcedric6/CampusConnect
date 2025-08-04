import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PaiementSection from "../PaiementSection";

describe("PaiementSection", () => {
  it("affiche le titre 'Payez comme vous voulez'", () => {
    render(<PaiementSection />);
    expect(
      screen.getByRole("heading", { name: /payez comme vous voulez/i })
    ).toBeInTheDocument();
  });

  it("affiche au moins un moyen de paiement (Orange Money, Virement bancaire, Espèces)", () => {
    render(<PaiementSection />);
    expect(screen.getByText(/orange money/i)).toBeInTheDocument();
    expect(screen.getByText(/virement bancaire/i)).toBeInTheDocument();
    expect(screen.getByText(/espèces/i)).toBeInTheDocument();
  });

  it("affiche les icônes ou logos de paiement (accessibilité alt)", () => {
    render(<PaiementSection />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(3);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});
