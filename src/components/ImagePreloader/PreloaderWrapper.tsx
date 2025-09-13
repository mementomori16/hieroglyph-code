// src/components/ImagePreloader/PreloaderWrapper.tsx
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { extractAllImageUrls, preloadImages } from '../../utils/ImagePreloader/imagePreloader';
import './preloader.scss';

const PreloaderWrapper = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const imageUrls = extractAllImageUrls();
    if (imageUrls.length > 0) {
      preloadImages(imageUrls).finally(() => {
        setIsLoading(false);
      });
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
      {!isLoading && <Outlet />}
    </>
  );
};

export default PreloaderWrapper;