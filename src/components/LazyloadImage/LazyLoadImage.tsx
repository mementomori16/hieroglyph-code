// LazyImage.tsx
import React from 'react';
import LazyLoad from 'react-lazyload';

interface LazyImageProps {
  src: string; // Define the type for src
  alt: string; // Define the type for alt
  height?: number; // Optional height prop
  width?: number; // Optional width prop
  onClick?: () => void; // Optional onClick prop
  className?: string; // Optional className prop
  placeholder?: string; // Optional placeholder image
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  height = 400,
  width = 600,
  onClick,
  className,
  placeholder,
}) => {
  return (
    <LazyLoad height={height} offset={100} placeholder={placeholder ? <img src={placeholder} alt="Loading..." style={{ width, height }} /> : null}>
      <img
        src={src}
        alt={alt}
        style={{ width, height }}
        onClick={onClick}
        className={className}
        loading="lazy" // Native lazy loading
      />
    </LazyLoad>
  );
};

export default LazyImage;