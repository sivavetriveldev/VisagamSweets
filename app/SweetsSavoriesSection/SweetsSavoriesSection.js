"use client";

import styles from "./SweetsSavoriesSection.module.css";

export default function SweetsSavoriesSection() {
  return (
    <section id="sweets-savories" className={styles.section}>
      <section className={styles.block}>
        <img
          src="/asset/NewSection/Sweets.webp"
          alt="Sweets"
          className={styles.image}
        />
      </section>

      <section className={styles.block}>
        <img
          src="/asset/NewSection/Saveries.webp"
          alt="Savories"
          className={styles.image}
        />
      </section>
    </section>
  );
}
