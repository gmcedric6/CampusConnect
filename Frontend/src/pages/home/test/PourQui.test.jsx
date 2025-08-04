import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PourQui from "../PourQui";

describe("PourQui", () => {
  it("affiche le titre 'Pour qui ?'", () => {
    render(<PourQui />);
    expect(
      screen.getByRole("heading", { name: /pour qui/i })
    ).toBeInTheDocument();
  });

  it("affiche chaque profil cible (étudiant, parent, professeur, administration)", () => {
    render(<PourQui />);
    expect(screen.getByText(/espace étudiant/i)).toBeInTheDocument();
    expect(screen.getByText(/espace parent/i)).toBeInTheDocument();
    expect(screen.getByText(/espace professeur/i)).toBeInTheDocument();
    expect(screen.getByText(/espace administration/i)).toBeInTheDocument();
  });

  it("affiche les icônes/images de profil pour chaque carte", () => {
    render(<PourQui />);
    const images = screen.getAllByRole("img");
    // On attend au moins 4 images (une par profil)
    expect(images.length).toBeGreaterThanOrEqual(4);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});
