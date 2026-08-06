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
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.04]
      p-6
      "
    >
      <div className="mb-6 text-center">
        <h2
          className="
          text-xl
          font-luxury
          "
        >
          {currentYear} Randevu İstatistiği
        </h2>
        <p
          className="
 mt-2
 text-xs
 uppercase
 tracking-[0.25em]
 text-gray-500
 "
        >
          Ocak - {months[months.length - 1]} dönemi
        </p>
        <p
          className="
          mt-2
          text-xs
          uppercase
          tracking-[0.25em]
          text-gray-500
          "
        >
          Aylık randevu trendi
        </p>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" stroke="#888" />

            <YAxis allowDecimals={false} stroke="#888" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="randevu"
              stroke="#C8A45D"
              strokeWidth={3}
              dot={{
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
