import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardContainer from '../CardContainer/CardContainer';
import InfoContainer from '../InfoContainer/InfoContainer';
import SimilarProducts from '../../../SimilarProducts/SimilarProducts';
import { products } from '../../../data/products';
import SimilarProjects from '../../../SimilarProjects/Similarprojects';
import './cardPage.scss';

const CardPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const currentImageId = id ? parseInt(id, 10) : 1;

  const allProducts = [
    ...products.services,
    ...products.portfolio, 
  ];

  const product = allProducts.find((product) => product.id === currentImageId);

  if (!product) {
    return <p>{t('cardPage.productNotFound')}</p>;
  }

  const isPortfolioProduct = products.portfolio.some(item => item.id === currentImageId);

  return (
    <div className="cardPageContainer">
      {product && <h1 className="pageTitle">{t(`products.${product.id}.title`)}</h1>}
      <div className="cardContentWrapper">
        <CardContainer product={product} />
        <InfoContainer product={product} />
      </div>
      <div className="similarProductsContainer">
        {isPortfolioProduct ? (
          <SimilarProjects currentProductId={currentImageId} />
        ) : (
          <SimilarProducts currentProductId={currentImageId} />
        )}
      </div>
    </div>
  );
};

export default CardPage;


