import AppRouter from "@/routes/AppRouter";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <AppRouter />
      <ScrollToTopButton />
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
