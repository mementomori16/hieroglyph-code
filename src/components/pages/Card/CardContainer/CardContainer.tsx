import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/Product';
import ViewGallery from '../../View Gallery/ViewGallery';
import './cardContainer.scss';

interface CardContainerProps {
    product: Product; // Accept product as a prop
}

const getImageOrientation = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    return new Promise<boolean>((resolve) => {
        img.onload = () => {
            const isLandscape = img.width > img.height;
            resolve(isLandscape);
        };
    });
};

const CardContainer: React.FC<CardContainerProps> = ({ product }) => {
    const [mainImage, setMainImage] = useState<string>(product.image);
    const [showGallery, setShowGallery] = useState<boolean>(false);
    const [isLandscape, setIsLandscape] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
            getImageOrientation(product.image).then(setIsLandscape);
        }
    }, [product]);

    const handleThumbnailClick = (thumbnailImage: string) => {
        setOpacity(0);
        setTimeout(() => {
            setMainImage(thumbnailImage);
            getImageOrientation(thumbnailImage).then(setIsLandscape);
            setOpacity(1);
        }, 300);
    };

    const handleImageClick = () => {
        setShowGallery(true);
    };

    const handleCloseGallery = () => {
        setShowGallery(false);
    };

    // Constructing the images array for ViewGallery
    const images = product
        ? [
            { url: product.image, title: product.title, date: product.date || '' }, // Use a fallback value if date is undefined
            ...product.thumbnails.map((thumbnail) => ({
                url: thumbnail,
                title: product.title,
                date: product.date || '', // Use a fallback value if date is undefined
            })),
        ]
        : [];

    const currentImageIndex = product ? images.findIndex(image => image.url === mainImage) : 0;

    return (
        <div className={`cardContainer ${isLandscape ? 'landscape' : ''}`}>
            <article className="card">
                <div className={`imageContainer ${isLandscape ? 'landscape' : 'portrait'}`}>
                    {product ? (
                        <img
                            src={mainImage}
                            alt={product.title}
                            className="image"
                            style={{ opacity, cursor: 'zoom-in' }}
                            onClick={handleImageClick}
                        />
                    ) : (
                        <p>Image not found</p>
                    )}
                </div>
            </article>
            {product && product.thumbnails.length > 0 && (
                <div className="thumbnails">
                    <button
                        className="thumbnailContainer"
                        onClick={() => handleThumbnailClick(product.image)}
                        style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
                    >
                        <img
                            src={product.image}
                            alt={`${product.title} Main Image`}
                            className="thumbnail"
                        />
                    </button>
                    {product.thumbnails.map((thumbnail, index) => (
                        <button
                            key={index}
                            className="thumbnailContainer"
                            onClick={() => handleThumbnailClick(thumbnail)}
                            style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
                        >
                            <img
                                src={thumbnail}
                                alt={`${product.title} Thumbnail ${index + 1}`}
                                className="thumbnail"
                            />
                        </button>
                    ))}
                </div>
            )}
            {showGallery && product && (
                <ViewGallery
                    images={images}
                    currentImageId={currentImageIndex}
                    onClose={handleCloseGallery}
                />
            )}
        </div>
    );
};

export default CardContainer;

