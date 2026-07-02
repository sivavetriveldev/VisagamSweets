import styles from "./SpecialSection.module.css";

const features = [
  { icon: "/asset/plate.svg", title: "Traditional Recipe" },
  { icon: "/asset/ghee.svg", title: "Pure Ghee" },
  { icon: "/asset/wheat-icon.svg", title: "Premium Ingredients" },
  { icon: "/asset/cook.svg", title: "Slow Cooked" },
  { icon: "/asset/fresh.svg", title: "Freshly Prepared" },
  { icon: "/asset/Trust-customer.svg", title: "Trusted for Generations" },
];

export default function SpecialSection() {
  return (
    <section className={styles.specialSection}>
      <div className={styles.topBand}>
        <h2 className={styles.bandTitle}>WHY OUR HALWA IS SPECIAL</h2>

        <div className={styles.topGrid}>
          {features.map((item, index) => (
            <div className={styles.topItem} key={index}>
              <div className={styles.topIcon}>
                <img src={item.icon} alt="" aria-hidden="true" className={styles.topIconImg} />
              </div>
              <p className={styles.topText}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

        {/* <div className={styles.bottomGrid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/asset/quality.svg" alt="" aria-hidden="true" className={styles.cardIconImg} />
          </div>
          <h3 className={styles.cardTitle}>Quality Product</h3>
          <p className={styles.cardDesc}>
            We are Providing our Customers High Quality Product
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/asset/delivery.svg" alt="" aria-hidden="true" className={styles.cardIconImg} />
          </div>
          <h3 className={styles.cardTitle}>All Over India Delivery</h3>
          <p className={styles.cardDesc}>
            We Are Delivering our products to Our Customer in All over India
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/asset/no-added-color.svg" alt="" aria-hidden="true" className={styles.cardIconImg} />
          </div>
          <h3 className={styles.cardTitle}>No Added Colours</h3>
          <p className={styles.cardDesc}>
            We Dont Add any preservatives and colors and Oil
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/asset/natural-product.svg" alt="" aria-hidden="true" className={styles.cardIconImg} />
          </div>
          <h3 className={styles.cardTitle}>Natural Product</h3>
          <p className={styles.cardDesc}>
            We Make our Products Very Naturally and Healthy
          </p>
        </div>
      </div> */}
    </section>
  );
}
