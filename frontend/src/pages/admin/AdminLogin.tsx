import SEO from "@/components/seo/SEO";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLogin = () => {
  return (
    <>
      <SEO
        title="Yönetici Girişi | Terzi Murat"
        description="Terzi Murat yönetim paneli giriş ekranı."
      />

      <main
        className="
        min-h-screen
        bg-[#0B0B0B]
        flex
        items-center
        justify-center
        px-6
        "
      >
        <div
          className="
          w-full
          max-w-md
          "
        >
          <div className="text-center mb-12">
            <span
              className="
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#C8A45D]
              "
            >
              Admin Panel
            </span>

            <h1
              className="
              mt-6
              text-5xl
              font-luxury
              text-white
              "
            >
              Yönetici Girişi
            </h1>

            <p
              className="
              mt-5
              text-gray-400
              "
            >
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
