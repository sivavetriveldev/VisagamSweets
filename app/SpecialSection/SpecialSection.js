import styles from "./SpecialSection.module.css";

const leftFeatures = [
  {
    icon: "/asset/plate.svg",
    title: "Traditional Recipe",
    subtitle: ["Passed down through generations", "with the same authentic taste", "and timeless home-style care."],
  },
  {
    icon: "/asset/ghee.svg",
    title: "Pure Ghee",
    subtitle: ["Made with rich pure ghee", "for a deep aromatic flavor", "and a smooth melt-in-mouth finish."],
  },
  {
    icon: "/asset/wheat-icon.svg",
    title: "Premium Ingredients",
    subtitle: ["Carefully chosen premium ingredients", "combined fresh for every batch", "to keep quality at its best."],
  },
];

const rightFeatures = [
  {
    icon: "/asset/cook.svg",
    title: "Slow Cooked",
    subtitle: ["Slow cooked with patience", "to build the perfect texture", "and a rich traditional finish."],
  },
  {
    icon: "/asset/freshly-prepared.svg",
    title: "Freshly Prepared",
    subtitle: ["Prepared fresh in small batches", "so every serving stays bright", "soft, and full of flavor."],
  },
  {
    icon: "/asset/Trust-customer.svg",
    title: "Trusted for Generations",
    subtitle: ["Loved by families for years", "trusted across generations", "with the same consistent taste."],
  },
];

function FeatureList({ items, align }) {
  return (
    <div className={`${styles.featureColumn} ${styles[align]}`}>
      {items.map((item) => (
        <div className={styles.featureItem} key={item.title}>
          <div className={styles.featureIcon}>
            <img src={item.icon} alt="" aria-hidden="true" className={styles.featureIconImg} />
          </div>
          <div className={styles.featureCopy}>
            <div className={styles.featureText}>{item.title}</div>
            <div className={styles.featureSubText}>
              {item.subtitle.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SpecialSection() {
  return (
    <section className={styles.specialSection}>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <p className={styles.tag}>
          
            <span>Our Speciality</span>
          </p>
          <h2 className={styles.sectionTitle}>Crafted With Tradition And Care</h2>
          <p className={styles.sectionSubtitle}>
            Every batch is prepared with the same authentic process, premium
            ingredients, and patient cooking that define our heritage.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <FeatureList items={leftFeatures} align="left" />
        </div>

        <div className={styles.centerWrap}>
          <img
            src="/asset/OurLegacy/Human.svg"
            alt="Our Legacy"
            className={styles.centerImage}
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1100"
          data-aos-easing="ease-out-cubic"
        >
          <FeatureList items={rightFeatures} align="right" />
        </div>
      </div>
    </section>
  );
}
