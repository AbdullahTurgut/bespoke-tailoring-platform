import Hero from "../components/home/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections";
import WhyUs from "../components/home/WhyUs";
import Reviews from "../components/home/Reviews";
import InstagramGallery from "../components/home/InstagramGallery";
import SignatureCTA from "@/components/home/SignatureCTA";

const Home = () => {
  return (
    <main>
      <Hero />

      <FeaturedCollections />

      <WhyUs />

      <Reviews />

      <InstagramGallery />

      <SignatureCTA />
    </main>
  );
};

export default Home;
