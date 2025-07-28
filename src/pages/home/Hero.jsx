import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/Hero.css";
import studentsHero from "../../assets/image/students-hero.png";

function Hero() {
  return (
    <motion.section
      id="accueil"
      className="hero heroinstitutionnel herohorizontal"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Partie gauche : le texte, le badge, le bouton */}
      <div className="herocontent herocontentcard">
        <motion.span
          className="herobadge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Plateforme certifiée
        </motion.span>
        <motion.h1
          className="herotitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          CampusConnect
        </motion.h1>
        <motion.p
          className="herosubtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          La solution digitale pour gérer votre université, vos cours et vos
          paiements en toute sécurité.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link to="/login" className="btn btnprimary herocta btnanimate">
            Accéder à la plateforme
          </Link>
        </motion.div>
      </div>
      {/* Partie droite : l'image */}
      <div className="heroimagecontainer heroimagecontainerhorizontal">
        <img
          src={studentsHero}
          alt="Étudiants connectés sur CampusConnect"
          className="heroimage"
          loading="lazy"
        />
      </div>
      {/* Petit indicateur pour dire qu'on peut scroller */}
      <div className="heroscrollindicator" aria-hidden="true">
        <span className="scrollarrow">↓</span>
      </div>
    </motion.section>
  );
}
export default Hero;
