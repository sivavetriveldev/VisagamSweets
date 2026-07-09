"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "Worth for your money..amzing taste and fresh...",
    name: "Selvam R",

  },
  {
    text: "It's an excellent halwa ever I had. No more words it's an Amrutham.",
    name: "Sairam Bodana",
   
  },
  {
    text: "A small shop but we loved. We are from Kerala and travelled to Tirunelveli to visit this shop and eat halwa in vazha ila ( banana leaf ). We ate lot of halwa in vazha ilai and purchased nearly 7 kg halwa.. Superb ",
    name: "Suja Sunny, Kerala",
 
  },
   {
    text: "The taste remains authentic compared to traditional Halwas and one of the best Halwas and always crowded. They deliver very quickly upon mentioning the requirements.",
    name: "Lakshmipathy R",
   
  },
  {
    text: "I got an opportunity to taste this famous Halwa after darshan from temple. I like this taste and price. Packaging is fine. Overall good quality and great taste. I Appreciate the effort of this shop.",
    name: "SaravanaKumar Kanagaraj",
    
  },
  {
    text: "Special Halwa & very good taste. I have never had such delicious halwa",
    name: "Vinodkumar",
  
  },
];

export default function TestimonialSection() {
  const repeatCount = 5;
  const loopStart = testimonials.length * 2;
  const loopEnd = testimonials.length * 3;
  const slides = useMemo(
    () => Array.from({ length: repeatCount }, () => testimonials).flat(),
    []
  );
  const viewportRef = useRef(null);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(loopStart);
  const [isJumping, setIsJumping] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const visibleDots = testimonials.slice(0, 3);
  const activeDot = ((index % testimonials.length) % visibleDots.length + visibleDots.length) % visibleDots.length;

  const getReviewPreview = (text, wordLimit = 40) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) {
      return {
        preview: text,
        isLong: false,
      };
    }

    return {
      preview: `${words.slice(0, wordLimit).join(" ")}...`,
      isLong: true,
    };
  };

  const toggleExpanded = (slideIndex) => {
    setExpandedIndexes((current) => ({
      ...current,
      [slideIndex]: !current[slideIndex],
    }));
  };

  const handleDotClick = (dotIndex) => {
    setIndex(loopStart + dotIndex);
  };

  useEffect(() => {
    const updateLayout = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      if (!viewportWidth) return;
      setViewportWidth(viewportWidth);
      const isMobile = window.innerWidth <= 768;
      setSlideWidth(viewportWidth * (isMobile ? 1 : 0.56));
    };

    updateLayout();

    const startAutoplay = () => {
      timerRef.current = window.setTimeout(() => {
        setIndex((current) => current + 1);
        startAutoplay();
      }, 3000);
    };

    startAutoplay();
    window.addEventListener("resize", updateLayout);

    let resizeObserver;
    if (window.ResizeObserver && viewportRef.current) {
      resizeObserver = new ResizeObserver(updateLayout);
      resizeObserver.observe(viewportRef.current);
    }

    return () => {
      window.clearTimeout(timerRef.current);
      window.removeEventListener("resize", updateLayout);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const handleTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;

    if (index >= loopEnd) {
      setIsJumping(true);
      setIndex(loopStart);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsJumping(false));
      });
      return;
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHeader}>
          <p className={styles.tag}>
            <img
              src="/asset/heading-icon.svg"
              alt=""
              aria-hidden="true"
              className={styles.tagIcon}
            />
            <span>Customer Stories</span>
          </p>
          <h2 className={styles.title}>Testimonials</h2>
          <p className={styles.subtitle}>Loved by generations</p>
        </div>
        <div className={styles.carouselShell}>
          <div className={styles.viewport} ref={viewportRef}>
            <div
              className={styles.track}
              onTransitionEnd={handleTransitionEnd}
                style={{
                  "--slide-width": `${slideWidth}px`,
                  transform: `translateX(${slideWidth ? (viewportWidth - slideWidth) / 2 - index * slideWidth : 0}px)`,
                  transition: isJumping ? "none" : "transform 650ms ease-in-out",
                }}
              >
              {slides.map((item, slideIndex) => (
                <div className={styles.slide} key={`${item.name}-${slideIndex}`}>
                  <div className={styles.slideInner}>
                    <img
                      src="/asset/Testimonial/EmptyCenter.svg"
                      alt=""
                      aria-hidden="true"
                      className={styles.centerImg}
                    />
                    <div className={styles.centerContent}>
                      {(() => {
                        const { preview, isLong } = getReviewPreview(item.text, 50);
                        const isExpanded = expandedIndexes[slideIndex];
                        const displayText = isExpanded ? item.text : preview;

                        return (
                          <>
                            <p className={styles.text}>
                              <span className={styles.quoteMark}>&ldquo;</span>
                              {displayText}
                              <span className={styles.quoteMark}>&rdquo;</span>
                            </p>
                            {isLong ? (
                              <span className={styles.readMoreWrap}>
                                <button
                                  type="button"
                                  className={styles.readMoreBtn}
                                  onClick={() => toggleExpanded(slideIndex)}
                                >
                                  {isExpanded ? "Read less" : "Read more"}
                                </button>
                              </span>
                            ) : null}
                          </>
                        );
                      })()}
                      <div className={styles.starRow} aria-hidden="true">
                        <img src="/asset/Testimonial/star.svg" alt="" className={styles.starIcon} />
                        <img src="/asset/Testimonial/star.svg" alt="" className={styles.starIcon} />
                        <img src="/asset/Testimonial/star.svg" alt="" className={styles.starIcon} />
                        <img src="/asset/Testimonial/star.svg" alt="" className={styles.starIcon} />
                        <img src="/asset/Testimonial/star.svg" alt="" className={styles.starIcon} />
                      </div>
                      <div className={styles.profile}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.role}>{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {visibleDots.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              className={dotIndex === activeDot ? styles.dotActive : styles.dot}
              aria-label={`Show testimonial ${dotIndex + 1}`}
              aria-pressed={dotIndex === activeDot}
              onClick={() => handleDotClick(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
