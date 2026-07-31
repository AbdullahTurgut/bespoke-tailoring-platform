import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="
  relative
  min-h-[90vh]
      flex
      items-center
      bg-[#0B0B0B]
      text-white
      px-6
      md:px-16
      overflow-hidden
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
          max-w-xl
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
            Bespoke Collection
          </span>

          <h1
            className="
mt-6
text-5xl
md:text-8xl
font-luxury
font-light
leading-[0.95]
tracking-wide
"
          >
            Kusursuz Uyum.
            <br />
            Zamansız Zarafet.
          </h1>

          <p
            className="
            mt-8
            text-gray-400
            text-lg
            max-w-lg
            leading-relaxed
            "
          >
            Kendi ölçüleriniz, kendi tarzınız ve zamansız bir siluet. Seçkin
            kumaşlar ile usta terziliğin birleştiği özel koleksiyonlar.
          </p>

          <div
            className="
            mt-10
           flex
flex-col
sm:flex-row
gap-4
            "
          >
            <Link
              to="/create-your-suit"
              className="
            bg-[#C8A45D]
text-black
px-10
py-4
text-sm
tracking-[0.15em]
uppercase
transition-all
duration-300
hover:bg-white
rounded-sm
              "
            >
              Takımını Oluştur
            </Link>

            <button
              className="
  border
  border-gray-600
  px-10
  py-4
  text-sm
  tracking-[0.15em]
  uppercase
  transition-all
  duration-300
  hover:border-white
  hover:bg-white
  hover:text-black
  rounded-sm
  "
            >
              Koleksiyonu İncele
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
 flex
  justify-center
  relative
  md:translate-x-8
  animate-fade-in
[animation-delay:500ms]
"
        >
          <div
            className="
    absolute
    w-80
    h-80
    bg-[#C8A45D]
    opacity-20
    blur-3xl
    rounded-full
    "
          />

          <img
            src="/images/luxury-suit.png"
            alt="Luxury Suit"
            className="
   relative
w-full
max-w-xl
scale-100
md:scale-110
object-contain
transition-transform
duration-700
hover:scale-[1.15]
    "
          />
        </div>
      </div>
      <div
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-xs
        tracking-[0.4em]
        text-gray-600
        uppercase
        "
      >
        Scroll
      </div>
    </section>
  );
};

export default Hero;
