import type { Appointment } from "@/types/appointment";
import StatusBadge from "./StatusBadge";
import { fabricNames } from "@/constants/suitOptions";

type Props = {
  appointments: Appointment[];
  onDetail: (appointment: Appointment) => void;
};

export default function AppointmentTable({ appointments, onDetail }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden shadow-xl">
      <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl sm:text-2xl font-luxury text-white">
          Randevu Listesi
        </h2>
        <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full tabular-nums">
          Toplam {appointments.length} randevu
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left border-collapse">
          <thead className="border-b border-white/10 bg-black/20">
            <tr className="text-xs uppercase tracking-wider text-gray-400">
              <th className="px-5 sm:px-6 py-4">Müşteri</th>
              <th className="px-5 sm:px-6 py-4">Telefon</th>
              <th className="px-5 sm:px-6 py-4">Kumaş</th>
              <th className="px-5 sm:px-6 py-4">Fiyat</th>
              <th className="px-5 sm:px-6 py-4">Durum</th>
              <th className="px-5 sm:px-6 py-4">Tarih</th>
              <th className="px-5 sm:px-6 py-4 text-right">İşlem</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {appointments.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-sm text-gray-500"
                >
                  Kriterlere uygun randevu kaydı bulunamadı.
                </td>
              </tr>
            ) : (
              appointments.map((appointment) => {
                const fabricDisplay = appointment.fabric
                  ? fabricNames[
                      appointment.fabric as keyof typeof fabricNames
                    ] || appointment.fabric
                  : "Genel Randevu";

                return (
                  <tr
                    key={appointment.id}
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="px-5 sm:px-6 py-4 font-medium text-white">
                      {appointment.customerName}
                    </td>

                    <td className="px-5 sm:px-6 py-4 text-sm text-gray-400">
                      {appointment.phone}
                    </td>

                    <td className="px-5 sm:px-6 py-4 text-sm text-gray-300">
                      <span className="truncate max-w-[160px] inline-block">
                        {fabricDisplay}
                      </span>
                    </td>

                    <td className="px-5 sm:px-6 py-4 text-sm font-luxury text-[#C8A45D] tabular-nums font-semibold">
                      {appointment.price != null
                        ? `${appointment.price.toLocaleString("tr-TR")} ₺`
                        : "Belirlenecek"}
                    </td>

                    <td className="px-5 sm:px-6 py-4">
                      <StatusBadge status={appointment.status} />
                    </td>

                    <td className="px-5 sm:px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                      {formatDate(appointment.createdAt)}
                    </td>

                    <td className="px-5 sm:px-6 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => onDetail(appointment)}
                        className="
                          rounded-full border border-[#C8A45D]/70 px-4 py-1.5
                          text-xs uppercase tracking-wider text-[#C8A45D]
                          transition-all duration-200
                          hover:bg-[#C8A45D] hover:text-black
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
                        "
                      >
                        Görüntüle
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

