import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "The taste is simply unforgettable. It takes me back to my childhood memories in Tirunelveli.",
    name: "Ramesh, Chennai",
  },
  {
    text: "The perfect blend of ghee and sweetness. Truly authentic and traditional.",
    name: "Meenakshi, Madurai",
  },
  {
    text: "We order every festival. Quality and taste are always consistent.",
    name: "Arvind, Coimbatore",
  },
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>TESTIMONIALS - LOVED BY GENERATIONS</h2>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article className={styles.card} key={item.name}>
              <div className={styles.quote}>“</div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.name}>- {item.name}</p>
            </article>
          ))}
        </div>

        <div className={styles.dots} aria-hidden="true">
          <span className={styles.dotActive} />
          <span className={styles.dot} />
        </div>
      </div>
    </section>
  );
}
