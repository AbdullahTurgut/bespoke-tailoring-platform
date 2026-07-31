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
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
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
          Son Aktiviteler
        </h2>

        <p
          className="
          mt-2
          text-sm
          text-gray-500
          "
        >
          Son müşteri hareketleri
        </p>
      </div>

      <div className="space-y-5">
        {latestActivities.map((appointment) => (
          <div
            key={appointment.id}
            className="
            flex
            gap-4
            "
          >
            <div
              className="
              mt-2
              h-2
              w-2
              rounded-full
              bg-[#C8A45D]
              "
            />

            <div>
              <p
                className="
                text-sm
                "
              >
                Yeni randevu:
                <span className="ml-1 text-[#C8A45D]">
                  {appointment.customerName}
                </span>
              </p>

              <p
                className="
                mt-1
                text-xs
                text-gray-500
                "
              >
                {new Date(appointment.createdAt).toLocaleDateString("tr-TR")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
