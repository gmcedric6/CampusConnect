import React from "react";
const TestimonialCard = ({ quote, name, role, avatar, className = "" }) => (
  <figure className={`testimonialcard ${className}`}>
    <div className="testimonialcardavatarbg">
      <img
        src={avatar}
        alt={name}
        className="testimonialcardavatar"
        loading="lazy"
      />
    </div>
    <blockquote className="testimonialcardquote">
      <span className="testimonialcardquote-mark" aria-hidden="true">
        “
      </span>
      {quote}
      <span className="testimonialcardquote-mark" aria-hidden="true">
        ”
      </span>
    </blockquote>
    <figcaption className="testimonialcardauthor">
      <span className="testimonialcardname">{name}</span>
      <span className="testimonialcardrole">{role}</span>
    </figcaption>
  </figure>
);

export default TestimonialCard;
