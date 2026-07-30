import { useEffect, useState } from "react";
import { getAppointments } from "@/services/appointmentService";
import type { Appointment } from "@/types/appointment";
import AppointmentTable from "@/components/admin/AppointmentTable";
import DashboardStats from "@/components/admin/DashboardStats";
import AppointmentFilters from "@/components/admin/AppointmentFilters";
import type { AppointmentStatus } from "@/types/appointment";
import AppointmentDetailModal from "@/components/admin/AppointmentDetailModal";
import { updateAppointmentStatus } from "@/services/appointmentService";
import toast from "react-hot-toast";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<AppointmentStatus | "ALL">(
    "ALL",
  );

  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

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

  const handleStatusUpdate = async (id: number, status: AppointmentStatus) => {
    try {
      const updatedAppointment = await updateAppointmentStatus(id, status);

      // Listeyi güncelle
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === id ? updatedAppointment : appointment,
        ),
      );

      // BURASI DÜZELDİ: Güncelleme bittikten sonra modalı tamamen kapatıyoruz
      setSelectedAppointment(null);

      toast.success("Randevu durumu güncellendi");
    } catch (error) {
      toast.error("Durum güncellenirken hata oluştu");
    }
  };

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

      <AppointmentTable
        appointments={filteredAppointments}
        onDetail={setSelectedAppointment}
      />

      <AppointmentDetailModal
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
        onStatusUpdate={handleStatusUpdate}
      />
    </main>
  );
};

export default AdminAppointments;
