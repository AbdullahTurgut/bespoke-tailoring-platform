import Hero from "../components/home/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections";
import WhyUs from "../components/home/WhyUs";
import Reviews from "../components/home/Reviews";
import AtelierGallery from "../components/home/AtelierGallery";
import SignatureCTA from "@/components/home/SignatureCTA";
import SEO from "@/components/seo/SEO";
const Home = () => {
  return (
    <>
      <SEO
        title="Terzi Murat | Kişiye Özel Damatlık ve Nişan Takımları"
        description="Özel dikim damatlık ve nişan takımları için premium terzilik deneyimi."
      />
      <main>
        <Hero />

        <FeaturedCollections />

        <WhyUs />

        <Reviews />

        <AtelierGallery />

        <SignatureCTA />
      </main>
    </>
  );
};

export default Home;
