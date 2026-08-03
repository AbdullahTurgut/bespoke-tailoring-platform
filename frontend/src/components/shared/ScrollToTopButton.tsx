import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
      fixed
      bottom-8
      right-8
      z-50
      w-12
      h-12
      rounded-full
      bg-[#C8A45D]
      text-black
      flex
      items-center
      justify-center
      shadow-lg
      transition-all
      duration-300
      hover:bg-white
      hover:-translate-y-1
      "
      aria-label="Yukarı çık"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
