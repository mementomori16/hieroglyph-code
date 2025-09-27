import React from 'react';
import { useTranslation } from 'react-i18next';
import { Product } from '../../../types/Product';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiJson,
  SiJest,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNpm,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiWoocommerce,
  SiElementor,
  SiPhp,
  SiSass,
  SiGit,
  SiPostman,
  SiVite,
  SiReact as SiReactNativeIcon,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiAntdesign,
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiGraphql,
  SiGoogleanalytics,
  SiGitlab,
  SiBabel,
  SiExpo,
  SiDocker,
  SiHeroku,
  SiSvelte,
  SiStripe,
  SiSvelte as SiSveltekit,
  SiGo,
  SiIos,
  SiAndroid,
  SiPostgresql,
  SiCloudflare,
  SiVercel,
  SiAdobephotoshop,
  SiGithub,
  SiGithubactions,
} from 'react-icons/si';
import {
  FaCode,
  FaMobileAlt,
  FaRoute,
  FaHourglassHalf,
  FaRestroom,
  FaSitemap,
  FaPencilRuler,
  FaUsers,
  FaSearch,
  FaTachometerAlt,
  FaGoogle,
  FaShip,
  FaGlobe,
  FaWifi,
  FaLock,
  FaCog,
  FaBell,
  FaFileCode,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { BsCloudCheck } from 'react-icons/bs';
import './infoContainer.scss';

// Define the Props interface for InfoContainer
type Props = {
  product: Product;
};

// Mapping technology names (strings from product.icons) to icon components with specific colors
const technologyIcons: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  // --- Core Technologies ---
  TypeScript: (props) => <SiTypescript {...props} color="#007ACC" size={20} />,
  JavaScript: (props) => <SiJavascript {...props} color="#F7DF1E" size={20} />,
  React: (props) => <SiReact {...props} color="#61DAFB" size={20} />,
  'Next.js': (props) => <SiNextdotjs {...props} color="#000000" size={20} />,
  'Node.js': (props) => <SiNodedotjs {...props} color="#339933" size={20} />,
  'Vue.js': (props) => <SiVuedotjs {...props} color="#4FC08D" size={20} />,
  'Nuxt.js': (props) => <SiNuxtdotjs {...props} color="#00DC82" size={20} />,
  Json: (props) => <SiJson {...props} color="#000000" size={20} />,
  Jest: (props) => <SiJest {...props} color="#C21325" size={20} />,
  Firebase: (props) => <SiFirebase {...props} color="#FFCA28" size={20} />,
  MySQL: (props) => <SiMysql {...props} color="#4479A1" size={20} />,
  MongoDB: (props) => <SiMongodb {...props} color="#47A248" size={20} />,
  npm: (props) => <SiNpm {...props} color="#CB3837" size={20} />,

  // WEB APP & STATIC SITE ICONS
  'Express.js': (props) => <SiExpress {...props} color="#000000" size={20} />,
  'Tailwind CSS': (props) => <SiTailwindcss {...props} color="#06B6D4" size={20} />,
  Bootstrap: (props) => <SiBootstrap {...props} color="#7952B3" size={20} />,
  'Ant Design': (props) => <SiAntdesign {...props} color="#0170FE" size={20} />,
  'Lazy Loading': (props) => <FaHourglassHalf {...props} color="#FFC107" size={20} />,

  // --- Mobile & Static Site Specific ---
  'React Native': (props) => <SiReactNativeIcon {...props} color="#61DAFB" size={20} />,
  'Vanilla JavaScript': (props) => <SiJavascript {...props} color="#F7DF1E" size={20} />,
  HTML5: (props) => <SiHtml5 {...props} color="#E34F26" size={20} />,
  CSS3: (props) => <SiCss3 {...props} color="#1572B6" size={20} />,
  SASS: (props) => <SiSass {...props} color="#CC6699" size={20} />,

  // MOBILE DEVELOPMENT ICONS
  Redux: (props) => <SiRedux {...props} color="#764ABC" size={20} />,
  'React Context': (props) => <SiReact {...props} color="#61DAFB" size={20} />,
  NativeBase: (props) => <FaMobileAlt {...props} color="#4A90E2" size={20} />,
  'React Native Components': (props) => <SiReactNativeIcon {...props} color="#61DAFB" size={20} />,
  'React Navigation': (props) => <FaRoute {...props} color="#2196F3" size={20} />,

  // --- WordPress & PHP ---
  WordPress: (props) => <SiWordpress {...props} color="#21759B" size={20} />,
  WooCommerce: (props) => <SiWoocommerce {...props} color="#96588A" size={20} />,
  Elementor: (props) => <SiElementor {...props} color="#D30C5C" size={20} />,
  Polylang: (props) => <SiWordpress {...props} color="#21759B" size={20} />,
  PHP: (props) => <SiPhp {...props} color="#777BB4" size={20} />,

  // --- Maintenance & Other Tools ---
  'Front-end Maintenance': (props) => <SiHtml5 {...props} color="#E34F26" size={20} />,
  'Back-end Maintenance': (props) => <SiNodedotjs {...props} color="#339933" size={20} />,
  'Content Updates': (props) => <FaCode {...props} color="#007bff" size={20} />,
  Git: (props) => <SiGit {...props} color="#F05032" size={20} />,
  Postman: (props) => <SiPostman {...props} color="#FF6C37" size={20} />,
  Vite: (props) => <SiVite {...props} color="#646CFF" size={20} />,

  // --- API Development & Integration ---
  GraphQL: (props) => <SiGraphql {...props} color="#E10098" size={20} />,
  'RESTful API': (props) => <FaRestroom {...props} color="#6DB33F" size={20} />,
  'Custom API Development': (props) => <FaCode {...props} color="#007bff" size={20} />,

  // --- UI/UX Design & Prototyping ---
  Figma: (props) => <SiFigma {...props} color="#F24E1E" size={20} />,
  Sketch: (props) => <SiSketch {...props} color="#F7B500" size={20} />,
  'Adobe XD': (props) => <SiAdobexd {...props} color="#FF61F6" size={20} />,
  Wireframing: (props) => <FaSitemap {...props} color="#4A90E2" size={20} />,
  Prototyping: (props) => <FaPencilRuler {...props} color="#9B59B6" size={20} />,
  'User Research': (props) => <FaUsers {...props} color="#1ABC9C" size={20} />,

  // --- Performance Optimization & SEO Audits ---
  'Google Analytics': (props) => <SiGoogleanalytics {...props} color="#E37400" size={20} />,
  'Google Search Console': (props) => <FaGoogle {...props} color="#4285F4" size={20} />,
  Lighthouse: (props) => <FaShip {...props} color="#F4B400" size={20} />,
  WebPageTest: (props) => <FaGlobe {...props} color="#0F9D58" size={20} />,
  SEO: (props) => <FaSearch {...props} color="#34A853" size={20} />,
  Performance: (props) => <FaTachometerAlt {...props} color="#EA4335" size={20} />,

  // --- Progressive Web App (PWA) Development ---
  'Service Worker': (props) => <FaCog {...props} color="#607D8B" size={20} />,
  'Web App Manifest': (props) => <FaFileCode {...props} color="#3F51B5" size={20} />,
  'Push Notifications': (props) => <FaBell {...props} color="#FFC107" size={20} />,
  'Offline First': (props) => <FaWifi {...props} color="#009688" size={20} />,
  HTTPS: (props) => <FaLock {...props} color="#4CAF50" size={20} />,

  // --- Newly Added Technologies ---
  Babel: (props) => <SiBabel {...props} color="#F9E030" size={20} />,
  'Vite Express': (props) => <SiVite {...props} color="#646CFF" size={20} />,
  'Expo Router': (props) => <SiExpo {...props} color="#000020" size={20} />,
  Expo: (props) => <SiExpo {...props} color="#000020" size={20} />,
  'Expo Go': (props) => <SiExpo {...props} color="#000020" size={20} />,
  Docker: (props) => <SiDocker {...props} color="#2496ED" size={20} />,
  Heroku: (props) => <SiHeroku {...props} color="#430098" size={20} />,
  SvelteKit: (props) => <SiSveltekit {...props} color="#FF3E00" size={20} />,
  Stripe: (props) => <SiStripe {...props} color="#635BFF" size={20} />,
  Svelte: (props) => <SiSvelte {...props} color="#FF3E00" size={20} />,
  Golang: (props) => <SiGo {...props} color="#00ADD8" size={20} />,
  iOS: (props) => <SiIos {...props} color="#000000" size={20} />,
  Android: (props) => <SiAndroid {...props} color="#3DDC84" size={20} />,
  PostgreSQL: (props) => <SiPostgresql {...props} color="#336791" size={20} />,
  GitLab: (props) => <SiGitlab {...props} color="#FCA121" size={20} />,
  GitHub: (props) => <SiGithub {...props} color="#181717" size={20} />,
  'CI/CD': (props) => <SiGithubactions {...props} color="#2088FF" size={20} />,

  // --- Hosting & Domain Implementation ---
  Cloudflare: (props) => <SiCloudflare {...props} color="#F38020" size={20} />,
  Vercel: (props) => <SiVercel {...props} color="#000000" size={20} />,
  DNS: (props) => <BsCloudCheck {...props} color="#34A853" size={20} />,
  SSL: (props) => <FaLock {...props} color="#4CAF50" size={20} />,
  Photoshop: (props) => <SiAdobephotoshop {...props} color="#31A8FF" size={20} />,

  // --- Placeholder icon for Divi ---
  Divi: (props) => <FaCode {...props} color="#105ee4" size={20} />,
};

