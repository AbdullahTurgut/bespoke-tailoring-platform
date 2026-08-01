import { galleryImages } from "../../data/gallery";

const AtelierGallery = () => {
  return (
    <section
      className="
      bg-[#0F0F0F]
      py-32
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
        {/* Header */}

        <div className="text-center mb-20">
          <span
            className="
            text-[#C8A45D]
            uppercase
            tracking-[0.5em]
            text-xs
            "
          >
            Terzi Murat Atölyesi
          </span>

          <h2
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-luxury
            text-white
            font-light
            "
          >
            Ustalığın
            <br />
            İzleri
          </h2>

          <p
            className="
            mt-8
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
            "
          >
            Her kumaş, her ölçü ve her detay; kişiye özel bir takım elbisenin
            arkasındaki emeği ve ustalığı yansıtır.
          </p>
        </div>

        {/* Gallery */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          auto-rows-[280px]
          gap-6
          "
        >
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className={`
              group
              relative
              overflow-hidden
              rounded-2xl
              transition-all
              duration-700
              hover:-translate-y-2
              ${image.large ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              <img
                src={image.src}
                alt={image.title}
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-linear-to-t
                from-black/90
                via-black/20
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                flex
                items-end
                p-8
                "
              >
                <div>
                  <h3
                    className="
                    text-white
                    text-3xl
                    font-luxury
                    "
                  >
                    {image.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-gray-300
                    text-sm
                    max-w-sm
                    leading-relaxed
                    "
                  >
                    {image.description}
                  </p>

                  <div
                    className="
                    mt-5
                    w-12
                    h-px
                    bg-[#C8A45D]
                    transition-all
                    duration-500
                    group-hover:w-24
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtelierGallery;
