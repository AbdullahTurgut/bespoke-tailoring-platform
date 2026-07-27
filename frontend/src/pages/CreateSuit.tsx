import SuitConfigurator from "@/components/configurator/SuitConfigurator";

const CreateSuit = () => {
  return (
    <main
      className="
      min-h-screen
      bg-[#0B0B0B]
      text-white
      "
    >
      <section
        className="
        py-24
        px-6
        md:px-16
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          "
        >
          <div className="text-center mb-20">
            <span
              className="
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#C8A45D]
              "
            >
              Bespoke Studio
            </span>

            <h1
              className="
              mt-6
              text-5xl
              md:text-7xl
              font-luxury
              font-light
              "
            >
              Takımını
              <br />
              Tasarla
            </h1>

            <p
              className="
              mt-8
              max-w-2xl
              mx-auto
              text-gray-400
              text-lg
              "
            >
              Kumaş, kesim ve detayları seçerek size özel takım elbisenizi
              oluşturun.
            </p>
          </div>

          <SuitConfigurator />
        </div>
      </section>
    </main>
  );
};

export default CreateSuit;
