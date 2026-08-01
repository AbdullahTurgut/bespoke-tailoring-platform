import Hero from "../components/home/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections";
import WhyUs from "../components/home/WhyUs";
import Reviews from "../components/home/Reviews";
import AtelierGallery from "../components/home/AtelierGallery";
import SignatureCTA from "@/components/home/SignatureCTA";

const Home = () => {
  return (
    <main>
      <Hero />

      <FeaturedCollections />

      <WhyUs />

      <Reviews />

      <AtelierGallery />

      <SignatureCTA />
    </main>
  );
};

export default Home;
