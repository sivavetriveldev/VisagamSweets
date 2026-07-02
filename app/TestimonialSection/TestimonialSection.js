"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "The taste takes me back to my childhood days in Tirunelveli. Simply unmatched!",
    name: "Ramesh, Chennai",
  },
  {
    text: "Authentic, rich and always consistent. Our family's all-time favorite.",
    name: "Lakshmi, Madurai",
  },
  {
    text: "Every bite reflects tradition and quality. Highly recommended!",
    name: "Aravind, Bengaluru",
  },
    {
    text: "The taste takes me back to my childhood days in Tirunelveli. Simply unmatched!",
    name: "Ramesh, Chennai",
  },
  {
    text: "Authentic, rich and always consistent. Our family's all-time favorite.",
    name: "Lakshmi, Madurai",
  },
  {
    text: "Every bite reflects tradition and quality. Highly recommended!",
    name: "Aravind, Bengaluru",
  },
];

export default function TestimonialSection() {
  const itemsPerView = 3;
  const slides = useMemo(() => {
    const grouped = [];
    for (let index = 0; index < testimonials.length; index += itemsPerView) {
      grouped.push(testimonials.slice(index, index + itemsPerView));
    }
    return grouped;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>LOVED BY GENERATIONS</h2>

        <div className={styles.carousel}>
          <button className={styles.arrowBtn} onClick={prevSlide} aria-label="Previous testimonial">
            ‹
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((group, groupIndex) => (
                <div className={styles.slide} key={groupIndex}>
                  <div className={styles.grid}>
                    {group.map((item, index) => (
                      <div className={styles.card} key={`${groupIndex}-${index}`}>
                        <div className={styles.quote}>“</div>
                        <p className={styles.text}>{item.text}</p>
                        <p className={styles.name}>- {item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.arrowBtn} onClick={nextSlide} aria-label="Next testimonial">
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? styles.dotActive : styles.dot}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
