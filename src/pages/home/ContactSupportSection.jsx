import React from "react";
import { useContactForm } from "../../hooks/useContactForm";
import { motion } from "framer-motion";
import "./styles/ContactSupportSection.css";

const ContactSupportSection = () => {
  // Utilisation du hook personnalisé pour le formulaire de contact
  const { form, setForm, error, setError, success, setSuccess, handleChange } =
    useContactForm();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Adresse email invalide.");
      return;
    }
    setSuccess("Votre message a bien été envoyé ! (simulation)");
    setForm({ name: "", email: "", message: "" });
    setError("");
    setTimeout(() => setSuccess(""), 4000);
  };

  return (
    <motion.section
      id="contact-support"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="contactsupport-section"
    >
      <div className="contactsupport-flexrow">
        <section className="contactsupport-block contactsupport-left fade-in">
          <h2 className="contactsupporttitle">
            <span
              className="contactsupporticon"
              aria-label="Assistance"
              role="img"
            >
              🛟
            </span>
            Besoin d’aide ?
          </h2>
          <p className="contactsupporttext">
            Notre équipe vous accompagne par mail ou téléphone.
            <br />
            <span className="contactsupportphone">
              Tél :{" "}
              <a href="tel:+2250102030405" className="contactsupportphonelink">
                01 02 03 04 05
              </a>
            </span>
          </p>
          <a
            href="mailto:support@campusconnect.com"
            className="contactsupportbtn"
          >
            Contacter le support
          </a>
        </section>
        <section className="contactsupport-block contactsupport-right fade-in">
          <form className="contactquickform" onSubmit={handleSubmit} noValidate>
            <div className="contactquickform-title">
              Une question ?
              <div>Un souci, une idée ? Balance-nous un message !</div>
            </div>
            {error && <div className="contactquickform-error">{error}</div>}
            {success && (
              <div className="contactquickform-success">{success}</div>
            )}
            <label>
              Nom
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
                autoComplete="email"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required
                rows={4}
              />
            </label>
            <button className="contactquickform-btn" type="submit">
              Envoyer
            </button>
          </form>
        </section>
      </div>
    </motion.section>
  );
};

export default ContactSupportSection;
