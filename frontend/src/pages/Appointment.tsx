import { useLocation } from "react-router-dom";

const Appointment = () => {
  const location = useLocation();

  const { suit, price } = location.state || {};
  return (
    <main
      className="
      min-h-screen
      bg-[#0B0B0B]
      text-white
      px-6
      md:px-16
      py-24
      "
    >
      <div
        className="
        max-w-3xl
        mx-auto
        "
      >
        <div className="text-center mb-16">
          <span
            className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#C8A45D]
            "
          >
            Kişiye Özel Randevu
          </span>

          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-luxury
            "
          >
            Sizin Tarzınız
          </h1>

          <p
            className="
            mt-6
            text-gray-400
            text-lg
            "
          >
            Size özel takım elbiseniz için uzman terzimizle görüşme oluşturun.
          </p>
        </div>
        {suit && (
          <div
            className="
mb-10
border
border-white/10
p-6
bg-white/5
"
          >
            <h3
              className="
text-[#C8A45D]
uppercase
tracking-[0.3em]
text-xs
"
            >
              Seçilen Takım Elbise Detayları
            </h3>

            <p className="mt-4">Fabric: {suit.fabric}</p>

            <p>Lapel: {suit.lapel}</p>

            <p>Button: {suit.button}</p>

            <p className="mt-4 text-xl">Tahmini Fiyat: {price} TL</p>
          </div>
        )}
        <form
          className="
          space-y-6
          "
        >
          <input
            type="text"
            placeholder="Ad Soyad"
            className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
            "
          />

          <input
            type="email"
            placeholder="E-posta"
            className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
            "
          />

          <input
            type="tel"
            placeholder="Telefon"
            className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
            "
          />

          <textarea
            placeholder="Özel talepleriniz..."
            rows={5}
            className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
            "
          />

          <button
            type="submit"
            className="
            w-full
            bg-[#C8A45D]
            text-black
            py-4
            uppercase
            tracking-[0.2em]
            text-sm
            hover:bg-white
            transition
            "
          >
            Randevu Talebi Gönder
          </button>
        </form>
      </div>
    </main>
  );
};

export default Appointment;
