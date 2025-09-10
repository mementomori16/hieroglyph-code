import React from 'react';
import './footer.scss'; // Make sure this path is correct

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2026 Hieroglyph Code - Custom Software Solutions. All rights reserved. |
        <a href="/attributions" className="footer-link"> Attributions</a>
      </p>
    </footer>
  );
};

export default Footer;