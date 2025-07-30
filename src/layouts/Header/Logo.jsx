import React from "react";
import LogoImg from "../../assets/svg/Logo.svg";
const Logo = () => (
  <a
    className="headerlogo"
    href="#accueil"
    tabIndex={0}
    aria-label="Accueil CampusConnect"
    onClick={(e) => {
      e.preventDefault();
      window.location.reload();
    }}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.7em",
      textDecoration: "none",
    }}
  >
    <img
      src={LogoImg}
      alt="Logo CampusConnect"
      className="headerlogoimg"
      style={{ height: "90px", width: "auto", display: "block" }}
    />
    <span className="headerlogotext">CampusConnect</span>
  </a>
);
export default Logo;
