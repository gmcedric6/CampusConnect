import React from "react";
import { motion } from "framer-motion";
import "./styles/PaiementSection.css";
import { payments } from "../../data/payments";
const PaiementSection = () => {
  return (
    <motion.section
      id="paiement"
      className="paiement paiementtech"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="paiementtitle">Payez comme vous voulez</h2>
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
              <img src={p.src} alt={p.alt} className="paiementicon" />
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
    </motion.section>
  );
};

export default PaiementSection;
