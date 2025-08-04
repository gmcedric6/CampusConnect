import React, { useState } from "react";
import "./styles/NewsletterSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu pourrais ajouter l'appel à une API ou un service d'emailing
    setSubmitted(true);
  };

  return (
    <SectionContainer className="newsletter-section" id="newsletter">
      <div className="newsletter-container">
        <SectionTitle className="newsletter-title">
          Reste informé des nouveautés !
        </SectionTitle>
        <p className="newsletter-desc">
          Inscris-toi à notre newsletter pour recevoir les dernières actualités,
          conseils et offres CampusConnect.
        </p>
        {submitted ? (
          <div className="newsletter-success">
            Merci pour ton inscription ! 🎉
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Ton adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              S’inscrire
            </button>
          </form>
        )}
      </div>
    </SectionContainer>
  );
}

export default NewsletterSection;
