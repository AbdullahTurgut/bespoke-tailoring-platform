import { useState } from "react";
import SuitOptions from "./SuitOptions";
import SuitPreview from "./SuitPreview";
import type { Suit } from "@/types/suit";

const SuitConfigurator = () => {
  const [suit, setSuit] = useState<Suit>({
    fabric: "black",
    lapel: "classic",
    button: "black",
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-7">
        <SuitOptions suit={suit} setSuit={setSuit} />
      </div>

      <div className="lg:col-span-5 lg:sticky lg:top-24">
        <SuitPreview suit={suit} />
      </div>
    </div>
  );
};

export default SuitConfigurator;

