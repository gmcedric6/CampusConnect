import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import CallToActionSection from "../CallToActionSection";

describe("CallToActionSection", () => {
  it("affiche le bouton principal d’appel à l’action (Se connecter)", () => {
    render(
      <MemoryRouter>
        <CallToActionSection />
      </MemoryRouter>
    );
    // Le bouton principal est un <Link role="button">
    const btn = screen.getByRole("button", { name: /se connecter/i });
    expect(btn).toBeInTheDocument();
  });

  it("vérifie le texte du bouton principal", () => {
    render(
      <MemoryRouter>
        <CallToActionSection />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("button", { name: /se connecter/i })
    ).toHaveTextContent(/se connecter/i);
  });

  it("vérifie l’accessibilité du bouton (aria-label, focus)", () => {
    render(
      <MemoryRouter>
        <CallToActionSection />
      </MemoryRouter>
    );
    const btn = screen.getByRole("button", { name: /se connecter/i });
    expect(btn).toHaveAttribute(
      "aria-label",
      expect.stringMatching(/se connecter/i)
    );
    btn.focus();
    expect(btn).toHaveFocus();
  });
});
