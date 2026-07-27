const SignatureCTA = () => {
  return (
    <section
      className="
      bg-[#0B0B0B]
      text-white
      py-32
      px-6
      "
    >
      <div
        className="
        max-w-4xl
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
          Your Signature
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
          Hazır Giyim Değil.
          <br />
          Size Özel Bir Karakter.
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
          Her büyük takım elbise tek bir ölçüyle başlar. Kusursuz uyumu birlikte
          tasarlayalım.
        </p>

        <button
          className="
          mt-12
          bg-[#C8A45D]
          text-black
          px-10
          py-4
          text-sm
          uppercase
          tracking-[0.2em]
          rounded-sm
          transition-all
          duration-300
          hover:bg-white
          hover:scale-105
          "
        >
          Takımını Oluştur
        </button>
      </div>
    </section>
  );
};

export default SignatureCTA;
