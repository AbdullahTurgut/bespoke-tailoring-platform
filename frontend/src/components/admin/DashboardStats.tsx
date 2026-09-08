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
    <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              group relative overflow-hidden rounded-2xl border border-white/10
              bg-white/[0.04] p-4 sm:p-5 lg:p-6 transition-all duration-300
              hover:-translate-y-0.5 hover:border-[#C8A45D]/50
            "
          >
            {/* Luxury glow */}
            <div
              className="
                absolute -right-10 -top-10 h-28 w-28 rounded-full
                bg-[#C8A45D]/10 blur-2xl transition group-hover:bg-[#C8A45D]/20
              "
            />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-400">
                  {card.title}
                </p>

                <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-luxury tracking-wide text-[#C8A45D] tabular-nums font-semibold">
                  {card.value}
                </h2>
              </div>

              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#C8A45D]/30 bg-black/30 shrink-0">
                <Icon size={18} className="text-[#C8A45D]" />
              </div>
            </div>

            <p className="relative mt-3 sm:mt-4 text-[11px] uppercase tracking-wider text-gray-500">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
