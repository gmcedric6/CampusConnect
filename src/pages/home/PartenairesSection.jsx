import React from "react";
import { motion } from "framer-motion";
import "./styles/PartenairesSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { partenaires } from "../../data/partenaires";

const PartenairesSection = () => (
  <SectionContainer id="partenaires" className="partenaires fade-in">
    <SectionTitle className="partenairestitle">
      <span className="partenairestitle-icon" aria-hidden="true">
        🤝
      </span>
      Nos partenaires
    </SectionTitle>
    <SectionGrid className="partenairesgrid">
      {partenaires.map((p, idx) => (
        <figure className="partenaireitem" key={idx}>
          <div className="partenairelogobg">
            <motion.img
              src={p.logo}
              alt={p.name}
              className="partenairelogo"
              loading="lazy"
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 0.7,
                delay: idx * 0.15,
              }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>
          <figcaption className="partenairename">{p.name}</figcaption>
        </figure>
      ))}
    </SectionGrid>
  </SectionContainer>
);

export default PartenairesSection;
