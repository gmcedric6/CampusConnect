import React from "react";
import { motion } from "framer-motion";
import "./styles/AProposSection.css";
import aproposImg from "../../assets/image/apropos-illustration.png";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

function AProposSection() {
  return (
    <SectionContainer
      id="apropos"
      className="apropos fade-in visible"
      aria-labelledby="apropostitle"
    >
      <div className="aproposcontainer apropos2col">
        {/* Colonne gauche : image institutionnelle */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={aproposImg}
            alt="Illustration institutionnelle CampusConnect"
            className="aproposimg"
            loading="lazy"
          />
        </motion.div>
        {/* Colonne droite : tout le texte */}
        <motion.div
          className="aproposcontentcol aproposcontainercentered"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <SectionTitle id="apropostitle" className="apropostitle">
            À propos de CampusConnect
          </SectionTitle>
          <div className="aproposmission aproposmissionhighlight fade-in-apropos">
            <div className="aproposmissionrow">
              <span className="aproposicon" aria-hidden="true">
                {/* Cible (Mission) */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icône cible - Mission</title>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1976d2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#1976d2"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="2" fill="#1976d2" />
                </svg>
              </span>
              <span className="aproposmissionlabel">Notre mission</span>
            </div>
            <span className="aproposmissiontext">
              Faciliter l’accès à l’éducation supérieure, moderniser la gestion
              universitaire et rapprocher tous les acteurs du campus.
            </span>
          </div>
          <div className="aproposhistoire aproposmissionhighlight fade-in-apropos">
            <div className="aproposhistoirerow">
              <span className="aproposicon" aria-hidden="true">
                {/* Livre (Histoire) */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icône livre - Histoire</title>
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#1976d2"
                    strokeWidth="2"
                  />
                  <line
                    x1="9"
                    y1="5"
                    x2="9"
                    y2="19"
                    stroke="#1976d2"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span className="aproposhistoirelabel">Notre histoire</span>
            </div>
            <span className="aproposhistoiretext">
              Fondée en 2022, CampusConnect est née du besoin de digitaliser
              l’université et d’offrir une plateforme inclusive pour étudiants,
              parents, professeurs et administration.
            </span>
          </div>
          <div className="aproposvaleurs aproposvaleursbadges fade-in-apropos">
            <div>
              <span className="aproposvaleurbadge">Simplicité</span>
              <span className="aproposvaleurbadge">Transparence</span>
              <span className="aproposvaleurbadge">Sécurité</span>
              <span className="aproposvaleurbadge">Innovation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default AProposSection;
