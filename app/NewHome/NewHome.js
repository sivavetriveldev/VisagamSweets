"use client";

import { useEffect, useState } from "react";
import styles from "./NewHome.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Halwa", href: "#halwa" },
  { label: "Sweets & Savories", href: "#sweets-savories" },
  { label: "News & Events", href: "#news-events" },
  { label: "Contact", href: "#contact" },
];

const desktopHeroSlides = [
  {
    src: "/asset/iruttukadai-halwa.webp",
    alt: "Iruttukadai Halwa banner",
  },
  {
    src: "/asset/tirunelveli-iruttukadai-halwa.webp",
    alt: "Tirunelveli Iruttukadai Halwa banner",
  },
];

const mobileHeroSlides = [
  {
    src: "/asset/mobile-image/iruttukadai-halwa-1.webp",
    alt: "Iruttukadai Halwa mobile banner 1",
  },
  {
    src: "/asset/mobile-image/iruttukadai-halwa-2.webp",
    alt: "Iruttukadai Halwa mobile banner 2",
  },
];

export default function NewHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % desktopHeroSlides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logoLink} aria-label="Iruttukadai Halwa home">
            <img src="/irutukadai-logo.png" alt="Iruttukadai Halwa" className={styles.logo} />
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <a href={item.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button type="button" className={styles.iconButton} aria-label="Search">
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path
                  d="M10.5 4a6.5 6.5 0 1 0 4.12 11.53l4.43 4.44 1.41-1.41-4.44-4.43A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <a href="#" className={styles.cartButton} aria-label="Cart">
              <span className={styles.cartCount} aria-hidden="true">
                0
              </span>
              <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.cartIcon} />
            </a>

            <a href="#order-online" className={styles.orderButton}>
              Order Online
            </a>
          </div>
        </div>
      </header>

      <div className={styles.bannerWrap}>
        <div className={`${styles.bannerCarousel} ${styles.desktopBanner}`} aria-label="Homepage banners">
          {desktopHeroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`${styles.bannerImage} ${
                index === activeSlide ? styles.bannerImageActive : ""
              }`}
            />
          ))}

          <div className={styles.bannerDots} role="tablist" aria-label="Banner navigation">
            {desktopHeroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`${styles.bannerDot} ${index === activeSlide ? styles.bannerDotActive : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show banner ${index + 1}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.bannerCarousel} ${styles.mobileBanner}`} aria-label="Homepage mobile banners">
          {mobileHeroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`${styles.bannerImage} ${
                index === activeSlide ? styles.bannerImageActive : ""
              }`}
            />
          ))}

          <div className={styles.bannerDots} role="tablist" aria-label="Mobile banner navigation">
            {mobileHeroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`${styles.bannerDot} ${index === activeSlide ? styles.bannerDotActive : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show mobile banner ${index + 1}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
