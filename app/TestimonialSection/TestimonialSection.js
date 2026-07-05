"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Ramesh, Chennai",
    role: "Customer",
  },
  {
    text: "ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Meenakshi, Madurai",
    role: "Customer",
  },
  {
    text: "ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Arvind, Coimbatore",
    role: "Customer",
  },
   {
    text: "ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rameshhhhh, Chennai",
    role: "Customer",
  },
  {
    text: "ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Meenakshiiiiii, Madurai",
    role: "Customer",
  },
  {
    text: "ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Arvinddddd, Coimbatore",
    role: "Customer",
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

  const visibleDots = testimonials.slice(0, 3);
  const activeDot = ((index % testimonials.length) % visibleDots.length + visibleDots.length) % visibleDots.length;

  useEffect(() => {
    const updateLayout = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      if (!viewportWidth) return;
      setViewportWidth(viewportWidth);
      const isMobile = window.innerWidth <= 768;
      setSlideWidth(viewportWidth * (isMobile ? 0.9 : 0.56));
    };

    updateLayout();

    const startAutoplay = () => {
      timerRef.current = window.setTimeout(() => {
        setIndex((current) => current + 1);
        startAutoplay();
      }, 2400);
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
          <p className={styles.subtitle}>Loved By Generations</p>
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
                      <p className={styles.text}>
                        <span className={styles.quoteMark}>&ldquo;</span>
                        {item.text}
                        <span className={styles.quoteMark}>&rdquo;</span>
                      </p>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
