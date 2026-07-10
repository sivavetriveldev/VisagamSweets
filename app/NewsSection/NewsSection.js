"use client";

import { useState } from "react";
import styles from "./NewsSection.module.css";

const newsItems = [
  {
    image: "/asset/news-events/chief-minister.webp",
    title: "A Proud Moment for Iruttukadai Halwa",
    description: "Hon'ble Chief Minister Thiru. M.K. Stalin visited our iconic Iruttukadai Halwa shop",
    fullDescription:
      "Hon'ble Chief Minister Thiru. M.K. Stalin visited our iconic Iruttukadai Halwa shop and appreciated our legendary 124-year-old Tirunelveli Halwa, celebrating its rich heritage and authentic taste.",
    readMore: true,
    date: "May 10, 2024",
  },
  {
    image: "/asset/news-events/news-2.webp",
    title: "Honoring Our Sanitation Heroes  ",
    description: "Iruttukadai Halwa proudly honored Tirunelveli Corporation sanitation workers",
    fullDescription:
      "Iruttukadai Halwa proudly honored Tirunelveli Corporation sanitation workers for their dedicated efforts in restoring cleanliness across the city during challenging times.",
    readMore: true,
    date: "April 20, 2024",
  },
  {
    image: "/asset/news-events/news-3.webp",
    title: "Supporting Flood Relief Efforts",
     description: "Iruttukadai Halwa donated bread and drinking water to people affected by ",
    fullDescription:
      "Iruttukadai Halwa donated bread and drinking water to people affected by the floods. The relief supplies were handed over at the Tirunelveli Corporation Trade Centre.",
    readMore: true,
    date: "March 15, 2024",
  },
];

export default function NewsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
                <span>News & Events</span>
              </p>
              <h2 className={styles.title}>Stay Updated with Our Latest News & Celebrations</h2>
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
                {item.description ? (
                  <p className={styles.description}>
                    <span className={styles.descriptionText}>
                      {expandedIndex === index && item.fullDescription ? item.fullDescription : item.description}
                    </span>
                    {item.readMore ? (
                      <button
                        type="button"
                        className={styles.readMoreBtn}
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      >
                        {expandedIndex === index ? "Read less..." : "Read more..."}
                      </button>
                    ) : null}
                  </p>
                ) : null}
                <p className={styles.date}>{item.date}</p>
              </div>
            </article>
          ))}
        </div>

        <a href="#" className={styles.mobileViewAllBtn}>
          View All
        </a>
      </div>
    </section>
  );
}
