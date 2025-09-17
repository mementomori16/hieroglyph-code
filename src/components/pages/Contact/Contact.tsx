import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';
import './contact.scss';
import { useTranslation } from 'react-i18next';
import ViewGallery from '../View Gallery/ViewGallery';
import { FaEnvelope } from 'react-icons/fa'; // Import the email icon

interface ImageData {
    url: string;
    title: string;
    date: string;
}

init('gl7rH7PGkTVyGkUCB');

const CITY_VIEW_EXTERNAL_URL = 'https://i.ibb.co/qYQHYzBF/eryk-piotr-munk-B6ngl-YOw-Qy-U-unsplash.jpg';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const galleryImages: ImageData[] = [
      {
        url: CITY_VIEW_EXTERNAL_URL,
        title: '',
        date: ''
      }
    ];

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

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        send('service_cpjn8n8', 'template_iubkidi', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSent(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setIsPrivacyAccepted(false);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setError(`${t('contactPage.form.errorMessage')} ${err.text || err.message || 'An unknown error occurred.'}`);
            });
    };

    const handleImageClick = () => {
        setIsGalleryOpen(true);
    };

    const handleCloseGallery = () => {
        setIsGalleryOpen(false);
    };

    return (
        <div className="contact-page">
            <h2 className="contact-title">{t('contactPage.title')}</h2>
            <div className="contact-content-wrapper">
                <div className="contact-info">
                    <div className="city-view-image-container" onClick={handleImageClick}>
                        <img src={CITY_VIEW_EXTERNAL_URL} alt={t('contactPage.imageCaption')} className="city-view-img" />
                        <p className="image-caption">{t('contactPage.imageCaption')}</p>
                    </div>
                    <p className="contact-description">{t('contactPage.description')}</p>
                    <p className="contact-email-line">
                        <a href={`mailto:${t('contactPage.contactEmail')}`} className="contact-email-link">
                            <FaEnvelope className="contact-email-icon" />
                            {t('contactPage.contactEmail')}
                        </a>
                    </p>
                    <div className="contact-methods">
                        <p className="contact-method-title contact-connect-title">{t('contactPage.connectTitle')}</p>
                        <p className="contact-method-text">{t('contactPage.connectDescription')}</p>
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
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t('contactPage.form.phonePlaceholder')}
                            value={formData.phone}
                            onChange={handleChange}
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
                            <label htmlFor="privacy-agreement">{t('contactPage.form.privacyAgreement')}</label>
                        </div>
                        <button type="submit">{t('contactPage.form.submitButton')}</button>
                    </form>
                </div>
            </div>
            {isGalleryOpen && (
                <ViewGallery
                    images={galleryImages}
                    currentImageId={0}
                    onClose={handleCloseGallery}
                />
            )}
        </div>
    );
};

export default Contact;

/*
----firebase code-----


import React, { useState } from 'react';
import './contact.scss';
import { useTranslation } from 'react-i18next';
import { collection, addDoc } from 'firebase/firestore'; // New: Import Firestore functions
import { db } from '../../../firebase'; // New: Import your Firebase DB instance

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPrivacyAccepted) {
      setError(t('contactPage.privacyError'));
      return;
    }

    setIsSent(false);
    setError('');

    try {
      // New: Add a document to the 'messages' collection in Firestore
      await addDoc(collection(db, 'messages'), {
        to: ['your-receiving-email@yahoo.com'], // The email address where you will receive the message
        replyTo: formData.email, // This sets the Reply-To header so you can reply directly to the user
        message: {
          subject: `New message from ${formData.name}`,
          html: `
            <p>You have a new message from your website's contact form:</p>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
        },
      });

      console.log('SUCCESS: Message sent via Firestore.');
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setIsPrivacyAccepted(false);
    } catch (err) {
      console.error('FAILED...', err);
      setError(`${t('contactPage.form.errorMessage')} An unknown error occurred.`);
    }
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
*/