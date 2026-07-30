"use client";

import styles from "./SweetsSavoriesSection.module.css";

export default function SweetsSavoriesSection() {
  return (
    <section id="sweets-savories" className={styles.section}>
      <section className={styles.block}>
        <a
          href="#sweets"
          className={styles.link}
          aria-label="Go to sweets products"
        >
          <img
            src="/asset/NewSection/Sweets.webp"
            alt="Sweets"
            className={styles.image}
          />
        </a>
      </section>

      <section className={styles.block}>
        <a
          href="#savories"
          className={styles.link}
          aria-label="Go to savories products"
        >
          <img
            src="/asset/NewSection/Saveries.webp"
            alt="Savories"
            className={styles.image}
          />
        </a>
      </section>
    </section>
  );
}
