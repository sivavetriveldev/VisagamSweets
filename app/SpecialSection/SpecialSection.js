import styles from "./SpecialSection.module.css";

const leftFeatures = [
  {
    icon: "/asset/plate.svg",
    title: "Traditional Recipes",
    subtitle: [
      "Authentic recipes crafted",
      "with traditional methods",
      "for timeless taste."
    ],
  },
  {
    icon: "/asset/ghee.svg",
    title: "Premium Quality",
    subtitle: [
      "Finest ingredients selected",
      "to deliver rich flavour",
      "in every bite."
    ],
  },
  {
    icon: "/asset/wheat-icon.svg",
    title: "Fresh Ingredients",
    subtitle: [
      "Prepared using fresh",
      "carefully sourced ingredients",
      "every single day."
    ],
  },
];

const rightFeatures = [
  {
    icon: "/asset/cook.svg",
    title: "Expertly Crafted",
    subtitle: [
      "Prepared with passion",
      "by experienced sweet makers",
      "for authentic quality."
    ],
  },
  {
    icon: "/asset/freshly-prepared.svg",
    title: "Freshly Made",
    subtitle: [
      "Every order is prepared",
      "fresh to preserve",
      "taste and freshness."
    ],
  },
  {
    icon: "/asset/Trust-customer.svg",
    title: "Loved by Families",
    subtitle: [
      "Trusted by customers",
      "for delicious sweets",
      "and crispy savouries."
    ],
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
          <h2 className={styles.sectionTitle}>  What Makes Visakam Sweets Special</h2>
          <p className={styles.sectionSubtitle}>
  From traditional sweets to crispy savouries, every product is prepared with
  premium ingredients, authentic recipes, and the same dedication to quality
  that has delighted our customers for years.
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
