import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PartenairesSection from "../PartenairesSection";

describe("PartenairesSection", () => {
  it("affiche le titre 'Nos partenaires'", () => {
    render(<PartenairesSection />);
    expect(
      screen.getByRole("heading", { name: /nos partenaires/i })
    ).toBeInTheDocument();
  });

  it("affiche au moins un partenaire (logo et nom)", () => {
    render(<PartenairesSection />);
    expect(screen.getByText(/université alpha/i)).toBeInTheDocument();
    expect(screen.getByText(/ministère éducation/i)).toBeInTheDocument();
    expect(screen.getByText(/tech4school/i)).toBeInTheDocument();
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(3);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("vérifie la présence de liens vers les partenaires (si existant)", () => {
    render(<PartenairesSection />);
    // Si un lien existe, il doit être dans le DOM
    const links = screen.queryAllByRole("link");
    // On accepte qu'il n'y ait aucun lien, mais s'il y en a, il doit avoir un href
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link.getAttribute("href")).not.toBe("");
    });
  });
});
