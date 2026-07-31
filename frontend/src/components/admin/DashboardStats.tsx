import type { Appointment } from "@/types/appointment";
import {
  CalendarDays,
  Clock3,
  MessageCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Props = {
  appointments: Appointment[];
};

export default function DashboardStats({ appointments }: Props) {
  const total = appointments.length;

  const pending = appointments.filter((a) => a.status === "PENDING").length;

  const contacted = appointments.filter((a) => a.status === "CONTACTED").length;

  const completed = appointments.filter((a) => a.status === "COMPLETED").length;

  const cancelled = appointments.filter((a) => a.status === "CANCELLED").length;

  const cards = [
    {
      title: "Toplam Randevu",
      value: total,
      icon: CalendarDays,
      description: "Tüm kayıtlar",
    },
    {
      title: "Bekleyen",
      value: pending,
      icon: Clock3,
      description: "Yanıt bekleyen",
    },
    {
      title: "İletişime Geçildi",
      value: contacted,
      icon: MessageCircle,
      description: "Aktif süreç",
    },
    {
      title: "Tamamlandı",
      value: completed,
      icon: CheckCircle2,
      description: "Başarıyla sonuçlanan",
    },
    {
      title: "İptal Edilen",
      value: cancelled,
      icon: XCircle,
      description: "İptal edilen",
    },
  ];

  return (
    <div
      className="
      grid
      gap-6
      mb-10
      sm:grid-cols-2
      xl:grid-cols-5
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#C8A45D]/50
            "
          >
            {/* Luxury glow */}
            <div
              className="
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              bg-[#C8A45D]/10
              blur-3xl
              transition
              group-hover:bg-[#C8A45D]/20
              "
            />

            <div
              className="
              relative
              flex
              items-start
              justify-between
              "
            >
              <div>
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-gray-500
                  "
                >
                  {card.title}
                </p>

                <h2
                  className="
                  mt-5
                  text-5xl
                  font-luxury
                  tracking-wide
                  text-[#C8A45D]
                  "
                >
                  {card.value}
                </h2>
              </div>

              <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#C8A45D]/30
                bg-black/30
                "
              >
                <Icon
                  size={20}
                  className="
                  text-[#C8A45D]
                  "
                />
              </div>
            </div>

            <p
              className="
              relative
              mt-5
              text-xs
              uppercase
              tracking-widest
              text-gray-600
              "
            >
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
