
import React from "react";

const HeaderLink = ({ href, children, ariaLabel, onClick }) => (
  <a
    href={href}
    className="headerlink"
    aria-label={ariaLabel || children}
    onClick={e => {
      if (onClick) {
        // Si c'est un lien d'ancre, on scrolle manuellement
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.slice(1);
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
        // On ferme le menu burger
        onClick(e);
      }
    }}
  >
    {children}
  </a>
);

export default HeaderLink;
