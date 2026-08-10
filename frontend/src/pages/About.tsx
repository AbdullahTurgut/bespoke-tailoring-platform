import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-4xl">
            <p
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#C8A45D]
              "
            >
              Terzi Murat
            </p>

            <h1
              className="
                mt-6
                text-5xl
                font-light
                leading-[0.95]
                tracking-tight
                md:text-7xl
              "
            >
              1996'dan Bugüne
              <br />
              <span className="text-[#C8A45D]">Ustalık ve Terzilik</span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-500
                md:text-lg
              "
            >
              Gebze'de başlayan tekstil yolculuğundan, bugün Terzi Murat çatısı
              altında devam eden kişiye özel terzilik anlayışına uzanan bir
              hikâye.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-gray-200">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-16
            px-6
            py-24
            md:px-10
            md:py-32
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-24
          "
        >
          {/* Year */}
          <div>
            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-gray-400
              "
            >
              Başlangıç
            </p>

            <h2
              className="
                mt-4
                text-7xl
                font-light
                tracking-tight
                text-[#C8A45D]
                md:text-8xl
              "
            >
              1996
            </h2>

            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-400">
              Gebze
            </p>
          </div>

          {/* Story Content */}
          <div className="max-w-3xl">
            <h2
              className="
                text-3xl
                font-light
                leading-tight
                md:text-5xl
              "
            >
              Deneyimden ustalığa,
              <br />
              <span className="text-[#C8A45D]">
                yıllar içinde şekillenen bir yolculuk.
              </span>
            </h2>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-500">
              <p>
                Terzi Murat'ın hikâyesi 1996 yılında Gebze'de tekstil ve
                konfeksiyon sektöründe başlayan bir çalışma hayatıyla başladı.
              </p>

              <p>
                Bu süreçte Pendik, Kartal, Kaynarca ve İçmeler'de farklı çalışma
                deneyimleri kazanıldı. Ardından deri sanayisinde faaliyet
                gösteren bir kot firmasında devam eden çalışma hayatı, tekstil
                ve giyim sektörünün farklı alanlarında önemli bir deneyim
                birikimi oluşturdu.
              </p>

              <p>
                Edinilen bu deneyimin ardından 2004 yılında Gebze Yeni Bağdat
                Caddesi'nde kendi iş yerini açarak{" "}
                <strong className="font-medium text-black">Terzi Murat</strong>{" "}
                adıyla profesyonel terzilik yolculuğuna adım atıldı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-[#C8A45D]
                "
              >
                Terzilik Anlayışımız
              </p>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-light
                  leading-tight
                  md:text-5xl
                "
              >
                Her müşteri,
                <br />
                <span className="text-[#C8A45D]">kendine özel.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-gray-500">
              <p>
                Her insanın ölçüsü, vücut yapısı ve tarzı farklıdır. Bu nedenle
                kişiye özel terziliği yalnızca bir ölçü alma süreci olarak
                değil, kişinin tarzını doğru şekilde yansıtma sanatı olarak
                görüyoruz.
              </p>

              <p>
                Geçmişten gelen tekstil deneyimini modern tasarım anlayışıyla
                birleştirerek; özel günleriniz, damatlıklarınız, nişan
                takımlarınız ve kişiye özel giyim ihtiyaçlarınız için özenli
                çözümler sunuyoruz.
              </p>

              <p>
                Amacımız yalnızca iyi görünen bir takım hazırlamak değil,
                müşterimizin kendisini içinde iyi hissettiği bir tasarım ortaya
                çıkarmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Location / CTA */}
      <section className="border-t border-gray-200 bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-28">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#C8A45D]
            "
          >
            Bugün
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-light
              md:text-5xl
            "
          >
            Terzi Murat
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-500">
            1996'da başlayan deneyim, 2004 yılında Terzi Murat ile bir markaya
            dönüştü. Bugün çalışmalarımıza Gebze'de devam ediyoruz.
          </p>

          <p className="mt-6 text-sm text-gray-400">
            Hacıhalil Mahallesi, 1218. Sk. No: 7/3 — Gebze
          </p>

          <Link
            to="/appointment"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              border
              border-black
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300
              hover:border-[#C8A45D]
              hover:bg-[#C8A45D]
              hover:text-white
            "
          >
            Randevu Al
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
