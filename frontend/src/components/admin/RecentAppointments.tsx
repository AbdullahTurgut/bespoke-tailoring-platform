import type { Appointment } from "@/types/appointment";
import StatusBadge from "./StatusBadge";

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
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/4
      p-6
      "
    >
      <div className="mb-6">
        <h2
          className="
          text-2xl
          font-luxury
          "
        >
          Son Randevular
        </h2>
        <p
          className="
          mt-2
          text-sm
          text-gray-500
          "
        >
          Son oluşturulan müşteri talepleri
        </p>
      </div>

      <div className="space-y-4">
        {recentAppointments.length === 0 ? (
          <p
            className="
            py-8
            text-center
            text-gray-500
            "
          >
            Henüz randevu bulunmuyor.
          </p>
        ) : (
          recentAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-white/10
              bg-black/20
              p-4
              "
            >
              <div>
                <p
                  className="
                  text-lg
                  "
                >
                  {appointment.customerName}
                </p>

                <p
                  className="
                  mt-1
                  text-sm
                  text-gray-500
                  "
                >
                  {appointment.fabric} • {appointment.lapel}
                </p>
              </div>

              <div className="text-right">
                <StatusBadge status={appointment.status} />

                <p
                  className="
                  mt-2
                  text-xs
                  text-gray-600
                  "
                >
                  {new Date(appointment.createdAt).toLocaleDateString("tr-TR")}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
