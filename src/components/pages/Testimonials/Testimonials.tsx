import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '../../data/products';
import { Testimonial } from '../../types/Product';
import './testimonials.scss';

// Helper function to generate placeholder image URL with initials
const getPlaceholderImage = (name: string): string => {
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return `https://placehold.co/50x50/E0E7FF/4338CA?text=${initials}`;
};

// For icons, we'll use inline SVGs for simplicity and to avoid external dependencies.
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
    </svg>
);

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    const testimonials = products.testimonials || [];
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slidesToShow: number = 1;
    const slideRef = useRef<HTMLDivElement>(null);
    const autoplayRef = useRef<number | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

    // New state to track which testimonials are truncated
    const [truncatedStates, setTruncatedStates] = useState<Record<string, boolean>>({});
    // New refs to check for truncation
    const quoteRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

    // This effect runs after render to check for text truncation
    useEffect(() => {
        const newTruncatedStates: Record<string, boolean> = {};
        testimonials.forEach(testimonial => {
            const element = quoteRefs.current[testimonial.id];
            if (element) {
                // Check if scrollHeight is greater than clientHeight
                newTruncatedStates[testimonial.id] = element.scrollHeight > element.clientHeight;
            }
        });
        setTruncatedStates(newTruncatedStates);
    }, [testimonials]);

    const resetSlidePosition = useCallback((newSlidesToShow: number): void => {
        const maxIndex: number = Math.max(0, testimonials.length - newSlidesToShow);
        if (currentSlide > maxIndex) {
            setCurrentSlide(maxIndex);
        }
    }, [currentSlide, testimonials.length]);

    useEffect(() => {
        const handleResize = (): void => {
            resetSlidePosition(slidesToShow);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [resetSlidePosition, slidesToShow]);

    const startAutoplay = useCallback((): void => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
        if (testimonials.length > slidesToShow && !modalOpen) {
            autoplayRef.current = window.setInterval(() => {
                setCurrentSlide(prev => {
                    const nextSlide: number = (prev + 1) % testimonials.length;
                    return nextSlide;
                });
            }, 6000);
        }
    }, [slidesToShow, testimonials.length, modalOpen]);

    useEffect(() => {
        startAutoplay();
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [startAutoplay]);

    useEffect(() => {
        if (modalOpen && autoplayRef.current) {
            clearInterval(autoplayRef.current);
        } else if (!modalOpen) {
            startAutoplay();
        }
    }, [modalOpen, startAutoplay]);


    const handleMouseEnter = (): void => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
    };

    const handleMouseLeave = (): void => {
        if (!modalOpen) {
            startAutoplay();
        }
    };

    const nextSlide = (): void => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
    };

    const prevSlide = (): void => {
        setCurrentSlide(prev => {
            if (prev === 0) {
                return testimonials.length - 1;
            }
            return prev - 1;
        });
    };

    const goToSlide = (index: number): void => {
        setCurrentSlide(index);
    };

    const openModal = (testimonial: Testimonial): void => {
        setSelectedTestimonial(testimonial);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (): void => {
        setModalOpen(false);
        setSelectedTestimonial(null);
        document.body.style.overflow = '';
    };

    const transformValue: string = `translateX(-${(100 / slidesToShow) * currentSlide}%)`;

    const showArrows: boolean = testimonials.length > 1;

    const canScroll: boolean = testimonials.length > 1;

    const numberOfDots: number = testimonials.length;

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <section
            className="testimonials-section"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="section-title">{t('testimonials.title')}</h2>

            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: transformValue }}
                    ref={slideRef}
                >
                    {testimonials.map((testimonial) => {
                        const translatedQuote: string = t(`testimonials.${testimonial.id}.quote`, {
                            defaultValue: testimonial.quote
                        });
                        const translatedClientName: string = t(`testimonials.${testimonial.id}.clientName`, {
                            defaultValue: testimonial.clientName
                        });
                        const translatedClientTitle: string = t(`testimonials.${testimonial.id}.clientTitle`, {
                            defaultValue: testimonial.clientTitle
                        });
                        const translatedClientCompany: string = t(`testimonials.${testimonial.id}.clientCompany`, {
                            defaultValue: testimonial.clientCompany
                        });

                        return (
                            <div
                                key={testimonial.id}
                                className="testimonial-slide-wrapper"
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <div className="testimonial-card">
                                    <p
                                        className="testimonial-quote"
                                        ref={el => quoteRefs.current[testimonial.id] = el}
                                    >
                                        <span className="testimonial-quote-inner">
                                            "{translatedQuote}"
                                        </span>
                                    </p>
                                    {truncatedStates[testimonial.id] && (
                                        <button
                                            className="read-more-btn"
                                            onClick={() => openModal(testimonial)}
                                        >
                                            {t('testimonials.readMoreButton')}
                                        </button>
                                    )}
                                    <div className="client-info">
                                        {testimonial.clientImage && (
                                            <img
                                                src={testimonial.clientImage}
                                                alt={translatedClientName}
                                                className="client-image"
                                                onError={(e) => { e.currentTarget.src = getPlaceholderImage(translatedClientName); }}
                                            />
                                        )}
                                        <div className="client-text-info">
                                            <p className="client-name">
                                                {translatedClientName}
                                            </p>
                                            {(translatedClientTitle || translatedClientCompany) && (
                                                <p className="client-role">
                                                    {translatedClientTitle}
                                                    {translatedClientTitle && translatedClientCompany && ", "}
                                                    {translatedClientCompany}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                {showArrows && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="carousel-arrow carousel-arrow-left"
                            aria-label={t('testimonials.ariaLabels.previousTestimonial')}
                        >
                            <ChevronLeftIcon className="arrow-icon" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="carousel-arrow carousel-arrow-right"
                            aria-label={t('testimonials.ariaLabels.nextTestimonial')}
                        >
                            <ChevronRightIcon className="arrow-icon" />
                        </button>
                    </>
                )}
            </div>

            {/* Pagination Dots */}
            {canScroll && numberOfDots > 1 && (
                <div className="carousel-dots">
                    {Array.from({ length: numberOfDots }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            aria-label={t('testimonials.ariaLabels.goToSlide', { slideNumber: index + 1 })}
                        ></button>
                    ))}
                </div>
            )}

            {/* Testimonial Modal */}
            {modalOpen && selectedTestimonial && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal} aria-label={t('testimonials.ariaLabels.closeModal')}>
                            &times;
                        </button>
                        <p className="modal-quote">"{t(`testimonials.${selectedTestimonial.id}.quote`, { defaultValue: selectedTestimonial.quote })}"</p>
                        <div className="modal-client-info">
                            {selectedTestimonial.clientImage && (
                                <img
                                    src={selectedTestimonial.clientImage}
                                    alt={t(`testimonials.${selectedTestimonial.id}.clientName`, { defaultValue: selectedTestimonial.clientName })}
                                    className="modal-client-image"
                                    onError={(e) => { e.currentTarget.src = getPlaceholderImage(t(`testimonials.${selectedTestimonial.id}.clientName`, { defaultValue: selectedTestimonial.clientName })); }}
                                />
                            )}
                            <div className="client-text-info">
                                <p className="modal-client-name">
                                    {t(`testimonials.${selectedTestimonial.id}.clientName`, { defaultValue: selectedTestimonial.clientName })}
                                </p>
                                {(selectedTestimonial.clientTitle || selectedTestimonial.clientCompany) && (
                                    <p className="modal-client-role">
                                        {t(`testimonials.${selectedTestimonial.id}.clientTitle`, {
                                            defaultValue: selectedTestimonial.clientTitle
                                        })}
                                        {selectedTestimonial.clientTitle && selectedTestimonial.clientCompany && ", "}
                                        {t(`testimonials.${selectedTestimonial.id}.clientCompany`, {
                                            defaultValue: selectedTestimonial.clientCompany
                                        })}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;