export default function AdminHeader() {
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
    </header>
  );
}
