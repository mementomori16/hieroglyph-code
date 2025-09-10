// src/SimilarProducts/SimilarProducts.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Ensure this path is correct: products, not products1
import { Product } from '../types/Product';
import './similarProducts.scss';

interface SimilarProductsProps {
  currentProductId: number;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ currentProductId }) => {
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
      <h2>Explore Other Services</h2>
      <div className="scrollableGallery">
        {finalOtherServices.map(product => (
          <div key={product.id} className="similarProductItem">
            <Link to={`/card/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="image"
              />
            </Link>
            <h3 className="title">{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;