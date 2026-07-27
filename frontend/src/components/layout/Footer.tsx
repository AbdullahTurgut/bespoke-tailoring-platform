const Footer = () => {
  return (
    <footer
      className="
      bg-black
      text-white
      px-6
      md:px-16
      py-24
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        text-center
        "
      >
        <h2
          className="
          text-5xl
          md:text-6xl
          font-luxury
          font-light
          tracking-wide
          "
        >
          Murat Tasarım
        </h2>

        <p
          className="
          mt-6
          text-gray-400
          max-w-xl
          mx-auto
          leading-relaxed
          "
        >
          Zamansız tasarım, seçkin kumaşlar ve kişiye özel terzilik deneyimi.
        </p>

        <div
          className="
          mt-10
          flex
          justify-center
          gap-8
          text-sm
          tracking-[0.2em]
          uppercase
          "
        >
          <a className="hover:text-[#C8A45D] transition">Instagram</a>

          <a className="hover:text-[#C8A45D] transition">Contact</a>

          <a className="hover:text-[#C8A45D] transition">Appointment</a>
        </div>

        <div
          className="
          mt-16
          pt-8
          border-t
          border-gray-800
          text-gray-500
          text-xs
          tracking-widest
          "
        >
          © 2026 Murat Tasarım. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
