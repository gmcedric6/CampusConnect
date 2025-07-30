import React from "react";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import CountUp from "react-countup";
import "./styles/ChiffresSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { chiffres } from "../../data/chiffres";
import { useState } from "react";
import { motion } from "framer-motion";
import contentGif from "../../assets/gif/content.gif";
import etudiantGif from "../../assets/gif/Etudiant.gif";
import etablissementsGif from "../../assets/gif/Etablissements.gif";

const ChiffresSection = () => {
  const { countKey, relaunch } = useAnimatedCounter();
  return (
    <SectionContainer
      id="chiffres"
      className="chiffressection"
      onViewportEnter={relaunch}
    >
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
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.04,
            }}
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              transition: "outline 0.2s",
            }}
            tabIndex={0}
            aria-label={c.label + " : " + c.end + (c.suffix || "")}
            role="group"
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
              <CountUp
                key={countKey + "-" + idx}
                end={c.end}
                duration={2.2}
                separator={c.separator}
                suffix={c.suffix}
                start={0}
              />
            </span>
            <span className="chiffrelabel">{c.label}</span>
          </motion.div>
        ))}
      </SectionGrid>
    </SectionContainer>
  );
};

export default ChiffresSection;
