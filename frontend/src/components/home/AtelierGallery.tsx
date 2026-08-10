import { galleryImages } from "../../data/gallery";

const AtelierGallery = () => {
  return (
    <section className="bg-[#0B0B0B] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}

        <div className="mb-20 text-center">
          <span
            className="
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#C8A45D]
            "
          >
            Terzi Murat Atölyesi
          </span>

          <h2
            className="
              mt-6
              font-luxury
              text-5xl
              font-light
              text-white
              md:text-7xl
            "
          >
            Ustalığın
            <br />
            İzleri
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              leading-relaxed
              text-gray-400
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
            auto-rows-[280px]
            grid-cols-1
            gap-6
            md:grid-cols-3
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
                hover:-translate-y-1
                ${image.large ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              <img
                src={image.src}
                alt={image.title}
                className="
                  h-full
                  w-full
                  object-cover
                  brightness-[0.92]
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:brightness-100
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-end
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  p-8
                  opacity-100
                  transition
                  duration-500
                  md:opacity-0
                  md:group-hover:opacity-100
                "
              >
                <div>
                  <h3
                    className="
                      font-luxury
                      text-3xl
                      text-white
                    "
                  >
                    {image.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-relaxed
                      text-gray-300
                    "
                  >
                    {image.description}
                  </p>

                  <div
                    className="
                      mt-5
                      h-px
                      w-12
                      bg-[#C8A45D]
                      transition-all
                      duration-500
                      md:group-hover:w-24
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
