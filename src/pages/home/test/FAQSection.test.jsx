import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FAQSection from "../FAQSection";
// Mock Vitest pour éviter les hooks réels
vi.mock("../../hooks/useAccordion", () => ({
  useAccordion: () => ({
    open: { group: null, idx: null },
    setOpen: vi.fn(),
    toggle: vi.fn(),
  }),
}));

describe("FAQSection", () => {
  it("affiche le titre de la section FAQ", () => {
    render(<FAQSection />);
    expect(
      screen.getByRole("heading", { name: /questions fréquentes/i })
    ).toBeInTheDocument();
  });

  it("affiche la barre de recherche et au moins une question", () => {
    render(<FAQSection />);
    expect(
      screen.getByPlaceholderText(/rechercher une question/i)
    ).toBeInTheDocument();
    // On vérifie la présence d'au moins une question
    expect(
      screen.getAllByRole("button", { name: /\?/i }).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("filtre les questions via la barre de recherche", () => {
    render(<FAQSection />);
    const input = screen.getByPlaceholderText(/rechercher une question/i);
    fireEvent.change(input, { target: { value: "aucune" } });
    expect(
      screen.getByText(/aucune question ne correspond/i)
    ).toBeInTheDocument();
  });

  it("vérifie l’accessibilité des questions (aria-expanded, aria-controls)", () => {
    render(<FAQSection />);
    const questions = screen.getAllByRole("button");
    questions.forEach((btn) => {
      expect(btn).toHaveAttribute("aria-expanded");
      expect(btn).toHaveAttribute("aria-controls");
    });
  });
});
