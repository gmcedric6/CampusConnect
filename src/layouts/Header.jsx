import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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
      <div className="headercontainer">
        <a
          className="headerlogo"
          href="#accueil"
          tabIndex={0}
          aria-label="Accueil CampusConnect"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          <span className="headerlogotext">CampusConnect</span>
        </a>
        {/* ...barre de recherche supprimée... */}
        <div className="headercenter">
          <nav className="headernav" aria-label="Navigation principale">
            <ul className="headermenu">
              <li>
                <a href="#accueil" className="headerlink">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="headerlink">
                  À propos
                </a>
              </li>
              <li>
                <a href="#avantages" className="headerlink">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="headerlink">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="headeractions">
          <Link
            to="/login"
            className="btn btnsecondary"
            aria-label="Se connecter à CampusConnect"
          >
            Se connecter
          </Link>
        </div>
        {/* ...affichage des résultats supprimé... */}
      </div>
    </header>
  );
};

export default Header;
