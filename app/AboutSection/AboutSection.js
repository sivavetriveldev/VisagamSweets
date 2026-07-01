import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
   

      <div className={styles.aboutCard}>
        <div className={styles.leftImageBox}>
          <img
            src="/nature.png"
            alt="Heritage Shop"
            className={styles.heritageImage}
          />
        </div>

        <div className={styles.centerContent}>
          <p className={styles.tag}>OUR LEGACY</p>
          <h3 className={styles.heading}>A HERITAGE SWEET SINCE GENERATIONS</h3>
          <p className={styles.description}>
            For over a century, our halwa has been part of Tirunelveli&apos;s
            identity. Prepared with the same devotion and traditional methods,
            every batch carries the taste that generations have cherished.
          </p>

          <a href="#" className={styles.storyLink}>
            KNOW OUR STORY
          </a>
        </div>

        <div className={styles.rightStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statText}>Years of Legacy</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>Millions</div>
            <div className={styles.statText}>Happy Customers</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>Generations</div>
            <div className={styles.statText}>of Trust & Tradition</div>
          </div>
        </div>
      </div>
    </section>
  );
}