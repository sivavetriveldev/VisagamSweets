import Home from "./Home/Home";
import AboutSection from "./AboutSection/AboutSection";
import ProductsSection from "./Product/ProductsSection";
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
      <ProductsSection />
      <SpecialSection />
      <TestimonialSection />
      <LegacySection />
      {/* <MakingSection /> */}

      <NewsSection />
      <Stip />
      <NewFooter />
      <a
        href="https://wa.me/911234567890?text=Hello%20Iruttukadai%20Halwa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          // width: "68px",
          // height: "68px",
          // borderRadius: "18px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          // background: "linear-gradient(180deg, #2ef05f 0%, #1ebc4d 100%)",
          // boxShadow: "0 16px 30px rgba(24, 141, 55, 0.28)",
          // border: "1px solid rgba(255, 255, 255, 0.7)",
          zIndex: 2000,
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
    </div>
  );
}
