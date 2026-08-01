import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Damatlıklar",
    to: "/#wedding",
    type: "anchor",
  },
  {
    label: "Nişan Takımları",
    to: "/#engagement",
    type: "anchor",
  },
  {
    label: "Özel Tasarım",
    to: "/create-your-suit",
    type: "route",
  },
  {
    label: "Hakkımızda",
    to: "/#about",
    type: "anchor",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const renderMenuItem = (item: (typeof menuItems)[number]) => {
    const className = `
      text-sm
      text-white/70
      transition
      hover:text-white
    `;

    if (item.type === "route") {
      return (
        <Link key={item.label} to={item.to} className={className}>
          {item.label}
        </Link>
      );
    }

    return (
      <a key={item.label} href={item.to} className={className}>
        {item.label}
      </a>
    );
  };

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

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          {menuItems.map(renderMenuItem)}
        </nav>

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
            Takımını Oluştur
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
          <div className="flex flex-col">
            {menuItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="
                  px-6
                  py-5
                  text-white/70
                  hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="
                  px-6
                  py-5
                  text-white/70
                  hover:text-white
                  "
                >
                  {item.label}
                </a>
              ),
            )}

            <Link
              to="/create-your-suit"
              onClick={() => setOpen(false)}
              className="
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
              Takımını Oluştur
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
