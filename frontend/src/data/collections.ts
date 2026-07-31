export interface Collection {
  title: string;
  description: string;
  category: "Wedding" | "Engagement";
  id: string;
}

export const collections: Collection[] = [
  {
    id: "wedding",
    title: "Damatlık Koleksiyonu",
    description:
      "Hayatınızın en özel günü için kişisel ölçüleriniz, premium kumaşlar ve usta terzilik ile hazırlanan özel tasarım damatlıklar.",
    category: "Wedding",
  },

  {
    id: "engagement",
    title: "Nişan Takımları",
    description:
      "Nişan gününüzde tarzınızı yansıtan modern kesimler, seçkin kumaşlar ve size özel detaylarla hazırlanan özel tasarım takımlar.",
    category: "Engagement",
  },
];
