import SEO from "@/components/seo/SEO";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLogin = () => {
  return (
    <>
      <SEO
        title="Yönetici Girişi | Terzi Murat"
        description="Terzi Murat yönetim paneli giriş ekranı."
      />

      <main className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.45em] text-[#C8A45D]">
              Admin Panel
            </span>

            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-luxury text-white">
              Yönetici Girişi
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
              Bu alan yalnızca yetkili personel içindir.
            </p>
          </div>

          <AdminLoginForm />
        </div>
      </main>
    </>
  );
};

export default AdminLogin;
