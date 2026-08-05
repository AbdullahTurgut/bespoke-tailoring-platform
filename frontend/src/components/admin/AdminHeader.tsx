import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";
import toast from "react-hot-toast";
export default function AdminHeader() {
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
    <header
      className="
      flex
      items-center
      justify-between
      border-b
      border-white/10
      px-10
      py-6
      "
    >
      <div>
        <h2
          className="
          text-xl
          font-luxury
          "
        >
          Yönetim Paneli
        </h2>

        <p
          className="
          mt-1
          text-xs
          uppercase
          tracking-widest
          text-gray-500
          "
        >
          Terzi Murat
        </p>
      </div>

      <div
        className="
        text-right
        "
      >
        <p className="text-sm">Hoş Geldiniz</p>

        <p
          className="
          text-[#C8A45D]
          text-sm
          "
        >
          Admin
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Yönetici
          </p>

          <p className="text-white">Admin Panel</p>
        </div>

        <button
          onClick={handleLogout}
          className="
    flex
    items-center
    gap-2
    text-red-400
    hover:text-red-300
    transition
    "
        >
          <LogOut size={18} />

          <span className="text-sm uppercase tracking-[0.2em]">Çıkış Yap</span>
        </button>
      </div>
    </header>
  );
}
