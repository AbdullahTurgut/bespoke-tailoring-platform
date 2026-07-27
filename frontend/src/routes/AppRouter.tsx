import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import CreateSuit from "@/pages/CreateSuit";
import Appointment from "@/pages/Appointment";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/create-your-suit" element={<CreateSuit />} />

      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
};

export default AppRouter;
