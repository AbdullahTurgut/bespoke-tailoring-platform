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
];

export default function AppointmentFilters({
  activeFilter,
  onFilterChange,
}: Props) {
  return (
    <div
      className="
      justify-center
      flex
      flex-wrap
      gap-3
      mb-10
      "
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`
          px-5
          py-3
          text-sm
          tracking-wide
          border
          transition
          ${
            activeFilter === filter.value
              ? "bg-[#C8A45D] text-black border-[#C8A45D]"
              : "border-white/10 text-gray-400 hover:text-white hover:border-white/30"
          }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
