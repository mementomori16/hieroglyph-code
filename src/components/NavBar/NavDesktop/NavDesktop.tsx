import { NavLink, Link } from 'react-router-dom';
import SearchBar from '../../../components/pages/SearchBar/SearchBar';
import './navDesktop.scss';
import { Product } from '../../types/Product';
import logo from '../../../assets/images/icons/new logo2.svg';
import LanguageSwitcher from '../../Languege-switcher/Languege-switcher';
import { useTranslation } from 'react-i18next';

const NavDesktop = () => {
  const { t } = useTranslation('translation');

  const handleProductSelect = (product: Product) => {
    console.log(`Selected product: ${product.title}`);
  };

  const routes = [
  { label: t('home'), path: '/' },
  { label: t('services'), path: '/services' },
  { label: t('projects'), path: '/projects' },
  { label: t('about'), path: '/about' },
  { label: t('contact'), path: '/contact' },
];

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo" aria-label="Homepage">
          <img src={logo} alt="Ilya Medvedev Logo" className="nav-logo-img" />
        </Link>
        <ul className="nav-menu">
          {routes.map((route) => (
            <li key={route.path} className="nav-item">
              <NavLink
                to={route.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={route.path === '/'}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-right-actions">
          <div className="search-bar-container">
            <SearchBar onProductSelect={handleProductSelect} />
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default NavDesktop;