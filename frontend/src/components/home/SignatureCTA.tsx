import { Link } from "react-router-dom";

const SignatureCTA = () => {
  return (
    <section
      className="
      relative
      bg-[#0B0B0B]
      text-white
      py-36
      px-6
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        bg-[#C8A45D]
        opacity-10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        relative
        max-w-5xl
        mx-auto
        text-center
        "
      >
        <div
          className="
          w-24
          h-px
          bg-[#C8A45D]
          mx-auto
          mb-12
          "
        />

        <span
          className="
          text-xs
          uppercase
          tracking-[0.5em]
          text-[#C8A45D]
          "
        >
          Kişiye Özel Terzilik
        </span>

        <h2
          className="
          mt-8
          text-5xl
          md:text-7xl
          font-luxury
          font-light
          leading-tight
          "
        >
          Özel Gününüz İçin
          <br />
          Kusursuz Bir Başlangıç
        </h2>

        <p
          className="
          mt-8
          max-w-2xl
          mx-auto
          text-gray-400
          text-lg
          leading-relaxed
          "
        >
          Düğün ve nişan günleriniz için ölçülerinize, tarzınıza ve
          karakterinize özel tasarlanan takım elbisenizi birlikte oluşturalım.
        </p>

        <div
          className="
          mt-12
          flex
          justify-center
          "
        >
          <Link
            to="/create-your-suit"
            className="
            bg-[#C8A45D]
            text-black
            px-12
            py-5
            text-sm
            uppercase
            tracking-[0.2em]
            rounded-sm
            transition-all
            duration-300
            hover:bg-white
            "
          >
            Tasarımına Başla
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureCTA;
