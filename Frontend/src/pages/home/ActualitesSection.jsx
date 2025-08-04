import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import "./styles/ActualitesSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { actualitesGroups } from "../../data/actualites";

const ActualitesSection = () => (
  <SectionContainer id="actualites" className="actualites actualitestech">
    <SectionTitle className="actualitestitle">La vie du campus</SectionTitle>
    <div className="actualitesgroups">
      {actualitesGroups.map((group) => (
        <div className="actualitesgroup" key={group.group}>
          <h3 className="actualitesgroup-title">{group.group}</h3>
          <SectionGrid className="actualitesgrid">
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
          </SectionGrid>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default ActualitesSection;
