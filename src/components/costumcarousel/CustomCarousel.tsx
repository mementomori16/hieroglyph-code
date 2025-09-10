import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products as productData } from "../data/products";
import { Product } from "../types/Product";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import './customCarousel.scss';

const filteredProductIds = [204, 205, 202, 206, 201, 208];
const products: Product[] = [
  ...productData.services.filter(product => filteredProductIds.includes(product.id)),
];

interface CustomCarouselProps {
  scrollToContent: () => void;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ scrollToContent }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = (id: number) => {
    navigate(`/card/${id}`);
  };

  const currentProduct: Product = products[currentIndex];

  // Get the translated title and description
  const translatedTitle = t(`products.${currentProduct.id}.title`);
  const translatedDescription = t(`products.${currentProduct.id}.description`);

  return (
    <div className="custom-carousel">
      <div className="carousel-image-container">
        <img
          src={currentProduct.image}
          alt={translatedTitle}
          className="carousel-image"
        />
        <div className="overlay">
          <h2 className="carousel-global-title">{t('carousel.globalTitle')}</h2>
          <p className="carousel-global-description">
            {t('carousel.globalDescription')}
          </p>
          <h3 className="carousel-product-title">{translatedTitle}</h3>
          {translatedDescription && (
            <p className="carousel-product-description">
              {translatedDescription.substring(0, 150)}...
            </p>
          )}
          <button
            className="explore-button"
            onClick={() => handleCtaClick(currentProduct.id)}
          >
            {t('carousel.learnMoreButton')} <span className="arrow">→</span>
          </button>
        </div>
        <div className="arrows" onClick={scrollToContent}>
          <LiaAngleDoubleDownSolid className="blinking-arrow" />
        </div>
      </div>
      <div className="dots">
        {products.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;


/* new code
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products as productData } from "../data/products";
import { Product } from "../types/Product";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import './customCarousel.scss';

const filteredProductIds = [204, 205, 202, 206, 201, 208];
const products: Product[] = [
  ...productData.services.filter(product => filteredProductIds.includes(product.id)),
];

interface CustomCarouselProps {
  scrollToContent: () => void;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ scrollToContent }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = (id: number) => {
    navigate(`/card/${id}`);
  };

  const currentProduct: Product = products[currentIndex];

  const translatedTitle = t(`products.${currentProduct.id}.title`);
  const translatedDescription = t(`products.${currentProduct.id}.description`);

  return (
    <div className="custom-carousel">
      <div className="carousel-content">
        <div className="text-container">
          <h2 className="carousel-global-title">{t('carousel.globalTitle')}</h2>
          <p className="carousel-global-description">
            {t('carousel.globalDescription')}
          </p>
          <h3 className="carousel-product-title">{translatedTitle}</h3>
          {translatedDescription && (
            <p className="carousel-product-description">
              {translatedDescription.substring(0, 150)}...
            </p>
          )}
          <button
            className="explore-button"
            onClick={() => handleCtaClick(currentProduct.id)}
          >
            {t('carousel.learnMoreButton')} <span className="arrow">→</span>
          </button>
        </div>
        <div className="image-container">
          <img
            src={currentProduct.image}
            alt={translatedTitle}
            className="carousel-image"
          />
        </div>
      </div>
      <div className="arrows" onClick={scrollToContent}>
        <LiaAngleDoubleDownSolid className="blinking-arrow" />
      </div>
      <div className="dots">
        {products.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;

*/
