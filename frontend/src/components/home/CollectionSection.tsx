import ProductCard from "../shared/ProductCard";
import { products } from "../../data/products";

interface CollectionSectionProps {
  title: string;
  description: string;
  category: "Wedding" | "Engagement";
}

const CollectionSection = ({
  title,
  description,
  category,
}: CollectionSectionProps) => {
  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <section
      className="
      py-24
      bg-[#FAFAF8]
    "
    >
      {/* Header */}

      <div
        className="
        text-center
        mb-14
      "
      >
        <h2
          className="
          text-3xl
          md:text-5xl
          uppercase
          tracking-[0.25em]
          font-light
        "
        >
          {title}
        </h2>

        <p
          className="
          mt-6
          text-gray-500
          max-w-xl
          mx-auto
          leading-relaxed
        "
        >
          {description}
        </p>

        <button
          className="
          mt-8
          uppercase
          text-sm
          tracking-[0.25em]
          border-b
          border-black
          pb-2
          hover:opacity-60
          transition
          "
        >
          Explore Collection →
        </button>
      </div>

      {/* Products */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
