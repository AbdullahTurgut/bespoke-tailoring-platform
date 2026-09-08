import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { Appointment } from "@/types/appointment";

type Props = {
  appointments: Appointment[];
};

export default function MonthlyAppointmentChart({ appointments }: Props) {
  const currentYear = new Date().getFullYear();

  const currentYearAppointments = appointments.filter((appointment) => {
    const date = new Date(appointment.createdAt);

    return date.getFullYear() === currentYear;
  });

  const allMonths = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];

  const currentMonth = new Date().getMonth();

  const months = allMonths.slice(0, currentMonth + 1);

  const monthlyData = months.map((month, index) => {
    const count = currentYearAppointments.filter((appointment) => {
      const date = new Date(appointment.createdAt);

      return date.getMonth() === index;
    }).length;

    return {
      month,
      randevu: count,
    };
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="mb-5 sm:mb-6 text-center">
        <h2 className="text-xl font-luxury text-white">
          {currentYear} Randevu İstatistiği
        </h2>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#C8A45D]">
          Ocak - {months[months.length - 1]} dönemi aylık trend
        </p>
      </div>

      <div className="h-[260px] sm:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />

            <XAxis dataKey="month" stroke="#888" fontSize={12} />

            <YAxis allowDecimals={false} stroke="#888" fontSize={12} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111111",
                borderColor: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="randevu"
              stroke="#C8A45D"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#C8A45D",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