const InfoContainer: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  const translatedDescription = t(`products.${product.id}.description`);

  return (
    <div className="infoContainer">
      {product.medium && <p className="medium">{product.medium}</p>}
      {product.date && <p className="infodate">{product.date}</p>}

      {Array.isArray(product.description) ? (
        <div className="description">
          {product.description.map((_paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: t(`products.${product.id}.description`) }} />
          ))}
        </div>
      ) : (
        <p className="description" dangerouslySetInnerHTML={{ __html: translatedDescription }} />
      )}

      {product.icons && product.icons.length > 0 && (
        <div className="iconsSection">
          <h4>{t('cardPage.technologiesUsed')}</h4>
          <ul className="iconsList">
            {product.icons.map((techName, index) => {
              const IconComponent = technologyIcons[techName];
              return (
                <li key={index} className="iconItem">
                  {IconComponent ? (
                    <IconComponent />
                  ) : (
                    <span style={{ color: '#aaa', fontSize: '1.2em' }} title={`Icon not found for ${techName}`}>?</span>
                  )}
                  <span>{techName}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="link-container">
        {product.link && (
          <a href={product.link} className="article-link" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt size={24} />
            <span className="link-text">Live Project</span>
          </a>
        )}

        {product.githubLink && (
          <a href={product.githubLink} className="article-link" target="_blank" rel="noopener noreferrer">
            <SiGithub size={24} />
            <span className="link-text">Code Repository</span>
          </a>
        )}

        {/* Add the GitLab link here */}
        {product.gitlabLink && (
          <a href={product.gitlabLink} className="article-link" target="_blank" rel="noopener noreferrer">
            <SiGitlab size={24} />
            <span className="link-text">GitLab Repository</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default InfoContainer;

