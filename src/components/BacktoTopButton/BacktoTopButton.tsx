import React, { useState, useEffect } from 'react';
import './backtoTop.scss';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 400); // remove click effect after animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`back-to-top ${isVisible ? 'visible' : ''} ${isClicked ? 'clicked' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to Top"
        >
            ↑
        </div>
    );
};

export default BackToTop;
