import type { Appointment } from "@/types/appointment";
import {
  CalendarDays,
  Clock3,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

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
      icon: CalendarDays,
    },
    {
      title: "Bekleyen",
      value: pending,
      icon: Clock3,
    },
    {
      title: "İletişime Geçildi",
      value: contacted,
      icon: MessageCircle,
    },
    {
      title: "Tamamlandı",
      value: completed,
      icon: CheckCircle2,
    },
  ];

  return (
    <div
      className="
      grid
      gap-6
      mb-10
      sm:grid-cols-2
      xl:grid-cols-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur
            p-6
            transition-all
            duration-300
            hover:border-[#C8A45D]/40
            hover:-translate-y-1
            "
          >
            <div
              className="
              flex
              items-center
              justify-between
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

              <Icon
                size={20}
                className="
                text-[#C8A45D]
                opacity-70
                group-hover:opacity-100
                transition
                "
              />
            </div>

            <h2
              className="
              mt-6
              text-5xl
              font-luxury
              text-[#C8A45D]
              "
            >
              {card.value}
            </h2>

            <p
              className="
              mt-2
              text-xs
              text-gray-600
              "
            >
              Güncel kayıt durumu
            </p>
          </div>
        );
      })}
    </div>
  );
}
