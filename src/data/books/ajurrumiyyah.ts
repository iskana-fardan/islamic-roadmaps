export interface DarsBook {
  id: string;
  title: string;
  titleArabic: string;
  author: string;
  type: "dars";
  field: string;
  description: string;
  recommendedUsage: string;
  resources: Resource[];
  recommendedEditions: RecommendedEdition[];
}

export interface Resource {
  label: string;
  type: "audio" | "pdf" | string;
  url: string;
}

export interface RecommendedEdition {
  publisher: string;
  note: string;
  label: "recommended" | "alternative" | string;
}






export const ajurrumiyyah: DarsBook = {
  id: "ajurrumiyyah",
  title: "Al-Ajurrumiyyah",
  titleArabic: "الآجرومية",
  author: "Ibnu Ajurrum",
  type: "dars",
  field: "nahwu",
  description: "Kitab dasar dalam ilmu Nahwu yang sangat populer dan ringkas",
  recommendedUsage: "Dipelajari bersama guru",
  resources: [
    {
      label: "Sharh Audio",
      type: "audio",
      url: "https://example.com/audio-ajurrumiyyah",
    },
    {
      label: "PDF",
      type: "pdf",
      url: "https://example.com/ajurrumiyyah.pdf",
    },
  ],
  recommendedEditions: [
    {
      publisher: "Dar Al-Minhaj",
      note: "Tahqiq rapi dan mudah dibaca",
      label: "recommended",
    },
    {
      publisher: "Dar ibn hazm",
      note: "lorem ipsum dolor sit amet",
      label: "alternative",
    },
  ],
};
