import type { AppointmentStatus } from "@/types/appointment";

type Props = {
  status: AppointmentStatus;
};

const statusStyles = {
  PENDING: {
    label: "Bekliyor",
    className: "bg-yellow-500/20 text-yellow-400",
  },
  CONTACTED: {
    label: "İletişime Geçildi",
    className: "bg-blue-500/20 text-blue-400",
  },
  COMPLETED: {
    label: "Tamamlandı",
    className: "bg-green-500/20 text-green-400",
  },
  CANCELLED: {
    label: "İptal",
    className: "bg-red-500/20 text-red-400",
  },
};

export default function StatusBadge({ status }: Props) {
  const badge = statusStyles[status];

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${badge.className}`}
    >
      {badge.label}
    </span>
  );
}
