import React from "react";

function SectionContainer({ children, className = "", ...props }) {
  return (
    <section className={`section-container ${className}`} {...props}>
      {children}
    </section>
  );
}

export default SectionContainer;
