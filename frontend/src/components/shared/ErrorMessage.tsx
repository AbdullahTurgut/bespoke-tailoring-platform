type Props = {
  message?: string;
};

const ErrorMessage = ({
  message = "Bir hata oluştu. Lütfen tekrar deneyiniz.",
}: Props) => {
  return (
    <div
      className="
      border
      border-red-500/30
      bg-red-500/10
      text-red-300
      px-6
      py-4
      rounded-lg
      text-sm
      "
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
