import { NavLink } from "react-router-dom";
import { LayoutDashboard, CalendarDays, X } from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Randevular",
    path: "/admin/appointments",
    icon: CalendarDays,
  },
];

type Props = {
  open?: boolean;
  onClose?: () => void;
};

export default function AdminSidebar({ open = false, onClose }: Props) {
  return (
    <>
      {/* Mobile Drawer Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/75 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar / Off-canvas drawer */}
      <aside
        aria-label="Yönetici Menüsü"
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#090909]
          transition-transform duration-300 ease-in-out lg:static lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo & Close for mobile */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 sm:px-8 py-7 sm:py-9">
          <div>
            <h1 className="text-2xl sm:text-3xl font-luxury tracking-[0.2em] text-[#C8A45D]">
              TERZİ MURAT
            </h1>

            <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gray-500">
              Admin Panel
            </p>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Menüyü Kapat"
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 sm:px-5 py-6 sm:py-8">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  group flex items-center gap-4 rounded-xl px-4 sm:px-5 py-3.5 transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
                  ${
                    isActive
                      ? "bg-[#C8A45D] text-black font-medium shadow-md shadow-[#C8A45D]/15"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                  `
                }
              >
                <Icon size={20} className="shrink-0" />

                <span className="text-xs sm:text-sm uppercase tracking-widest">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer info */}
        <div className="border-t border-white/10 px-6 sm:px-8 py-5 sm:py-6">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Premium Tailoring
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#C8A45D] font-luxury">
            2004'ten beri
          </p>
        </div>
      </aside>
    </>
  );
}

