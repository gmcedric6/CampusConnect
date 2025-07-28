import React, { useRef } from "react";
import useFadeInOnVisible from "../hooks/useFadeInOnVisible";

const AdvantageCard = ({ icon, title, desc, className = "" }) => {
  const cardRef = useRef(null);
  useFadeInOnVisible(cardRef);
  return (
    <div
      ref={cardRef}
      className={`advantagecard fade-in ${className}`}
      tabIndex={0}
      aria-label={title}
    >
      <div className="advantagecardiconwrapper">
        <img
          src={icon}
          alt=""
          className="advantage-cardicon"
          aria-hidden="true"
        />
      </div>
      <h3 className="advantagecardtitle">{title}</h3>
      <p className="advantagecarddesc">{desc}</p>
    </div>
  );
};

export default AdvantageCard;
