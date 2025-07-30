import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderLink from "./HeaderLink";

const MainNav = ({ menuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => setDropdownOpen((open) => !open);
  const handleDropdownClose = () => setDropdownOpen(false);
  return (
    <nav className="headernav" aria-label="Navigation principale">
      <ul className={`headermenu${menuOpen ? " open" : ""}`}>
        <li>
          <HeaderLink href="#accueil" ariaLabel="Aller à l'accueil">
            Accueil
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#equipe" ariaLabel="Voir l'équipe CampusConnect">
            Équipe
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#apropos" ariaLabel="À propos de CampusConnect">
            À propos
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#chiffres" ariaLabel="Voir les chiffres clés">
            Chiffres
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#avantages" ariaLabel="Découvrir les avantages">
            Avantages
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="#temoignages" ariaLabel="Lire les témoignages">
            Témoignages
          </HeaderLink>
        </li>
        <li className={`has-dropdown${dropdownOpen ? " open" : ""}`}>
          <button
            className="headerlink dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            tabIndex={0}
            aria-label="Afficher plus de sections"
            style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
            onClick={handleDropdownToggle}
          >
            Plus
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1976d2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "4px" }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                className="dropdown dropdown-fullscreen"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 1.3, 0.6, 1] }}
                style={{
                  position: "fixed",
                  left: 0,
                  bottom: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(255,255,255,0.98)",
                  zIndex: 9999,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0",
                  margin: 0,
                }}
                onClick={handleDropdownClose}
              >
                <li>
                  <HeaderLink href="#faq" ariaLabel="Questions fréquentes">
                    FAQ
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#actualites"
                    ariaLabel="Voir les actualités du campus"
                  >
                    Actualités
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#pourqui"
                    ariaLabel="Pour qui est CampusConnect ?"
                  >
                    Pour qui ?
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#paiement"
                    ariaLabel="Informations sur le paiement"
                  >
                    Paiement
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#partenaires"
                    ariaLabel="Voir les partenaires"
                  >
                    Partenaires
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#contact-support"
                    ariaLabel="Contacter le support"
                  >
                    Contact
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#newsletter"
                    ariaLabel="S'inscrire à la newsletter"
                  >
                    Newsletter
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    href="#cta"
                    ariaLabel="Appel à l'action CampusConnect"
                  >
                    Call to Action
                  </HeaderLink>
                </li>
                <button
                  style={{
                    marginTop: "2em",
                    fontSize: "1.2em",
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.7em 2em",
                    cursor: "pointer",
                  }}
                  onClick={handleDropdownClose}
                >
                  Fermer
                </button>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
