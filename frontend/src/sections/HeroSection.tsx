import { Button } from "@/components/ui/button";
import heroSuit from "@/assets/hero-suit.jpg";

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-12 lg:grid-cols-2">
        {/* Sol taraf */}
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-yellow-600/30 px-4 py-2 text-xs tracking-[0.3em] text-yellow-500">
            BESPOKE COLLECTION
          </span>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Kusursuz Ölçü,
            <br />
            <span className="text-yellow-500">Zamansız Şıklık</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Terzi Murat ile düğün gününüz için kişiye özel hazırlanan premium
            takım elbiseleri keşfedin. Her detay ustalıkla işlenir, her takım
            yalnızca size özel hazırlanır.
          </p>

          <div className="flex flex-wrap gap-6">
            <Button
              size="lg"
              className="bg-yellow-500 px-8 text-black hover:bg-yellow-400"
            >
              Koleksiyonu İncele
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500/40 px-8 text-yellow-500 hover:bg-yellow-500/10"
            >
              Randevu Al
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-yellow-500">25+</p>
              <p className="text-sm text-white/60">Yıllık Tecrübe</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-yellow-500">1000+</p>
              <p className="text-sm text-white/60">Mutlu Müşteri</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-yellow-500">%100</p>
              <p className="text-sm text-white/60">Kişiye Özel Dikim</p>
            </div>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-[2rem] bg-yellow-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img
              src={heroSuit}
              alt="Terzi Murat Premium Takım Elbise"
              className="h-[720px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
