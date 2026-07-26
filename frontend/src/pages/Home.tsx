import Hero from "../components/home/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections";
import WhyUs from "../components/home/WhyUs";
import Reviews from "../components/home/Reviews";

const Home = () => {
  return (
    <main>
      <Hero />

      <FeaturedCollections />

      <WhyUs />

      <Reviews />
    </main>
  );
};

export default Home;
