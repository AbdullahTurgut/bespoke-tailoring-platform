import { useNavigate } from "react-router-dom";
import type { Suit } from "@/types/suit";
import {
  fabricNames,
  lapelNames,
  buttonNames,
  fabricPrices,
  buttonPrices,
} from "@/constants/suitOptions";
import { ChevronRight } from "lucide-react";

type Props = {
  suit: Suit;
};

const SuitPreview = ({ suit }: Props) => {
  const navigate = useNavigate();

  const suitImages = {
    black: "/images/luxury-suit.png",
    navy: "/images/luxury-suit.png",
    gray: "/images/luxury-suit.png",
  };

  const calculatePrice = () => {
    const basePrice =
      fabricPrices[suit.fabric as keyof typeof fabricPrices] ?? 0;
    const buttonPrice =
      buttonPrices[suit.button as keyof typeof buttonPrices] ?? 0;
    return basePrice + buttonPrice;
  };

  const image =
    suitImages[suit.fabric as keyof typeof suitImages] ||
    "/images/luxury-suit.png";

  const currentFabricName =
    fabricNames[suit.fabric as keyof typeof fabricNames] || "Kişiye Özel Kumaş";
  const currentLapelName =
    lapelNames[suit.lapel as keyof typeof lapelNames] || "Klasik Yaka";
  const currentButtonName =
    buttonNames[suit.button as keyof typeof buttonNames] || "Siyah Boynuz";

  const isComplete = Boolean(suit.fabric && suit.lapel && suit.button);
  const totalPrice = calculatePrice();

  const handleContinue = () => {
    if (!isComplete) return;
    navigate("/appointment", {
      state: {
        suit,
        price: totalPrice,
      },
    });
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Glow background with overflow containment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[#C8A45D] opacity-[0.07] blur-[100px] rounded-full max-w-full"
      />

      {/* Preview Card */}
      <div className="relative w-full max-w-lg bg-white/[0.04] border border-white/10 p-5 sm:p-7 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl">
        {/* Visual Preview */}
        <div className="relative flex items-center justify-center py-2 sm:py-4">
          <img
            src={image}
            alt={`${currentFabricName} - Terzi Murat Özel Dikim Takım Elbise Önizleme`}
            className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-xs max-h-[320px] sm:max-h-[400px] object-contain transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Selected Details Summary */}
        <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8A45D] font-medium">
              Yapılandırma Özeti
            </span>
            <span className="text-[11px] text-gray-400">3 / 3 Seçildi</span>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-400">Kumaş</span>
            <span className="text-white font-medium text-right truncate max-w-[180px] sm:max-w-[240px]">
              {currentFabricName}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-400">Yaka</span>
            <span className="text-white font-medium text-right">
              {currentLapelName}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-400">Düğme</span>
            <span className="text-white font-medium text-right">
              {currentButtonName}
            </span>
          </div>
        </div>

        {/* Price Presentation */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A45D]">
              Tahmini Fiyat
            </span>
            <span className="text-xs text-gray-500">KDV Dahil</span>
          </div>

          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-luxury text-[#C8A45D] tabular-nums font-semibold">
              {totalPrice.toLocaleString("tr-TR")}
            </span>
            <span className="text-xl sm:text-2xl font-luxury text-[#C8A45D]">
              ₺
            </span>
          </div>

          <p className="mt-2 text-[11px] sm:text-xs text-gray-400 leading-relaxed">
            Kişiye özel prova, astar ve temel atölye işçiliği dahildir.
          </p>
        </div>

        {/* Primary CTA */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!isComplete}
          className="
            mt-6 w-full rounded-full bg-[#C8A45D] text-black py-3.5 sm:py-4 px-4
            uppercase tracking-[0.18em] sm:tracking-[0.25em] text-xs sm:text-sm font-medium
            inline-flex items-center justify-center gap-1.5
            hover:bg-white hover:scale-[1.01] active:scale-[0.99]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#C8A45D]
            transition-all duration-200
          "
        >
          <span>Randevuya Devam Et</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SuitPreview;

