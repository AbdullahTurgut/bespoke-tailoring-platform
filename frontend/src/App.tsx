import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import Home from "@/pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <HeroSection />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
