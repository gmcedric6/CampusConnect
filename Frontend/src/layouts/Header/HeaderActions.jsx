import React from "react";
import { Link } from "react-router-dom";
const HeaderActions = () => (
  <div
    className="headeractions"
    style={{ display: "flex", alignItems: "center", gap: "1.2em" }}
  >
    {/* Bouton mobile avec icône cadenas */}
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link
        to="/login"
        className="btn btnsecondary btn-login-mobile"
        aria-label="Connexion mobile à CampusConnect"
        style={{
          padding: 0,
          border: "none",
          width: "auto",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.7 }}
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </Link>
      <Link
        to="/login"
        className="btn-login-mobile-label"
        aria-label="Se connecter à CampusConnect"
        style={{
          fontSize: "0.75em",
          color: "#666",
          marginTop: "2px",
          cursor: "pointer",
        }}
      >
        Se connecter
      </Link>
    </div>
  </div>
);
export default HeaderActions;
