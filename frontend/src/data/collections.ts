export interface Collection {
  title: string;
  description: string;
  category: "Wedding" | "Classic" | "Business";
}

export const collections: Collection[] = [
  {
    title: "Wedding Collection",
    description:
      "Hayatınızın en özel günü için kusursuz işçilik, premium kumaş ve kişiye özel tasarım.",
    category: "Wedding",
  },

  {
    title: "Classic Collection",
    description:
      "Zamansız çizgiler ve modern dokunuşlarla günlük şıklığın yeni hali.",
    category: "Classic",
  },

  {
    title: "Business Collection",
    description:
      "Profesyonel duruşunuzu tamamlayan size özel tasarlanmış takım elbiseler.",
    category: "Business",
  },
];
