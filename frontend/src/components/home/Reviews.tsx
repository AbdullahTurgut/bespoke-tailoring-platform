const Reviews = () => {
  const reviews = [
    {
      quote:
        "Bir takım elbiseden fazlası. Düğün günüm için tamamen bana özel hazırlanmış kusursuz bir deneyimdi.",
      name: "Özel Damatlık Müşterisi",
      role: "İstanbul",
    },
    {
      quote:
        "Kumaş seçiminden son provaya kadar her detay büyük bir özenle planlandı.",
      name: "Nişan Takımı Müşterisi",
      role: "Kişiye Özel Tasarım",
    },
    {
      quote:
        "Tarzımı yansıtan, ölçülerime göre hazırlanmış zamansız bir takım elbise.",
      name: "Özel Tasarım Müşterisi",
      role: "Bespoke Experience",
    },
  ];
  return (
    <section
      className="
      bg-[#FAFAF8]
      text-black
      py-32
      px-6
      md:px-16
      "
    >
      <div
        className="
        max-w-5xl
  mx-auto
  text-center
  animate-fade-in
  "
      >
        <span
          className="
          text-xs
          tracking-[0.5em]
          text-[#C8A45D]
          uppercase
          "
        >
          Müşteri Deneyimleri
        </span>

        <h2
          className="
          mt-6
          text-5xl
          md:text-7xl
          font-luxury
          font-light
          "
        >
          Zarafeti
          <br />
          Deneyimleyenler
        </h2>

        <p
          className="
          mt-8
          text-gray-500
          max-w-2xl
          mx-auto
          leading-relaxed
          "
        >
          Düğün ve özel günleriniz için hazırlanan her takım, kişisel
          ölçüleriniz ve tarzınız doğrultusunda benzersiz bir deneyime dönüşür.
        </p>

        <div
          className="
  mt-20
  grid
  md:grid-cols-3
  gap-10
  "
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="
              group
  border-t
  border-gray-200
  pt-10
  text-left
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-[#C8A45D]
  "
            >
              <div
                className="
  text-[#C8A45D]
  text-5xl
  mb-6
  transition-transform
  duration-500
  group-hover:scale-110
  "
              >
                “
              </div>

              <blockquote
                className="
        text-2xl
md:text-3xl
font-luxury
leading-relaxed
transition-colors
duration-500
group-hover:text-black
        "
              >
                {review.quote}
              </blockquote>

              <div className="mt-8">
                <p
                  className="
          text-sm
          tracking-[0.3em]
          uppercase
          "
                >
                  {review.name}
                </p>

                <p
                  className="
          mt-2
          text-gray-500
          text-sm
          "
                >
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
