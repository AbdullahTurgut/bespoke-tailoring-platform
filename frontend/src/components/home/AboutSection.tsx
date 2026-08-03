import { features } from "../../data/features";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
      py-28
      bg-[#FAFAF8]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* Left Side */}

          <div
            className="
            text-center
            lg:text-left
            "
          >
            <p
              className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-gray-500
              mb-8
              "
            >
              Terzi Murat
            </p>

            <h2
              className="
              text-7xl
              font-light
              tracking-tight
              "
            >
              15+
            </h2>

            <h3
              className="
              text-3xl
              uppercase
              tracking-[0.2em]
              font-light
              mt-2
              "
            >
              Yıllık
              <br />
              Ustalık
            </h3>

            <p
              className="
              mt-8
              text-gray-500
              max-w-md
              leading-relaxed
              "
            >
              Özel günleriniz için hazırlanan damatlık ve nişan takımlarında,
              kişisel ölçüleriniz ve tarzınız doğrultusunda zamansız tasarımlar
              oluşturuyoruz.
            </p>
          </div>

          {/* Right Side */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-10
            "
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                border-b
                border-gray-200
                pb-8
                "
              >
                <span
                  className="
                  text-sm
                  text-gray-400
                  "
                >
                  0{index + 1}
                </span>

                <h4
                  className="
                  text-xl
                  font-medium
                  mt-4
                  "
                >
                  {feature.title}
                </h4>

                <p
                  className="
                  text-gray-500
                  mt-3
                  text-sm
                  leading-relaxed
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
