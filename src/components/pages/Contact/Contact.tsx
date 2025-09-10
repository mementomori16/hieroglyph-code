import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';
import './contact.scss';
import { useTranslation } from 'react-i18next';

// Initialize EmailJS with your user ID
init('gl7rH7PGkTVyGkUCB');

// Your external city view image URL.
const CITY_VIEW_EXTERNAL_URL = 'https://i.ibb.co/qYQHYzBF/eryk-piotr-munk-B6ngl-YOw-Qy-U-unsplash.jpg'; // Example URL

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivacyAccepted(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPrivacyAccepted) {
      setError(t('contactPage.privacyError'));
      return;
    }

    setIsSent(false);
    setError('');

    send('service_cpjn8n8', 'template_iubkidi', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setIsPrivacyAccepted(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError(`${t('contactPage.form.errorMessage')} ${err.text || err.message || 'An unknown error occurred.'}`);
      });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">
        {t('contactPage.title')}
      </h2>
      <div className="contact-content-wrapper">
        <div className="contact-info">
          <div className="city-view-image-container">
            <img src={CITY_VIEW_EXTERNAL_URL} alt={t('contactPage.imageCaption')} className="city-view-img" />
            <p className="image-caption">{t('contactPage.imageCaption')}</p>
          </div>
          <p className="contact-description">
            {t('contactPage.description')}
          </p>
          <div className="contact-methods">
            <p className="contact-method-title contact-connect-title">{t('contactPage.connectTitle')}</p>
            <p className="contact-method-text">
              {t('contactPage.connectDescription')}
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          {isSent && <p className="success-message">{t('contactPage.form.successMessage')}</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('contactPage.form.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('contactPage.form.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={t('contactPage.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <div className="privacy-checkbox-container">
              <input
                type="checkbox"
                id="privacy-agreement"
                checked={isPrivacyAccepted}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="privacy-agreement">
                {t('contactPage.form.privacyAgreement')}
              </label>
            </div>

            <button type="submit">{t('contactPage.form.submitButton')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;