type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div
      className="
      flex
      justify-center
      gap-3
      mt-8
      "
    >
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
            h-10
            w-10
            rounded-full
            border
            text-sm
            transition-all
            duration-300

            ${
              currentPage === page
                ? `
                border-[#C8A45D]
                bg-[#C8A45D]
                text-black
                `
                : `
                border-white/10
                bg-white/5
                text-gray-400
                hover:border-[#C8A45D]/50
                hover:text-[#C8A45D]
                `
            }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
