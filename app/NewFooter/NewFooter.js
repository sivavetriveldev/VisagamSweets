"use client";

import styles from "./NewFooter.module.css";

export default function NewFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoRow}>
          <img src="/irutukadai-logo.png" alt="Yumo style logo" className={styles.logo} />
        </div>

        <p className={styles.description}>
          The Original Taste Of Tirunelveli Since Generations.
        </p>

        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#about">Home</a>
          <a href="#support">About Us</a>
          <a href="#location">Halwa</a>
          <a href="#policy">News & Events</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className={styles.contactStrip}>
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <img src="/asset/Footer/facebook.svg" alt="" className={styles.socialImage} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <img src="/asset/Footer/instagram.svg" alt="" className={styles.socialImage} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <img src="/asset/Footer/youtube.svg" alt="" className={styles.socialImage} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
              <img src="/asset/Footer/whatsapp.svg" alt="" className={styles.socialImage} />
            </a>
          </div>

          <a href="#top" className={styles.topArrow} aria-label="Back to top">
            <img src="/asset/Footer/top-arrow.svg" alt="" className={styles.topArrowImage} />
          </a>

          <div className={styles.contactRow}>
            <a className={styles.contactItem} href="tel:+5558888888">
              <span className={styles.icon}>☎</span>
              <span>(555) 888 8888</span>
            </a>
            <a className={styles.contactItem} href="mailto:demo@yumo.com">
              <span className={styles.icon}>✉</span>
              <span>demo@yumo.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
