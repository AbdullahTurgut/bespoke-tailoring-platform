import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-[calc(100vh-80px)]
      overflow-hidden
      bg-[#080808]
      "
    >
      {/* Background atmosphere */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-[radial-gradient(circle_at_75%_45%,rgba(200,164,93,0.10),transparent_32%)]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-r
        from-black
        via-black/90
        to-black/40
        "
      />

      <div
        className="
        relative
        mx-auto
  grid
  min-h-[calc(100vh-80px)]
  max-w-7xl
  items-center
  gap-8
  px-5
  py-14
  sm:px-6
  sm:py-16
  lg:grid-cols-2
  lg:gap-12
  lg:px-8
  lg:py-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 animate-fade-in">
          <p
            className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#C8A45D]
            "
          >
            Bespoke Wedding Atelier
          </p>

          <div
            className="
            mt-6
            h-px
            w-16
            bg-[#C8A45D]/70
            "
          />

          <h1
            className="
            mt-7
  max-w-2xl
  text-[3rem]
  font-luxury
  font-light
  leading-[0.94]
  tracking-wide
  text-white
  sm:text-6xl
  md:text-7xl
            "
          >
            En Özel Gününüze
            <br />
            <span className="text-[#C8A45D]">En Özel Tasarım</span>
          </h1>

          <p
            className="
            mt-6
  max-w-lg
  text-sm
  leading-relaxed
  text-gray-400
  sm:mt-8
  sm:text-base
  md:text-lg
            "
          >
            Damatlık ve özel gün takımlarında kişisel ölçüleriniz, seçkin
            kumaşlar ve usta terzilik ile kusursuz uyum.
          </p>

          {/* CTA */}
          <div
            className="
             mt-8
  flex
  w-full
  flex-col
  gap-3
  sm:mt-10
  sm:w-auto
  sm:flex-row
  sm:gap-4
            "
          >
            <Link
              to="/create-your-suit"
              className="
              group
              inline-flex
              items-center
              justify-center
              rounded-sm
              border
              border-[#C8A45D]
              bg-[#C8A45D]
              px-10
              py-4
              text-sm
              uppercase
              tracking-[0.15em]
              text-black
              transition-all
              duration-300
              w-full
sm:w-auto
              hover:bg-transparent
              hover:text-[#C8A45D]
              "
            >
              Takımını Oluştur
            </Link>

            <Link
              to="/appointment"
              className="
              inline-flex
              items-center
              justify-center
              w-full
sm:w-auto
              rounded-sm
              border
              border-white/20
              px-10
              py-4
              text-sm
              uppercase
              tracking-[0.15em]
              text-white
              transition-all
              duration-300
              hover:border-[#C8A45D]
              hover:text-[#C8A45D]
              "
            >
              Randevu Al
            </Link>
          </div>

          {/* Brand detail */}
          <div
            className="
            mt-12
            flex
            items-center
            gap-4
            text-xs
            uppercase
            tracking-[0.35em]
            text-gray-600
            "
          >
            <span className="h-px w-8 bg-gray-700" />
            Since 1998
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
          relative
  flex
  min-h-[360px]
  items-center
  justify-center
  animate-fade-in
  sm:min-h-[430px]
  lg:min-h-[650px]
          "
          style={{ animationDelay: "500ms" }}
        >
          {/* Luxury glow */}
          <div
            className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C8A45D]/10
            blur-[100px]
            animate-luxury-glow
            "
          />

          {/* Image frame */}
          <div
            className="
             absolute
  right-[8%]
  top-[10%]
  h-[72%]
  w-[82%]
  border
  border-[#C8A45D]/10
  sm:h-[78%]
  sm:w-[78%]
            "
          />

          <img
            src="/images/luxury-suit.png"
            alt="Luxury Suit"
            className="
  relative
  z-10
  w-full
  max-w-[320px]
  object-contain
  animate-suit-zoom
  drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]
  sm:max-w-md
  lg:max-w-xl
  "
          />

          {/* Image overlay */}
          <div
            className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-t
            from-[#080808]
            via-transparent
            to-transparent
            "
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        flex-col
        items-center
        gap-3
        md:flex
        "
      >
        <span
          className="
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-gray-600
          "
        >
          Scroll
        </span>

        <span
          className="
          h-10
          w-px
          bg-gradient-to-b
          from-[#C8A45D]
          to-transparent
          "
        />
      </div>
    </section>
  );
};

export default Hero;
