import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppRouter from "@/routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <AppRouter />

      <Footer />
    </div>
  );
}

export default App;
