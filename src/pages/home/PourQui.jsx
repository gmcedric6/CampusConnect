import React from "react";
import { motion } from "framer-motion";
import "./styles/PourQui.css";
import ProfileCard from "../../components/ProfileCard";

import { profilsGroups } from "../../data/profils";

function PourQui() {
  return (
    <section id="pourqui" className="pourqui fade-in pourquitech">
      <h2 className="pourquititle">Pour qui&nbsp;?</h2>
      <p className="pourquisubtitle">
        CampusConnect s’adapte à chaque profil&nbsp;: apprenants, encadrants et
        gestion.
      </p>
      <div className="pourquigroups">
        {profilsGroups.map((group) => (
          <div className="pourquigroup" key={group.group}>
            <h3 className="pourquigrouptitle">{group.group}</h3>
            <div className="pourquigrid">
              {group.cards.map((card, idx) => (
                <motion.div
                  key={card.title + idx}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="pourquicard hoverscale"
                >
                  <ProfileCard
                    icon={card.icon}
                    alt={card.alt}
                    title={card.title}
                    desc={card.desc}
                    features={card.features}
                    cta={card.cta}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PourQui;
