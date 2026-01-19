import { Grid } from '@mui/material'
import LearningCategoriesCard from './LearningCategoriesCard'
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded"
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded"


export const icons = {
  nahwu: BalanceRoundedIcon,
  fiqh: MenuBookRoundedIcon,
};

export type IconKey = keyof typeof icons;



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


const LearningCategoriesCards = () => {
  return (
    <Grid container spacing={3}>
          {fields.map(({ name, nameArabic, description, icon }, index) => {
            return (
                <Grid
                    key={index}
                    size={{ xs: 12, sm: 6 }} 
                    >
                        <LearningCategoriesCard 
                            name={name} 
                            nameArabic={nameArabic} 
                            description={description} 
                            icon={icon}
                            />
                </Grid>
                    )
            })}
    </Grid>
  )
}

export default LearningCategoriesCards