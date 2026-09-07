import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    if (location.pathname === "/") {
      const id = to.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        window.history.pushState(null, "", `#${id}`);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className="
      border-t
      border-white/10
      bg-black
      text-white
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        py-16
        lg:px-8
        "
      >
        <div
          className="
          grid
          gap-12
          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {/* Brand */}

          <div
            className="
            lg:col-span-1
            "
          >
            <Link
              to="/"
              className="
              text-2xl
              tracking-[0.3em]
              font-semibold
              "
            >
              TERZİ MURAT
            </Link>

            <p
              className="
              mt-6
              max-w-md
              text-gray-400
              leading-relaxed
              "
            >
              Düğün ve nişan günleriniz için özel ölçüler, seçkin kumaşlar ve
              usta işçilikle hazırlanan kişiye özel takım elbiseler.
            </p>

            <p
              className="
              mt-6
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#C8A45D]
              "
            >
              2004'ten beri
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3
              className="
              mb-6
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#C8A45D]
              "
            >
              Keşfet
            </h3>

            <ul
              className="
              space-y-4
              text-sm
              text-gray-400
              "
            >
              <li>
                <Link
                  to="/#wedding"
                  onClick={(e) => handleAnchorClick(e, "/#wedding")}
                  className="transition hover:text-white"
                >
                  Damatlıklar
                </Link>
              </li>

              <li>
                <Link
                  to="/#engagement"
                  onClick={(e) => handleAnchorClick(e, "/#engagement")}
                  className="transition hover:text-white"
                >
                  Nişan Takımları
                </Link>
              </li>

              <li>
                <Link
                  to="/create-your-suit"
                  className="transition hover:text-white"
                >
                  Özel Tasarım
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition hover:text-white">
                  Hakkımızda
                </Link>
              </li>

              <li>
                <Link to="/appointment" className="transition hover:text-white">
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3
              className="
              mb-6
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#C8A45D]
              "
            >
              Hizmetler
            </h3>

            <ul
              className="
              space-y-4
              text-sm
              text-gray-400
              "
            >
              <li>Kişiye Özel Dikim</li>
              <li>Premium Kumaş Seçimi</li>
              <li>Özel Prova Süreci</li>
              <li>Usta Terzilik</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className="
              mb-6
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#C8A45D]
              "
            >
              İletişim
            </h3>

            <div
              className="
              space-y-5
              text-sm
              text-gray-400
              "
            >
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-gray-600">
                  Telefon
                </p>

                <a
                  href="tel:+905393130983"
                  className="transition hover:text-white"
                >
                  0539 313 09 83
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-gray-600">
                  Adres
                </p>

                <p className="leading-relaxed">
                  Hacıhalil Mahallesi
                  <br />
                  1218. Sk. 7-3
                  <br />
                  Gebze / Kocaeli
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-gray-600">
                  Çalışma Saatleri
                </p>

                <p className="leading-relaxed">
                  Hafta içi & Cumartesi
                  <br />
                  10:00 – 19:00
                </p>

                <p className="mt-2 leading-relaxed">
                  Pazar
                  <br />
                  12:00 – 16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          mt-16
          flex
          flex-col
          justify-between
          gap-4
          border-t
          border-white/10
          pt-8
          text-xs
          uppercase
          tracking-[0.2em]
          text-gray-500
          md:flex-row
          "
        >
          <p>© {new Date().getFullYear()} Terzi Murat</p>

          <p>Kişiye Özel Terzilik</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
