import { useLocation } from "react-router-dom";
import { fabricNames, lapelNames, buttonNames } from "@/constants/suitOptions";
import type { Suit } from "@/types/suit";
import { useState } from "react";

type AppointmentState = {
  suit: Suit;
  price: number;
};

const Appointment = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      customer: formData,
      suit,
      price,
    });

    setSubmitted(true);
  };

  const { suit, price } = (location.state as AppointmentState) || {};

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
            <div>
              {" "}
              <span>
                Fabric : {fabricNames[suit.fabric as keyof typeof fabricNames]}
              </span>
            </div>
            <div>
              <span>
                Lapel : {lapelNames[suit.lapel as keyof typeof lapelNames]}
              </span>
            </div>
            <div>
              <span>
                Button : {buttonNames[suit.button as keyof typeof buttonNames]}
              </span>
            </div>

            <p className="mt-4 text-xl">Tahmini Fiyat: {price} TL</p>
          </div>
        )}
        {submitted ? (
          <div
            className="
text-center
border
border-white/10
bg-white/5
p-10
"
          >
            <div
              className="
text-[#C8A45D]
text-4xl
mb-6
"
            >
              ✓
            </div>

            <h2
              className="
text-4xl
font-luxury
"
            >
              Randevu Talebiniz Alındı
            </h2>

            <p
              className="
mt-6
text-gray-400
leading-relaxed
"
            >
              Sayın {formData.name}, özel dikim talebiniz başarıyla oluşturuldu.
              <br />
              Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>

            <div
              className="
mt-8
border-t
border-white/10
pt-6
"
            >
              <p className="text-sm text-gray-500">Tahmini Fiyat</p>

              <p
                className="
mt-2
text-3xl
font-luxury
"
              >
                {price} TL
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="
          space-y-6
          "
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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
              name="message"
              value={formData.message}
              onChange={handleChange}
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
        )}
      </div>
    </main>
  );
};

export default Appointment;
