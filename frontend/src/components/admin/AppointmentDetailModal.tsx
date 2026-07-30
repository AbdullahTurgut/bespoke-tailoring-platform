import type { Appointment, AppointmentStatus } from "@/types/appointment";
import { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import StatusBadge from "./StatusBadge";

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
  const [status, setStatus] = useState<AppointmentStatus>("PENDING");

  useEffect(() => {
    if (!appointment) return;

    setStatus(appointment.status);
  }, [appointment]);

  if (!appointment) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-sm
      px-6
      "
      onClick={onClose}
    >
      <div
        className="
        w-full
max-w-xl
border
border-white/10
bg-[#0B0B0B]
p-8
rounded-2xl
shadow-2xl
animate-in
fade-in
zoom-in-95
duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="
          flex
          items-center
          justify-between
          mb-8
          "
        >
          <h2
            className="
            text-3xl
            font-luxury
            "
          >
            Randevu Detayı
          </h2>

          <button
            onClick={onClose}
            className="
            text-gray-400
            hover:text-white
            "
          >
            ✕
          </button>
        </div>

        <div className="space-y-5">
          <div
            className="
  rounded-xl
  border
  border-white/10
  bg-white/5
  p-4
  "
          >
            <p
              className="
    text-xs
    uppercase
    tracking-widest
    text-gray-500
    "
            >
              Müşteri
            </p>

            <p className="mt-2 text-lg">{appointment.customerName}</p>
          </div>
          <div
            className="
  rounded-xl
  border
  border-white/10
  bg-white/5
  p-4
  "
          >
            <p
              className="
    text-xs
    uppercase
    tracking-widest
    text-gray-500
    "
            >
              İletişim
            </p>

            <p className="mt-2 text-lg">{appointment.email}</p>
            <p className="mt-2 text-lg">{appointment.phone}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div
              className="
  rounded-xl
  border
  border-white/10
  bg-white/5
  p-4
  "
            >
              <p
                className="
    text-xs
    uppercase
    tracking-widest
    text-gray-500
    "
              >
                Kumaş
              </p>

              <p className="mt-2 text-lg">{appointment.fabric}</p>
            </div>
            <div
              className="
  rounded-xl
  border
  border-white/10
  bg-white/5
  p-4
  "
            >
              <p
                className="
    text-xs
    uppercase
    tracking-widest
    text-gray-500
    "
              >
                Yaka
              </p>

              <p className="mt-2 text-lg">{appointment.lapel}</p>
            </div>
            <div
              className="
  rounded-xl
  border
  border-white/10
  bg-white/5
  p-4
  "
            >
              <p
                className="
    text-xs
    uppercase
    tracking-widest
    text-gray-500
    "
              >
                Düğme
              </p>

              <p className="mt-2 text-lg">{appointment.button}</p>
            </div>
          </div>
          <div
            className="
  border-t
  border-white/10
  pt-6
  "
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className="
      text-xs
      uppercase
      tracking-widest
      text-gray-500
      "
              >
                Mevcut Durum
              </p>

              <StatusBadge status={appointment.status} />
            </div>

            <div
              className="
    flex
    gap-4
    "
            >
              <StatusDropdown value={status} onChange={setStatus} />

              <button
                disabled={status === appointment.status}
                onClick={() => {
                  onStatusUpdate(appointment.id, status);
                }}
                className="
 rounded-full
font-medium
tracking-widest
px-6
uppercase
text-sm

bg-[#C8A45D]
text-black

hover:bg-white
transition

disabled:bg-white/10
disabled:text-gray-500
disabled:border
disabled:border-white/10
disabled:hover:bg-white/10
disabled:cursor-not-allowed
  "
              >
                Güncelle
              </button>
            </div>
          </div>
          <div
            className="
            border-t
            border-white/10
            pt-5
            "
          >
            <p className="text-xs text-gray-500">Tahmini Fiyat</p>

            <p
              className="
              mt-2
              text-3xl
              text-[#C8A45D]
              font-luxury
              "
            >
              {appointment.price} ₺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
