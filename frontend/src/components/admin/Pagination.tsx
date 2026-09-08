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
    <nav
      aria-label="Sayfalama"
      className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8"
    >
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isCurrent = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            aria-label={`Sayfa ${page}`}
            aria-current={isCurrent ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={`
              h-9 w-9 sm:h-10 sm:w-10 rounded-full border text-xs sm:text-sm font-medium
              transition-all duration-200 tabular-nums
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]
              ${
                isCurrent
                  ? "border-[#C8A45D] bg-[#C8A45D] text-black font-semibold shadow-md shadow-[#C8A45D]/15"
                  : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#C8A45D]/50 hover:text-[#C8A45D]"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}

