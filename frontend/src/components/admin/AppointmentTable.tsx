import type { Appointment } from "@/types/appointment";
import StatusBadge from "./StatusBadge";

type Props = {
  appointments: Appointment[];
};

export default function AppointmentTable({ appointments }: Props) {
  return (
    <div
      className="
      overflow-x-auto
      rounded-xl
      border
      border-white/10
      bg-white/5
      "
    >
      <h2
        className="
        text-center
 text-2xl
 font-luxury
 mb-6
 "
      >
        Randevu Listesi
      </h2>
      <table className="min-w-full">
        <thead className="border-b border-white/10">
          <tr className="text-left text-xs uppercase tracking-[0.2em] text-gray-500">
            <th className="px-6 py-5">Müşteri</th>
            <th className="px-6 py-5">Telefon</th>
            <th className="px-6 py-5">Kumaş</th>
            <th className="px-6 py-5">Fiyat</th>
            <th className="px-6 py-5">Durum</th>
            <th className="px-6 py-5">Tarih</th>
            <th className="px-6 py-5">İşlem</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr
              key={appointment.id}
              className="
              border-b
              border-white/10
              hover:bg-white/5
              transition
              "
            >
              <td className="px-6 py-5 font-medium">
                {appointment.customerName}
              </td>

              <td className="px-6 py-5 text-gray-400">{appointment.phone}</td>

              <td className="px-6 py-5 capitalize">{appointment.fabric}</td>

              <td className="px-6 py-5">{appointment.price} TL</td>

              <td className="px-6 py-5">
                <StatusBadge status={appointment.status} />
              </td>

              <td className="px-6 py-5 text-gray-400">
                {new Date(appointment.createdAt).toLocaleDateString("tr-TR")}
              </td>

              <td className="px-6 py-5">
                <button
                  className="
                  rounded
                  border
                  border-[#C8A45D]
                  px-4
                  py-2
                  text-sm
                  text-[#C8A45D]
                  transition
                  hover:bg-[#C8A45D]
                  hover:text-black
                  "
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
