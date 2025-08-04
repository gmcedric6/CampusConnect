import React from "react";

function SectionTitle({ children, className = "", ...props }) {
  return (
    <h2 className={`section-title ${className}`} {...props}>
      {children}
    </h2>
  );
}

export default SectionTitle;
