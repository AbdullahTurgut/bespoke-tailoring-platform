import { useNavigate } from "react-router-dom";

type Suit = {
  fabric: string;
  lapel: string;
  button: string;
};

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

  const fabricNames = {
    black: "Italian Black Wool",
    navy: "Midnight Navy",
    gray: "Luxury Gray Flannel",
  };

  const lapelNames = {
    classic: "Classic Notch",
    peak: "Peak Lapel",
    shawl: "Shawl Collar",
  };

  const buttonNames = {
    black: "Black Horn",
    gold: "Gold Accent",
    silver: "Silver Finish",
  };

  const fabricPrices = {
    black: 5000,
    navy: 6400,
    gray: 7600,
  };

  const buttonPrices = {
    black: 500,
    gold: 1500,
    silver: 1000,
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
        w-96
        h-96
        bg-[#C8A45D]
        opacity-10
        blur-3xl
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
        p-6
        rounded-sm
        backdrop-blur-sm
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
          hover:scale-105
          "
        />

        {/* Selected Details */}

        <div
          className="
          mt-8
          border-t
          border-white/10
          pt-6
          text-sm
          space-y-3
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
            TAHMİNİ FİYAT
          </span>

          <div
            className="
    mt-3
    text-3xl
    font-luxury
    text-white
    "
          >
            {calculatePrice()} TL
          </div>
        </div>
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
  bg-[#C8A45D]
  text-black
  py-4
  uppercase
  tracking-[0.2em]
  text-sm
  hover:bg-white
  transition
  "
        >
          Randevu Talebi Oluştur
        </button>
      </div>
    </div>
  );
};

export default SuitPreview;
