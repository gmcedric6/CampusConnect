import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactSupportSection from "../ContactSupportSection";

describe("ContactSupportSection", () => {
  it("affiche le titre 'Besoin d’aide ?' et le formulaire de contact", () => {
    render(<ContactSupportSection />);
    expect(
      screen.getByRole("heading", { name: /besoin d’aide/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("affiche tous les champs du formulaire (nom, email, message)", () => {
    render(<ContactSupportSection />);
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("valide les champs obligatoires et l’email", async () => {
    render(<ContactSupportSection />);
    const form = screen.getByRole("form");
    const nom = screen.getByLabelText(/nom/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    const bouton = screen.getByRole("button", { name: /envoyer/i });

    // Soumission vide
    fireEvent.change(nom, { target: { value: "" } });
    fireEvent.change(email, { target: { value: "" } });
    fireEvent.change(message, { target: { value: "" } });
    fireEvent.click(bouton);
    expect(
      await screen.findByText(/tous les champs sont obligatoires/i)
    ).toBeInTheDocument();

    // Email invalide
    fireEvent.change(nom, { target: { value: "Test" } });
    fireEvent.change(email, { target: { value: "test@" } });
    fireEvent.change(message, { target: { value: "Ceci est un message" } });
    fireEvent.click(bouton);
    expect(
      await screen.findByText(/adresse email invalide/i)
    ).toBeInTheDocument();

    // Succès
    fireEvent.change(nom, { target: { value: "Test" } });
    fireEvent.change(email, { target: { value: "test@email.com" } });
    fireEvent.change(message, { target: { value: "Ceci est un message" } });
    fireEvent.click(bouton);
    expect(
      await screen.findByText(/votre message a bien été envoyé/i)
    ).toBeInTheDocument();
  });

  it("affiche les messages d’erreur et de succès", async () => {
    render(<ContactSupportSection />);
    const bouton = screen.getByRole("button", { name: /envoyer/i });
    fireEvent.click(bouton);
    expect(
      await screen.findByText(/tous les champs sont obligatoires/i)
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/nom/i), {
      target: { value: "Test" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@email.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Ceci est un message" },
    });
    fireEvent.click(bouton);
    expect(
      await screen.findByText(/votre message a bien été envoyé/i)
    ).toBeInTheDocument();
  });

  it("vérifie l’accessibilité du formulaire (labels, aria, navigation clavier)", () => {
    render(<ContactSupportSection />);
    const nom = screen.getByLabelText(/nom/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    // Les champs doivent être focusables
    nom.focus();
    expect(nom).toHaveFocus();
    email.focus();
    expect(email).toHaveFocus();
    message.focus();
    expect(message).toHaveFocus();
    // Les messages d’erreur/succès sont en aria-live
    expect(screen.getByRole("form")).toContainElement(
      screen.getByText(/une question/i)
    );
  });
});
