import styles from "./LegacySection.module.css";

export default function LegacySection() {
  return (
    <section
      className={styles.legacySection}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1200"
    >
      <div className={styles.inner}>
        <div className={styles.centerText}>
            <p className={styles.tag}>
              <span className={styles.tagText}>Our Legacy</span>
            </p>
          <h2 className={styles.title}>Iruttukadai Halwa</h2>
          <p className={styles.desc}>
           For generations, our Iruttukadai Halwa has been crafted using time-honored recipes and traditional methods.
Made with pure ghee and carefully selected ingredients, every batch delivers an authentic taste.
Experience the rich heritage of Tirunelveli in every delicious bite.
          </p>
          <a href="#" className={styles.link}>
            Shop Now
          </a>
        </div>

        <div className={styles.rightImages}>
          <div className={styles.rightImage}>
            <img src="/asset/OurLegacy/legacy1.jpg" alt="Heritage shop" />
          </div>
          <div className={styles.rightImage}>
            <img src="/asset/OurLegacy/legacy2.jpg" alt="Heritage shop" />
          </div>
        </div>
      </div>
    </section>
  );
}
