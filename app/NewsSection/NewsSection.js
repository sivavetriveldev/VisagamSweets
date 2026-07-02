import styles from "./NewsSection.module.css";

const newsItems = [
  {
    image: "/nature.png",
    title: "Iruttukadai Halwa Featured in Traditional Foods Expo",
    date: "May 10, 2024",
  },
  {
    image: "/nature.png",
    title: "Celebrating 100+ Years of Sweet Legacy",
    date: "April 20, 2024",
  },
  {
    image: "/nature.png",
    title: "New Store Opening in Chennai",
    date: "March 15, 2024",
  },
];

export default function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>NEWS & EVENTS</h2>

        <div className={styles.grid}>
          {newsItems.map((item, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.date}>{item.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#" className={styles.viewAllBtn}>
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  );
}
