import { features } from "../../data/features";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        border-t
        border-gray-200
        bg-white
        py-24
        md:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          md:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-2
            lg:gap-24
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
                mb-8
                text-sm
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              Terzi Murat
            </p>

            <h2
              className="
                text-7xl
                font-light
                tracking-tight
                text-[#C8A45D]
              "
            >
              15+
            </h2>

            <h3
              className="
                mt-2
                text-3xl
                font-light
                uppercase
                tracking-[0.2em]
              "
            >
              Yıllık
              <br />
              Ustalık
            </h3>

            <p
              className="
                mx-auto
                mt-8
                max-w-md
                leading-relaxed
                text-gray-500
                lg:mx-0
              "
            >
              1996 yılında başlayan terzilik yolculuğumuzu, 2004 yılında Terzi
              Murat markasıyla kendi iş yerimize taşıdık. Bugün kişiye özel
              ölçü, seçkin kumaşlar ve usta işçilikle zamansız tasarımlar
              hazırlıyoruz.
            </p>

            <p
              className="
                mt-6
                text-sm
                uppercase
                tracking-[0.2em]
                text-gray-400
              "
            >
              Gebze • 2004'ten beri
            </p>
          </div>

          {/* Right Side */}

          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
            "
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  group
                  border-b
                  border-gray-200
                  pb-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C8A45D]/50
                "
              >
                <span
                  className="
                    text-sm
                    tracking-widest
                    text-[#C8A45D]
                  "
                >
                  0{index + 1}
                </span>

                <h4
                  className="
                    mt-4
                    text-xl
                    font-medium
                  "
                >
                  {feature.title}
                </h4>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-gray-500
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
