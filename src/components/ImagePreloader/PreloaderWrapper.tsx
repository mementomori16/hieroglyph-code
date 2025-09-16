// src/components/ImagePreloader/PreloaderWrapper.tsx

import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { extractAllImageUrls, preloadImages } from '../../utils/ImagePreloader/imagePreloader';
import './preloader.scss';

// Import your logo directly (most reliable)
import logo from '../../assets/images/icons/Group.svg'; 

const PreloaderWrapper = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Extract all image URLs from your data
    const imageUrls = extractAllImageUrls();
    
    // Create a promise for the logo itself
    const logoPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = logo; // The imported logo variable is the source
    });

    // Wait for all images AND the logo to load
    Promise.all([...imageUrls.map(url => preloadImages([url])), logoPromise])
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader-container loading">
          <img src={logo} alt="Loading" className="preloader-logo" />
        </div>
      )}
      {!isLoading && <Outlet />}
    </>
  );
};

export default PreloaderWrapper;