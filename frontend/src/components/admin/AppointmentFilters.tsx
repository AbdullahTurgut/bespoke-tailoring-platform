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
      label: "İptal",
      value: "CANCELLED",
      count: cancelled,
    },
  ];

  return (
    <div
      className="
      flex
      flex-wrap
      justify-center
      gap-3
      mb-10
      rounded-2xl
      border
      border-white/10
      bg-white/[0.04]
      p-4
      "
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`
            flex
            items-center
            gap-2
            rounded-full
            px-6
            py-3
            text-xs
            uppercase
            tracking-widest
            transition-all
            duration-300

            ${
              isActive
                ? `
                bg-[#C8A45D]
                text-black
                border
                border-[#C8A45D]
                shadow-lg
                shadow-[#C8A45D]/10
                `
                : `
                border
                border-white/10
                text-gray-400
                hover:text-white
                hover:border-[#C8A45D]/40
                hover:-translate-y-0.5
                `
            }
            `}
          >
            <span>{filter.label}</span>

            <span
              className={`
              rounded-full
              px-2
              py-1
              text-[10px]
              font-semibold
              ${
                isActive
                  ? "bg-black/20 text-black"
                  : "bg-[#C8A45D]/10 text-[#C8A45D]"
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
