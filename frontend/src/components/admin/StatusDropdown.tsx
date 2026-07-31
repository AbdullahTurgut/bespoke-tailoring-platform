import { useState } from "react";
import type { AppointmentStatus } from "@/types/appointment";

type Props = {
  value: AppointmentStatus;
  onChange: (status: AppointmentStatus) => void;
};

const statuses: {
  value: AppointmentStatus;
  label: string;
}[] = [
  {
    value: "PENDING",
    label: "Bekleyen",
  },
  {
    value: "CONTACTED",
    label: "İletişime Geçildi",
  },
  {
    value: "COMPLETED",
    label: "Tamamlandı",
  },
  {
    value: "CANCELLED",
    label: "İptal",
  },
];

export default function StatusDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const current = statuses.find((item) => item.value === value);

  return (
    <div
      className="
      relative
      flex-1
      "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
        w-full
        flex
        items-center
        justify-between
        border
        border-[#C8A45D]
        bg-[#0B0B0B]
        px-4
        py-3
        text-white
        "
      >
        <span>{current?.label}</span>

        <span
          className="
          text-[#C8A45D]
          "
        >
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div
          className="
          absolute
          left-0
          top-full
          z-50
          mt-2
          w-full
          border
          border-white/10
          bg-[#0B0B0B]
          "
        >
          {statuses.map((status) => (
            <button
              key={status.value}
              type="button"
              onClick={() => {
                onChange(status.value);
                setOpen(false);
              }}
              className="
              w-full
              px-4
              py-3
              text-left
              text-white
              transition
              hover:bg-[#C8A45D]
              hover:text-black
              "
            >
              {status.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
