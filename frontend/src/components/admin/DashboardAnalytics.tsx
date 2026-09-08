import type { Appointment } from "@/types/appointment";
import {
  CalendarCheck,
  TrendingUp,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { fabricNames } from "@/constants/suitOptions";

type Props = {
  appointments: Appointment[];
};

export default function DashboardAnalytics({ appointments }: Props) {
  const today = new Date();

  const todayAppointments = appointments.filter((appointment) => {
    const date = new Date(appointment.createdAt);

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }).length;

  const completed = appointments.filter(
    (appointment) => appointment.status === "COMPLETED",
  ).length;

  const activeProcess = appointments.filter(
    (appointment) =>
      appointment.status === "PENDING" || appointment.status === "CONTACTED",
  ).length;

  const completionRate =
    appointments.length === 0
      ? 0
      : Math.round((completed / appointments.length) * 100);

  const pricedAppointments = appointments.filter(
    (appointment) => appointment.price != null && appointment.price > 0,
  );

  const averagePrice =
    pricedAppointments.length === 0
      ? 0
      : Math.round(
          pricedAppointments.reduce(
            (sum, appointment) => sum + (appointment.price ?? 0),
            0,
          ) / pricedAppointments.length,
        );

  const fabricCount = appointments.reduce(
    (acc, appointment) => {
      if (appointment.fabric) {
        acc[appointment.fabric] = (acc[appointment.fabric] || 0) + 1;
      }

      return acc;
    },
    {} as Record<string, number>,
  );

  const popularFabricKey =
    Object.entries(fabricCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

  const popularFabric =
    popularFabricKey !== "-"
      ? fabricNames[popularFabricKey as keyof typeof fabricNames] ||
        popularFabricKey.toUpperCase()
      : "-";

  const lastWeekAppointments = appointments.filter((appointment) => {
    const date = new Date(appointment.createdAt);

    const diff = today.getTime() - date.getTime();

    const days = diff / (1000 * 60 * 60 * 24);

    return days <= 7;
  }).length;

  const cards = [
    {
      title: "Bugünkü Randevu",
      value: todayAppointments,
      description: "Bugün oluşturulan",
      icon: CalendarCheck,
    },
    {
      title: "Son 7 Gün",
      value: lastWeekAppointments,
      description: "Yeni talepler",
      icon: TrendingUp,
    },
    {
      title: "Tamamlanma",
      value: `%${completionRate}`,
      description: "Başarı oranı",
      icon: CheckCircle2,
    },
    {
      title: "Aktif Süreç",
      value: activeProcess,
      description: "Devam eden talepler",
      icon: Activity,
    },
    {
      title: "Ortalama Fiyat",
      value: `${averagePrice.toLocaleString("tr-TR")} ₺`,
      description: "Ortalama müşteri talebi",
      icon: TrendingUp,
    },
    {
      title: "Popüler Kumaş",
      value: popularFabric,
      description: "En çok tercih edilen",
      icon: Activity,
    },
  ];

  return (
    <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
            <div
              className="
                absolute -right-10 -top-10 h-28 w-28 rounded-full
                bg-[#C8A45D]/10 blur-2xl
              "
            />

            <div className="relative flex justify-between items-start">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-400">
                  {card.title}
                </p>

                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-luxury text-[#C8A45D] font-semibold tabular-nums">
                  {card.value}
                </h2>

                <p className="mt-3 sm:mt-4 text-[11px] uppercase tracking-wider text-gray-500">
                  {card.description}
                </p>
              </div>

              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#C8A45D]/30 bg-black/30 shrink-0">
                <Icon size={18} className="text-[#C8A45D]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
