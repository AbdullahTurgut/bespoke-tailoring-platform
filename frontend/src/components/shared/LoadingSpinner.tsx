type Props = {
  size?: "sm" | "md";
};

const LoadingSpinner = ({ size = "md" }: Props) => {
  return (
    <div
      className={`
      rounded-full
      border-2
      border-[#C8A45D]
      border-t-transparent
      animate-spin
      ${size === "sm" ? "w-4 h-4" : "w-8 h-8"}
      `}
    />
  );
};

export default LoadingSpinner;
