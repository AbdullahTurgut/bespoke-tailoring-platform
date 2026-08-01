import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
      bg-[#050505]
      text-white
      border-t
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        md:px-16
        py-20
        "
      >
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-12
          "
        >
          {/* Brand */}

          <div
            className="
            md:col-span-2
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
          </div>

          {/* Navigation */}

          <div>
            <h3
              className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#C8A45D]
              mb-6
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
                <a href="/#wedding">Damatlıklar</a>
              </li>

              <li>
                <a href="/#engagement">Nişan Takımları</a>
              </li>

              <li>
                <Link to="/create-your-suit">Özel Tasarım</Link>
              </li>

              <li>
                <a href="#about">Hakkımızda</a>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3
              className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#C8A45D]
              mb-6
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
        </div>

        {/* Bottom */}

        <div
          className="
          mt-16
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          text-xs
          text-gray-500
          uppercase
          tracking-[0.2em]
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
