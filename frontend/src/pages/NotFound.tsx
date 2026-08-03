import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 | Sayfa Bulunamadı | Terzi Murat"
        description="Aradığınız sayfa bulunamadı. Terzi Murat ile size özel takımınızı tasarlayın."
      />

      <main
        className="
        min-h-screen
        bg-[#0B0B0B]
        text-white
        flex
        items-center
        justify-center
        px-6
        "
      >
        <div
          className="
          max-w-3xl
          text-center
          "
        >
          <h1
            className="
            text-[10rem]
            md:text-[14rem]
            leading-none
            font-luxury
            text-[#C8A45D]/20
            "
          >
            404
          </h1>

          <div className="-mt-10">
            <span
              className="
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#C8A45D]
              "
            >
              Sayfa Bulunamadı
            </span>

            <h2
              className="
              mt-6
              text-4xl
              md:text-6xl
              font-luxury
              font-light
              "
            >
              Aradığınız Zarafet
              <br />
              Burada Değil
            </h2>

            <p
              className="
              mt-8
              text-gray-400
              max-w-xl
              mx-auto
              leading-relaxed
              "
            >
              Aradığınız sayfa kaldırılmış, taşınmış veya yanlış bir bağlantıya
              yönlendirilmiş olabilir. Size özel takımınızı oluşturmak için
              koleksiyonlarımıza göz atabilirsiniz.
            </p>

            <div
              className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
              "
            >
              <Link
                to="/"
                className="
                bg-[#C8A45D]
                text-black
                px-10
                py-4
                text-sm
                uppercase
                tracking-[0.2em]
                hover:bg-white
                transition
                "
              >
                Ana Sayfaya Dön
              </Link>

              <Link
                to="/create-your-suit"
                className="
                border
                border-white/20
                px-10
                py-4
                text-sm
                uppercase
                tracking-[0.2em]
                hover:border-white
                transition
                "
              >
                Takımını Oluştur
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
