import contentGif from "../../assets/gif/content.gif";
import React from "react";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./styles/ChiffresSection.css";
import { chiffres } from "../../data/chiffres";
import etudiantGif from "../../assets/gif/Etudiant.gif";
import etablissementsGif from "../../assets/gif/Etablissements.gif";

const ChiffresSection = () => {
  const { countKey, relaunch } = useAnimatedCounter();

  return (
    <motion.section
      id="chiffres"
      className="chiffressection"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={relaunch}
    >
      <h2 className="chiffrestitle">Notre impact en chiffres</h2>
      <div className="chiffresgrid">
        {chiffres.map((c, idx) => (
          <motion.div
            className="chiffrecard"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.08,
              rotate: -2,
              boxShadow:
                "0 16px 48px rgba(25, 118, 210, 0.18), 0 2px 8px rgba(25, 118, 210, 0.08)",
              backgroundColor: "#e3f2fd",
            }}
            style={{
              cursor: "pointer",
              boxShadow: "0 8px 36px rgba(64, 64, 67, 0.25)",
              backgroundColor: "#fff",
            }}
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
                duration={6}
                separator={c.separator}
                suffix={c.suffix}
                start={0}
              />
            </span>
            <span className="chiffrelabel">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ChiffresSection;
