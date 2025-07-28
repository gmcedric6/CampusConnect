import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/CallToActionSection.css";

const CallToActionSection = () => (
  <motion.section
    id="cta"
    className="cta"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <h2 className="ctatitle">Rejoignez CampusConnect dès aujourd’hui</h2>
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
      <a
        href="#"
        className="ctabtn ctabtndemo"
        role="button"
        aria-label="Demander une démo CampusConnect"
      >
        Demander une démo
      </a>
    </div>
  </motion.section>
);

export default CallToActionSection;
