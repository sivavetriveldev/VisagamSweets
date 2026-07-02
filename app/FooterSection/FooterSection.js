import styles from "./FooterSection.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
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
            <img src="/fav-icon.jpg" alt="Iruttukadai Halwa" className={styles.logo} />
            <div className={styles.brandText}>
              <h2 className={styles.brandName}>IRUTTUKADAI</h2>
              <h2 className={styles.brandName}>HALWA</h2>
            </div>
          </div>

          <p className={styles.tagline}>
            The Original Taste of Tirunelveli Since Generations.
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
          <h3 className={styles.colTitle}>QUICK LINKS</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Our Legacy
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Products
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Making Process
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.colRight}>
          <h3 className={styles.colTitle}>VISIT US</h3>
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
          src="/asset/bottom-icon.png"
          alt=""
          aria-hidden="true"
          className={styles.bottomSketch}
        />
        <div className={styles.copyRow}>Crafted with Tradition. Shared with Generations.</div>
      </div>

      
    </footer>
  );
}
