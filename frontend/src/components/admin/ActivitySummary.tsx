import type { Appointment } from "@/types/appointment";

type Props = {
  appointments: Appointment[];
};

export default function ActivitySummary({ appointments }: Props) {
  const latestActivities = [...appointments]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-luxury text-white">
          Son Aktiviteler
        </h2>

        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          Son müşteri hareketleri
        </p>
      </div>

      <div className="space-y-4">
        {latestActivities.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-500">
            Henüz aktivite kaydı bulunmuyor.
          </p>
        ) : (
          latestActivities.map((appointment) => (
            <div key={appointment.id} className="flex items-start gap-3.5">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-[#C8A45D] shrink-0" />

              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-200">
                  Yeni randevu talebi:
                  <span className="ml-1 text-[#C8A45D] font-medium">
                    {appointment.customerName}
                  </span>
                </p>

                <p className="mt-0.5 text-[11px] text-gray-500 tabular-nums">
                  {new Date(appointment.createdAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
