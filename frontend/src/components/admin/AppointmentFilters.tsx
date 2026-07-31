import type { AppointmentStatus } from "@/types/appointment";

type FilterValue = AppointmentStatus | "ALL";

type Props = {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
};

const filters: {
  label: string;
  value: FilterValue;
}[] = [
  {
    label: "Tümü",
    value: "ALL",
  },
  {
    label: "Bekleyen",
    value: "PENDING",
  },
  {
    label: "İletişime Geçildi",
    value: "CONTACTED",
  },
  {
    label: "Tamamlandı",
    value: "COMPLETED",
  },
  {
    label: "İptal",
    value: "CANCELLED",
  },
];

export default function AppointmentFilters({
  activeFilter,
  onFilterChange,
}: Props) {
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
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
