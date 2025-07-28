// TemoignagesSection.jsx
import React from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/TemoignagesSection.css";
import TestimonialCard from "../../components/TestimonialCard";

import { TESTIMONIALS } from "../../data/temoignages";
function TemoignagesSection() {
  const [showForm, setShowForm] = React.useState(true);
  const [formData, setFormData] = React.useState({
    name: "",
    role: "",
    quote: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const {
    currentIdx,
    setCurrentIdx,
    next: goToNext,
    prev: goToPrev,
  } = useCarousel(TESTIMONIALS.length);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
    setFormData({ name: "", role: "", quote: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <motion.section
      id="temoignages"
      className="temoignages fade-in"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="temoignagestitle">Ils nous font confiance</h2>
      <div className="temoignagesgrid temoignagesgrid-styled">
        <button
          aria-label="Précédent"
          onClick={goToPrev}
          className="temoignages-arrow temoignages-arrow-left"
        >
          &#8592;
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="temoignagescard-motion"
          >
            <TestimonialCard
              quote={TESTIMONIALS[currentIdx].quote}
              name={TESTIMONIALS[currentIdx].name}
              role={TESTIMONIALS[currentIdx].role}
              avatar={TESTIMONIALS[currentIdx].avatar}
              className="temoignagecard hoverscale"
            />
            {/* Pagination sous la carte */}
            <div className="temoignages-pagination">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={
                    "temoignages-pagination-dot" +
                    (i === currentIdx ? " active" : "")
                  }
                  aria-label={`Aller au témoignage ${i + 1}`}
                  onClick={() => setCurrentIdx(i)}
                  type="button"
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          aria-label="Suivant"
          onClick={goToNext}
          className="temoignages-arrow temoignages-arrow-right"
        >
          &#8594;
        </button>
      </div>
      {showForm && (
        <form className="temoignage-form" onSubmit={handleSubmit}>
          <label>
            Nom
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom complet"
            />
          </label>
          <label>
            Rôle
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              placeholder="Étudiant, Parent, Professeur..."
            />
          </label>
          <label>
            Témoignage
            <textarea
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Votre expérience avec CampusConnect..."
            />
          </label>
          <div className="form-actions">
            <button type="button" onClick={() => setShowForm(false)}>
              Annuler
            </button>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="temoignages-thankyou">
          Merci pour votre témoignage !
        </div>
      )}
    </motion.section>
  );
}

export default TemoignagesSection;
