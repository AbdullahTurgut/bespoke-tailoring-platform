import SuitConfigurator from "@/components/configurator/SuitConfigurator";
import SEO from "@/components/seo/SEO";
const CreateSuit = () => {
  return (
    <>
      <SEO
        title="Takımını Tasarla | Terzi Murat"
        description="Kumaş, yaka ve detay seçimleriyle size özel damatlık ve özel tasarım takım elbisenizi oluşturun."
      />
      <main className="min-h-screen bg-[#0B0B0B] text-white">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <span className="inline-block text-xs uppercase tracking-[0.45em] text-[#C8A45D]">
                Tasarım Stüdyosu
              </span>

              <h1 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luxury font-light leading-[1.08] tracking-tight">
                Takımını Tasarla
              </h1>

              <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Kumaş, yaka modeli ve düğme detaylarını kişiselleştirerek size
                özel dikim takım elbisenizi oluşturun.
              </p>
            </div>

            <SuitConfigurator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CreateSuit;
