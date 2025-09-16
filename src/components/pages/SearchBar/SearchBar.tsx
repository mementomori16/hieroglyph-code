import React, { useState, useEffect, useRef } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types/Product';
import { useNavigate } from 'react-router-dom';
import './searchBar.scss';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onProductSelect: (product: Product) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onProductSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setIsResultsVisible(true);

    // Correctly combine services and portfolio products
    const allProducts: Product[] = [
      ...products.services,
      ...products.portfolio,
    ];

    const filtered = allProducts.filter(product => {
      // Check if product.description is a string. If not, join the array elements.
      const descriptionText = typeof product.description === 'string'
        ? product.description
        : product.description.join(' ');

      return (
        product.title.toLowerCase().includes(term) ||
        descriptionText.toLowerCase().includes(term)
      );
    });

    setFilteredProducts(filtered);
  };

  const handleProductClick = (product: Product) => {
    onProductSelect(product);
    navigate(`/card/${product.id}`);
    setIsResultsVisible(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex(prevIndex =>
        Math.min(prevIndex + 1, filteredProducts.length - 1)
      );
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex(prevIndex =>
        Math.max(prevIndex - 1, 0)
      );
    } else if (event.key === 'Enter' && highlightedIndex >= 0) {
      handleProductClick(filteredProducts[highlightedIndex]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
      setIsResultsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [filteredProducts, highlightedIndex]);

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsResultsVisible(true)}
        />
        <FaSearch className="search-icon" onClick={() => setIsResultsVisible(false)} />
      </div>
      {isResultsVisible && filteredProducts.length > 0 && (
        <div className="search-results" ref={resultsRef}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`search-result ${highlightedIndex === index ? 'highlighted' : ''}`}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.title} className="thumbnail" />
              <span className="product-title">{product.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
