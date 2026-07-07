"use client";

import styles from "./Stip.module.css";

const features = [
  {
    icon: "/asset/shop.svg",
    title: "Personalized shop",
  },
  {
    icon: "/asset/cart.svg",
    title: "Card payments",
  },
  {
    icon: "/asset/delivery.svg",
    title: "Worldwide shipping",
  },
  {
    icon: "/asset/served.svg",
    title: "Special taste",
  },
];

export default function Stip() {
  return (
    <section className={styles.section} aria-label="Store features">
      <div className={styles.grid}>
        {features.map((feature) => (
          <div className={styles.card} key={feature.title}>
            <img src={feature.icon} alt="" aria-hidden="true" className={styles.icon} />
            <div className={styles.title}>{feature.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
