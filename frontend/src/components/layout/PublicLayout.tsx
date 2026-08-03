import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "../shared/PageTransition";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <PageTransition>
        <Outlet />
      </PageTransition>

      <Footer />
    </div>
  );
}
