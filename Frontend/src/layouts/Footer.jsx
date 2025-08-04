// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import "./styles/Footer.css";
import facebookIcon from "../assets/image/facebook.svg";
import twitterIcon from "../assets/image/twitter.svg";
import linkedinIcon from "../assets/image/linkedin.svg";

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footercontainer">
      <nav className="footercol" aria-label="Liens utiles">
        <h4 className="footertitle">Liens utiles</h4>
        <ul className="footerlinks">
          <li>
            <a href="#" className="footerlink">
              Mentions légales
            </a>
          </li>
          <li>
            <a href="#" className="footerlink">
              CGU
            </a>
          </li>
          <li>
            <a href="#" className="footerlink">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="footercol" aria-label="Coordonnées">
        <h4 className="footertitle">Coordonnées</h4>
        <ul className="footerinfos">
          <li>CampusConnect, Rue de l’Université, Abidjan</li>
          <li>
            <a href="tel:+2250700000000" className="footerlink">
              +225 07 00 00 00
            </a>
          </li>
          <li>
            <a href="mailto:contact@campusconnect.edu" className="footerlink">
              contact@campusconnect.edu
            </a>
          </li>
        </ul>
      </div>
      <div className="footercol" aria-label="Réseaux sociaux">
        <h4 className="footertitle">Réseaux sociaux</h4>
        <div className="footersocials">
          <motion.a
            href="#"
            className="footersocial"
            aria-label="Facebook"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 4px 16px rgba(33, 150, 243, 0.18)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ display: "inline-block" }}
          >
            <img src={facebookIcon} alt="Facebook" loading="lazy" />
          </motion.a>
          <motion.a
            href="#"
            className="footersocial"
            aria-label="Twitter"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 4px 16px rgba(33, 150, 243, 0.18)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ display: "inline-block" }}
          >
            <img src={twitterIcon} alt="Twitter" loading="lazy" />
          </motion.a>
          <motion.a
            href="#"
            className="footersocial"
            aria-label="LinkedIn"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 4px 16px rgba(33, 150, 243, 0.18)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ display: "inline-block" }}
          >
            <img src={linkedinIcon} alt="LinkedIn" loading="lazy" />
          </motion.a>
        </div>
      </div>
    </div>
    <div className="footerbottom">
      <span className="footercopyright">
        © {new Date().getFullYear()} CampusConnect. Tous droits réservés.
      </span>
    </div>
  </footer>
);

export default Footer;
