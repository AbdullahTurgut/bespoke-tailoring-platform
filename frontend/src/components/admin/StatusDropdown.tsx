import { useState, useRef, useEffect } from "react";
import type { AppointmentStatus } from "@/types/appointment";
import { ChevronDown } from "lucide-react";

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
    label: "İptal Edildi",
  },
];

export default function StatusDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = statuses.find((item) => item.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex-1">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          border border-[#C8A45D]/60 hover:border-[#C8A45D]
          bg-[#0B0B0B] rounded-xl px-4 py-3 text-sm text-white
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
          transition-all duration-200
        "
      >
        <span>{current?.label}</span>

        <ChevronDown
          className={`w-4 h-4 text-[#C8A45D] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="
            absolute left-0 top-full z-50 mt-2 w-full
            rounded-xl border border-white/10 bg-[#111111] shadow-2xl overflow-hidden
            animate-in fade-in zoom-in-95 duration-150
          "
        >
          {statuses.map((status) => (
            <button
              key={status.value}
              type="button"
              role="option"
              aria-selected={status.value === value}
              onClick={() => {
                onChange(status.value);
                setOpen(false);
              }}
              className={`
                w-full px-4 py-3 text-left text-sm transition-colors
                ${
                  status.value === value
                    ? "bg-[#C8A45D] text-black font-medium"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {status.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

