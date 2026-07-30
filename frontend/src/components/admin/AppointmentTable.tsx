import type { Appointment } from "@/types/appointment";
import StatusBadge from "./StatusBadge";

type Props = {
  appointments: Appointment[];
  onDetail: (appointment: Appointment) => void;
};

export default function AppointmentTable({ appointments, onDetail }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
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
      <div className="mb-6">
        <h2
          className="
    text-2xl
    font-luxury
    text-center
  "
        >
          Randevu Listesi
        </h2>
      </div>
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
          {appointments.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="
 py-10
 text-center
 text-gray-500
 "
              >
                Henüz randevu bulunmuyor.
              </td>
            </tr>
          ) : (
            appointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="
              border-b
 border-white/10
 hover:bg-white/5
 cursor-pointer
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
                  {formatDate(appointment.createdAt)}
                </td>

                <td className="px-6 py-5">
                  <button
                    onClick={() => onDetail(appointment)}
                    className="
                 rounded-full
 border
 border-[#C8A45D]
 px-5
 py-2
 text-xs
 uppercase
 tracking-widest
 text-[#C8A45D]
 transition
 hover:bg-[#C8A45D]
 hover:text-black
                  "
                  >
                    Görüntüle
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
