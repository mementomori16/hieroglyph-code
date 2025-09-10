import React, { useState, useEffect, useRef, useCallback } from 'react';
import './testimonials.scss';

// Helper function to generate placeholder image URL with initials
const getPlaceholderImage = (name: string) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  // Using placehold.co for simple placeholder images.
  // Using a fixed size (50x50) and colors for consistent appearance.
  // Background color: #E0E7FF (light blue), Text color: #4338CA (dark blue)
  return `https://placehold.co/50x50/E0E7FF/4338CA?text=${initials}`;
};

interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  clientTitle?: string;
  clientCompany?: string;
  clientImage: string; // Now mandatory due to getPlaceholderImage
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I can recommend Ilya's work, and him personally, with full conviction. I don't even know where to begin in highlighting his qualities.\n\nHis personality is exceptional, and this shines through in his work. He's not your typical programmer. I have a feeling he started that field of study simply to satisfy his brilliant mind.\n\nBut Ilya's work is more than just coding. His range of experience seems endless, which makes his input incredibly valuable. He's knowledgeable in art as well as current technological developments. His creativity overflows. He genuinely invests himself in his work rather than just fulfilling a task. What's truly valuable is that he contributes for the benefit of the client. He's always thinking, \"What else could be helpful? What could make this new homepage even more up-to-date?\" Things I couldn't even imagine existed are commonplace for him, and he incorporates them.\n\nHe also possesses a patience and kindness that made our collaboration incredibly pleasant. My objections, ideas, wishes... everything! He always took everything to heart and implemented it. Even when my work required something a bit old-fashioned, he made an absolute effort to find the best solution for me.\n\nIt's a gift to have Ilya by my side, both for the design and the maintenance of my homepage.",
    clientName: "Daniela Hagmann",
    clientTitle: "Co",
    clientCompany: "Lebend-Ich",
    clientImage: "https://i.ibb.co/xKGQtdbJ/Portrait-7-photoshoped.jpg",
  },
  {
    id: 2,
    quote: "We were incredibly pleased with Ilya's contributions to our team. He played a key role in developing several components of our main PWA, consistently maintaining a positive attitude and fostering a great atmosphere in the workplace. Ilya is a true asset!",
    clientName: "Tal Yaron",
    clientTitle: "CEO",
    clientCompany: "FreeDi",
    clientImage: "https://i.ibb.co/1Jt1c6kC/1670996333512.jpg",
  },
  {
    id: 3,
    quote: "Exceptional quality and timely delivery. They truly understood our complex needs and exceeded expectations.",
    clientName: "Maria Garcia",
    clientTitle: "Lead Engineer",
    clientCompany: "TechForge Ltd.",
    clientImage: getPlaceholderImage("Maria Garcia"),
  },
];

// For icons, we'll use inline SVGs for simplicity and to avoid external dependencies.
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor" // This ensures the SVG picks up the 'color' CSS property
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor" // This ensures the SVG picks up the 'color' CSS property
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
  </svg>
);

// Helper function to check if text needs truncation
const checkTruncationNeeded = (text: string, maxLines: number): boolean => {
  const charsPerLineEstimate = 65; // Adjusted estimate for a wider card, but fewer lines
  const estimatedLines = text.length / charsPerLineEstimate;
  return estimatedLines > maxLines;
};


const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  // Constants for truncation check (adjust these if you change SCSS values)
  const MAX_LINES_IN_CAROUSEL = 5; // NEW: Adjusted to match the new -webkit-line-clamp

  const resetSlidePosition = useCallback((newSlidesToShow: number) => {
    const maxIndex = Math.max(0, testimonials.length - newSlidesToShow);
    if (currentSlide > maxIndex) {
      setCurrentSlide(maxIndex);
    }
  }, [currentSlide, testimonials.length]);

  useEffect(() => {
    const handleResize = () => {
      resetSlidePosition(slidesToShow);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [resetSlidePosition, slidesToShow]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    // Only start autoplay if there are enough testimonials to scroll AND modal is not open
    if (testimonials.length > slidesToShow && !modalOpen) {
      autoplayRef.current = window.setInterval(() => {
        setCurrentSlide(prev => {
          let nextSlide = (prev + 1) % testimonials.length; // Corrected next slide calculation for looping
          return nextSlide;
        });
      }, 6000); // Autoplay speed 6000ms
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


  const handleMouseEnter = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleMouseLeave = () => {
    if (!modalOpen) { // Only restart if modal is not open
      startAutoplay();
    }
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length); // Corrected to loop back to 0
  };

  const prevSlide = () => {
    setCurrentSlide(prev => {
      // Loop from first slide back to last
      if (prev === 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on body
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTestimonial(null);
    document.body.style.overflow = ''; // Restore scrolling on body
  };

  const transformValue = `translateX(-${(100 / slidesToShow) * currentSlide}%)`;

  const showArrows = testimonials.length > 1;

  const canScroll = testimonials.length > 1;

  const numberOfDots = testimonials.length;


  return (
    <section
      className="testimonials-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="section-title">What Our Clients Say</h1>
      <p className="section-subtitle">Discover the real impact of our software solutions, straight from our partners.</p>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: transformValue }}
          ref={slideRef}
        >
          {testimonials.map((testimonial) => {
            const needsTruncation = checkTruncationNeeded(
              testimonial.quote,
              MAX_LINES_IN_CAROUSEL
            );

            return (
              <div
                key={testimonial.id}
                className="testimonial-slide-wrapper"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "{testimonial.quote}"
                  </p>
                  {needsTruncation && (
                    <button
                      className="read-more-btn"
                      onClick={() => openModal(testimonial)}
                    >
                      Read More
                    </button>
                  )}
                  <div className="client-info">
                    {testimonial.clientImage && (
                      <img
                        src={testimonial.clientImage}
                        alt={testimonial.clientName}
                        className="client-image"
                        onError={(e) => { e.currentTarget.src = getPlaceholderImage(testimonial.clientName); }}
                      />
                    )}
                    <div className="client-text-info">
                      <p className="client-name">
                        {testimonial.clientName}
                      </p>
                      {(testimonial.clientTitle || testimonial.clientCompany) && (
                        <p className="client-role">
                          {testimonial.clientTitle}
                          {testimonial.clientTitle && testimonial.clientCompany && " "}
                          {testimonial.clientCompany}
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
              disabled={false} // Disable based on currentSlide if not looping back
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="arrow-icon" />
            </button>
            <button
              onClick={nextSlide}
              className="carousel-arrow carousel-arrow-right"
              disabled={false} // Disable based on currentSlide if not looping
              aria-label="Next testimonial"
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
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}

      {/* Testimonial Modal */}
      {modalOpen && selectedTestimonial && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <p className="modal-quote">"{selectedTestimonial.quote}"</p>
            <div className="modal-client-info">
              {selectedTestimonial.clientImage && (
                <img
                  src={selectedTestimonial.clientImage}
                  alt={selectedTestimonial.clientName}
                  className="modal-client-image"
                  onError={(e) => { e.currentTarget.src = getPlaceholderImage(selectedTestimonial.clientName); }}
                />
              )}
              <div className="client-text-info">
                <p className="modal-client-name">
                  {selectedTestimonial.clientName}
                </p>
                {(selectedTestimonial.clientTitle || selectedTestimonial.clientCompany) && (
                  <p className="modal-client-role">
                    {selectedTestimonial.clientTitle}
                    {selectedTestimonial.clientTitle && selectedTestimonial.clientCompany && " "}
                    {selectedTestimonial.clientCompany}
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
