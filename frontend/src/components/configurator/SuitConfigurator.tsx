import { useState } from "react";
import SuitOptions from "./SuitOptions";
import SuitPreview from "./SuitPreview";

const SuitConfigurator = () => {
  const [suit, setSuit] = useState({
    fabric: "black",
    lapel: "classic",
    button: "black",
  });

  return (
    <div
      className="
      grid
      md:grid-cols-2
      gap-8
      items-center
      "
    >
      <SuitOptions suit={suit} setSuit={setSuit} />

      <SuitPreview suit={suit} />
    </div>
  );
};

export default SuitConfigurator;
