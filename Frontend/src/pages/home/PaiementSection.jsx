import React from "react";
import { motion } from "framer-motion";
import "./styles/PaiementSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import { payments } from "../../data/payments";

const PaiementSection = () => {
  return (
    <SectionContainer id="paiement" className="paiement paiementtech">
      <SectionTitle className="paiementtitle">
        Payez comme vous voulez
      </SectionTitle>
      <div className="paiementgallery paiementgalleryflat">
        {payments.map((p, idx) => (
          <motion.div
            className="paiementitem paiementitemcard"
            key={p.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.18, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="paiementiconbg">
              <img
                src={p.src}
                alt={p.alt}
                className="paiementicon"
                loading="lazy"
              />
            </div>
            <span className="paiementlabel">{p.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="paiementhelp">
        <a href="mailto:support@campusconnect.com" className="paiementhelplink">
          Besoin d’aide pour votre paiement ? Contactez l’assistance
        </a>
      </div>
    </SectionContainer>
  );
};

export default PaiementSection;
