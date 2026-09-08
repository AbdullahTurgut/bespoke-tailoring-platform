export interface SuitOptionItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const fabricNames = {
  black: "İtalyan Siyah Yün",
  navy: "Lacivert Yün",
  gray: "Lüks Gri Flanel",
};

export const lapelNames = {
  classic: "Klasik Yaka",
  peak: "Sivri Yaka",
  shawl: "Şal Yaka",
};

export const buttonNames = {
  black: "Siyah Boynuz",
  gold: "Altın Detay",
  silver: "Gümüş Detay",
};

export const fabricPrices = {
  black: 1200,
  navy: 1400,
  gray: 1600,
};

export const buttonPrices = {
  black: 0,
  gold: 150,
  silver: 100,
};

export const fabricOptions: SuitOptionItem[] = [
  {
    id: "black",
    name: fabricNames.black,
    description: "Saf yün dokuma, klasik ve zamansız asalet",
    price: fabricPrices.black,
  },
  {
    id: "navy",
    name: fabricNames.navy,
    description: "Derin lacivert tonu, modern ve seçkin silüet",
    price: fabricPrices.navy,
  },
  {
    id: "gray",
    name: fabricNames.gray,
    description: "Yumuşak dokulu birinci sınıf İtalyan flanel",
    price: fabricPrices.gray,
  },
];

export const lapelOptions: SuitOptionItem[] = [
  {
    id: "classic",
    name: lapelNames.classic,
    description: "Dengeli çentik yaka, her merasime uyumlu",
    price: 0,
  },
  {
    id: "peak",
    name: lapelNames.peak,
    description: "Karakterli ve görkemli sivri yaka kesim",
    price: 0,
  },
  {
    id: "shawl",
    name: lapelNames.shawl,
    description: "Kusursuz damatlık ve smokin zarafeti",
    price: 0,
  },
];

export const buttonOptions: SuitOptionItem[] = [
  {
    id: "black",
    name: buttonNames.black,
    description: "Doğal mat boynuz düğme",
    price: buttonPrices.black,
  },
  {
    id: "gold",
    name: buttonNames.gold,
    description: "Özel kaplama metalik altın dokunuş",
    price: buttonPrices.gold,
  },
  {
    id: "silver",
    name: buttonNames.silver,
    description: "Zarif ve parlak gümüş kaplama düğme",
    price: buttonPrices.silver,
  },
];

