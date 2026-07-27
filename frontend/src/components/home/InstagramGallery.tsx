const InstagramGallery = () => {
  const images = [
    {
      src: "/images/gallery/atelier.jpg",
      title: "Atelier",
      large: true,
    },
    {
      src: "/images/gallery/fabric.jpg",
      title: "Premium Fabrics",
    },
    {
      src: "/images/gallery/tailor.jpg",
      title: "Handcrafted",
    },
    {
      src: "/images/gallery/suits.jpg",
      title: "Collection",
      large: true,
    },
    {
      src: "/images/gallery/measuring.jpg",
      title: "Perfect Fit",
    },
    {
      src: "/images/gallery/lifestyle.jpg",
      title: "Timeless Style",
    },
  ];
  return (
    <section className="bg-[#0F0F0F] py-32 px-6 md:px-16">
      <div className="text-center mb-20">
        <span className="text-[#C8A45D] uppercase tracking-[0.5em] text-xs">
          Atelier Moments
        </span>

        <h2 className="mt-6 text-5xl md:text-7xl font-luxury text-white">
          Craft Behind
          <br />
          Elegance
        </h2>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
          Her dikiş, her kumaş ve her prova; zamansız bir takım elbisenin
          arkasındaki ustalığın yansımasıdır.
        </p>
      </div>
      <div
        className="
  grid
  grid-cols-1
  md:grid-cols-3
  auto-rows-[260px]
  gap-6
  "
      >
        {images.map((image) => (
          <div
            key={image.title}
            className={`
group
relative
overflow-hidden
rounded-xl
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

            <div
              className="
        absolute
        inset-0
       bg-linear-to-t
from-black/80
via-black/10
to-transparent
        opacity-0
        group-hover:opacity-100
        backdrop-blur-[2px]
        transition
        duration-500
        flex
items-end
justify-between
p-8
      "
            >
              <div>
                <h3
                  className="
  text-white
  text-2xl
  font-luxury
  transition-all
  duration-500
  group-hover:-translate-y-1
  "
                >
                  {image.title}
                </h3>

                <div
                  className="
      mt-3
      w-10
      h-px
      bg-[#C8A45D]
      transition-all
      duration-500
      group-hover:w-24
      group-hover:bg-white
    "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;
