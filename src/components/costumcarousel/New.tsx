import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products as productData } from '../data/products'; 
import { Product } from '../types/Product'; // Assuming this type exists
import './new.scss'; 

// --- RESTORED CODE: Initializing products array ---
const products: Product[] = [
    ...(productData.services || []),
];
// ---------------------------------------------------

const New: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const totalProducts = products.length;

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-change logic
    useEffect(() => {
        if (totalProducts === 0) return;
        
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalProducts);
        }, 4000); // Change card every 4 seconds

        return () => clearInterval(intervalId);
    }, [totalProducts]);

    const currentProduct = products[currentIndex] || products[0]; 

    const highlightedText = t('carousel.globalTitlePrimary');
    const secondaryText = t('carousel.globalTitleSecondary');

    const globalDescription = t('carousel.globalDescription');
    const learnMoreButtonText = t('carousel.learnMoreButton');
    const viewButtonText = t('servicesPage.viewButton');
    
    const handleCtaClick = (id: number) => {
        navigate(`/card/${id}`);
    };

    if (totalProducts === 0) {
        return <div className="new-component-layout container">{t('loading')}...</div>;
    }
    
    return (
        <div className="new-component-layout container">
            
            <div className="content-layout"> 
                
                <div className="text-section">
                    <h1 className="main-title">
                        <span className="highlight">{highlightedText}</span>
                        <br className="mobile-break"/> 
                        <span className="secondary-title">{secondaryText}</span>
                    </h1>
                    <p className="description-text">
                        {globalDescription}
                    </p>
                    <button
                        className="explore-button"
                        onClick={() => handleCtaClick(currentProduct.id)}
                    >
                        {learnMoreButtonText} <span className="arrow">→</span>
                    </button>
                </div>

                <div className="media-section carousel-visuals">
                    <div 
                        className="card-link-wrapper"
                        title={`View details for ${t(`products.${currentProduct.id}.title`)}`}
                    >
                        <div 
                            // REMOVED: shadow-lg rounded-lg classes from here
                            className="service-card"
                            onClick={() => handleCtaClick(currentProduct.id)}
                        >
                            <img
                                src={currentProduct.image} 
                                alt={t(`products.${currentProduct.id}.title`)}
                                className="card-image" 
                            />
                            
                            <h3 className="card-title">
                                {t(`products.${currentProduct.id}.title`)}
                            </h3>
                            
                            <button 
                                // REMOVED: btn btn-secondary btn-sm classes from here
                                className="view-button" 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    handleCtaClick(currentProduct.id); 
                                }}
                            >
                                {viewButtonText}
                            </button>
                        </div>
                    </div>

                    {/* Bullets for navigation */}
                    <div className="dots">
                        {products.map((product, index) => (
                            <div
                                key={product.id} 
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}: ${t(`products.${product.id}.title`)}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;