"use client";

import styles from "./NewFooter.module.css";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.wrapper}>
          <div className={styles.colLeft}>
            <div className={styles.brandRow}>
              <img src="/asset/logo.png" alt="Iruttukadai Halwa" />
            </div>

            <p className={styles.tagline}>
              The original taste of tirunelveli since generations.
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
                 Sweets & Savories
                </a>
              </li>
              <li>
                <a href="#halwa" className={styles.footerLink}>
                  Halwa
                </a>
              </li>
              <li>
                <a href="#halwa" className={styles.footerLink}>
                 About 
                </a>
              </li>
          
              <li>
                <a href="#contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.colRight}>
            <h3 className={styles.colTitle}>Visit Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <p className={styles.info}>
                 Visakam sweets and Savouries,
                  <br />
                 29 East car street, Tirunelveli Town. 627006.
                </p>
              </li>
              <li className={styles.contactItem}>
                <a href="tel:+919629753355" className={styles.contactLink}>
                  +91 96298 43355
                </a>
              </li>
              <li className={styles.contactItem}>
                <a
                  href="mailto:info@iruttukadaihalwa.com"
                  className={styles.contactLink}
                >
                  visakamsweetsandsavouries@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <img
            src="/asset/Footer/Footertemple.svg"
            alt="Temple"
            aria-hidden="true"
            className={styles.bottomSketch}
          />
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.policyRow}>
            <div className={styles.policyLinks}>
              <a href="#">Terms &amp; Condition</a>
              <span>|</span>
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Cancellation Policy</a>
              <span>|</span>
              <a href="#">Refund Policy</a>
              <span>|</span>
              <a href="#">Pricing Policy</a>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.designedBy}>
              <p>Copyright - 2026 Visakam Sweets and Savouries. All rights reserved.</p>
            </div>

            <div className={styles.designedBy}>
              <a href="https://www.xcodefix.com" target="_blank" rel="noopener noreferrer">
                Website Design & SEO By Xcodefix
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </footer>
  );
}
