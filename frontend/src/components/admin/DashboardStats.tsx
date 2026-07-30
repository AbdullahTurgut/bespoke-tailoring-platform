import type { Appointment } from "@/types/appointment";

type Props = {
  appointments: Appointment[];
};

export default function DashboardStats({ appointments }: Props) {
  const total = appointments.length;

  const pending = appointments.filter((a) => a.status === "PENDING").length;

  const contacted = appointments.filter((a) => a.status === "CONTACTED").length;

  const completed = appointments.filter((a) => a.status === "COMPLETED").length;

  const cards = [
    {
      title: "Toplam Randevu",
      value: total,
    },
    {
      title: "Bekleyen",
      value: pending,
    },
    {
      title: "İletişime Geçildi",
      value: contacted,
    },
    {
      title: "Tamamlandı",
      value: completed,
    },
  ];

  return (
    <div className="grid gap-6 mb-10 md:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          p-6
          "
        >
          <p
            className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-500
            "
          >
            {card.title}
          </p>

          <h2
            className="
            mt-4
            text-4xl
            font-luxury
            text-[#C8A45D]
            "
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
