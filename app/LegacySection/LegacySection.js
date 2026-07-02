import styles from "./LegacySection.module.css";

export default function LegacySection() {
  return (
    <section className={styles.legacySection}>
      <div className={styles.inner}>
        <div className={styles.leftArt}>
          <img src="asset/OurLegacy/Human.svg" alt="Traditional cooking art" />
        </div>

        <div className={styles.centerText}>
          <p className={styles.label}>Our Legacy</p>
          <h2 className={styles.title}>Visakam Sweets & Savouries</h2>
          <p className={styles.desc}>
            For more than a century, our halwa has been a part of Tirunelveli&apos;s
            culture and pride. Prepared with the same devotion and traditional
            methods, every piece carries a story of taste and trust.
          </p>
          <a href="#" className={styles.link}>
            Our Story
          </a>
        </div>

        <div className={styles.rightImage}>
          <img src="/nature.png" alt="Heritage shop" />
        </div>
      </div>
    </section>
  );
}
