import type { Appointment, AppointmentStatus } from "@/types/appointment";

type FilterValue = AppointmentStatus | "ALL";

type Props = {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
  appointments: Appointment[];
};

export default function AppointmentFilters({
  activeFilter,
  onFilterChange,
  appointments,
}: Props) {
  const total = appointments.length;

  const pending = appointments.filter(
    (appointment) => appointment.status === "PENDING",
  ).length;

  const contacted = appointments.filter(
    (appointment) => appointment.status === "CONTACTED",
  ).length;

  const completed = appointments.filter(
    (appointment) => appointment.status === "COMPLETED",
  ).length;

  const cancelled = appointments.filter(
    (appointment) => appointment.status === "CANCELLED",
  ).length;

  const filters: {
    label: string;
    value: FilterValue;
    count: number;
  }[] = [
    {
      label: "Tümü",
      value: "ALL",
      count: total,
    },
    {
      label: "Bekleyen",
      value: "PENDING",
      count: pending,
    },
    {
      label: "İletişime Geçildi",
      value: "CONTACTED",
      count: contacted,
    },
    {
      label: "Tamamlandı",
      value: "COMPLETED",
      count: completed,
    },
    {
      label: "İptal Edildi",
      value: "CANCELLED",
      count: cancelled,
    },
  ];

  return (
    <div
      className="
      flex flex-wrap items-center justify-start sm:justify-center
      gap-2 sm:gap-3 mb-6 sm:mb-8
      rounded-2xl border border-white/10 bg-white/[0.04]
      p-3 sm:p-4
      "
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            className={`
            flex items-center gap-2 rounded-full
            px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-wider
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]

            ${
              isActive
                ? `
                bg-[#C8A45D] text-black border border-[#C8A45D] font-medium
                shadow-md shadow-[#C8A45D]/10
                `
                : `
                border border-white/10 text-gray-400
                hover:text-white hover:border-[#C8A45D]/40
                `
            }
            `}
          >
            <span>{filter.label}</span>

            <span
              className={`
              rounded-full px-2 py-0.5 text-[10px] font-semibold tabular-nums
              ${
                isActive
                  ? "bg-black/20 text-black"
                  : "bg-[#C8A45D]/15 text-[#C8A45D]"
              }
              `}
            >
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
