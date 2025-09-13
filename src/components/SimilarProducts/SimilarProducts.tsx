// src/SimilarProducts/SimilarProducts.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the hook
import { products } from '../data/products';
import { Product } from '../types/Product';
import './similarProducts.scss';

interface SimilarProductsProps {
  currentProductId: number;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ currentProductId }) => {
  const { t } = useTranslation(); // Initialize the hook

  // Get all services from your products data
  const allServices: Product[] = products.services;

  // Filter out the current product to show "other services"
  const otherServices = allServices.filter(product => product.id !== currentProductId);

  // You can limit the number of services displayed if you have many
  const finalOtherServices = otherServices.slice(0, 10); // Display up to 10 other services

  // If there are no other services to show (e.g., only one service exists), you might return null or a message
  if (finalOtherServices.length === 0) {
    return null; // Or return <p>No other services available.</p>;
  }

  return (
    <div className="similarProducts">
      <h2>{t('similarProducts.exploreOtherServices')}</h2>
      <div className="scrollableGallery">
        {finalOtherServices.map(product => (
          <div key={product.id} className="similarProductItem">
            <Link to={`/card/${product.id}`}>
              <img
                src={product.image}
                alt={t(`products.${product.id}.title`)} // Use the translation function for alt text
                className="image"
              />
            </Link>
            {/* THIS IS THE KEY CHANGE */}
            <h3 className="title">{t(`products.${product.id}.title`)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;