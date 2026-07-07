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
    <section id="news" className={styles.newsSection}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerTopRow}>
            <div className={styles.headerText}>
              <p className={styles.tag}>
                <img
                  src="/asset/heading-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className={styles.tagIcon}
                />
                <span>Latest Updates</span>
              </p>
              <h2 className={styles.title}>News & Events</h2>
              <p className={styles.subtitle}>
                Stories, announcements, and moments from our sweet journey.
              </p>
            </div>

            <a href="#" className={styles.viewAllBtn}>
              View All
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {newsItems.map((item, index) => (
            <article
              className={styles.card}
              key={index}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay={index * 180}
              data-aos-duration={700 + index * 120}
              data-aos-offset="0"
            >
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

      </div>
    </section>
  );
}
