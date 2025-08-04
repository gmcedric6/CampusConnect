import React from "react";
const Card = ({
  image,
  alt,
  title,
  description,
  children = null,
  className = "",
}) => (
  <div className={`card ${className}`} tabIndex={0} aria-label={title}>
    {image && (
      <div className="cardimagewrapper">
        <img
          src={image}
          alt={alt || title}
          className="actualiteimg"
          loading="lazy"
        />
      </div>
    )}
    {title && <h3 className="cardtitle">{title}</h3>}
    {description && <p className="carddescription">{description}</p>}
    {children}
  </div>
);

export default Card;
