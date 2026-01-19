import type { IconKey } from "../../assets/icons/icon";



export interface Field {
  id: string;
  slug: string;
  name: string;
  nameArabic: string;
  description: string;
  icon: IconKey;
  order: number;
}




export const fields: Field[] = [
  {
    id: "nahwu",
    slug: "nahwu",
    name: "Nahwu",
    nameArabic: "النحو",
    description: "Ilmu tata bahasa Arab untuk memahami struktur kalimat",
    icon: "nahwu", 
    order: 1,
  },
  {
    id: "fiqh",
    slug: "fiqh",
    name: "Fiqh",
    nameArabic: "الفقه",
    description: "Ilmu hukum Islam yang mengatur ibadah dan muamalah",
    icon: "fiqh",
    order: 2,
  },
];
