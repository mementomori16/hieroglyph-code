import React from 'react';
import { useTranslation } from 'react-i18next';
import './legal-info.scss';

const LegalInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-info-page-wrapper">
      <div className="legal-info-page">
        <div className="legal-info-content">
          <h1>{t('legalPage.mainTitle')}</h1>
          
          <div className="section">
            <h2 className="privacyPolicyTitle">{t('legalPage.privacyPolicy.title')}</h2>
            <div className="privacy-policy-content">
              <p>
                <strong>1. {t('legalPage.privacyPolicy.section1.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section1.text')}
              </p>

              <p>
                <strong>2. {t('legalPage.privacyPolicy.section2.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section2.text')}
              </p>

              <p>
                <strong>3. {t('legalPage.privacyPolicy.section3.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section3.text')}
              </p>

              <p>
                <strong>4. {t('legalPage.privacyPolicy.section4.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section4.text')}
              </p>

              <p>
                <strong>5. {t('legalPage.privacyPolicy.section5.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section5.text')}
              </p>

              <p>
                <strong>6. {t('legalPage.privacyPolicy.section6.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section6.text')}
              </p>

              <p>
                <strong>7. {t('legalPage.privacyPolicy.section7.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section7.text')}
              </p>

              <p>
                <strong>8. {t('legalPage.privacyPolicy.section8.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section8.text')}
              </p>

              <p>
                <strong>9. {t('legalPage.privacyPolicy.section9.title')}</strong>
                <br />
                {t('legalPage.privacyPolicy.section9.text')}
              </p>
            </div>
          </div>
          
          <div className="section">
            <h2 className="attributionsTitle">{t('legalPage.attributions.title')}</h2>
            <p>
              {t('legalPage.attributions.textPrefix')}{' '}
              <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">
                Storyset
              </a>
              {t('legalPage.attributions.textSuffix')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalInfo;