import { useState } from "react";
import type { Appointment } from "@/types/appointment";
import useAppointments from "@/hooks/useAppointments";
import AppointmentTable from "@/components/admin/AppointmentTable";
import AppointmentFilters from "@/components/admin/AppointmentFilters";
import type { AppointmentStatus } from "@/types/appointment";
import AppointmentDetailModal from "@/components/admin/AppointmentDetailModal";
import { updateAppointmentStatus } from "@/services/appointmentService";
import toast from "react-hot-toast";
import Pagination from "@/components/admin/Pagination";

const AdminAppointments = () => {
  const { appointments, setAppointments, loading } = useAppointments();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const [activeFilter, setActiveFilter] = useState<AppointmentStatus | "ALL">(
    "ALL",
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesStatus =
      activeFilter === "ALL" || appointment.status === activeFilter;

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      appointment.customerName.toLowerCase().includes(search) ||
      appointment.phone.includes(search);

    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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
    <main
      className="min-h-screen
bg-[#0B0B0B]
text-white
p-10"
    >
      <div
        className="mb-10 text-center max-w-7xl
mx-auto"
      >
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
          Randevuları görüntüleyin ve durumlarını yönetin.
        </p>
      </div>

      <div className="mb-8 space-y-5">
        <AppointmentFilters
          activeFilter={activeFilter}
          appointments={appointments}
          onFilterChange={(filter) => {
            setActiveFilter(filter);
            setCurrentPage(1);
          }}
        />

        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Müşteri adı veya telefon ara..."
            className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-5
      py-4
      text-white
      placeholder:text-gray-500
      outline-none
      transition
      focus:border-[#C8A45D]
      "
          />
        </div>
      </div>

      <AppointmentTable
        appointments={paginatedAppointments}
        onDetail={setSelectedAppointment}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
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
