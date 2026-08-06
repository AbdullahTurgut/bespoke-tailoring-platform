import type { Appointment } from "@/types/appointment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  appointments: Appointment[];
};

export default function DashboardCharts({ appointments }: Props) {
  const data = appointments.reduce(
    (acc, appointment) => {
      const date = new Date(appointment.createdAt).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
      });

      const existing = acc.find((item) => item.date === date);

      if (existing) {
        existing.count++;
      } else {
        acc.push({
          date,
          count: 1,
        });
      }

      return acc;
    },
    [] as {
      date: string;
      count: number;
    }[],
  );

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
      <h2
        className="
        mb-6
        text-2xl
        font-luxury
        "
      >
        Randevu Trendi
      </h2>

      <div
        className="
        h-[300px]
        "
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#C8A45D"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
