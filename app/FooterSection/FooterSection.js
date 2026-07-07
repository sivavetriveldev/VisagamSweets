"use client";

import styles from "./FooterSection.module.css";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className={styles.footerSection}>
      {/* <img
        src="/asset/Footer/designtopleft.svg"
        alt=""
        aria-hidden="true"
        className={styles.cornerTopLeft}
      />
      <img
        src="/asset/Footer/rightTop.svg"
        alt=""
        aria-hidden="true"
        className={styles.cornerTopRight}
      /> */}

      <div className={styles.wrapper}>
        <div className={styles.colLeft}>
          <div className={styles.brandRow}>
            <img src="/irutukadai-logo.png" alt="Iruttukadai Halwa"  />
            {/* <div className={styles.brandText}>
              <h2 className={styles.brandName}>Iruttukadai</h2>
              <h2 className={styles.brandName}>Halwa</h2>
            </div> */}
          </div>

          <p className={styles.tagline}>
            The Original Taste Of Tirunelveli Since Generations.
          </p>

          <div className={styles.socialRow}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <img src="/asset/Footer/facebook.svg" alt="" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <img src="/asset/Footer/instagram.svg" alt="" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <img src="/asset/Footer/youtube.svg" alt="" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
              <img src="/asset/Footer/whatsapp.svg" alt="" />
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.colMid}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
                <a href="#home" className={styles.footerLink}>
                Home
                </a>
            </li>
            <li>
                <a href="#about" className={styles.footerLink}>
               About Us
                </a>
            </li>
            <li>
                <a href="#halwa" className={styles.footerLink}>
               Halwa
                </a>
            </li>
            <li>
                <a href="#news" className={styles.footerLink}>
                News & Events
                </a>
            </li>
            <li>
                <a href="#contact" className={styles.footerLink}>
                Contact Us
                </a>
            </li>
            {/* <li>
                <a href="#" className={styles.footerLink}>
                Contact
                </a>
            </li> */}
          </ul>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.colRight}>
          <h3 className={styles.colTitle}>Visit Us</h3>
          <p className={styles.info}>
            Iruttukadai Halwa Shop
            <br />
            Tirunelveli, Tamil Nadu - 627001
          </p>
          <p className={styles.info}>+91 12345 67890</p>
          <p className={styles.info}>info@iruttukadaihalwa.com</p>

          <div className={styles.visitLine}></div>
        </div>

        <img
          src="/asset/Footer/Footertemple.svg"
          alt="Temple"
          aria-hidden="true"
          className={styles.bottomSketch}
        />
        <button
          type="button"
          className={styles.topArrowBtn}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <img
            src="/asset/Footer/top-arrow.svg"
            alt=""
            aria-hidden="true"
            className={styles.topArrowIcon}
          />
        </button>
        <div className={styles.copyRow}>Crafted with Tradition. Shared with Generations.</div>
      </div>

      
    </footer>
  );
}
