import { useEffect, useState } from "react";
import { getAppointments } from "@/services/appointmentService";
import type { Appointment } from "@/types/appointment";
import AppointmentTable from "@/components/admin/AppointmentTable";
import DashboardStats from "@/components/admin/DashboardStats";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

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
      <h1 className="text-4xl font-luxury mb-10">Randevu Yönetimi</h1>

      <DashboardStats appointments={appointments} />

      <AppointmentTable appointments={appointments} />
    </main>
  );
};

export default AdminAppointments;
