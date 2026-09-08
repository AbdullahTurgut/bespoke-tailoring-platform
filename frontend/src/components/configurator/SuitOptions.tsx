import type { Suit } from "@/types/suit";
import {
  fabricOptions,
  lapelOptions,
  buttonOptions,
  fabricNames,
  lapelNames,
  buttonNames,
} from "@/constants/suitOptions";
import { Check } from "lucide-react";

type Props = {
  suit: Suit;
  setSuit: React.Dispatch<React.SetStateAction<Suit>>;
};

const SuitOptions = ({ suit, setSuit }: Props) => {
  return (
    <div className="space-y-10">
      {/* Visual Step Progress Bar */}
      <nav
        aria-label="Tasarım Adımları"
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
      >
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C8A45D] font-medium">
              01 · Kumaş
            </span>
            <span className="mt-1 text-xs text-white truncate max-w-[90px] sm:max-w-none">
              {fabricNames[suit.fabric as keyof typeof fabricNames]}
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-white/10 px-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C8A45D] font-medium">
              02 · Yaka
            </span>
            <span className="mt-1 text-xs text-white truncate max-w-[90px] sm:max-w-none">
              {lapelNames[suit.lapel as keyof typeof lapelNames]}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C8A45D] font-medium">
              03 · Düğme
            </span>
            <span className="mt-1 text-xs text-white truncate max-w-[90px] sm:max-w-none">
              {buttonNames[suit.button as keyof typeof buttonNames]}
            </span>
          </div>
        </div>
      </nav>

      {/* STEP 1: FABRIC */}
      <section aria-labelledby="step-fabric-heading">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C8A45D] font-mono">
              01
            </span>
            <h2
              id="step-fabric-heading"
              className="text-sm uppercase tracking-[0.3em] text-[#C8A45D] font-medium"
            >
              Kumaş Seçimi
            </h2>
          </div>

          <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            Seçili:{" "}
            <strong className="font-medium text-white">
              {fabricNames[suit.fabric as keyof typeof fabricNames]}
            </strong>
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Kumaş seçenekleri"
          className="space-y-3"
        >
          {fabricOptions.map((fabric) => {
            const isSelected = suit.fabric === fabric.id;
            return (
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                key={fabric.id}
                onClick={() =>
                  setSuit((prev) => ({
                    ...prev,
                    fabric: fabric.id,
                  }))
                }
                className={`
                  w-full text-left rounded-xl border p-4 sm:p-5 transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]
                  ${
                    isSelected
                      ? "border-[#C8A45D] bg-[#C8A45D]/10 ring-1 ring-[#C8A45D]/40"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-sm sm:text-base font-medium transition-colors ${
                          isSelected ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {fabric.name}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] bg-[#C8A45D]/15 px-2 py-0.5 rounded">
                          Seçili
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {fabric.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs sm:text-sm font-luxury text-[#C8A45D] tabular-nums font-semibold">
                      {fabric.price.toLocaleString("tr-TR")} ₺
                    </span>

                    <span
                      aria-hidden="true"
                      className={`
                        w-5 h-5 rounded-full flex items-center justify-center border transition-all
                        ${
                          isSelected
                            ? "bg-[#C8A45D] border-[#C8A45D] text-black"
                            : "border-white/20 bg-transparent text-transparent"
                        }
                      `}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* STEP 2: LAPEL */}
      <section aria-labelledby="step-lapel-heading">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C8A45D] font-mono">
              02
            </span>
            <h2
              id="step-lapel-heading"
              className="text-sm uppercase tracking-[0.3em] text-[#C8A45D] font-medium"
            >
              Yaka Modeli
            </h2>
          </div>

          <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            Seçili:{" "}
            <strong className="font-medium text-white">
              {lapelNames[suit.lapel as keyof typeof lapelNames]}
            </strong>
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Yaka modeli seçenekleri"
          className="grid grid-cols-3 gap-2 sm:gap-3"
        >
          {lapelOptions.map((lapel) => {
            const isSelected = suit.lapel === lapel.id;
            return (
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                key={lapel.id}
                onClick={() =>
                  setSuit((prev) => ({
                    ...prev,
                    lapel: lapel.id,
                  }))
                }
                className={`
                  relative rounded-xl border p-3 sm:p-4 text-center transition-all duration-200 flex flex-col justify-between items-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]
                  ${
                    isSelected
                      ? "border-[#C8A45D] bg-[#C8A45D]/10 ring-1 ring-[#C8A45D]/40"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                  }
                `}
              >
                <div className="w-full">
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className={`text-xs sm:text-sm font-medium leading-tight ${
                        isSelected ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {lapel.name}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                    )}
                  </div>

                  <p className="mt-1 text-[11px] sm:text-xs text-gray-400 line-clamp-2 hidden sm:block">
                    {lapel.description}
                  </p>
                </div>

                <span className="mt-2 text-[10px] sm:text-xs text-[#C8A45D]/80">
                  Dahil
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* STEP 3: BUTTON */}
      <section aria-labelledby="step-button-heading">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C8A45D] font-mono">
              03
            </span>
            <h2
              id="step-button-heading"
              className="text-sm uppercase tracking-[0.3em] text-[#C8A45D] font-medium"
            >
              Düğme Tercihi
            </h2>
          </div>

          <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            Seçili:{" "}
            <strong className="font-medium text-white">
              {buttonNames[suit.button as keyof typeof buttonNames]}
            </strong>
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Düğme seçenekleri"
          className="grid grid-cols-3 gap-2 sm:gap-3"
        >
          {buttonOptions.map((button) => {
            const isSelected = suit.button === button.id;
            return (
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                key={button.id}
                onClick={() =>
                  setSuit((prev) => ({
                    ...prev,
                    button: button.id,
                  }))
                }
                className={`
                  relative rounded-xl border p-3 sm:p-4 text-center transition-all duration-200 flex flex-col justify-between items-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]
                  ${
                    isSelected
                      ? "border-[#C8A45D] bg-[#C8A45D]/10 ring-1 ring-[#C8A45D]/40"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                  }
                `}
              >
                <div className="w-full">
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className={`text-xs sm:text-sm font-medium leading-tight ${
                        isSelected ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {button.name}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                    )}
                  </div>

                  <p className="mt-1 text-[11px] sm:text-xs text-gray-400 line-clamp-2 hidden sm:block">
                    {button.description}
                  </p>
                </div>

                <span className="mt-2 text-[10px] sm:text-xs font-luxury text-[#C8A45D] tabular-nums font-semibold">
                  {button.price === 0
                    ? "Dahil"
                    : `+${button.price.toLocaleString("tr-TR")} ₺`}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SuitOptions;

