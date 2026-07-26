import { Heart, ShoppingBag } from "lucide-react";

const menuItems = [
  "Koleksiyon",
  "Düğün Takımları",
  "Özel Tasarım",
  "Hakkımızda",
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="text-xl font-semibold tracking-[0.3em]">
          TERZİ MURAT
        </div>

        {/* Menü */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="text-white/70 transition hover:text-white">
            <Heart size={20} />
          </button>

          <button className="text-white/70 transition hover:text-white">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
