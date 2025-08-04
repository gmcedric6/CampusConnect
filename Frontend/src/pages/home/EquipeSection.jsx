import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/EquipeSection.css";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SectionGrid from "../../components/SectionGrid";
import team1 from "../../assets/image/EspaceEtudiant.png";
import team2 from "../../assets/image/EspaceParent.png";
import team3 from "../../assets/image/EspaceProfesseur.png";

function EquipeSection() {
  return (
    <SectionContainer className="equipe-section" id="equipe">
      <div className="equipe-container">
        <SectionTitle className="equipe-title">Qui sommes-nous ?</SectionTitle>
        <p className="equipe-desc">
          CampusConnect, c’est une équipe passionnée par l’éducation, la
          technologie et l’accompagnement des étudiants, parents et enseignants.
          Notre mission : rendre l’expérience universitaire plus simple, plus
          humaine et plus connectée.
        </p>
        {/* Slider Swiper sur mobile, grille sur desktop */}
        <div className="equipe-list equipe-list-desktop">
          <div className="equipe-card">
            <img
              src={team1}
              alt="Responsable Étudiants"
              className="equipe-img"
              loading="lazy"
            />
            <h3 className="equipe-name">Awa K.</h3>
            <p className="equipe-role">Responsable Étudiants</p>
          </div>
          <div className="equipe-card">
            <img
              src={team2}
              alt="Responsable Parents"
              className="equipe-img"
              loading="lazy"
            />
            <h3 className="equipe-name">M. Diarra</h3>
            <p className="equipe-role">Responsable Parents</p>
          </div>
          <div className="equipe-card">
            <img
              src={team3}
              alt="Responsable Professeurs"
              className="equipe-img"
              loading="lazy"
            />
            <h3 className="equipe-name">Mme Kouamé</h3>
            <p className="equipe-role">Responsable Professeurs</p>
          </div>
        </div>
        <div className="equipe-list equipe-list-mobile">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="equipe-card">
                <img
                  src={team1}
                  alt="Responsable Étudiants"
                  className="equipe-img"
                  loading="lazy"
                />
                <h3 className="equipe-name">Awa K.</h3>
                <p className="equipe-role">Responsable Étudiants</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="equipe-card">
                <img
                  src={team2}
                  alt="Responsable Parents"
                  className="equipe-img"
                  loading="lazy"
                />
                <h3 className="equipe-name">M. Diarra</h3>
                <p className="equipe-role">Responsable Parents</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="equipe-card">
                <img
                  src={team3}
                  alt="Responsable Professeurs"
                  className="equipe-img"
                  loading="lazy"
                />
                <h3 className="equipe-name">Mme Kouamé</h3>
                <p className="equipe-role">Responsable Professeurs</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </SectionContainer>
  );
}

export default EquipeSection;
