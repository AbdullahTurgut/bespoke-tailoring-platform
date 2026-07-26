import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <Home />
    </div>
  );
}

export default App;
