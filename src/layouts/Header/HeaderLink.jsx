import React from "react";

const HeaderLink = ({ href, children, ariaLabel }) => (
  <a href={href} className="headerlink" aria-label={ariaLabel || children}>
    {children}
  </a>
);

export default HeaderLink;
