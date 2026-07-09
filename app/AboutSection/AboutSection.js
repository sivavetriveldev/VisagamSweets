"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import ProductsSection from "../Product/ProductsSection";

const stats = [
  {
    icon: "/asset/shop.svg",
    title: "100+",
    text: "Years of Legacy",
  },
  {
    icon: "/asset/customers.svg",
    title: "1000+",
    text: "Happy Customers",
  },
  {
    icon: "/asset/trust.svg",
    title: "20000+",
    text: "of Trust & Tradition",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const startedRef = useRef(false);
  const [countValues, setCountValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const animateCounts = () => {
      const duration = 1400;
      const startTime = performance.now();
      const targets = stats.map((item) => Number.parseInt(item.title, 10) || 0);

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCountValues(targets.map((target) => Math.round(target * eased)));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animateCounts();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  const formatStatTitle = (title, index) => {
    const suffix = title.includes("+") ? "+" : "";
    return `${countValues[index]}${suffix}`;
  };

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.aboutCard} ref={cardRef}>
        <div
          className={styles.leftImageBox}
          data-aos="zoom-in-up"
          data-aos-duration="750"
          data-aos-easing="ease-out-cubic"
        >
          {/* <img src="/asset/wheat.svg" alt="" aria-hidden="true" className={styles.wheatIcon} /> */}
          <img
            src="/asset/About/Shopimage.webp"
            alt="Heritage Shop"
            className={styles.heritageImage}
          />
        </div>

        <div className={styles.centerContent}>
          <p className={styles.tag}>
            <img
              src="/asset/heading-icon.svg"
              alt=""
              aria-hidden="true"
              className={styles.tagIcon}
            />
            <span>About Us</span>
          </p>
          <h3 className={styles.heading}>
            A Heritage Sweet
            Since Generations
          </h3>
          <p className={styles.description}>
            For over a century, our halwa has been part of Tirunelveli&apos;s
            identity. Prepared with the same devotion and traditional methods,
            every batch carries the taste that generations have cherished.
          </p>

          <a href="#" className={styles.storyLink}>
            Know Our Story
          </a>
        </div>

        <div
          className={styles.rightStats}
          data-aos="zoom-in-up"
          data-aos-duration="1100"
          data-aos-easing="ease-out-cubic"
        >
          {stats.map((item, index) => (
            <div className={styles.statItem} key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" className={styles.statIcon} />
              <div className={styles.statCopy}>
                <div className={styles.statNumber}>{formatStatTitle(item.title, index)}</div>
                <div className={styles.statText}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.productsWrap}>
        <ProductsSection />
      </div>
    </section>
  );
}
