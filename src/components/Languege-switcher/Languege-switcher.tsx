// src/components/Languege-switcher/Languege-switcher.tsx

import { useState, useRef, useEffect } from 'react';
import './languege-switcher.scss';
import i18n from 'i18next';

// Define the interface for your props, including the new onCloseMenu prop
interface LanguageSwitcherProps {
  onCloseMenu?: () => void;
}

// Update the component to accept the new prop
const LanguageSwitcher = ({ onCloseMenu }: LanguageSwitcherProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleLanguageChange = (lang: 'en' | 'de') => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false); // This closes the dropdown menu
    
    // Call the function passed from NavMobile to close the main menu
    if (onCloseMenu) {
      onCloseMenu();
    }
  };
  
  const currentLangLabel = i18n.language === 'en' ? 'EN' : 'DE';

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button className="lang-toggle" onClick={toggleDropdown}>
        {currentLangLabel}
        <span className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isDropdownOpen && (
        <ul className="lang-options open">
          <li 
            className={`lang-option ${i18n.language === 'en' ? 'active' : ''}`} 
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </li>
          <li 
            className={`lang-option ${i18n.language === 'de' ? 'active' : ''}`} 
            onClick={() => handleLanguageChange('de')}
          >
            DE
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;