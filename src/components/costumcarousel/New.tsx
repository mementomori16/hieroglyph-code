import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products as productData } from '../data/products'; 
import { Product } from '../types/Product'; // Assuming this type exists
import './new.scss'; 

const products: Product[] = [
    ...(productData.services || []),
];

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

    // ✅ CHANGE: Fetching separate translation keys (globalTitlePrimary and globalTitleSecondary)
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
            
            {/* -------------------- LAYOUT: Handles Mobile/Desktop Split via CSS -------------------- */}
            <div className="content-layout"> 
                
                {/* -------------------- HALF 1: Titles and Text (TEXT CONTENT) -------------------- */}
                <div className="text-section">
                    <h1 className="main-title">
                        {/* FIRST TITLE: Hieroglyph Code (Blue, Larger) */}
                        <span className="highlight">{highlightedText}</span>
                        
                        {/* We hide this <br> tag in the final SCSS, but keep it here for structure */}
                        <br className="mobile-break"/> 
                        
                        {/* SECOND TITLE: Crafting Digital Excellence (Gray, Smaller) */}
                        <span className="secondary-title">{secondaryText}</span>
                    </h1>
                    <p className="description-text">
                        {globalDescription}
                    </p>
                    
                    {/* CTA button links to the current product's CardPage */}
                    <button
                        className="explore-button"
                        onClick={() => handleCtaClick(currentProduct.id)}
                    >
                        {learnMoreButtonText} <span className="arrow">→</span>
                    </button>
                </div>

                {/* -------------------- HALF 2: Single Product Card (VISUALS) & Bullets -------------------- */}
                <div className="media-section carousel-visuals">
                    
                    <div 
                        className="card-link-wrapper"
                        title={`View details for ${t(`products.${currentProduct.id}.title`)}`}
                    >
                        <div 
                            className="service-card shadow-lg rounded-lg"
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
                                className="view-button btn btn-secondary btn-sm" 
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