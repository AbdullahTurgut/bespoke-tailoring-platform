import { useNavigate } from "react-router-dom";
import type { Suit } from "@/types/suit";
import {
  fabricNames,
  lapelNames,
  buttonNames,
  fabricPrices,
  buttonPrices,
} from "@/constants/suitOptions";

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
    const basePrice = fabricPrices[suit.fabric as keyof typeof fabricPrices];

    const buttonPrice = buttonPrices[suit.button as keyof typeof buttonPrices];

    return basePrice + buttonPrice;
  };

  const image = suitImages[suit.fabric as keyof typeof suitImages];

  return (
    <div
      className="
      relative
      flex
      justify-center
      items-center
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        w-[420px]
        h-[420px]
        bg-[#C8A45D]
        opacity-[0.08]
        blur-[120px]
        rounded-full
        "
      />

      {/* Card */}

      <div
        className="
        relative
        bg-white/5
        border
        border-white/10
        p-8
        rounded-2xl
        backdrop-blur-md
        shadow-2xl
        "
      >
        <img
          src={image}
          alt="Custom Suit Preview"
          className="
          w-full
          max-w-md
          max-h-[520px]
          object-contain
          transition-all
          duration-700
          hover:scale-[1.02]
          "
        />

        {/* Selected Details */}

        <div
          className="
          mt-8
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-5
          space-y-4
          "
        >
          <div className="flex justify-between">
            <span className="text-gray-500">Fabric</span>

            <span className="text-white">
              {fabricNames[suit.fabric as keyof typeof fabricNames]}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Lapel</span>

            <span className="text-white">
              {lapelNames[suit.lapel as keyof typeof lapelNames]}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Button</span>

            <span className="text-white">
              {buttonNames[suit.button as keyof typeof buttonNames]}
            </span>
          </div>
        </div>

        {/* Price */}

        <div
          className="
          mt-8
          pt-6
          border-t
          border-white/10
          "
        >
          <span
            className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-[#C8A45D]
            "
          >
            Tahmini Fiyat
          </span>

          <div
            className="
            mt-3
            text-4xl
            font-luxury
            text-[#C8A45D]
            "
          >
            {calculatePrice().toLocaleString("tr-TR")} ₺
          </div>
        </div>

        {/* Appointment Button */}

        <button
          onClick={() =>
            navigate("/appointment", {
              state: {
                suit,
                price: calculatePrice(),
              },
            })
          }
          className="
          mt-8
          w-full
          rounded-full
          bg-[#C8A45D]
          text-black
          py-4
          uppercase
          tracking-[0.3em]
          text-sm
          font-medium
          hover:bg-white
          hover:scale-[1.02]
          transition-all
          duration-300
          "
        >
          Randevu Talebi Oluştur
        </button>
      </div>
    </div>
  );
};

export default SuitPreview;
