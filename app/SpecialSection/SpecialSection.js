import styles from "./SpecialSection.module.css";

const features = [
  { icon: "🏺", title: "Traditional Recipe" },
  { icon: "🫙", title: "Pure Ghee" },
  { icon: "🌾", title: "Premium Ingredients" },
  { icon: "🍯", title: "Slow Cooked" },
  { icon: "🌿", title: "Freshly Prepared" },
  { icon: "👨‍👩‍👧", title: "Trusted for Generations" },
];

export default function SpecialSection() {
  return (
    <section className={styles.specialSection}>
      <div className={styles.topBand}>
        <h2 className={styles.bandTitle}>WHY OUR HALWA IS SPECIAL</h2>

        <div className={styles.topGrid}>
          {features.map((item, index) => (
            <div className={styles.topItem} key={index}>
              <div className={styles.topIcon}>{item.icon}</div>
              <p className={styles.topText}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🏅</div>
          <h3 className={styles.cardTitle}>Quality Product</h3>
          <p className={styles.cardDesc}>
            We are Providing our Customers High Quality Product
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🛵</div>
          <h3 className={styles.cardTitle}>All Over India Delivery</h3>
          <p className={styles.cardDesc}>
            We Are Delivering our products to Our Customer in All over India
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🟢</div>
          <h3 className={styles.cardTitle}>No Added Colours</h3>
          <p className={styles.cardDesc}>
            We Dont Add any preservatives and colors and Oil
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🌿</div>
          <h3 className={styles.cardTitle}>Natural Product</h3>
          <p className={styles.cardDesc}>
            We Make our Products Very Naturally and Healthy
          </p>
        </div>
      </div>
    </section>
  );
}
