import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import type { Appointment } from "@/types/appointment";

type Props = {
  appointments: Appointment[];
};

export default function StatusDonutChart({ appointments }: Props) {
  const data = [
    {
      name: "Bekleyen",
      value: appointments.filter((a) => a.status === "PENDING").length,
    },
    {
      name: "İletişime Geçildi",
      value: appointments.filter((a) => a.status === "CONTACTED").length,
    },
    {
      name: "Tamamlandı",
      value: appointments.filter((a) => a.status === "COMPLETED").length,
    },
    {
      name: "İptal",
      value: appointments.filter((a) => a.status === "CANCELLED").length,
    },
  ];

  const filteredData = data.filter((item) => item.value > 0);

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
        text-xl
        font-luxury
        text-center
        "
      >
        Randevu Durumları
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
            >
              {filteredData.map((_, index) => (
                <Cell
                  key={index}
                  fill={["#C8A45D", "#3B82F6", "#22C55E", "#EF4444"][index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
