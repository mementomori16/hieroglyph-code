import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../../data/products';
import './services.scss';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const filteredProducts = products.services; 

  return (
    <div className="servicesPage">
      <h1 className="heading">{t('servicesPage.title')}</h1>
      <div className="gallery">
        {filteredProducts.map((product) => (
          <div key={product.id} className="serviceItem">
            <Link to={`/card/${product.id}`}>
              <img
                src={product.image}
                alt={t(`products.${product.id}.title`)}
                className="image"
              />
            </Link>
            <h2 className="title">{t(`products.${product.id}.title`)}</h2>
            <Link to={`/card/${product.id}`}>
              <button className="viewButton">{t('servicesPage.viewButton')}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;




