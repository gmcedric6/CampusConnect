import React from "react";
import { motion } from "framer-motion";
import "./styles/AvantagesSection.css";
import AdvantageCard from "../../components/AdvantageCard";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { ADVANTAGES } from "../../data/avantages";

function AvantagesSection() {
  return (
    <SectionContainer
      id="avantages"
      className="avantages fade-in"
      aria-labelledby="avantagestitle"
    >
      <div className="avantagescontainer">
        <SectionTitle id="avantagestitle" className="avantagestitle">
          Pourquoi choisir CampusConnect&nbsp;?
        </SectionTitle>
        <p className="avantagessubtitle">
          Une plateforme académique moderne, pensée pour les étudiants, parents
          et enseignants.
        </p>
        <SectionGrid className="avantagesgrid">
          {ADVANTAGES.map((advantage, idx) => (
            <motion.div
              key={advantage.title}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="avantagesitem"
            >
              <AdvantageCard
                icon={advantage.icon}
                title={advantage.title}
                desc={advantage.desc}
              />
            </motion.div>
          ))}
        </SectionGrid>
      </div>
    </SectionContainer>
  );
}

export default AvantagesSection;
