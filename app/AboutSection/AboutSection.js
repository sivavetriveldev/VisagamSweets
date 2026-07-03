import styles from "./AboutSection.module.css";

const stats = [
  {
    icon: "/asset/shop.svg",
    title: "100+",
    text: "Years of Legacy",
  },
  {
    icon: "/asset/customers.svg",
    title: "Millions",
    text: "Happy Customers",
  },
  {
    icon: "/asset/trust.svg",
    title: "Generations",
    text: "of Trust & Tradition",
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutCard}>
        <div className={styles.leftImageBox}>
          <img src="/asset/wheat.svg" alt="" aria-hidden="true" className={styles.wheatIcon} />
          <img
            src="/asset/About/Shopimage.webp"
            alt="Heritage Shop"
            className={styles.heritageImage}
          />
        </div>

        <div className={styles.centerContent}>
          <p className={styles.tag}>
            <img
              src="/asset/heading-icon.svg"
              alt=""
              aria-hidden="true"
              className={styles.tagIcon}
            />
            <span>Our Legacy</span>
          </p>
          <h3 className={styles.heading}>
            A Heritage Sweet
            <br />
            Since Generations
          </h3>
          <p className={styles.description}>
            For over a century, our halwa has been part of Tirunelveli&apos;s
            identity. Prepared with the same devotion and traditional methods,
            every batch carries the taste that generations have cherished.
          </p>

          <a href="#" className={styles.storyLink}>
            Know Our Story
          </a>
        </div>

        <div className={styles.rightStats}>
          {stats.map((item) => (
            <div className={styles.statItem} key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" className={styles.statIcon} />
              <div className={styles.statCopy}>
                <div className={styles.statNumber}>{item.title}</div>
                <div className={styles.statText}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
