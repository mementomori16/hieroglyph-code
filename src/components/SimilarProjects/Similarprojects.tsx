// src/components/SimilarPortfolio/SimilarPortfolio.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types/Product';
import './similarpojects.scss';
import { useTranslation } from 'react-i18next'; 
interface SimilarPortfolioProps {
  currentProductId: number;
}

const SimilarProjects: React.FC<SimilarPortfolioProps> = ({ currentProductId }) => {
  const { t } = useTranslation(); 
  // Get all portfolio items from your products data
  const allPortfolioItems: Product[] = products.portfolio;

  // Filter out the current portfolio item
  const otherPortfolioItems = allPortfolioItems.filter(item => item.id !== currentProductId);

  // Limit the number of items displayed
  const finalOtherPortfolioItems = otherPortfolioItems.slice(0, 10);

  // If there are no other items to show, return null
  if (finalOtherPortfolioItems.length === 0) {
    return null;
  }

  return (
    <div className="similar-portfolio">
      
      <h2>{t('similarProjects.exploreOtherProjects')}</h2> 
      <div className="scrollable-gallery">
        {finalOtherPortfolioItems.map(item => (
          <div key={item.id} className="similar-portfolio-item">
            <Link to={`/card/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="image"
              />
            </Link>
            <h3 className="title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProjects;