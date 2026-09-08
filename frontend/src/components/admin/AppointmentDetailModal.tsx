import type { Appointment, AppointmentStatus } from "@/types/appointment";
import { useState, useEffect } from "react";
import StatusDropdown from "./StatusDropdown";
import StatusBadge from "./StatusBadge";
import { fabricNames, lapelNames, buttonNames } from "@/constants/suitOptions";
import { X } from "lucide-react";

type Props = {
  appointment: Appointment | null;
  onClose: () => void;
  onStatusUpdate: (id: number, status: AppointmentStatus) => void;
};

export default function AppointmentDetailModal({
  appointment,
  onClose,
  onStatusUpdate,
}: Props) {
  const [status, setStatus] = useState<AppointmentStatus>(
    appointment?.status ?? "PENDING",
  );

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!appointment) return null;

  const displayFabric =
    (appointment.fabric &&
      fabricNames[appointment.fabric as keyof typeof fabricNames]) ||
    appointment.fabric ||
    "Genel Randevu";

  const displayLapel =
    (appointment.lapel &&
      lapelNames[appointment.lapel as keyof typeof lapelNames]) ||
    appointment.lapel ||
    "Belirtilmedi";

  const displayButton =
    (appointment.button &&
      buttonNames[appointment.button as keyof typeof buttonNames]) ||
    appointment.button ||
    "Belirtilmedi";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-appointment-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="
          w-full max-w-xl max-h-[90vh] overflow-y-auto
          border border-white/10 bg-[#0B0B0B] p-5 sm:p-7 md:p-8
          rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A45D]">
              Randevu #{appointment.id}
            </span>
            <h2
              id="modal-appointment-title"
              className="text-2xl sm:text-3xl font-luxury text-white"
            >
              Randevu Detayı
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Pencereyi Kapat"
            className="
              p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10
              transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
            "
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-5">
          {/* Customer info */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Müşteri
            </p>
            <p className="mt-1 text-base sm:text-lg font-medium text-white">
              {appointment.customerName}
            </p>
          </div>

          {/* Contact info */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-1">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              İletişim Bilgileri
            </p>
            <p className="text-sm sm:text-base text-gray-200 break-all">
              <span className="text-gray-500 mr-2 text-xs">E-posta:</span>
              {appointment.email}
            </p>
            <p className="text-sm sm:text-base text-gray-200">
              <span className="text-gray-500 mr-2 text-xs">Telefon:</span>
              {appointment.phone}
            </p>
          </div>

          {/* Suit specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <p className="text-[11px] uppercase tracking-wider text-gray-500">
                Kumaş
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium text-white truncate">
                {displayFabric}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <p className="text-[11px] uppercase tracking-wider text-gray-500">
                Yaka
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium text-white truncate">
                {displayLapel}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <p className="text-[11px] uppercase tracking-wider text-gray-500">
                Düğme
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium text-white truncate">
                {displayButton}
              </p>
            </div>
          </div>

          {/* Customer Message if present */}
          {appointment.message && (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Özel Talep & Not
              </p>
              <p className="mt-1.5 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
                {appointment.message}
              </p>
            </div>
          )}

          {/* Status & Update */}
          <div className="border-t border-white/10 pt-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Mevcut Durum
              </p>
              <StatusBadge status={appointment.status} />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <StatusDropdown value={status} onChange={setStatus} />

              <button
                type="button"
                disabled={status === appointment.status}
                onClick={() => {
                  onStatusUpdate(appointment.id, status);
                }}
                className="
                  rounded-xl font-medium tracking-wider px-6 py-3 uppercase text-xs sm:text-sm
                  bg-[#C8A45D] text-black hover:bg-white transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
                  disabled:bg-white/10 disabled:text-gray-500 disabled:hover:bg-white/10 disabled:cursor-not-allowed
                "
              >
                Durumu Güncelle
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="border-t border-white/10 pt-4 flex items-baseline justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Tahmini Fiyat
              </p>
              <p className="mt-1 text-2xl sm:text-3xl text-[#C8A45D] font-luxury tabular-nums">
                {appointment.price != null
                  ? `${appointment.price.toLocaleString("tr-TR")} ₺`
                  : "Randevuda Belirlenecek"}
              </p>
            </div>

            <p className="text-xs text-gray-500">
              Tarih: {new Date(appointment.createdAt).toLocaleDateString("tr-TR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
