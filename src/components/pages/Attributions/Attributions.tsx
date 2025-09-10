import React from 'react';
import './attributions.scss';

const Attributions: React.FC = () => {
  return (
    <div className="attributions-page-wrapper">
      <div className="attributions-page">
        <div className="attributions-content">
          <h2>Image Attributions</h2>
          <p>
            Illustrations are provided by <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">Storyset</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attributions;