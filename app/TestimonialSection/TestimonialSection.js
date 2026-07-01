import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "The taste takes me back to my childhood days in Tirunelveli. Simply unmatched!",
    name: "Ramesh, Chennai",
  },
  {
    text: "Authentic, rich and always consistent. Our family's all-time favorite.",
    name: "Lakshmi, Madurai",
  },
  {
    text: "Every bite reflects tradition and quality. Highly recommended!",
    name: "Aravind, Bengaluru",
  },
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>LOVED BY GENERATIONS</h2>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.quote}>“</div>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.name}>- {item.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          <span className={styles.dotActive}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
}