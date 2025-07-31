import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Header/Logo";
import MainNav from "./Header/MainNav";
import HeaderActions from "./Header/HeaderActions";
import "./styles/Header/HeaderBase.css";
import "./styles/Header/HeaderNav.css";
import "./styles/Header/HeaderDropdown.css";
import "./styles/Header/HeaderResponsive.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header fade-in${scrolled ? " scrolled" : ""}`}
      role="banner"
    >
      {/* Desktop */}
      <div className="headercontainer header-desktop">
        <Logo />
        <div className="headercenter">
          <MainNav menuOpen={menuOpen} />
        </div>
        <HeaderActions />
      </div>
      {/* Mobile */}
      <div className="header-mobile">
        <Logo />
        <button
          className="burger-menu-btn"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0px",
            }}
          >
            {menuOpen ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
            <span
              style={{
                fontSize: "0.85rem",
                color: "#1976d2",
                marginTop: "-2px",
                lineHeight: "1",
              }}
            >
              Menu
            </span>
          </div>
        </button>
        {/* Bouton cadenas juste après le logo */}
        <div
          className="header-mobile-connexion"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "auto",
            order: 3,
          }}
        >
          <a
            href="/login"
            className="btn btnsecondary btn-login-mobile"
            aria-label="Connexion mobile à CampusConnect"
            style={{
              padding: 0,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1976d2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </a>
          <span className="btn-login-mobile-label">Se connecter</span>
        </div>
        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100vw", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 16,
                duration: 1.1,
              }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(18px)",
                overflowY: "auto",
              }}
            >
              <button
                aria-label="Fermer le menu"
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 10001,
                  padding: 0,
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1976d2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
              <MainNav menuOpen={menuOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
