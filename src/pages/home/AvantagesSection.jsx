import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/AvantagesSection.css";
import AdvantageCard from "../../components/AdvantageCard";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import { ADVANTAGES } from "../../data/avantages";

function AvantagesSection() {
  // Utilisation d'une media query JS pour détecter le mobile
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
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
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={24}
            slidesPerView={1}
            className="avantages-swiper"
          >
            {ADVANTAGES.map((advantage, idx) => (
              <SwiperSlide key={advantage.title}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="avantagesitem"
                >
                  <AdvantageCard
                    icon={advantage.icon}
                    title={advantage.title}
                    desc={advantage.desc}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <SectionGrid className="avantagesgrid">
            {ADVANTAGES.map((advantage, idx) => (
              <motion.div
                key={advantage.title}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
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
        )}
      </div>
    </SectionContainer>
  );
}

export default AvantagesSection;
