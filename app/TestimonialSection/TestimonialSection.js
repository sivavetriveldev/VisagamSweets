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
    text: "The perfect blend of ghee and sweetness. Truly authentic and traditional.",
    name: "Meenakshi, Madurai",
    role: "Customer",
  },
  {
    text: "We order every festival. Quality and taste are always consistent.",
    name: "Arvind, Coimbatore",
    role: "Customer",
  },
];

const getInitials = (name) =>
  name
    .split(",")[0]
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function TestimonialSection() {
  const slides = useMemo(
    () => [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]],
    []
  );
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [isJumping, setIsJumping] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const nextSlide = () => setIndex((current) => current + 1);
  const prevSlide = () => setIndex((current) => current - 1);
  const jumpToDot = (dotIndex) => setIndex(dotIndex + 1);

  const activeDot = ((index - 1) % testimonials.length + testimonials.length) % testimonials.length;

  useEffect(() => {
    const updateLayout = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      if (!viewportWidth) return;
      setSlideWidth(viewportWidth);
    };

    updateLayout();

    const timer = window.setInterval(nextSlide, 4500);
    window.addEventListener("resize", updateLayout);

    let resizeObserver;
    if (window.ResizeObserver && viewportRef.current) {
      resizeObserver = new ResizeObserver(updateLayout);
      resizeObserver.observe(viewportRef.current);
    }

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("resize", updateLayout);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const handleTransitionEnd = () => {
    if (index >= slides.length - 1) {
      setIsJumping(true);
      setIndex(1);
      requestAnimationFrame(() => setIsJumping(false));
      return;
    }

    if (index <= 0) {
      setIsJumping(true);
      setIndex(testimonials.length);
      requestAnimationFrame(() => setIsJumping(false));
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Testimonials - Loved By Generations</h2>

        <div className={styles.carouselShell}>
          <button
            type="button"
            className={`${styles.arrowBtn} ${styles.arrowLeft}`}
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>

          <div className={styles.viewport} ref={viewportRef}>
            <div
              className={styles.track}
              onTransitionEnd={handleTransitionEnd}
              style={{
                "--slide-width": `${slideWidth}px`,
                transform: `translateX(-${index * slideWidth}px)`,
                transition: isJumping ? "none" : "transform 500ms ease",
              }}
            >
              {slides.map((item, slideIndex) => (
                <div className={styles.slide} key={`${item.name}-${slideIndex}`}>
                  <div className={styles.slideInner}>
                    <article className={styles.card}>
                      <div className={styles.quoteMark}>&ldquo;</div>
                      <p className={styles.text}>{item.text}</p>
                    </article>

                    <div className={styles.profile}>
                      <div className={styles.avatar} aria-hidden="true">
                        {getInitials(item.name)}
                      </div>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.role}>{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrowBtn} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              className={dotIndex === activeDot ? styles.dotActive : styles.dot}
              onClick={() => jumpToDot(dotIndex)}
              aria-label={`Show testimonial ${dotIndex + 1}`}
              aria-pressed={dotIndex === activeDot}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
