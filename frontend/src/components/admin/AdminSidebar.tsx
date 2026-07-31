import { NavLink } from "react-router-dom";
import { LayoutDashboard, CalendarDays } from "lucide-react";

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

export default function AdminSidebar() {
  return (
    <aside
      className="
      flex
      min-h-screen
      w-72
      flex-col
      border-r
      border-white/10
      bg-[#090909]
      "
    >
      {/* Logo */}
      <div className="border-b border-white/10 px-8 py-10">
        <h1
          className="
          text-3xl
          font-luxury
          tracking-[0.25em]
          text-[#C8A45D]
          "
        >
          TERZİ MURAT
        </h1>

        <p
          className="
          mt-2
          text-xs
          uppercase
          tracking-[0.35em]
          text-gray-500
          "
        >
          Admin Panel
        </p>
      </div>

      {/* Menü */}
      <nav className="flex-1 space-y-2 px-5 py-8">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-4
                rounded-xl
                px-5
                py-4
                transition-all
                ${
                  isActive
                    ? "bg-[#C8A45D] text-black"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >
              <Icon size={20} />

              <span
                className="
                text-sm
                uppercase
                tracking-widest
                "
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className="
        border-t
        border-white/10
        px-8
        py-6
        "
      >
        <p className="text-xs text-gray-500">Premium Tailoring</p>

        <p
          className="
          mt-1
          text-sm
          text-[#C8A45D]
          "
        >
          Since 1998
        </p>
      </div>
    </aside>
  );
}
