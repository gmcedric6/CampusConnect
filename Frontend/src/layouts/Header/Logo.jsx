
import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/svg/Logo.svg";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };
  return (
    <a
      className="headerlogo"
      href="/"
      tabIndex={0}
      aria-label="Accueil CampusConnect"
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.2em",
        textDecoration: "none",
        justifyContent: "flex-start",
        flex: "0 0 auto"
      }}
    >
      <img
        src={LogoImg}
        alt="Logo CampusConnect"
        className="headerlogoimg"
        style={{ width: "auto", display: "block" }}
      />
      <span className="headerlogotext" style={{ fontSize: "1.9em", fontWeight: "bold" }}>CampusConnect</span>
    </a>
  );
};
export default Logo;
