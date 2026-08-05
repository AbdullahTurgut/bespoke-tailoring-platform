import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import CreateSuit from "@/pages/CreateSuit";
import Appointment from "@/pages/Appointment";
import AdminAppointments from "@/pages/admin/AdminAppointments";
import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import PublicLayout from "@/components/layout/PublicLayout";
import ProtectedRoute from "@/auth/ProtectedRoute";
import AdminLogin from "@/pages/admin/AdminLogin";

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/create-your-suit" element={<CreateSuit />} />

        <Route path="/appointment" element={<Appointment />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      {/* ADMIN */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="appointments" element={<AdminAppointments />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
