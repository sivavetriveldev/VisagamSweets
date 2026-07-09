import Home from "./Home/Home";
import AboutSection from "./AboutSection/AboutSection";
import SpecialSection from "./SpecialSection/SpecialSection";
import MakingSection from "./MakingSection/MakingSection";
import LegacySection from "./LegacySection/LegacySection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import NewsSection from "./NewsSection/NewsSection";
import Stip from "./Stip/Stip";
import NewFooter from "./NewFooter/NewFooter";
import styles from "./page.module.css";
export default function HomePage() {
  return (
    <div id="top">
      <Home />
      <AboutSection />
      <SpecialSection />
      <TestimonialSection />
      <LegacySection />
      {/* <MakingSection /> */}

      <NewsSection />
      <Stip />
      <NewFooter />
      <div className={styles.floatingContacts}>
        <a
          href="https://wa.me/919629753355?text=Hello%20Iruttukadai%20Halwa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={styles.floatingContactLink}
        >
          <img
            src="/asset/whatsapp.svg"
            alt=""
            aria-hidden="true"
            className={styles.floatingContactIcon}
          />
        </a>

        <a
          href="tel:+919629753355"
          aria-label="Call Iruttukadai Halwa"
          className={styles.phoneContactLink}
        >
          <img
            src="/asset/phone-call.svg"
            alt=""
            aria-hidden="true"
            className={styles.floatingContactIcon}
          />
        </a>
      </div>
    </div>
  );
}
