"use client";

import styles from "./YouTubeSection.module.css";

export default function YouTubeSection() {
  return (
    <section id="youtube" className={styles.youtubeSection}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHeader}>
          <p className={styles.tag}>
            <img src="/asset/heading-icon.svg" alt="" aria-hidden="true" className={styles.tagIcon} />
            <span>Video</span>
          </p>
          <h2 className={styles.title}>A Journey of Authentic Flavours</h2>
          <p className={styles.subtitle}>
           Take a closer look at the passion and tradition behind every sweet and savoury.
          </p>
        </div>

        <div className={styles.videoShell}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/8foAeBTAR68"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
