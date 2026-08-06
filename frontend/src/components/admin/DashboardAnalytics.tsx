import type { Appointment } from "@/types/appointment";
import {
  CalendarCheck,
  TrendingUp,
  CheckCircle2,
  Activity,
} from "lucide-react";

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

  const averagePrice =
    appointments.length === 0
      ? 0
      : Math.round(
          appointments.reduce(
            (sum, appointment) => sum + appointment.price,
            0,
          ) / appointments.length,
        );

  const fabricCount = appointments.reduce(
    (acc, appointment) => {
      acc[appointment.fabric] = (acc[appointment.fabric] || 0) + 1;

      return acc;
    },
    {} as Record<string, number>,
  );

  const popularFabric =
    Object.entries(fabricCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

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
      title: "Ortalama Sipariş",
      value: `${averagePrice.toLocaleString("tr-TR")} ₺`,
      description: "Ortalama müşteri talebi",
      icon: TrendingUp,
    },
    {
      title: "Popüler Kumaş",
      value: popularFabric.toUpperCase(),
      description: "En çok tercih edilen",
      icon: Activity,
    },
  ];

  return (
    <div
      className="
      grid
      gap-6
      mb-10
      lg:grid-cols-3
      xl:grid-cols-3
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
            bg-white/4
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#C8A45D]/50
            "
          >
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
              "
            />

            <div
              className="
              relative
              flex
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
                  text-4xl
                  font-luxury
                  text-[#C8A45D]
                  "
                >
                  {card.value}
                </h2>

                <p
                  className="
                  mt-4
                  text-xs
                  uppercase
                  tracking-widest
                  text-gray-600
                  "
                >
                  {card.description}
                </p>
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
                <Icon size={20} className="text-[#C8A45D]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
