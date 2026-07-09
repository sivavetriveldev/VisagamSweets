import Home from "./Home/Home";
import AboutSection from "./AboutSection/AboutSection";
import SpecialSection from "./SpecialSection/SpecialSection";
import MakingSection from "./MakingSection/MakingSection";
import LegacySection from "./LegacySection/LegacySection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import NewsSection from "./NewsSection/NewsSection";
import Stip from "./Stip/Stip";
import NewFooter from "./NewFooter/NewFooter";
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
      <div
        style={{
          position: "fixed",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 2000,
        }}
      >
        <a
          href="https://wa.me/919629753355?text=Hello%20Iruttukadai%20Halwa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/asset/whatsapp.svg"
            alt=""
            aria-hidden="true"
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>

        <a
          href="tel:+919629753355"
          aria-label="Call Iruttukadai Halwa"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/asset/phone-call.svg"
            alt=""
            aria-hidden="true"
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>
      </div>
    </div>
  );
}
