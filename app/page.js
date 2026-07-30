import NewHome from "./NewHome/NewHome";
import SweetsSavoriesSection from "./SweetsSavoriesSection/SweetsSavoriesSection";
import AboutSection from "./AboutSection/AboutSection";
import ProductsSection from "./Product/ProductsSection";
import SpecialSection from "./SpecialSection/SpecialSection";
import LegacySection from "./LegacySection/LegacySection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import YouTubeSection from "./YouTubeSection/YouTubeSection";
import Stip from "./Stip/Stip";
import NewFooter from "./NewFooter/NewFooter";
import styles from "./page.module.css";
export default function HomePage() {
  return (
    <div id="top">
      <NewHome />
      <SweetsSavoriesSection />
      <AboutSection />
      <ProductsSection />
      <SpecialSection />
      <TestimonialSection />
      <LegacySection />
      {/* <MakingSection /> */}

      <YouTubeSection />
      <Stip />
      <NewFooter />
      <div className={styles.floatingContacts}>
        {/* <a
          href="#order-online"
          aria-label="Order online"
          className={styles.orderGifLink}
        >
          <img
            src="/asset/order-now.gif"
            alt=""
            aria-hidden="true"
            className={styles.orderGif}
          />
        </a> */}

        <a
          href="https://wa.me/919629753355?text=Hello%20Iruttukadai%20Halwa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`${styles.floatingContactLink} ${styles.whatsappContactLink}`}
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
