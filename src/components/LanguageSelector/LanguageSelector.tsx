// src/components/LanguageSelector.tsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelector.scss'; // Import the SCSS file for styling

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'it', name: 'Italian' },
    // Add more languages as needed
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button onClick={toggleDropdown}>
        {languages.find(lang => lang.code === selectedLanguage)?.name}
      </button>
      {isOpen && (
        <ul className="language-dropdown">
          {languages.map(lang => (
            <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;