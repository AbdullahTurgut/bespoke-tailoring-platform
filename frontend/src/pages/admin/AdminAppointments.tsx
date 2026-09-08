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
import { Search } from "lucide-react";

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
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-[#C8A45D] tracking-[0.3em] uppercase text-sm animate-pulse">
          Randevular Yükleniyor...
        </p>
      </div>
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

      setSelectedAppointment(null);
      toast.success("Randevu durumu güncellendi");
    } catch {
      toast.error("Durum güncellenirken hata oluştu");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-luxury text-white">
          Randevu Yönetimi
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
          Tüm randevuları filtreleyin, detaylarını inceleyin ve süreç durumlarını
          güncelleyin.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="space-y-4">
        <AppointmentFilters
          activeFilter={activeFilter}
          appointments={appointments}
          onFilterChange={(filter) => {
            setActiveFilter(filter);
            setCurrentPage(1);
          }}
        />

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Müşteri adı veya telefon numarası ara..."
            className="
              w-full rounded-xl border border-white/10 bg-white/[0.04]
              pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-gray-500
              outline-none transition focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40
            "
          />
        </div>
      </div>

      {/* Appointment Table */}
      <AppointmentTable
        appointments={paginatedAppointments}
        onDetail={setSelectedAppointment}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Detail Modal */}
      {selectedAppointment && (
        <AppointmentDetailModal
          key={selectedAppointment.id}
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  );
};

export default AdminAppointments;

