import Home from "./Home/Home";
import AboutSection from "./AboutSection/AboutSection";
import ProductsSection from "./Product/ProductsSection";
import SpecialSection from "./SpecialSection/SpecialSection";
import MakingSection from "./MakingSection/MakingSection";
import LegacySection from "./LegacySection/LegacySection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import NewsSection from "./NewsSection/NewsSection";
import FooterSection from "./FooterSection/FooterSection";
export default function HomePage() {
  return (
    <>
    <Home />
    <AboutSection />
    <ProductsSection />
    <SpecialSection />
    <LegacySection />
    <MakingSection />
    <TestimonialSection />
    <NewsSection />
    <FooterSection />
    </>
  );
}
