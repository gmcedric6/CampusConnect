import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderLink from "./HeaderLink";

const MainNav = ({ menuOpen, setMenuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Détection desktop/mobile
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;
  // Fonction pour fermer le menu burger
  const handleMenuClose = () => {
    if (isMobile && menuOpen && setMenuOpen) {
      setMenuOpen(false);
    }
  };
  const handleDropdownToggle = () => setDropdownOpen((open) => !open);
  const handleDropdownClose = () => setDropdownOpen(false);
  const handleDropdownMouseEnter = () => {
    if (!isMobile) setDropdownOpen(true);
  };
  const handleDropdownMouseLeave = () => {
    if (!isMobile) setDropdownOpen(false);
  };
  return (
    <nav className="headernav" aria-label="Navigation principale">
      <ul className={`headermenu${menuOpen ? " open" : ""}`}>
        <li>
          <HeaderLink href="#accueil" ariaLabel="Aller à l'accueil" onClick={isMobile ? handleMenuClose : undefined}>
            Accueil
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#equipe" ariaLabel="Voir l'équipe CampusConnect" onClick={isMobile ? handleMenuClose : undefined}>
            Équipe
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#apropos" ariaLabel="À propos de CampusConnect" onClick={isMobile ? handleMenuClose : undefined}>
            À propos
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#chiffres" ariaLabel="Voir les chiffres clés" onClick={isMobile ? handleMenuClose : undefined}>
            Chiffres
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#avantages" ariaLabel="Découvrir les avantages" onClick={isMobile ? handleMenuClose : undefined}>
            Avantages
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#temoignages" ariaLabel="Lire les témoignages" onClick={isMobile ? handleMenuClose : undefined}>
            Témoignages
          </HeaderLink>
        </li>
        <li
          className={`has-dropdown${dropdownOpen ? " open" : ""}`}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button
            className="headerlink dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            tabIndex={0}
            aria-label="Afficher plus de sections"
            style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
            onClick={e => {
              e.preventDefault();
              if (isMobile) {
                setDropdownOpen(true);
              } else {
                handleDropdownToggle();
              }
            }}
          >
            Plus
            {menuOpen && (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: "4px", display: "block" }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className={`dropdown${isMobile ? " dropdown-fullscreen" : ""}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 1.3, 0.6, 1] }}
                style={
                  isMobile
                    ? {
                        position: "fixed",
                        left: 0,
                        bottom: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0",
                        margin: 0,
                      }
                    : {
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: "-80px",
                        minWidth: "120px",
                        background: "#fff",
                        boxShadow: "0 8px 32px rgba(25, 118, 210, 0.18)",
                        borderRadius: "8px",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        padding: "1em 0.5em",
                        margin: 0,
                      }
                }
              >
                {isMobile && (
                  <button
                    style={{
                      alignSelf: "flex-end",
                      margin: "1em 1.5em 0 0",
                      fontSize: "2em",
                      background: "none",
                      color: "#1976d2",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={handleDropdownClose}
                    aria-label="Fermer le menu"
                  >
                    &#10005;
                  </button>
                )}
                <ul style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2em", marginTop: isMobile ? "2em" : "0" }}>
                  <li>
                    <HeaderLink href="#faq" ariaLabel="Questions fréquentes" onClick={isMobile ? handleDropdownClose : undefined}>FAQ</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#actualites" ariaLabel="Voir les actualités du campus" onClick={isMobile ? handleDropdownClose : undefined}>Actualités</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#pourqui" ariaLabel="Pour qui est CampusConnect ?" onClick={isMobile ? handleDropdownClose : undefined}>Pour qui ?</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#paiement" ariaLabel="Informations sur le paiement" onClick={isMobile ? handleDropdownClose : undefined}>Paiement</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#partenaires" ariaLabel="Voir les partenaires" onClick={isMobile ? handleDropdownClose : undefined}>Partenaires</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#contact-support" ariaLabel="Contacter le support" onClick={isMobile ? handleDropdownClose : undefined}>Contact</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#newsletter" ariaLabel="S'inscrire à la newsletter" onClick={isMobile ? handleDropdownClose : undefined}>Newsletter</HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href="#cta" ariaLabel="Appel à l'action CampusConnect" onClick={isMobile ? handleDropdownClose : undefined}>Call to Action</HeaderLink>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
