import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);

    try {
      /*
       * Şimdilik demo login.
       * JWT entegrasyonunda burası authService.login()
       * olacak.
       */

      login();

      navigate("/admin");
    } catch {
      setError("Giriş sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-8
      backdrop-blur-sm
      space-y-6
      "
    >
      {error && (
        <div
          className="
          border
          border-red-500/30
          bg-red-500/10
          text-red-300
          px-4
          py-3
          rounded-lg
          text-sm
          "
        >
          {error}
        </div>
      )}

      <div>
        <label
          className="
          block
          mb-2
          text-xs
          uppercase
          tracking-[0.25em]
          text-gray-400
          "
        >
          E-posta
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="admin@example.com"
          className="
          w-full
          bg-black/40
          border
          border-white/10
          px-5
          py-4
          text-white
          outline-none
          rounded-lg
          transition-all
          duration-300
          focus:border-[#C8A45D]
          focus:ring-1
          focus:ring-[#C8A45D]/40
          "
        />
      </div>

      <div>
        <label
          className="
          block
          mb-2
          text-xs
          uppercase
          tracking-[0.25em]
          text-gray-400
          "
        >
          Şifre
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="
          w-full
          bg-black/40
          border
          border-white/10
          px-5
          py-4
          text-white
          outline-none
          rounded-lg
          transition-all
          duration-300
          focus:border-[#C8A45D]
          focus:ring-1
          focus:ring-[#C8A45D]/40
          "
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        bg-[#C8A45D]
        text-black
        py-4
        rounded-lg
        uppercase
        tracking-[0.25em]
        text-sm
        font-medium
        transition-all
        duration-300
        hover:bg-white
        hover:-translate-y-1
        disabled:opacity-50
        disabled:cursor-not-allowed
        "
      >
        {loading ? "Giriş Yapılıyor..." : "Yönetim Paneline Giriş"}
      </button>
    </form>
  );
};

export default AdminLoginForm;
