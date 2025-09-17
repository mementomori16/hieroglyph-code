import React from 'react';
import './footer.scss'; // Make sure this path is correct

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2025 Hieroglyph Code - Custom Software Solutions. All rights reserved. |
        <a href="/legalinfo" className="footer-link"> Legal Info</a>
      </p>
    </footer>
  );
};

export default Footer;