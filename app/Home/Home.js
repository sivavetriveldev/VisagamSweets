"use client";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const productOptions = [
  "Tirunelveli Halwa",
  "Pure Ghee Halwa",
  "Festival Packs",
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
  const [formData, setFormData] = useState(initialForm);
  const [submitStatus, setSubmitStatus] = useState("");

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

  const openOrderForm = (event) => {
    event.preventDefault();
    setSubmitStatus("");
    setIsOrderOpen(true);
  };

  const closeOrderForm = () => {
    setIsOrderOpen(false);
    setSubmitStatus("");
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
        <div className={styles.logoRow}>
          <img src="/irutukadai-logo.png" alt="Shop Logo" className={styles.shopLogo} />
        </div>

        <div className={styles.navBar}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About Us</a>
          <a href="#halwa" className={styles.navLink}>Halwa</a>
          <a href="#news" className={styles.navLink}>News & Events</a>
          <a href="#contact" className={styles.navLink}>Contact Us</a>
          <a
            href="#"
            className={styles.cartLink}
            aria-label="Cart"
            onClick={(event) => event.preventDefault()}
          >
            <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.navIcon} />
          </a>
          <button type="button" className={styles.orderBtn} onClick={openOrderForm}>
            <img src="/asset/bag.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
            <span>Order Online</span>
          </button>
        </div>
      </div>

      <section id="home" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div
            className={styles.heroLeft}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            <h1 className={styles.heroSmall}>The Original </h1>
            <h1 className={styles.heroTitle}>Taste Of Tirunelveli</h1>
            <p className={styles.heroDesc}>
              Crafted with tradition, pure ingredients and cherished for generations.
            </p>

            <div className={styles.heroButtons}>
              <button type="button" className={styles.primaryBtn} onClick={openOrderForm}>
                <img src="/asset/cart.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
                <span>Order Now</span>
              </button>
              <a href="#" className={styles.secondaryBtn}>
                <img src="/asset/location.svg" alt="" aria-hidden="true" className={styles.orderIcon} />
                <span>Visit Our Shop</span>
              </a>
            </div>
          </div>

          {/* <div className={styles.heroRight}>
            <img src="/asset/home-page-right.svg" alt="Iruttukadai Halwa" className={styles.heroImage} />
          </div> */}
        </div>
        <img src="/asset/Homepage/banner.webp" alt="Halwa-image" className={styles.natureArt} />
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
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
