import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "../shared/PageTransition";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>

      <Footer />
    </div>
  );
}
