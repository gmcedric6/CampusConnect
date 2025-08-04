import React, { useState } from "react";
import CountUp from "react-countup";
import "./styles/ChiffresSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { chiffres } from "../../data/chiffres";
import { motion } from "framer-motion";
import contentGif from "../../assets/gif/content.gif";
import etudiantGif from "../../assets/gif/Etudiant.gif";
import etablissementsGif from "../../assets/gif/Etablissements.gif";

const ChiffresSection = () => {
  // Un tableau d'états pour chaque carte : true si la carte est visible
  const [visibleCards, setVisibleCards] = useState(
    Array(chiffres.length).fill(false)
  );

  // Handler appelé quand une carte entre dans la vue
  const handleInView = (idx) => {
    setVisibleCards((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  // Handler appelé quand une carte sort de la vue
  const handleOutView = (idx) => {
    setVisibleCards((prev) => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  return (
    <SectionContainer id="chiffres" className="chiffressection">
      <SectionTitle className="chiffrestitle">
        Notre impact en chiffres
      </SectionTitle>
      <SectionGrid className="chiffresgrid">
        {chiffres.map((c, idx) => (
          <motion.div
            className="chiffrecard"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.13, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.04 }}
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              transition: "outline 0.2s",
            }}
            tabIndex={0}
            aria-label={c.label + " : " + c.end + (c.suffix || "")}
            role="group"
            onViewportEnter={() => handleInView(idx)}
            onViewportLeave={() => handleOutView(idx)}
          >
            {idx === 0 && (
              <img
                src={etudiantGif}
                alt="Étudiant CampusConnect"
                className="chiffregif"
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "1rem",
                  borderRadius: "1rem",
                }}
              />
            )}
            {idx === 1 && (
              <img
                src={etablissementsGif}
                alt="Établissements CampusConnect"
                className="chiffregif"
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "1rem",
                  borderRadius: "1rem",
                }}
              />
            )}
            {idx === 2 && (
              <img
                src={contentGif}
                alt="Contenu CampusConnect"
                className="chiffregif"
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "1rem",
                  borderRadius: "1rem",
                }}
              />
            )}
            <span className="chiffrevalue">
              {visibleCards[idx] ? (
                <CountUp
                  end={c.end}
                  duration={2.2}
                  separator={c.separator}
                  suffix={c.suffix}
                  start={0}
                />
              ) : (
                0
              )}
            </span>
            <span className="chiffrelabel">{c.label}</span>
          </motion.div>
        ))}
      </SectionGrid>
    </SectionContainer>
  );
};

export default ChiffresSection;
