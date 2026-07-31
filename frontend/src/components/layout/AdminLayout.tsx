import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <AdminSidebar />

      <main className="flex-1">
        <AdminHeader />

        <div className="p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
