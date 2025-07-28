import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import "./styles/ActualitesSection.css";
import { actualitesGroups } from "../../data/actualites";

const ActualitesSection = () => (
  <motion.section
    id="actualites"
    className="actualites actualitestech"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <h2 className="actualitestitle">La vie du campus</h2>
    <div className="actualitesgroups">
      {actualitesGroups.map((group) => (
        <div className="actualitesgroup" key={group.group}>
          <h3 className="actualitesgroup-title">{group.group}</h3>
          <div className="actualitesgrid">
            {group.articles.map((a, idx) => (
              <Card
                key={idx}
                image={a.image}
                alt={a.title}
                title={a.title}
                description={a.resume}
                className="actualitecard"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default ActualitesSection;
