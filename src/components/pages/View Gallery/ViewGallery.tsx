import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './viewGallery.scss';

interface ImageData {
  url: string;
  title: string;
  date: string;
}

interface ViewGalleryProps {
  images: ImageData[];
  currentImageId: number;
  onClose: () => void;
}

const ViewGallery: React.FC<ViewGalleryProps> = ({ images, currentImageId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageId);
  const [transformWrapperRef, setTransformWrapperRef] = useState<any>(null);
  const [maxScale, setMaxScale] = useState<number>(2);
  const [opacity, setOpacity] = useState<number>(1); 

  const handleThumbnailClick = (index: number) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex(index);
      resetZoom();
      setOpacity(1); 
    }, 600); 
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    transitionToImage(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    transitionToImage(prevIndex);
  };

  const transitionToImage = (index: number) => {
    setOpacity(0); 
    setTimeout(() => {
      setCurrentIndex(index);
      resetZoom();
      setOpacity(1); 
    }, 600); 
  };

  const handleZoomIn = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomOut();
    }
  };

  const resetZoom = () => {
    if (transformWrapperRef) {
      transformWrapperRef.resetTransform();
    }
  };

  useEffect(() => {
    if (images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
      console.error("Invalid images array or currentIndex");
      return;
    }

    const img = new Image();
    img.src = images[currentIndex].url; 
    img.onload = () => {
      const { width, height } = img;
      if (width < 800 || height < 800) {
        setMaxScale(1.5);
      } else {
        setMaxScale(3);
      }
    };
  }, [currentIndex, images]);

  return (
    <div className="viewGallery">
      <button className="close-button" onClick={onClose}>X</button>

      <TransformWrapper
        ref={setTransformWrapperRef}
        centerOnInit={true}
        maxScale={maxScale}
        initialScale={1}
        minScale={1}
        doubleClick={{ disabled: true }}
        // Replaced 'options' object with direct props
        limitToBounds={false}
        minPositionX={-Infinity}
        maxPositionX={Infinity}
        minPositionY={-Infinity}
        maxPositionY={Infinity}
      >
        <TransformComponent>
          {images.length > 0 && (
            <img
              src={images[currentIndex].url}
              alt={`Image ${currentIndex}`}
              className="largeImage"
              style={{ opacity }} 
            />
          )}
        </TransformComponent>
      </TransformWrapper>
    
      {images.length > 0 && (
        <div className="imageInfo">
          <h2 className="imageTitle">{images[currentIndex].title}</h2>
          <p className="imageDate">{images[currentIndex].date}</p>
        </div>
      )}

      <div className="thumbnailsContainer">
        <div className="thumbnails">
          {images.map((image, index) => (
            <div key={index} className="thumbnailContainer">
              <img
                src={image.url}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="zoomControls">
        <button className="zoomButton" onClick={handleZoomIn}>
          <span className="icon">+</span>
        </button>
        <button className="zoomButton" onClick={handleZoomOut}>
          <span className="icon">-</span>
        </button>
      </div>

      <button className="arrow top-left" onClick={handlePrev}>&lt;</button>
      <button className="arrow top-right" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ViewGallery;






































/*
import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './viewGallery.scss';

interface ImageData {
  url: string;
  title: string;
  date: string;
}

interface ViewGalleryProps {
  images: ImageData[];
  currentImageId: number;
  onClose: () => void;
}

const ViewGallery: React.FC<ViewGalleryProps> = ({ images, currentImageId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageId);
  const [transformWrapperRef, setTransformWrapperRef] = useState<any>(null);
  const [maxScale, setMaxScale] = useState<number>(2);
  const [opacity, setOpacity] = useState<number>(1); // State for opacity

  const handleThumbnailClick = (index: number) => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      setCurrentIndex(index);
      resetZoom();
      setOpacity(1); // Fade in
    }, 600); // Match this duration with the CSS transition duration
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    transitionToImage(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    transitionToImage(prevIndex);
  };

  const transitionToImage = (index: number) => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      setCurrentIndex(index);
      resetZoom();
      setOpacity(1); // Fade in
    }, 600); // Match this duration with the CSS transition duration
  };

  const handleZoomIn = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomOut();
    }
  };

  const resetZoom = () => {
    if (transformWrapperRef) {
      transformWrapperRef.resetTransform();
    }
  };

  useEffect(() => {
    if (images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
      console.error("Invalid images array or currentIndex");
      return;
    }

    const img = new Image();
    img.src = images[currentIndex].url; // Accessing the url property
    img.onload = () => {
      const { width, height } = img;
      if (width < 800 || height < 800) {
        setMaxScale(1.5);
      } else {
        setMaxScale(3);
      }
    };
  }, [currentIndex, images]);

  return (
    <div className="viewGallery">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="largeImageContainer">
        <TransformWrapper
          ref={setTransformWrapperRef}
          centerOnInit={true}
          maxScale={maxScale}
        >
          <TransformComponent>
            {images.length > 0 && (
              <img
                src={images[currentIndex].url}
                alt={`Image ${currentIndex}`}
                className="largeImage"
                style={{ opacity }} // Apply the opacity style
              />
            )}
          </TransformComponent>
        </TransformWrapper>
      </div>
      {images.length > 0 && (
        <div className="imageInfo">
          <h2 className="imageTitle">{images[currentIndex].title}</h2>
          <p className="imageDate">{images[currentIndex].date}</p>
        </div>
      )}
      <div className="thumbnailsContainer"> 
        <div className="thumbnails">
          {images.map((image, index) => (
            <div key={index} className="thumbnailContainer">
              <img
                src={image.url} // Accessing the url property
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="zoomControls">
        <button className="zoomButton" onClick={handleZoomIn}>
          <span className="icon">+</span>
        </button>
        <button className="zoomButton" onClick={handleZoomOut}>
          <span className="icon">-</span>
        </button>
      </div>

      <button className="arrow top-left" onClick={handlePrev}>&lt;</button>
      <button className="arrow top-right" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ViewGallery;

/* 
import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './viewGallery.scss';

interface ImageData {
  url: string;
  title: string;
  date: string;
}

interface ViewGalleryProps {
  images: ImageData[];
  currentImageId: number;
  onClose: () => void;
}

const ViewGallery: React.FC<ViewGalleryProps> = ({ images, currentImageId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageId);
  const [transformWrapperRef, setTransformWrapperRef] = useState<any>(null);
  const [maxScale, setMaxScale] = useState<number>(2);
  const [opacity, setOpacity] = useState<number>(1); // State for opacity

  const handleThumbnailClick = (index: number) => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      setCurrentIndex(index);
      resetZoom();
      setOpacity(1); // Fade in
    }, 600); // Match this duration with the CSS transition duration
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    transitionToImage(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    transitionToImage(prevIndex);
  };

  const transitionToImage = (index: number) => {
    setOpacity(0); 
    setTimeout(() => {
      setCurrentIndex(index);
      resetZoom();
      setOpacity(1); 
    }, 600); 
  };

  const handleZoomIn = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomOut();
    }
  };

  const resetZoom = () => {
    if (transformWrapperRef) {
      transformWrapperRef.resetTransform();
    }
  };

  useEffect(() => {
    if (images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
      console.error("Invalid images array or currentIndex");
      return;
    }

    const img = new Image();
    img.src = images[currentIndex].url; 
    img.onload = () => {
      const { width, height } = img;
      if (width < 800 || height < 800) {
        setMaxScale(1.5);
      } else {
        setMaxScale(3);
      }
    };
  }, [currentIndex, images]);

  return (
    <div className="viewGallery">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="largeImageContainer">
        <TransformWrapper
          ref={setTransformWrapperRef}
          centerOnInit={true}
          maxScale={maxScale}
        >
          <TransformComponent>
            {images.length > 0 && (
              <img
                src={images[currentIndex].url}
                alt={`Image ${currentIndex}`}
                className="largeImage"
                style={{ opacity }} 
              />
            )}
          </TransformComponent>
        </TransformWrapper>
      </div>
      {images.length > 0 && (
        <div className="imageInfo">
          <h2 className="imageTitle">{images[currentIndex].title}</h2>
          <p className="imageDate">{images[currentIndex].date}</p>
        </div>
      )}
      <div className="thumbnailsContainer"> {}
      <div className="thumbnails">
      {images.map((image, index) => (
        <div key={index} className="thumbnailContainer">
          <img
            src={image.url} // Accessing the url property
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        </div>
      ))}
    </div>
  </div>

  <div className="zoomControls">
    <button className="zoomButton" onClick={handleZoomIn}>
      <span className="icon">+</span>
    </button>
    <button className="zoomButton" onClick={handleZoomOut}>
      <span className="icon">-</span>
    </button>
  </div>

  <button className="arrow top-left" onClick={handlePrev}>&lt;</button>
  <button className="arrow top-right" onClick={handleNext}>&gt;</button>
</div>
);
};

export default ViewGallery;
*/


/*
import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './viewGallery.scss';

interface ViewGalleryProps {
  images: string[]; // Assuming images is an array of strings
  currentImageId: number;
  onClose: () => void;
}

const ViewGallery: React.FC<ViewGalleryProps> = ({ images, currentImageId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageId);
  const [transformWrapperRef, setTransformWrapperRef] = useState<any>(null); // Ref for TransformWrapper

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (transformWrapperRef) {
      transformWrapperRef.zoomOut();
    }
  };

  return (
    <div className="viewGallery">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="largeImageContainer">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        
        <TransformWrapper ref={setTransformWrapperRef} centerOnInit={true}>
          <TransformComponent>
            <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="largeImage" />
          </TransformComponent>
        </TransformWrapper>
        
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div key={index} className="thumbnailContainer">
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>

      
      <div className="zoomControls">
        <button className="zoomButton" onClick={handleZoomIn}>
          +
        </button>
        <button className="zoomButton" onClick={handleZoomOut}>
          -
        </button>
      </div>
    </div>
  );
};

export default ViewGallery;

import React, { useState } from 'react';
import './viewGallery.scss';

interface ViewGalleryProps {
  images: string[]; // Assuming images is an array of strings
  currentImageId: number;
  onClose: () => void;
}

const ViewGallery: React.FC<ViewGalleryProps> = ({ images, currentImageId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageId);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="viewGallery">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="largeImageContainer">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="largeImage" />
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div key={index} className="thumbnailContainer">
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewGallery;
*/