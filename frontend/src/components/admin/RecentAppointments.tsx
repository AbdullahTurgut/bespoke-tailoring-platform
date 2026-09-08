import type { Appointment } from "@/types/appointment";
import StatusBadge from "./StatusBadge";
import { fabricNames, lapelNames } from "@/constants/suitOptions";

type Props = {
  appointments: Appointment[];
};

export default function RecentAppointments({ appointments }: Props) {
  const recentAppointments = [...appointments]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-luxury text-white">
          Son Randevular
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          Son oluşturulan müşteri talepleri
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {recentAppointments.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-500">
            Henüz randevu bulunmuyor.
          </p>
        ) : (
          recentAppointments.map((appointment) => {
            const fabricDisplay = appointment.fabric
              ? fabricNames[
                  appointment.fabric as keyof typeof fabricNames
                ] || appointment.fabric
              : null;
            const lapelDisplay = appointment.lapel
              ? lapelNames[
                  appointment.lapel as keyof typeof lapelNames
                ] || appointment.lapel
              : null;

            const subText =
              fabricDisplay && lapelDisplay
                ? `${fabricDisplay} • ${lapelDisplay}`
                : fabricDisplay || "Genel Randevu";

            return (
              <div
                key={appointment.id}
                className="
                  flex items-center justify-between gap-3
                  rounded-xl border border-white/10 bg-black/20
                  p-3.5 sm:p-4 hover:bg-white/[0.02] transition-colors
                "
              >
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-medium text-white truncate">
                    {appointment.customerName}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-gray-400 truncate">
                    {subText}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <StatusBadge status={appointment.status} />

                  <p className="mt-1.5 text-xs text-gray-500 tabular-nums">
                    {new Date(appointment.createdAt).toLocaleDateString("tr-TR")}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

