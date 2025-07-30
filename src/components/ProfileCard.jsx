import React from "react";
import "./styles/ProfileCard.css";
const ProfileCard = ({
  icon,
  alt,
  title,
  desc,
  features = [],
  cta,
  className = "",
}) => (
  <div className={`profilecard ${className}`} tabIndex={0} aria-label={title}>
    <div className="profilecardiconwrapper">
      <img
        src={icon}
        alt={alt || title}
        className="profilecardicon"
        loading="lazy"
      />
    </div>
    <h3 className="profilecardtitle" style={{ textAlign: "center" }}>
      {title}
    </h3>
    <p className="profilecarddesc">{desc}</p>
    <ul className="profilecardfeatures">
      {features.map((f, idx) => (
        <li key={idx} className="profilecardfeature">
          {f}
        </li>
      ))}
    </ul>
    {cta && (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "18px" }}
      >
        <button className="btn profilecardcta">{cta}</button>
      </div>
    )}
  </div>
);

export default ProfileCard;
