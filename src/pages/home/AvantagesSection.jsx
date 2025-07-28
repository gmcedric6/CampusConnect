import React from "react";
import { motion } from "framer-motion";
import "./styles/AvantagesSection.css";
import AdvantageCard from "../../components/AdvantageCard";

import { ADVANTAGES } from "../../data/avantages";

function AvantagesSection() {
  return (
    <section
      id="avantages"
      className="avantages fade-in"
      aria-labelledby="avantages-title"
    >
      <div className="avantagescontainer">
        <h2 id="avantagestitle" className="avantagestitle">
          Pourquoi choisir CampusConnect&nbsp;?
        </h2>
        <p className="avantagessubtitle">
          Une plateforme académique moderne, pensée pour les étudiants, parents
          et enseignants.
        </p>
        <div className="avantagesgrid">
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
        </div>
      </div>
    </section>
  );
}

export default AvantagesSection;
