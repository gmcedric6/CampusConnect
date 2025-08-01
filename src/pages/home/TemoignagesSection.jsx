// TemoignagesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
    setLoading(false);
  };
  // Détection mobile JS
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
  return (
    <SectionContainer id="temoignages" className="temoignages fade-in">
      <SectionTitle className="temoignagestitle">
        Ils nous font confiance
      </SectionTitle>
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="temoignages-swiper"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="temoignagescard-motion"
              >
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                  avatar={t.avatar}
                  className="temoignagecard hoverscale"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SectionGrid className="temoignagesgrid temoignagesgrid-styled">
          {/* TODO: Remettre le carrousel desktop ici si besoin */}
        </SectionGrid>
      )}
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
