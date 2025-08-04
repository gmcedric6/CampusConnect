import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import "./styles/Hero.css";
import studentsHero from "../../assets/image/students-hero.png";
import {
  containerVariants,
  itemVariants,
  bounceVariants,
} from "../../animations/heroAnimations";

function Hero() {
  const [animKey, setAnimKey] = useState(0);

  return (
    <SectionContainer
      id="accueil"
      className="hero heroinstitutionnel herohorizontal"
      as={motion.section}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => setAnimKey((k) => k + 1)}
    >
      {/* Partie gauche : le texte, le badge, le bouton */}
      <motion.div
        key={animKey}
        className="herocontent herocontentcard"
        variants={containerVariants}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0 }}
      >
        <motion.span className="herobadge" variants={bounceVariants}>
          Plateforme certifiée
        </motion.span>
        <SectionTitle
          as={motion.h1}
          className="herotitle"
          variants={itemVariants}
        >
          CampusConnect. Plateforme digitale pour étudiants, parents et
          enseignants
        </SectionTitle>
        <motion.p className="herosubtitle" variants={itemVariants}>
          La solution digitale pour gérer votre université, vos cours et vos
          paiements en toute sécurité.
        </motion.p>
        <motion.div variants={bounceVariants}>
          <Link to="/login" className="btn btnprimary herocta btnanimate">
            Accéder à la plateforme
          </Link>
        </motion.div>
      </motion.div>
      {/* Partie droite : l'image */}
      <motion.div
        className="heroimagecontainer heroimagecontainerhorizontal"
        initial={{ opacity: 1, x: 0, scale: 1 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0 }}
      >
        <img
          src={studentsHero}
          alt="Étudiants sur la plateforme CampusConnect"
          className="heroimage"
          loading="lazy"
        />
      </motion.div>
    </SectionContainer>
  );
}

export default Hero;
