import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import CreateSuit from "@/pages/CreateSuit";
import Appointment from "@/pages/Appointment";
import AdminAppointments from "@/pages/admin/AdminAppointments";
import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/create-your-suit" element={<CreateSuit />} />

      <Route path="/appointment" element={<Appointment />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="appointments" element={<AdminAppointments />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
