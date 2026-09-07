import { Heart, Star } from "lucide-react";
import type { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="
      group
      bg-white
      rounded-xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      {/* Image Area */}
      <div
        className="
        relative
        overflow-hidden
        aspect-[3/4]
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
    ease-out
    group-hover:scale-[1.03]
  "
        />

        {/* Badge */}
        {product.badge && (
          <span
            className="
            absolute
            top-4
            left-4
            bg-black/75
            text-[#C8A45D]
            text-[10px]
            font-medium
            uppercase
            tracking-widest
            px-3
            py-1
            rounded-full
            "
          >
            {product.badge}
          </span>
        )}

        {/* Favorite Button */}

        <button
          aria-label="Favorilere ekle"
          className="
          absolute
          top-4
          right-4
          bg-white/90
          rounded-full
          p-2
          hover:scale-110
          transition
          "
        >
          <Heart size={20} strokeWidth={1.5} />
        </button>

        {/* Hover Button */}

        <div
          className="
          absolute
          inset-x-0
          bottom-5
          flex
          justify-center
          opacity-0
          translate-y-4
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-300
          "
        >
          <button
            className="
            bg-black
            text-white
            px-6
            py-3
            rounded-full
            text-sm
            tracking-wide
            "
          >
            İncele →
          </button>
        </div>
      </div>

      {/* Product Info */}

      <div
        className="
        p-5
        "
      >
        {/* Category */}

        <p
          className="
          text-sm
          text-gray-500
          mb-1
          "
        >
          {product.category}
        </p>

        {/* Product Name */}

        <h3
          className="
          text-lg
          font-medium
          "
        >
          {product.name}
        </h3>

        {/* Fabric + Fit */}

        <div
          className="
          flex
          gap-2
          mt-3
          text-sm
          "
        >
          <span
            className="
            bg-gray-100
            px-3
            py-1
            rounded-full
            "
          >
            {product.fabric}
          </span>

          <span
            className="
            bg-gray-100
            px-3
            py-1
            rounded-full
            "
          >
            {product.fit}
          </span>
        </div>

        {/* Price */}

        <p
          className="
          mt-4
          font-semibold
          "
        >
          ₺{product.startingPrice.toLocaleString("tr-TR")}
          'dan başlayan fiyatlarla
        </p>

        <p
          className="
          text-sm
          text-gray-500
          mt-1
          "
        >
          Özel ölçü seçenekleri
        </p>

        {/* Rating */}

        <div
          className="
          flex
          items-center
          mt-4
          text-sm
          "
        >
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                className={
                  index < product.rating
                    ? "fill-[#C8A45D] text-[#C8A45D]"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span
            className="
            ml-2
            text-gray-500
            "
          >
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
