import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/contact" className="footer-button">
        <p className="neontext neonP">Magenta Spruce</p>
      </Link>

      {/* <span data-text="Sprucey" className="neon_text">
        Sprucey
      </span> */}
    </footer>
  );
};

export default Footer;
