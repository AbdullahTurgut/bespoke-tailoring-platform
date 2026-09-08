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
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-luxury text-white">
          Randevu Trendi
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          Günlük randevu oluşturma sıklığı
        </p>
      </div>

      <div className="h-[250px] sm:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />

            <XAxis dataKey="date" stroke="#888" fontSize={12} />

            <YAxis stroke="#888" fontSize={12} allowDecimals={false} />

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
              dataKey="count"
              stroke="#C8A45D"
              strokeWidth={3}
              dot={{ r: 4, fill: "#C8A45D" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
