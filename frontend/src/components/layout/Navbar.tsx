import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  "Düğün Takımları",
  "Nişan Takımları",
  "Özel Tasarım",
  "Hakkımızda",
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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

        {/* Menü */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item}
              to="/"
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link
            to="/create-your-suit"
            className="
    hidden
    md:block
    bg-[#C8A45D]
    text-black
    px-6
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

          <button className="text-white/70 transition hover:text-white">
            <Heart size={20} />
          </button>

          <button className="text-white/70 transition hover:text-white">
            <ShoppingBag size={20} />
          </button>

          <button
            className="md:hidden text-white"
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
          {menuItems.map((item) => (
            <Link
              key={item}
              to="/"
              onClick={() => setOpen(false)}
              className="
  block
  px-6
  py-5
  text-white/70
  hover:text-white
  "
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
