type Suit = {
  fabric: string;
  lapel: string;
  button: string;
};

type Props = {
  suit: Suit;
  setSuit: React.Dispatch<React.SetStateAction<Suit>>;
};

const SuitOptions = ({ suit, setSuit }: Props) => {
  const fabrics = [
    {
      id: "black",
      name: "Italian Black Wool",
    },
    {
      id: "navy",
      name: "Midnight Navy",
    },
    {
      id: "gray",
      name: "Luxury Gray Flannel",
    },
  ];

  const lapels = [
    {
      id: "classic",
      name: "Classic",
    },
    {
      id: "peak",
      name: "Peak",
    },
    {
      id: "shawl",
      name: "Shawl",
    },
  ];

  const buttons = [
    {
      id: "black",
      name: "Black",
    },
    {
      id: "gold",
      name: "Gold",
    },
    {
      id: "silver",
      name: "Silver",
    },
  ];

  return (
    <div
      className="
      space-y-12
      "
    >
      {/* FABRIC */}

      <div>
        <h3
          className="
          text-xs
          uppercase
          tracking-[0.4em]
          text-[#C8A45D]
          mb-6
          "
        >
          Fabric
        </h3>

        <div
          className="
          space-y-3
          "
        >
          {fabrics.map((fabric) => (
            <button
              key={fabric.id}
              onClick={() =>
                setSuit({
                  ...suit,
                  fabric: fabric.id,
                })
              }
              className={`
              w-full
              text-left
              rounded-xl
              border
              px-6
              py-4
              transition-all
              duration-300
              ${
                suit.fabric === fabric.id
                  ? "border-[#C8A45D] bg-[#C8A45D]/10 shadow-[0_0_20px_rgba(200,164,93,0.15)]"
                  : "border-white/10 hover:border-white/40 hover:bg-white/5"
              }
              `}
            >
              <span className="text-white">{fabric.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* LAPEL */}

      <div>
        <h3
          className="
          text-xs
          uppercase
          tracking-[0.4em]
          text-[#C8A45D]
          mb-6
          "
        >
          Lapel Style
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {lapels.map((lapel) => (
            <button
              key={lapel.id}
              onClick={() =>
                setSuit({
                  ...suit,
                  lapel: lapel.id,
                })
              }
              className={`
              rounded-xl
border
py-4
text-sm
transition-all
duration-300
              ${
                suit.lapel === lapel.id
                  ? "border-[#C8A45D] text-[#C8A45D] bg-[#C8A45D]/10 shadow-[0_0_20px_rgba(200,164,93,0.12)]"
                  : "border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
              }
              `}
            >
              {lapel.name}
            </button>
          ))}
        </div>
      </div>

      {/* BUTTON */}

      <div>
        <h3
          className="
          text-xs
          uppercase
          tracking-[0.4em]
          text-[#C8A45D]
          mb-6
          "
        >
          Button
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() =>
                setSuit({
                  ...suit,
                  button: button.id,
                })
              }
              className={`
                rounded-xl
border
py-4
text-sm
transition-all
duration-300
              ${
                suit.button === button.id
                  ? "border-[#C8A45D] bg-[#C8A45D]/10 text-[#C8A45D] shadow-[0_0_20px_rgba(200,164,93,0.12)]"
                  : "border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
              }
              `}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuitOptions;
