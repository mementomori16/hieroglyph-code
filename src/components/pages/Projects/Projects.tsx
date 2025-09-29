import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../../data/products';
import './projects.scss';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  // Filter products to get only the portfolio items (IDs 100-105)
  const filteredProducts = products.portfolio;

  return (
    <div className="portfolioPage">
      {/* Use the translation key for the page heading */}
      <h1 className="heading">{t('projectsPage.title')}</h1>
      <div className="gallery">
        {filteredProducts.map((product) => (
          <div key={product.id} className="serviceItem"> {/* CHANGED from "portfolioItem" */}
            <Link to={`/card/${product.id}`}>
              <img
                src={product.image}
                // Use a translation key for the alt text as well for accessibility
                alt={t(`products.${product.id}.title`, { defaultValue: product.title })}
                className="image"
              />
            </Link>
            {/* Translate the product title using its ID */}
            <h2 className="title">{t(`products.${product.id}.title`, { defaultValue: product.title })}</h2>
            <Link to={`/card/${product.id}`}>
              {/* Use the translation key for the button text */}
              <button className="viewButton">{t('projectsPage.viewButton')}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;