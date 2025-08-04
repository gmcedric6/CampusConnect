import React from "react";

function SectionGrid({ children, className = "", ...props }) {
  return (
    <div className={`section-grid ${className}`} {...props}>
      {children}
    </div>
  );
}

export default SectionGrid;
