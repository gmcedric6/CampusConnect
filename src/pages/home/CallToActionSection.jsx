import React, { useState } from "react";
import { Link } from "react-router-dom";

import SectionContainer from "../../components/SectionContainer";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import "./styles/CallToActionSection.css";
import { requestDemo } from "../../api/demo";

const CallToActionSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name.trim() || !form.email.trim()) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    setLoading(true);
    try {
      await requestDemo(form);
      setSuccess("Votre demande de démo a bien été envoyée !");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
    setLoading(false);
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <SectionContainer id="cta" className="cta">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionTitle className="ctatitle">
          Rejoignez CampusConnect dès aujourd’hui
        </SectionTitle>
        <p className="ctasubtitle">
          Inscrivez-vous gratuitement ou demandez une démo
        </p>
        <div className="ctabuttons">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ctabtn-pointer"
          >
            <Link
              to="/login"
              className="ctabtn ctabtnmain"
              role="button"
              aria-label="Se connecter à CampusConnect"
            >
              Se connecter
            </Link>
          </motion.div>
          <button
            type="button"
            className="ctabtn ctabtndemo"
            aria-label="Demander une démo CampusConnect"
            onClick={() => setShowModal(true)}
          >
            Demander une démo
          </button>
        </div>
      </motion.div>
      {showModal && (
        <div className="demo-modal-bg" onClick={() => setShowModal(false)}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="demo-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <h3>Demander une démo</h3>
            <form className="demo-modal-form" onSubmit={handleSubmit}>
              <label>
                Nom
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message (optionnel)
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </label>
              {error && (
                <div className="demo-modal-error" aria-live="polite">
                  {error}
                </div>
              )}
              {success && (
                <div className="demo-modal-success" aria-live="polite">
                  {success}
                </div>
              )}
              <button
                type="submit"
                className="ctabtn ctabtnmain"
                disabled={loading}
              >
                {loading ? <span className="loader"></span> : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default CallToActionSection;
