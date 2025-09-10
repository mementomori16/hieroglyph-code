import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './about.scss';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1>
        <span>{t('aboutPage.titlePrefix')}</span> {t('aboutPage.titleSuffix')}
      </h1>
      <div className="about-content">
        <img
          src="https://i.ibb.co/0tfzD7K/received-341071728732981.png"
          alt="Hieroglyph Code Profile"
          className="profile-image"
        />
        <p>{t('aboutPage.intro1')}</p>
        <p>{t('aboutPage.intro2')}</p>

        <h2>{t('aboutPage.servicesTitle')}</h2>
        <p>{t('aboutPage.servicesIntro')}</p>
        <ul>
          <li>{t('aboutPage.serviceList.fullStack')}</li>
          <li>{t('aboutPage.serviceList.backEnd')}</li>
          <li>{t('aboutPage.serviceList.wordpress')}</li>
          <li>{t('aboutPage.serviceList.aiTools')}</li>
          <li>{t('aboutPage.serviceList.devOps')}</li>
          <li>{t('aboutPage.serviceList.uiUx')}</li>
        </ul>
        <p>{t('aboutPage.outro')}</p>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">
          {t('aboutPage.ctaTitle')}
        </h2>
        <Link to="/contact" className="cta-button">
          {t('aboutPage.ctaButton')}
        </Link>
      </div>
    </div>
  );
}