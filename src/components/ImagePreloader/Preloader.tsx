import React, { useEffect, useState } from 'react';
import { extractAllImageUrls, preloadImages } from '../../utils/ImagePreloader/imagePreloader';
import './preloader.scss'; // Import the SCSS file here

export const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls = extractAllImageUrls();
    if (imageUrls.length > 0) {
      preloadImages(imageUrls);
      // Simulating a delay for demonstration
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader-container loading">
          <div className="spinner"></div>
        </div>
      )}
      {!isLoading && children}
    </>
  );
};