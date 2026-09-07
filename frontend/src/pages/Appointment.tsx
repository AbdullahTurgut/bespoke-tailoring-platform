import { useLocation } from "react-router-dom";
import { fabricNames, lapelNames, buttonNames } from "@/constants/suitOptions";
import type { Suit } from "@/types/suit";
import { useState } from "react";
import { createAppointment } from "@/services/appointmentService";
import SEO from "@/components/seo/SEO";
import ErrorMessage from "@/components/shared/ErrorMessage";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

type AppointmentState = {
  suit?: Suit;
  price?: number;
};

const Appointment = () => {
  const location = useLocation();
  const { suit, price } = (location.state as AppointmentState) || {};
  const isConfigured = Boolean(suit && price !== undefined);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Lütfen zorunlu alanları doldurun.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const payload = {
        customer: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
        ...(isConfigured && suit && price !== undefined
          ? {
              suit: {
                fabric: suit.fabric,
                lapel: suit.lapel,
                button: suit.button,
              },
              price,
            }
          : {}),
      };

      const response = await createAppointment(payload);

      console.log("Randevu oluşturuldu:", response);

      setSubmitted(true);
    } catch (error) {
      console.error("Randevu gönderim hatası:", error);

      setError(
        "Randevu oluşturulurken bir hata oluştu. Lütfen tekrar deneyiniz.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Randevu Oluştur | Terzi Murat"
        description="Size özel damatlık ve nişan takımınız için Terzi Murat ile kişisel görüşme randevusu oluşturun."
      />

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
          {isConfigured && suit && price !== undefined ? (
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
              <div className="space-y-6 mt-8">
                <div>
                  <p
                    className="
      text-xs
      uppercase
      tracking-[0.3em]
      text-gray-500
      "
                  >
                    Fabric
                  </p>

                  <p className="mt-2 text-white text-lg">
                    {fabricNames[suit.fabric as keyof typeof fabricNames]}
                  </p>
                </div>

                <div>
                  <p
                    className="
      text-xs
      uppercase
      tracking-[0.3em]
      text-gray-500
      "
                  >
                    Lapel
                  </p>

                  <p className="mt-2 text-white text-lg">
                    {lapelNames[suit.lapel as keyof typeof lapelNames]}
                  </p>
                </div>

                <div>
                  <p
                    className="
      text-xs
      uppercase
      tracking-[0.3em]
      text-gray-500
      "
                  >
                    Button
                  </p>

                  <p className="mt-2 text-white text-lg">
                    {buttonNames[suit.button as keyof typeof buttonNames]}
                  </p>
                </div>
              </div>

              <div
                className="
mt-10
pt-6
border-t
border-white/10
"
              >
                <p
                  className="
text-xs
uppercase
tracking-[0.4em]
text-gray-500
"
                >
                  Tahmini Fiyat
                </p>

                <p
                  className="
mt-3
text-4xl
font-luxury
text-[#C8A45D]
"
                >
                  {price.toLocaleString("tr-TR")} ₺
                </p>
              </div>
            </div>
          ) : (
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
                Genel Randevu
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Model, kumaş ve ölçü detaylarını randevunuz sırasında birlikte belirleyebiliriz.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6">
              <ErrorMessage message={error} />
            </div>
          )}
          {submitted ? (
            <div
              className="
text-center
  border
  border-white/10
  bg-white/5
  rounded-2xl
  p-10
  shadow-2xl
  animate-fade-in
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
                Sayın {formData.name}, özel dikim talebiniz başarıyla
                oluşturuldu.
                <br />
                Ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </p>

              {isConfigured && price !== undefined ? (
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
                    {price.toLocaleString("tr-TR")} ₺
                  </p>
                </div>
              ) : (
                <div
                  className="
mt-8
border-t
border-white/10
pt-6
"
                >
                  <p className="text-sm text-gray-500">Randevu Türü</p>

                  <p
                    className="
mt-2
text-2xl
font-luxury
text-[#C8A45D]
"
                  >
                    Genel Atölye Randevusu
                  </p>
                </div>
              )}
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
                disabled={loading}
                className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
focus:ring-1
focus:ring-[#C8A45D]/40
transition-all
duration-300
            "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta"
                disabled={loading}
                className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
focus:ring-1
focus:ring-[#C8A45D]/40
transition-all
duration-300
            "
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                disabled={loading}
                className="
            w-full
            bg-white/5
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-[#C8A45D]
focus:ring-1
focus:ring-[#C8A45D]/40
transition-all
duration-300
            "
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Özel talepleriniz..."
                disabled={loading}
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
focus:ring-1
focus:ring-[#C8A45D]/40
transition-all
duration-300
            "
              />

              <button
                type="submit"
                disabled={loading}
                className="
             w-full
rounded-full
bg-[#C8A45D]
text-black
py-4
uppercase
tracking-[0.25em]
text-sm
font-medium
transition
duration-300
hover:bg-white
hover:-translate-y-1
disabled:opacity-50
disabled:cursor-not-allowed
            "
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <LoadingSpinner />
                    <span>Gönderiliyor...</span>
                  </div>
                ) : (
                  "Randevu Talebi Gönder"
                )}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Appointment;
