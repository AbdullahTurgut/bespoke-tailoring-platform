import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppRouter from "@/routes/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <AppRouter />

      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0B0B0B",
            color: "#fff",
            border: "1px solid #C8A45D",
          },
        }}
      />
    </div>
  );
}

export default App;
