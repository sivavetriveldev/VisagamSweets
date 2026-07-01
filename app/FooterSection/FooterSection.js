import styles from "./FooterSection.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.wrapper}>
        <div className={styles.colLeft}>
          <div className={styles.brandRow}>
            <img src="/Shop-logo.svg" alt="Iruttukadai Halwa" className={styles.logo} />
            <div>
              <h2 className={styles.brandName}>IRUTTUKADAI</h2>
              <h2 className={styles.brandName}>HALWA</h2>
            </div>
          </div>

          <p className={styles.tagline}>
            The Original Taste of Tirunelveli Since Generations.
          </p>

          <div className={styles.socialRow}>
            <span className={styles.socialIcon}>f</span>
            <span className={styles.socialIcon}>◎</span>
            <span className={styles.socialIcon}>▶</span>
            <span className={styles.socialIcon}>◉</span>
          </div>
        </div>

        <div className={styles.colMid}>
          <h3 className={styles.colTitle}>QUICK LINKS</h3>
          <ul className={styles.linkList}>
            <li>Home</li>
            <li>Our Legacy</li>
            <li>Products</li>
            <li>Making Process</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.colRight}>
          <h3 className={styles.colTitle}>VISIT US</h3>
          <p className={styles.info}>
            Iruttukadai Halwa Shop
            <br />
            Tirunelveli, Tamil Nadu - 627001
          </p>
          <p className={styles.info}>+91 12345 67890</p>
          <p className={styles.info}>info@iruttukadaihalwa.com</p>

          <div className={styles.bottomLine}></div>
        </div>
      </div>

      <div className={styles.copyRow}>
        Crafted with Tradition. Shared with Generations.
      </div>
    </footer>
  );
}