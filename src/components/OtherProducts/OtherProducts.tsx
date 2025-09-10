import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types/Product';
import './otherProducts.scss';

const getRandomProducts = (allProducts: Product[], count: number) => {
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const OtherProducts: React.FC = () => {
    const allProducts: Product[] = [
        ...products.portfolio,
       
    ];

    const randomProducts = getRandomProducts(allProducts, 10); // Get 10 random products

    return (
        <div className="otherProducts">
            <h2>EXPLORE PORTFOLIO</h2>
            <div className="scrollableGallery">
                {randomProducts.map(product => (
                    <div key={product.id} className="otherProductItem">
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

export default OtherProducts;