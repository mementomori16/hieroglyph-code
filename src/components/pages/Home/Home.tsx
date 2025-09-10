import React, { useRef } from "react";
import CustomCarousel from "../../costumcarousel/CustomCarousel";
import Services from "../ServicesPage/Services";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      <CustomCarousel scrollToContent={scrollToContent} />
      <div className="stripes-container" ref={contentRef}>
        
        <div className="stripe homepage-section about-teaser-section">
          <h2 className="about-teaser-title">{t('homePage.aboutTeaserTitle')}</h2>
          <div className="about-teaser-content">
            <img
              src="https://i.ibb.co/0tfzD7K/received-341071728732981.png"
              alt="Ilya Medvedev - Founder of Hieroglyph Code"
              className="about-teaser-image"
            />
            <div className="about-teaser-description" dangerouslySetInnerHTML={{ __html: t('homePage.aboutTeaserDescription') }} />
          </div>
          <Link to="/about" className="learn-more-button">{t('homePage.learnMoreButton')}</Link>
        </div>

        <div className="section-divider"></div>

        <div className="stripe homepage-section">
          <Services />
        </div>
        <div className="section-divider"></div>

        <div className="stripe homepage-section">
          <Testimonials />
        </div>

        <div className="section-divider"></div>

        <div className="stripe homepage-section contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;