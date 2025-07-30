// TemoignagesSection.jsx
import React, { useState } from "react";
import { useCarousel } from "../../hooks/useCarousel";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/TemoignagesSection.css";
import TestimonialCard from "../../components/TestimonialCard";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { TESTIMONIALS } from "../../data/temoignages";
import { sendTestimonial } from "../../api/temoignage";
function TemoignagesSection() {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    currentIdx,
    setCurrentIdx,
    next: goToNext,
    prev: goToPrev,
  } = useCarousel(testimonials.length);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !formData.name.trim() ||
      !formData.role.trim() ||
      !formData.quote.trim()
    ) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    setLoading(true);
    try {
      await sendTestimonial(formData);
      // Ajoute le témoignage en haut de la liste (avatar par défaut)
      setTestimonials([
        {
          ...formData,
          avatar:
            "https://ui-avatars.com/api/?name=" +
            encodeURIComponent(formData.name),
        },
        ...testimonials,
      ]);
      setSubmitted(true);
      setShowForm(false);
      setFormData({ name: "", role: "", quote: "" });
      setTimeout(() => setSubmitted(false), 3000);
      setCurrentIdx(0); // Affiche le nouveau témoignage
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
    setLoading(false);
  };
  return (
    <SectionContainer id="temoignages" className="temoignages fade-in">
      <SectionTitle className="temoignagestitle">
        Ils nous font confiance
      </SectionTitle>
      <SectionGrid className="temoignagesgrid temoignagesgrid-styled">
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
              quote={testimonials[currentIdx].quote}
              name={testimonials[currentIdx].name}
              role={testimonials[currentIdx].role}
              avatar={testimonials[currentIdx].avatar}
              className="temoignagecard hoverscale"
            />
            {/* Pagination sous la carte */}
            <div className="temoignages-pagination">
              {testimonials.map((_, i) => (
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
      </SectionGrid>
      {showForm && (
        <>
          <p className="temoignage-form-info">
            Partage ton expérience avec la communauté CampusConnect !
          </p>
          <form className="temoignage-form" onSubmit={handleSubmit} role="form">
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
            {error && (
              <div className="temoignage-form-error" aria-live="polite">
                {error}
              </div>
            )}
            <div className="form-actions">
              <button type="button" onClick={() => setShowForm(false)}>
                Annuler
              </button>
              <button type="submit" disabled={loading}>
                {loading ? <span className="loader"></span> : "Envoyer"}
              </button>
            </div>
          </form>
        </>
      )}

      {submitted && (
        <div className="temoignages-thankyou" aria-live="polite">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Merci pour votre témoignage !
          </motion.div>
        </div>
      )}
    </SectionContainer>
  );
}

export default TemoignagesSection;
