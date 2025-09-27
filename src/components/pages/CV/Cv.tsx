import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CvSkills from './CvSkills';
import './cv.scss';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Cv() {
  const { t } = useTranslation();

  return (
    <div className="cv-container">
      <Link to="/" className="cv-title-link">
        <h1 className="main-title">
          <span className="job-title">{t('cvPage.titlePrefix')}</span>
          <span className="full-name">{t('cvPage.titleSuffix')}</span>
        </h1>
      </Link>

      <div className="profile-header-meta">
        <div className="location">
          <FaMapMarkerAlt className="location-icon" size={20} />
          <span>{t('cvPage.location')}</span>
        </div>
        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <SiLinkedin className="social-icon" size={20} />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <SiGithub className="social-icon" size={20} />
          </a>
        </div>
      </div>

      <div className="cv-content">
        <div className="profile-intro-section">
          <img
            src="https://i.ibb.co/0tfzD7K/received-341071728732981.png"
            alt="Ilya Medvedev Profile"
            className="profile-image"
          />
          <p className="intro-text">{t('cvPage.intro')}</p>
        </div>
        
        <h2 className="section-title">{t('cvPage.skillsTitle')}</h2>
        <CvSkills /> 
        
        <p className="outro-text">{t('cvPage.outro')}</p>

        {/* New container for a side-by-side layout */}
        <div className="flex-container">
          <div className="flex-item">
            <h2 className="section-title">{t('cvPage.educationTitle')}</h2>
            <p>{t('cvPage.educationSummary')}</p>
            <ul>
              <li>{t('cvPage.education.fullStack')}</li>
              <li>{t('cvPage.education.bachelor')}</li>
              <li>{t('cvPage.education.highSchool')}</li>
            </ul>
          </div>

          <div className="flex-item">
            <h2 className="section-title">{t('cvPage.languagesTitle')}</h2>
            <ul>
              <li>{t('cvPage.languages.english')}</li>
              <li>{t('cvPage.languages.russian')}</li>
              <li>{t('cvPage.languages.german')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <Link to="/contact" className="cta-button">
          {t('cvPage.ctaButton')}
        </Link>
        <Link to="/portfolio" className="cta-button">
          {t('cvPage.projectsButton')}
        </Link>
      </div>
    </div>
  );
}