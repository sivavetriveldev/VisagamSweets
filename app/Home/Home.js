"use client";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const productOptions = [
  "Halwa Bites",
  "Iruttukadai Halwa - 100 Gm",
  "Iruttukadai Halwa - 400 Gm",
];

const heroSlides = [
  {
    src: "/asset/iruttukadai-halwa.webp",
    alt: "Iruttukadai Halwa",
  },
  {
    src: "/asset/tirunelveli-iruttukadai-halwa.webp",
    alt: "Tirunelveli Iruttukadai Halwa",
  },
];

const initialForm = {
  name: "",
  phone: "",
  product: productOptions[0],
  quantity: 1,
  message: "",
};

export default function Home() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [submitStatus, setSubmitStatus] = useState("");
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    if (!isOrderOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOrderOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOrderOpen]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const openOrderForm = (event) => {
    event.preventDefault();
    setSubmitStatus("");
    setIsOrderOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeOrderForm = () => {
    setIsOrderOpen(false);
    setSubmitStatus("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === "quantity" ? value.replace(/\D/g, "") : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitStatus("Your order request is ready. We will contact you soon.");
  };

  return (
    <div className={styles.page}>
      <div className={styles.headerWrap}>
        <div className={styles.headerInner}>
          <div className={styles.logoRow}>
            <img src="/irutukadai-logo.png" alt="Shop Logo" className={styles.shopLogo} />
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <img
              src={isMobileMenuOpen ? "/asset/close-icon.svg" : "/asset/menu.svg"}
              alt=""
              aria-hidden="true"
              className={styles.menuIcon}
            />
          </button>

          <div className={`${styles.navBar} ${isMobileMenuOpen ? styles.navBarOpen : ""}`}>
            <a href="#home" className={styles.navLink} onClick={closeMobileMenu}>Home</a>
            <a href="#about" className={styles.navLink} onClick={closeMobileMenu}>About Us</a>
            <a href="#halwa" className={styles.navLink} onClick={closeMobileMenu}>Halwa</a>
            <a href="#news" className={styles.navLink} onClick={closeMobileMenu}>News & Events</a>
            <a href="#contact" className={styles.navLink} onClick={closeMobileMenu}>Contact Us</a>
            <a
              href="#"
              className={styles.cartLink}
              aria-label="Cart"
              onClick={(event) => {
                event.preventDefault();
                closeMobileMenu();
              }}
            >
              <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.navIcon} />
            </a>
            <button type="button" className={styles.orderBtn} onClick={openOrderForm}>
              <img src="/asset/bag.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
              <span>Order Online</span>
            </button>
          </div>
        </div>
      </div>

      <section id="home" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroRight}>
            <div className={styles.heroCarousel} aria-label="Featured halwa images">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`${styles.heroSlide} ${index === activeHeroSlide ? styles.heroSlideActive : ""}`}
                />
              ))}
            </div>

            {/* <div className={styles.heroDots} role="tablist" aria-label="Hero image navigation">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`${styles.heroDot} ${index === activeHeroSlide ? styles.heroDotActive : ""}`}
                  onClick={() => setActiveHeroSlide(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={index === activeHeroSlide}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* <div className={styles.bottomArt}></div> */}

      {isOrderOpen && (
        <div className={styles.modalOverlay} onClick={closeOrderForm}>
          <div className={styles.modalCard} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeOrderForm}
              aria-label="Close order form"
            >
              <img src="/asset/close.svg" alt="" aria-hidden="true" className={styles.closeIcon} />
            </button>

            <p className={styles.modalTag}>Order Online</p>
            <h2 className={styles.modalTitle}>Place Your Order</h2>
            <p className={styles.modalDesc}>
              Tell us what you need, and we will get back to you with the next steps.
            </p>

            <form className={styles.orderForm} onSubmit={handleSubmit}>
              <div className={styles.fieldGrid}>
                <label className={styles.field}>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    inputMode="numeric"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>Product</span>
                  <select name="product" value={formData.product} onChange={handleChange}>
                    {productOptions.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Quantity</span>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className={`${styles.field} ${styles.messageField}`}>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Add any special request or note"
                />
              </label>

              {submitStatus ? <p className={styles.successText}>{submitStatus}</p> : null}

              <div className={styles.modalActions}>
                <button type="button" className={styles.secondaryAction} onClick={closeOrderForm}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryAction}>
                  View Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
