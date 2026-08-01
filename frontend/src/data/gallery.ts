export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  large?: boolean;
}

export const galleryImages: GalleryItem[] = [
  {
    src: "/images/gallery/atelier.jpg",
    title: "Usta Terzilik",
    description:
      "Geleneksel terzilik anlayışının modern tasarım ile buluştuğu özel çalışma alanımız.",
    large: true,
  },

  {
    src: "/images/gallery/fabric.jpg",
    title: "Seçkin Kumaşlar",
    description:
      "Dünyanın önde gelen dokularından seçilen premium kumaş koleksiyonları.",
  },

  {
    src: "/images/gallery/tailor.jpg",
    title: "El İşçiliği",
    description: "Her detayın özenle işlendiği, kişiye özel üretim süreci.",
  },

  {
    src: "/images/gallery/suits.jpg",
    title: "Özel Koleksiyon",
    description:
      "Düğün ve nişan günleriniz için hazırlanan zamansız takım elbiseler.",
    large: true,
  },

  {
    src: "/images/gallery/measuring.jpg",
    title: "Kusursuz Ölçü",
    description: "Vücut yapınıza özel hazırlanan kalıp ve prova deneyimi.",
  },

  {
    src: "/images/gallery/lifestyle.jpg",
    title: "Zarif Dokunuşlar",
    description: "Özel günlerinizde tarzınızı tamamlayan kişisel detaylar.",
  },
];
