export interface NahwuRoadmap {
  id: string;
  field: string;
  title: string;
  titleArabic: string;
  description: string;
  icon: string;
  levels: Level[];
  muthalaah: Muthalaah[];
}

export interface Level {
  id: string;
  label: string;
  order: number;
  dars: Dars[];
}

export interface Dars {
  id: string;
  bookId: string;
  affectsProgress: boolean;
}

export interface Muthalaah {
  id: string;
  bookId: string;
  label: string;
}





export const nahwu: NahwuRoadmap = {
  id: "nahwu",
  field: "nahwu",
  title: "Nahwu",
  titleArabic: "النحو",
  description: "Roadmap pembelajaran ilmu Nahwu dari dasar hingga lanjutan",
  icon: "nahwu",

  levels: [
    {
      id: "beginner",
      label: "Beginner",
      order: 1,
      dars: [
        {
          id: "ajurrumiyyah",
          bookId: "ajurrumiyyah",
          affectsProgress: true,
        },
      ],
    },
    {
      id: "intermediate",
      label: "Intermediate",
      order: 2,
      dars: [],
    },
    {
      id: "advanced",
      label: "Advanced",
      order: 3,
      dars: [],
    },
  ],

  muthalaah: [
    {
      id: "qawaid-nahwiyyah",
      bookId: "qawaid-nahwiyyah",
      label: "Pengayaan",
    },
  ],
};
