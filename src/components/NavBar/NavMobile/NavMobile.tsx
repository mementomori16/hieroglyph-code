import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import './navMobile.scss';
import SearchBar from '../../pages/SearchBar/SearchBar';
import { Product } from '../../types/Product';
import logo from '../../../assets/images/icons/Group 28.svg';
import LanguageSwitcher from '../../Languege-switcher/Languege-switcher';

interface Route {
  label: string;
  path: string;
}

const routes: Route[] = [
  { label: 'home', path: '/' },
  { label: 'services', path: '/services' },
  { label: 'projects', path: '/projects' },
  { label: 'about', path: '/about' },
  { label: 'contact', path: '/contact' },
];

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('translation');

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleProductSelect = (product: Product) => {
    closeMenu();
    navigate(`/card/${product.id}`);
  };

  return (
    <header className="header-mobile">
      <nav className="navbarmobile">
        <Link to="/" className="mobile-logo" aria-label="Homepage">
          <img src={logo} alt="Ilya Medvedev Logo" className="mobile-logo-img" />
        </Link>
        <div className="mobile-hamburger" onClick={toggleMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </nav>
      {isOpen && (
        <>
          <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
          <ul className={`mobile-menu ${isOpen ? 'active' : ''}`}>
            {routes.map((route) => (
              <li key={route.path} className="mobile-item">
                <NavLink
                  to={route.path}
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                  end={route.path === '/'}
                  onClick={closeMenu}
                >
                  {t(route.label)}
                </NavLink>
              </li>
            ))}
            <li className="mobile-item search-item">
              <div className="search-bar-container">
                <SearchBar onProductSelect={handleProductSelect} />
              </div>
            </li>
            <li className="mobile-item language-item">
              {/* Pass the closeMenu function as a prop */}
              <LanguageSwitcher onCloseMenu={closeMenu} />
            </li>
          </ul>
        </>
      )}
    </header>
  );
};

export default NavMobile;