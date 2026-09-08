import { LogOut, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";
import toast from "react-hot-toast";

type Props = {
  sidebarOpen?: boolean;
  onToggleSidebar?: () => void;
};

export default function AdminHeader({
  sidebarOpen = false,
  onToggleSidebar,
}: Props) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Oturum başarıyla kapatıldı.");
    navigate("/admin/login", {
      replace: true,
    });
  };

  return (
    <header className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 lg:px-10 py-4 sm:py-5 bg-[#070707]/80 backdrop-blur-md sticky top-0 z-30">
      {/* Left side: Mobile menu toggle + page brand */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          aria-expanded={sidebarOpen}
          className="
            lg:hidden p-2 -ml-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5
            transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
          "
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div>
          <h2 className="text-lg sm:text-xl font-luxury text-white">
            Yönetim Paneli
          </h2>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C8A45D]">
            Terzi Murat
          </p>
        </div>
      </div>

      {/* Right side: Consolidated Admin Profile & Logout */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden sm:block text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Hoş Geldiniz
          </p>
          <p className="text-sm font-medium text-[#C8A45D]">Yönetici</p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="
            flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10
            px-3.5 sm:px-4 py-2 text-red-400 hover:bg-red-500/20 hover:text-red-300
            transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider font-medium
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400
          "
        >
          <LogOut size={16} />
          <span>Çıkış</span>
        </button>
      </div>
    </header>
  );
}

