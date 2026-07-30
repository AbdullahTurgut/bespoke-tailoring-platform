import { useEffect, useState } from "react";
import { getAppointments } from "@/services/appointmentService";
import type { Appointment } from "@/types/appointment";
import AppointmentTable from "@/components/admin/AppointmentTable";
import DashboardStats from "@/components/admin/DashboardStats";
import AppointmentFilters from "@/components/admin/AppointmentFilters";
import type { AppointmentStatus } from "@/types/appointment";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<AppointmentStatus | "ALL">(
    "ALL",
  );
  const filteredAppointments =
    activeFilter === "ALL"
      ? appointments
      : appointments.filter(
          (appointment) => appointment.status === activeFilter,
        );
  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <p
          className="
        text-[#C8A45D]
        tracking-[0.3em]
        uppercase
        "
        >
          Randevular Yükleniyor...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-10">
      <div className="mb-10 text-center">
        <h1
          className="
    text-5xl
    font-luxury
    "
        >
          Randevu Yönetimi
        </h1>

        <p
          className="
    mt-4
    max-w-2xl
    mx-auto
    text-gray-400
    leading-relaxed
    "
        >
          Oluşturulan randevuları görüntüleyin, durumlarını güncelleyin ve
          müşteri taleplerini tek panel üzerinden yönetin.
        </p>
      </div>

      <DashboardStats appointments={appointments} />

      <AppointmentFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <AppointmentTable appointments={filteredAppointments} />
    </main>
  );
};

export default AdminAppointments;
