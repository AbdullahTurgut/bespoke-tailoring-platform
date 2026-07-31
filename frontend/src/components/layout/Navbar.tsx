import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Damatlıklar",
    path: "/#wedding",
  },
  {
    label: "Nişan Takımları",
    path: "/#engagement",
  },
  {
    label: "Özel Tasarım",
    path: "/create-your-suit",
  },
  {
    label: "Hakkımızda",
    path: "/about",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      relative
      w-full
      border-b
      border-white/10
      bg-black
      text-white
      "
    >
      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
          text-xl
          font-semibold
          tracking-[0.3em]
          "
        >
          TERZİ MURAT
        </Link>

        {/* Desktop Menu */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="
              text-sm
              text-white/70
              transition
              hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile */}

        <div
          className="
          flex
          items-center
          gap-5
          "
        >
          <Link
            to="/create-your-suit"
            className="
            hidden
            md:block
            bg-[#C8A45D]
            text-black
            px-7
            py-3
            text-xs
            tracking-[0.2em]
            uppercase
            rounded-sm
            transition
            hover:bg-white
            "
          >
            Randevu Oluştur
          </Link>

          <button
            className="
            md:hidden
            text-white
            "
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            md:hidden
            absolute
            top-20
            left-0
            w-full
            bg-black
            z-50
            border-t
            border-white/10
            "
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className="
                  block
                  px-6
                  py-5
                  text-white/70
                  hover:text-white
                  "
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/create-your-suit"
            onClick={() => setOpen(false)}
            className="
              block
              mx-6
              my-5
              text-center
              bg-[#C8A45D]
              text-black
              py-4
              text-xs
              uppercase
              tracking-[0.2em]
              "
          >
            Randevu Oluştur
          </Link>
        </div>
      )}
    </header>
  );
}
