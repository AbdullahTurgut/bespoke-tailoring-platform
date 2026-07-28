export interface Collection {
  title: string;
  description: string;
  category: "Wedding" | "Engagement";
}

export const collections: Collection[] = [
  {
    title: "Wedding Collection",
    description:
      "Hayatınızın en özel günü için kusursuz işçilik, premium kumaş ve kişiye özel tasarım.",
    category: "Wedding",
  },

  {
    title: "Engagement Collection",
    description:
      "Nişan gününüzde zarif, modern ve size özel tasarlanmış unutulmaz bir görünüm.",
    category: "Engagement",
  },
];
